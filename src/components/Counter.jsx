import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../features/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state) => {
        return state.counter.count;
    });
    const dispatch = useDispatch();

    return <>
        <p>Count is {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </>
}
export default Counter;