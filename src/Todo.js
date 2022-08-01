import React, { useState } from 'react'
import ShowTodo from './Showtodo'
import './Todo.css'

const Todo = () => {

    const [task, setTask] = useState("")
    const [data, setData] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data, newData])

        setTask('')
    }

    const deleteItem =(a)=>{
        const finalData = data.filter((curEle,index)=>{
            return index !== a;
        })
        setData(finalData)
    }
    return (
        <>
        
            <div className='container'>
                <div className='header'>
                    <h2>TODO APP </h2>
                </div>

                <form onSubmit={submitHandler}>
                    <div className="body">
                        <div className="body-input">
                            <input id="todo-input" type="text" className="form-control" value={task} 
                            placeholder="add some task"
                            onChange={onChangeHandler} />
                        </div>
                        <button type="submit" className="submit">Add todo</button>
                    </div>
                </form>

               

            </div>

         <div className='list-container1'> {data.map((value, index) => {
                        return <ShowTodo
                            key={index}
                            id={index}
                            task={value}
                            onSelect={deleteItem}
                        />
                    })}
                    </div> 
        </>
    )
}

export default Todo
