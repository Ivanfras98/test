export function Odd({ data, func }) {
  return (
    <>
      <button onClick={func}> Odd</button>
      <h1>Odd</h1>
      <ul>
        {data.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ul>
    </>
  );
}
