import axios from "axios";

const url = "http://localhost:8000";

export const addQues = async (ques) => {
  return await axios.post(`${url}/add`, ques);
};

export const getReact = async (id) => {
  id = id || "";
  return await axios.get(`${url}/getreact/${id}`);
};

export const getNode = async (id) => {
  id = id || "";
  return await axios.get(`${url}/getnode/${id}`);
};

export const editReactQues = async (id, ques) => {
  return await axios.put(`${url}/getreact/${id}`, ques);
};

export const editNodeQues = async (id, ques) => {
  return await axios.put(`${url}/getnode/${id}`, ques);
};


export const deleteReactQues = async (id) => {
  return await axios.delete(`${url}/getreact/${id}`);
};

export const deleteNodeQues = async (id) => {
  return await axios.delete(`${url}/getnode/${id}`);
};

/*






const [abc, setAbc] = useState([])
const arr= [{name:"mike", job:"frontend"},{name:"jack", job:"backend"}]

  useEffect(() => {
    setAbc(arr)

    console.log(arr)  //  [{name:"mike", job:"frontend"},{name:"jack", job:"backend"}] 

    console.log(abc)   //   []

  }, []);


*/
