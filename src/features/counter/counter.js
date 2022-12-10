import { useSelector,useDispatch } from "react-redux";
import{increment,decrement, multiplicate} from './counterslice'

function Counter() {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
        <p>{count}</p>
        <div>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(multiplicate())}>*</button>
        </div>
    </div>
  )
}

export default Counter