// import { useReducer, useState } from "react";

const Student = ({ name, dispatchS, id, isHere }) => {

    return (
        <div>
            <span style={{
                textDecoration: isHere ? 'line-through' : 'none',
                color: isHere ? 'gray' : 'black'
            }} onClick={() => { dispatchS({ type: 'mark-student', payload: { id } }) }}>{name}</span>
            <button onClick={() => {
                dispatchS({ type: 'delete-student', payload: { id } });
            }}>Del</button>
        </div>
    );
}

export default Student;