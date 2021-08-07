import ReactData from "../models/ReactData.js";
import NodeData from "../models/NodeData.js";
import QuestionData from "../models/QuestionData.js";


export const getReact = async (request, response) => {
  try {
    const data = await QuestionData.find({sub:"react"});
    console.log(data);
    response.json(data);
  } catch (error) {
    response.json({ message: error.message });
  }
};



export const getNode = async (request, response) => {
  try {
    const data = await QuestionData.find({sub:"node"});
    console.log(data);
    response.json(data);
  } catch (error) {
    response.json({ message: error.message });
  }
};





export const addQuestion = async (request, response) => {
  const ques = request.body;
  console.log(ques)
  const newQues = new QuestionData(ques);
  try {
    await newQues.save();
    response.json(newQues);
  } catch (error) {
    response.json({ message: error.message });
  }


};





export const getQuesById = async (request, response) => {
  
  try {
    let question = await QuestionData.findById(request.params.id);
    response.json(question);
  } catch (error) {
    response.json({ message: error.message });
  }
};





export const editQues = async (request, response) => {
  let question = await QuestionData.findById(request.params.id);
  question = request.body;
  const editQuestion = new QuestionData(question);

  try {
    await QuestionData.updateOne({ _id: request.params.id }, editQuestion);
    response.json(editQuestion);
  } catch (error) {
    response.json({ message: error.message });
  }
};






export const deleteQues = async(request, response) => {
  try{
    await QuestionData.deleteOne({_id:request.params.id})
    response.json("React Question deleted successfully")
  }catch(error){
    response.json({ message: error.message });
  }
}
 


/*

export const getReact = async (request, response) => {
  try {
    const data = await ReactData.find({sub:"react"});
    console.log(data);
    response.json(data);
  } catch (error) {
    response.json({ message: error.message });
  }
};



export const getNode = async (request, response) => {
  try {
    const data = await NodeData.find();
    console.log(data);
    response.json(data);
  } catch (error) {
    response.json({ message: error.message });
  }
};





export const addQuestion = async (request, response) => {
  const ques = request.body;

  if (ques.sub == "react") {
    const newQues = new ReactData(ques);
    try {
      await newQues.save();
      response.json(newQues);
    } catch (error) {
      response.json({ message: error.message });
    }
  } 
  





  else if (ques.sub == "node") {
    const newQues = new NodeData(ques);
    try {
      await newQues.save();
      response.json(newQues);
    } catch (error) {
      response.json({ message: error.message });
    }
  }
};






export const editReactQues = async (request, response) => {
  let question = await ReactData.findById(request.params.id);
  question = request.body;
  const editQuestion = new ReactData(question);

  try {
    await ReactData.updateOne({ _id: request.params.id }, editQuestion);
    response.json(editQuestion);
  } catch (error) {
    response.json({ message: error.message });
  }
};




export const editNodeQues = async (request, response) => {
  let question = await NodeData.findById(request.params.id);
  question = request.body;
  const editQuestion = new NodeData(question);

  try {
    await NodeData.updateOne({ _id: request.params.id }, editQuestion);
    response.json(editQuestion);
  } catch (error) {
    response.json({ message: error.message });
  }
};






export const getReactQuesById = async (request, response) => {
  
  try {
    let question = await ReactData.findById(request.params.id);
    response.json(question);
  } catch (error) {
    response.json({ message: error.message });
  }
};






export const getNodeQuesById = async (request, response) => {
  
  try {
    let question = await NodeData.findById(request.params.id);
    response.json(question);
  } catch (error) {
    response.json({ message: error.message });
  }
};






export const deleteReactQues = async(request, response) => {
  try{
    await ReactData.deleteOne({_id:request.params.id})
    response.json("React Question deleted successfully")
  }catch(error){
    response.json({ message: error.message });
  }
}




export const deleteNodeQues = async(request, response) => {
  try{
    await NodeData.deleteOne({_id:request.params.id})
    response.json("Node Question deleted successfully")
  }catch(error){
    response.json({ message: error.message });
  }
}
 
*/