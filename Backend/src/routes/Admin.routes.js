import { Router } from "express";
import {createCourse, upload, deleteCourse, editCourse, getCourses, getCourseById, uploadCourseContent,getCourseContents,deleteCourseContent, getDashboardStats}  from "../controllers/Admin.controller.js"

const router = Router();

router.post("/coursecreation", upload.single("thumbnail"), createCourse);
router.put("/courses/:id", upload.single("thumbnail"), editCourse);
router.delete("/courses/:id", deleteCourse);
router.get("/courses", getCourses);
router.get("/courses/:id", getCourseById); // ✅ For prefill in edit mode
router.post("/courses/:courseId/contents", upload.single("file"), uploadCourseContent);
router.get("/courses/:courseId/contents", getCourseContents);

// Delete individual content
router.delete("/courses/contents/:contentId", deleteCourseContent);
router.get("/dashboard/stats", getDashboardStats);

export default router


