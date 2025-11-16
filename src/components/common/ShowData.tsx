import { useData } from "../../hooks/useData";
import { fetchData1 } from "../../utils/fetchData1";

export const ShowData = ({ dataKey }: { dataKey: number }) => {
  const data = useData(`ShowData: ${dataKey}`, fetchData1);
  return (
    <p>
      Data for {dataKey} is {data}
    </p>
  );
};
