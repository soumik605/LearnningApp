import React, { useState, useEffect } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import {
  editReactQues,
  editNodeQues,
  getReact,
  getNode,
} from "../Services/Api";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      margin: 20,
    },
  },
  selector: {
    height: 40,
    border: "10px solid white blue black yellow",
  },
});

const initialvalue = {
  ques: "",
  ans: "",
  sub: "react",
};

function EditPage({ subject }) {
  const classes = useStyle();
  const [question, setQuestion] = useState(initialvalue);
  const { ques, ans, sub } = question;
  let history = useHistory();
  const { id } = useParams();

  const onValueChange = (e) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const loadQuestion = async () => {
      if (subject === "react") {
        const res = await getReact(id);
        setQuestion(res.data);
      } else if (subject === "node") {
        const res = await getNode(id);
        setQuestion(res.data);
      }
    };
    loadQuestion();
  }, []);

  

  const UpdateQuestion = async () => {
    console.log(question);

    if (subject === "react") {
      await editReactQues(id, question);
      history.push("./");
    } else if (subject === "node") {
      await editNodeQues(id, question);
      history.push("./");
    }
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Update Question</Typography>
      <FormControl>
        <InputLabel>Question</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="ques" value={ques} />
      </FormControl>
      <FormControl>
        <InputLabel>Answer</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="ans" value={ans} />
      </FormControl>

      <select
        onChange={(e) => onValueChange(e)}
        value={sub}
        className={classes.selector}
        name="sub"
      >
        <option value="react">React</option>
        <option value="node">Node JS</option>
      </select>

      <Button
        variant="contained"
        color="primary"
        onClick={() => UpdateQuestion()}
      >
        Update Question
      </Button>
    </FormGroup>
  );
}

export default EditPage;
