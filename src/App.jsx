import { asyncGetQuotes, thenGetQuotes, asyncTryGetQuotes } from './services/promise-me';

export default function App() {
  
  return (
    <>
      <button onClick={async () => console.log(await asyncGetQuotes)}>
      Async Get Quotes
      </button>
      <button onClick={async () => console.log(await thenGetQuotes)}>Get Quotes</button>
      <button onClick={async () => console.log(await asyncTryGetQuotes)}>Async Try Get Quotes</button>
    </>
  );
  
}
