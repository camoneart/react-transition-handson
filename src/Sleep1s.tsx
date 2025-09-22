import { sleep } from "./utils/sleep";

let sleeping = true;

const Sleep1s = () => {
  if (sleeping) {
    throw sleep(1500).then(() => {
      sleeping = false;
    });
  }
  return <p>Hello!</p>;
};

export default Sleep1s;
