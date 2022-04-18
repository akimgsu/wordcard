import { useReducer, useState } from "react";
import Student from "./Student";

// reducer
// dispatch
// action

const ACTION_TYPES = {
    deposit: 'deposit',
    withdraw: 'withdraw',
}

const reducer = (state, action) => {
    console.log('working...', state, action);
    switch (action.type) {
        case ACTION_TYPES.deposit:
            return parseInt(state) + parseInt(action.payload);
        case ACTION_TYPES.withdraw:
            return parseInt(state) - parseInt(action.payload);
        default:
            return parseInt(state);
    }
};

const initialState = {
    count: 0,
    students: []
}

const reducerS = (state, action) => {
    switch (action.type) {
        case 'add-student':
            const name = action.payload.name;
            const newStudent = {
                id: Date.now(),
                name,
                isHere: false
            };
            return {
                count: state.count + 1,
                students: [...state.students, newStudent]
            };
        case 'delete-student':
            return {
                count: state.count - 1,
                students: state.students.filter((student) => student.id !== action.payload.id),
            };
        case 'mark-student':
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere }
                    }
                    return student;
                }),
            };
        default:
            return state;

    }
};


const UseReducer = () => {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0);

    const [name, setName] = useState('');
    const [studentsInfo, dispatchS] = useReducer(reducerS, initialState);
    return (
        <div>
            <h2>Account</h2>
            <p>Deposit: ${money}</p>
            <input type='number' value={number} onChange={(e) => setNumber((e.target.value))} step='1000' />
            <br />
            <button onClick={() => { dispatch({ type: ACTION_TYPES.deposit, payload: number }); }}>Deposit</button>
            <button onClick={() => { dispatch({ type: ACTION_TYPES.withdraw, payload: number }); }}>Withdrawal</button>


            <h2>Call</h2>
            <p>Total member: ${studentsInfo.count}</p>
            <input type='text' value={name} onChange={(e) => setName((e.target.value))} />
            <button onClick={() => {
                dispatchS({ type: 'add-student', payload: { name } })
            }}>Add</button>
            {studentsInfo.students.map((student) => {
                console.log(student);
                return <Student key={student.id} name={student.name} dispatchS={dispatchS} id={student.id} isHere={student.isHere} />;
            })}
        </div>
    );
}

export default UseReducer