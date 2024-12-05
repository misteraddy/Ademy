const paypal = require("../utils/paypal");
const orderRepository = require("../repositories/orderRepository");
const studentCoursesRepository = require("../repositories/courseRepository");
const courseRepository = require("../repositories/courseRepository");

const createOrder = async (orderData) => {
  const {
    courseTitle,
    courseId,
    coursePricing,
    ...otherOrderData
  } = orderData;

  const create_payment_json = {
    intent: "sale",
    payer: { payment_method: "paypal" },
    redirect_urls: {
      return_url: `${process.env.CLIENT_URL}/student/payment-return`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
    },
    transactions: [
      {
        item_list: {
          items: [
            {
              name: courseTitle,
              sku: courseId,
              price: coursePricing,
              currency: "USD",
              quantity: 1,
            },
          ],
        },
        amount: { currency: "USD", total: coursePricing.toFixed(2) },
        description: courseTitle,
      },
    ],
  };

  return new Promise((resolve, reject) => {
    paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
      if (error) {
        console.error(error);
        reject(new Error("Error while creating PayPal payment!"));
      } else {
        const approveUrl = paymentInfo.links.find(
          (link) => link.rel === "approval_url"
        ).href;

        const order = await orderRepository.createOrder({
          ...otherOrderData,
          courseTitle,
          courseId,
          coursePricing,
          orderStatus: "pending",
          paymentStatus: "pending",
        });

        resolve({ approveUrl, orderId: order._id });
      }
    });
  });
};

const capturePaymentAndFinalizeOrder = async ({ paymentId, payerId, orderId }) => {
  const order = await orderRepository.getOrderById(orderId);

  if (!order) throw new Error("Order cannot be found");

  order.paymentStatus = "paid";
  order.orderStatus = "confirmed";
  order.paymentId = paymentId;
  order.payerId = payerId;

  await orderRepository.updateOrder(order);

  const studentCourses = await studentCoursesRepository.getStudentCoursesByUserId(order.userId);

  if (studentCourses) {
    await studentCoursesRepository.addCourseToStudentCourses(studentCourses, order);
  } else {
    await studentCoursesRepository.createStudentCourses(order);
  }

  await courseRepository.addStudentToCourse(order.courseId, {
    studentId: order.userId,
    studentName: order.userName,
    studentEmail: order.userEmail,
    paidAmount: order.coursePricing,
  });

  return order;
};

module.exports = { createOrder, capturePaymentAndFinalizeOrder };

