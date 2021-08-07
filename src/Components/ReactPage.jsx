import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import { deleteReactQues, getReact } from "../Services/Api";
import { Button, makeStyles } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainroot: {
    display: "-webkit-flex",
    display: "flex",
  },
  root: {
    minWidth: "30%",
    maxWidth: "30%",
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

const ReactPage = () => {
  const classes = useStyles();
  const [reactQues, setReactQues] = useState([]);
  const [answers, setAnswers] = useState("");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    getAllReactQues();
  }, []);

  const getAllReactQues = async () => {
    let res = await getReact();
    setReactQues(res.data);
  };

  const showAnswer = (resp) => {
    setAnswers(resp.ans);
    setQuestion(resp.ques);
  };

  const deleteReact = async (id) => {
    await deleteReactQues(id)
    getAllReactQues()
  }

  return (
    <div className={classes.mainroot}>
      <List className={classes.root}>
        <li className={classes.listSection}>
          <ul className={classes.ul}>
            <h1>React Questions</h1>
            {reactQues.map((resp) => (
              <div key={resp._id}>
                <Button onClick={() => showAnswer(resp)}>{resp.ques}</Button>
                <DeleteIcon style={{ color: "white", paddingLeft: "10px" }} onClick={()=>deleteReact(resp._id)}/>
                <Button
                  style={{ color: "white", paddingLeft: "10px" }}
                  component={Link}
                  to={`/getreact/${resp._id}`}
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
        <h2 style={{color:"yellow"}}>{answers}</h2>
      </div>
    </div>
  );
};

export default ReactPage;