export function Even({ data, func }) {
  console.log(data);
  return (
    <>
      <button onClick={func}>Even</button>
      <h1>Even</h1>
      <ul>
        {data.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ul>
    </>
  );
}