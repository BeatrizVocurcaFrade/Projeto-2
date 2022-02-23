import React, { useEffect, useState } from "react";
import getDogs from "../Dog/getDogs.js";
import "./Dog.css";
import Spinning from"../Spinning/Spinning";

export default function Dog() {
  const [dog, setDog] = useState({ url: ""});
  const [load, setLoad] = useState(false);
  useEffect(() => {
    updateDogs();
  }, []);

  const updateDogs = () => {
    setLoad(true)
    getDogs()
      .then((dog) => {
        getDogs(dog)
        setDog(dog)
        setLoad(false)
      })
  }
  if(load) return <Spinning></Spinning>
  return (
    <img className="dog"
      src={dog.url}
      alt="dog"
    ></img>
  );
}
