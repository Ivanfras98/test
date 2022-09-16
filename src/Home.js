import { useEffect, useState } from "react";
import { Even } from "./Even";
import { Odd } from "./Odd";

export function Home() {
  const [data, setData] = useState("");
  async function dataApi() {
    const res = await fetch("http://numbersapi.com/random/math");
    const text = await res.text();
    setData(text);
  }

  function handleData() {
    const textSplit = data.split(" ");
    if (textSplit[0] % 2) {
      setOdd((prev) => [...prev, data]);
    } else setEven((prev) => [...prev, data]);
  }
  const [even, setEven] = useState([]);
  const [odd, setOdd] = useState([]);

  return (
    <div>
      {data && <h1>{data}</h1>}
      {!data && <h1>Loading</h1>}
      <button onClick={dataApi}>Click to fetch</button>
      <Odd data={odd} func={handleData} />
      <Even data={even} func={handleData} />
    </div>
  );
}
