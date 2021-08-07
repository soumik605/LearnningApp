import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import { deleteNodeQues, getNode } from "../Services/Api";
import { Button, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainroot: {
    display: "-webkit-flex",
    
  },
  root: {
    minWidth: "30%",
    backgroundColor: "gray",
    overflow: "auto",
    height: "90vh",
    marginLeft: 0,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  answer: {
    backgroundColor: "#282c35",
    color: "white",
    width: "100%",
    marginRight: 0,
    padding: "3%",
  },
}));

const NodePage = () => {
  const classes = useStyles();
  const [nodeQues, setNodeQues] = useState([]);
  const [answers, setAnswers] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    getAllNodeQues();
  }, []);

  const getAllNodeQues = async () => {
    let res = await getNode();
    setNodeQues(res.data);
  };

  const showAnswer = (resp) => {
    setAnswers(resp.ans);
    setQuestion(resp.ques);
  };

  const deleteNode = async(id) => {
    await deleteNodeQues(id)
    getAllNodeQues()
  }


  return (
    <div className={classes.mainroot}>
      <List className={classes.root}>
        <li className={classes.listSection}>
          <ul className={classes.ul}>
            <h2>Node Questions</h2>
            {nodeQues.map((resp) => (
              <div key={resp._id}>
                <Button onClick={() => showAnswer(resp)}>{resp.ques}</Button>
                <DeleteIcon style={{ color: "white", paddingLeft: "10px" }} onClick={()=>deleteNode(resp._id)}/>
                <Button
                  style={{ color: "white", paddingLeft: "10px" }}
                  component={Link}
                  to={`/getnode/${resp._id}`}
                >
                  Edit
                </Button>
                <hr />
              </div>
            ))}
          </ul>
        </li>
      </List>
      <div className={classes.answer}>
        <h1>Question : {question}</h1>
        <hr />
        <h1 style={{color:"yellow"}}>{answers}</h1>
      </div>
    </div>
  );
};

export default NodePage;
