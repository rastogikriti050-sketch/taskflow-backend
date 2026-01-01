import express from "express";
import protect from "../middleware/authMiddleware.js";
import Task from "../models/Task.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user
  });
  res.json(task);
});

router.get("/", protect, async (req, res) => {
  const tasks = await Task.find({ user: req.user });
  res.json(tasks);
});

router.put("/:id", protect, async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(task);
});

router.delete("/:id", protect, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;
