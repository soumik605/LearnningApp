import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { addQues } from "../Services/Api";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      margin: 20,
    },
  },
  selector:{
    height: 40,
    border: "1px solid black"
  }
});

const initialvalue = {
  ques: "",
  ans: "",
  sub: "react",
};

function AddPage() {
  const classes = useStyle();
  const [question, setQuestion] = useState(initialvalue);
  const { ques, ans, sub } = question;
  let history = useHistory();

  const onValueChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const addNewQuestion = async () => {
    await addQues(question);

    if(question.sub === "react"){
      history.push("./getreact");
    }
    else if(question.sub === "node"){
      history.push("./getnode");
    }
    
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add Question</Typography>
      <FormControl>
        <InputLabel>Question</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="ques" value={ques} />
      </FormControl>
      <FormControl>
        <InputLabel>Answer</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="ans" value={ans} />
      </FormControl>

      <select onChange={(e) =>  onValueChange(e)} value={sub} className={classes.selector} name="sub">
        <option value="react">React</option>
        <option value="node">Node JS</option>
      </select>

      <Button
        variant="contained"
        color="primary"
        onClick={() => addNewQuestion()}
      >
        Add Question
      </Button>
    </FormGroup>
  );
}

export default AddPage;
