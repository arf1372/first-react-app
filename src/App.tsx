import { useState } from 'react';
import './App.css'

function ClickWrapper() {
  const [count, setCount] = useState(0);
  return (
    <div className='text-center'>
      <h1>Welcome to my App!</h1>
      <p>Click the image to increase the count!</p>
      <img
        onClick={() => { setCount(count + 1) }}
        src="https://reactjs.org/logo-og.png"
        alt="React"
        className=
          {`mx-[${count}] \
          origin-center \
          translate-x-1/2 \
          transition-all \
          border-[5px] \
          border-violet-600 \
          hover:rounded-ss-[50%] \
          hover:rounded-ee-[50%] \
          bg-red-300 w-1/2`} />
      <MyButton counts={count} onClick={() => { setCount(0) }} />
    </div>
  );
}

function MyButton(props: {counts: number, onClick: () => void}) {
  return (
    <button onClick={props.onClick}title='Click to reset'>I&#39;m a button!<br /> clicked: {props.counts} <br/>Click me to reset!</button>
  );
}

function App() {
  return (
    <ClickWrapper />
  );
}

export default App
