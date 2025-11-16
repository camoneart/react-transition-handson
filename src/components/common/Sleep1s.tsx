import { useEffect } from "react";
import { sleep } from "./sleep";

let sleeping = true;

const Sleep1s = () => {
  useEffect(() => {
    return () => {
      sleeping = true;
    };
  }, []);
  if (sleeping) {
    throw sleep(1000).then(() => {
      sleeping = false;
    });
  }

  return <p>Hello</p>;
};

export default Sleep1s;
