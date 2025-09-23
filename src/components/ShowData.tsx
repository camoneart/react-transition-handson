import { useData } from "../hooks/useData";
import { fetchData } from "../api/fetchData";

export const ShowData = ({ dataKey }: { dataKey: number }) => {
  console.log("rendering");
  const data = useData(`ShowData:${dataKey}`, fetchData);
  return (
    <p>
      Data for {dataKey} is {data}
    </p>
  );
};
