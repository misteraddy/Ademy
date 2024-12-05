const PayPal = {
    payment: {
      create: (paymentJson, callback) => {
        // Simulate a delay like an API call
        setTimeout(() => {
          // Fake a success response
          if (paymentJson && paymentJson.transactions) {
            const fakePaymentInfo = {
              id: "FAKE_PAYMENT_ID",
              links: [
                {
                  href: `${paymentJson.redirect_urls.return_url}?paymentId=FAKE_PAYMENT_ID`,
                  rel: "approval_url",
                  method: "REDIRECT",
                },
                {
                  href: paymentJson.redirect_urls.cancel_url,
                  rel: "cancel_url",
                  method: "REDIRECT",
                },
              ],
            };
            callback(null, fakePaymentInfo);
          } else {
            // Simulate an error
            callback(new Error("Invalid payment JSON provided"), null);
          }
        }, 500); 
      },
    },
  };
  
  module.exports = PayPal;
  