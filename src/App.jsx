import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  const fetch = async () => {
    await axios
      .get("https://gg-wda3.onrender.com/")
      .then((res) => console.log(res.data));
  };
  useEffect(() => {
    fetch();
  }, []);
  return <div>App</div>;
};

export default App;
