import { useState } from "react";

// Third Party Imports ////////////

//// Local directory imports ///////////
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Comments from "./Components/Comments/comments";

function App() {
  const [bioData, setBioData] = useState([]);

  const userData = [
    { name: "Urch", age: 34 },
    { name: "Obi", age: 30 },
  ];
  const fetchData = async () => {
    console.log("Fetching your data");
    const data = await fetch("http://localhost:8000");
    // console.log(dataBase);
    const retrievedData = await data.json();
    console.log(retrievedData);
    retrievedData.body.map((data) => userData.push(data));
    console.log(userData);
    return retrievedData;
    // return data;
  };

  // const data = fetchData();

  const postData = async (baseUrl, data) => {
    console.log("Posting data");
    const option = {
      method: "GET",
      body: JSON.stringify(data),
    };
    const res = await fetch(baseUrl);
  };

  // postData("http://localhost:8000", userData);
  return (
    <div className="bg-black font-sans-apple-system   grid grid-cols-8 row-auto">
      <Header />
      <Main />
      <Comments />
    </div>
  );
}

export default App;
