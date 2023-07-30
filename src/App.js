import { useState, useRef, useEffect } from "react";

// Third Party Imports ////////////
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";
//// Local directory imports ///////////
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Comments from "./Components/Comments/comments";
import NavBar from "./Components/Navigation/navBar";
import Menu from "./Components/menu/menu";

function App() {
  const [bioData, setBioData] = useState([]);
  const { scroll } = useLocomotiveScroll();
  const containerRef = useRef(null);
  const options = {
    smooth: true,
    // el: ref.current,
  };

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
    <div className="bg-black relative p-2 font-sans-apple-system min-h-screen grid grid-cols-8 row-auto">
      <NavBar />
      <Header />
      <Main />
      <Comments />
      <Menu />
    </div>
    // </LocomotiveScrollContainer>
  );
}

export default App;
