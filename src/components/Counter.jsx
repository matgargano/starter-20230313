import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setIncrementBy } from '../features/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state) => {
        return state.counter.count;
    });

    const incrementBy = useSelector((state) => {
        return state.counter.incrementBy;
    });

    const currentState = useSelector((state) => {
        return state
    });

    const dispatch = useDispatch();

    return <>
        <p>Count is {count}</p>
        <input 
            type="number" 
            value={incrementBy} 
            onChange={e => dispatch(setIncrementBy({value: e.target.value}))} 
        />
        
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <pre>{JSON.stringify(currentState, 0, 1)}</pre>
    </>
}
export default Counter;