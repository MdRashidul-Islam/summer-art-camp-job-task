import React, { useState } from "react";
import Card from "./Card";

const Home = () => {
  const [items, setItems] = useState([]);
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => setItems(data));

  return (
    <div>
      {items.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Home;
