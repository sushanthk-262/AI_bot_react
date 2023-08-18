
import { useState } from "react";

import generateReply from './generateReply';

const OpenApiComponent = () => {
  

  const [text, setText] = useState("");
  const [resText, setRes] = useState("");

  const getRes = async () => {
    try {
      const reply = await generateReply(text, process.env.REACT_APP_MYKEY);
      setRes(reply);
      console.log('Generated Reply:', reply);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="text">
        <input type="text" id="chat-input" placeholder="Type your input here!" onChange={handleChange} />
        <button onClick={getRes}>Send</button>
      </div>
      <div>{resText}</div>
      <div className="imgGen">
        
      </div>
      <div className="vidGen"></div>
    </>
  );
};

export default OpenApiComponent;
