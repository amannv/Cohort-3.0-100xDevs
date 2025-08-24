import React from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

function Increase() {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function DisplayCount() {
  const count = useRecoilValue(countState);
  return <p>Count: {count}</p>;
}

function Parent() {
  return (
    <RecoilRoot>
      <Increase />
      <Decrease />
      <DisplayCount />
    </RecoilRoot>
  );
}

export default function App() {
  return <Parent />;
}
