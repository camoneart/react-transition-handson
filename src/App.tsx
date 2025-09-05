import "./App.css";
import { Suspense, useState, useTransition } from "react";
import { ShowData } from "./components/common/ShowData";
import { useTime } from "./hooks/useTime";

function App() {
  const [counter, setCounter] = useState(0);
  const time = useTime();
  const [isPending, startTransition] = useTransition();

  console.log("lenderd");
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <p className={"tabular-nums" + (isPending ? " text-blue-700" : "")}>
        Time {time}
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <ShowData dataKey={counter} />
      </Suspense>
      <p>
        <button
          className="border p-3"
          onClick={() => {
            startTransition(() => {
              setCounter((c) => c + 1);
            });
          }}
        >
          Counter is {counter}
        </button>
      </p>
    </div>
  );
}

export default App;
