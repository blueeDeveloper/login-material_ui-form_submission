import React, { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [userFields, setUserFields] = useState("");
  const onSumbit = (fields) => {
    setUserFields(fields);
  };
  return (
    <div>
      <Form userFormData={(fields) => onSumbit(fields)} />
      <div className="result">
        <Result userFields={userFields} />
      </div>
    </div>
  );
}

export default App;
