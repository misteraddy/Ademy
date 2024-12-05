const mongoose = require("mongoose");

const LectureProgressSchema = mongoose.Schema({
    lectureId:String,
    viewed:Boolean,
    dateViewed:Date,
});

const CourseProgressSchema = mongoose.Schema({
    userId: String,
    courseId: String,
    completed: Boolean,
    completionDate: Date,
    lecturesProgress: [LectureProgressSchema],
});


module.exports = mongoose.model("CourseProgress",CourseProgressSchema);

