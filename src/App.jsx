import { useSelector } from 'react-redux';
import Counter from './components/Counter';

function App() {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  return (
    <>
    I KNOW! THE COUNTER IS {count}
      <Counter />
      <Counter />
      <Counter />
    </>
  )
}

export default App
