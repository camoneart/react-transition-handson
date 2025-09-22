import "./App.css";
import { Suspense } from "react";
import Sleep1s from "./Sleep1s";
import { useState, startTransition } from "react";

function App() {
  const [sleepIsShown, setSleepIsShown] = useState(false);
  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        {sleepIsShown ? <Sleep1s /> : null}
      </Suspense>
      <p>
        <button
          className="border p-1 mt-4"
          onClick={() => {
            startTransition(() => {
              setSleepIsShown(true);
            });
          }}
        >
          Show Sleep1s
        </button>
      </p>
    </div>
  );
}

export default App;
