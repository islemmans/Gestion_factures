import { useState } from "react";
import { addutil } from "./redux/slices/User";
import { useDispatch } from "react-redux";

const TaskForm = () => {
  const [login, setText] = useState("");
  const [password, setpassword] = useState("");
const dispatch=useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addutil([login,password]));

    setText("");
    setpassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder= "un login"
        value={login}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="un password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
    </form>
  );
};

export default TaskForm;