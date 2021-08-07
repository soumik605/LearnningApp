import express from "express";
import {
  addQuestion,
  editQues,
  getReact,
  getNode,
  getQuesById,
  deleteQues,
} from "../Controller/route-controller.js";

const router = express.Router();

router.post("/add", addQuestion); //

router.get("/getnode", getNode); //
router.get("/getreact", getReact); //

router.get("/getreact/:id", getQuesById);
router.get("/getnode/:id", getQuesById);

router.put("/getnode/:id", editQues); //
router.put("/getreact/:id", editQues); //

router.delete("/getnode/:id", deleteQues);
router.delete("/getreact/:id", deleteQues);

export default router;
