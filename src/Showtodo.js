import React from 'react'

const Showtodo = (props) => {
    return (
        <>
            <div className='list-container'>
                <div className='list-task'>
                    <h2>{props.id+1}.</h2>
                    <h4 className='inputed'> {props.task}</h4>
                </div>

                <div className='list-button'>
                    <button onClick={() => {
                        props.onSelect(props.id)
                    }}>X</button>
                </div>
            </div>
            
        </>
    )
}

export default Showtodo


