import React, { Fragment, useState } from 'react'
import { ITask } from '../../types/tasks'
import Button from '../button'
import style from'./Form.module.scss'
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>   
}
const Form = ({ setTasks }: Props) => {

    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    const addTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTasks(oldTasks => 
            [
                ...oldTasks, 
                {
                    task,
                    time,
                    selected: false, 
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        setTask("");
        setTime("00:00")
    }

    return (
        <Fragment>
            <form className={style.newTask} onSubmit={addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Add a new task
                    </label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        placeholder="What u going to study now?"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Time
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">
                    Add
                </Button>
            </form>
        </Fragment>
    )
}

// class Form extends React.Component<{
//     setTasks: React.Dispatch<React.SetStateAction<ITask[]>>   
// }>{

//     state = {
//         task: "",
//         time: "00:00"
//     }

//     addTask(e: React.FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         this.props.setTasks(oldTasks => 
//             [
//                 ...oldTasks, 
//                 {
//                     ...this.state, 
//                     selected: false, 
//                     completed: false,
//                     id: uuidv4()
//                 }
//             ]
//         );
//         this.setState({
//             task: "",
//             time: "00:00"
//         })
//     }

//     render() {
//         return (
//             <Fragment>
//                 <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
//                     <div className={style.inputContainer}>
//                         <label htmlFor="task">
//                             Add a new task
//                         </label>
//                         <input
//                             type="text"
//                             name="task"
//                             id="task"
//                             value={this.state.task}
//                             onChange={e => this.setState({ ... this.state, task: e.target.value })}
//                             placeholder="What u going to study now?"
//                             required
//                         />
//                     </div>
//                     <div className={style.inputContainer}>
//                         <label htmlFor="time">
//                             Time
//                         </label>
//                         <input
//                             type="time"
//                             step="1"
//                             name="time"
//                             value={this.state.time}
//                             onChange={e => this.setState({ ...this.state, time: e.target.value })}
//                             id="time"
//                             min="00:00:00"
//                             max="01:30:00"
//                             required
//                         />
//                     </div>
//                     <Button type="submit">
//                         Add
//                     </Button>
//                 </form>
//             </Fragment>
//         )
//     }
// }

export default Form;