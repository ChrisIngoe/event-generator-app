import React from 'react';
import axios from 'axios';

const LogButton = () => {
  const handleSubmit = async () => {
    console.log(process.env.REACT_APP_API_URL);
    axios
      .post(process.env.REACT_APP_API_URL, { id: Date.now().toString(), name: 'staging' })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return <button onClick={handleSubmit}>Log</button>;
};

export default LogButton;
