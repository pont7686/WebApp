import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>React Enhanced Counter</h1>
      <p>
        {" "}
        Current Count: <strong></strong>
      </p>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Step Size:{" "}
          <input type="number" style={{ width: "60px", padding: "4px" }} />
        </label>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button>Increment</button>
        <button>Decrement</button>
        <button>Reset</button>
      </div>
      <hr />
      <h3>Action History</h3>
      <button disabled={history.length === 0}>Clear History</button>
    </div>
  );
}
