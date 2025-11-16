import { sleep } from "../components/common/sleep";

export async function fetchData1() {
  await sleep(1000);
  return `Hello, ${(Math.random() * 1000).toFixed(0)}`;
}
