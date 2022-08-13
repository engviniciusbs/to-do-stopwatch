import React, {Fragment} from 'react';
import Item from './item';
import style from './List.module.scss';
import { ITask } from '../../types/tasks';

interface Props {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

const List = ({ tasks, selectTask }: Props) => {
    return (
        <Fragment>
            <aside className={style.tasksList}>
                <h2>Daily study</h2>
                <ul>
                    {tasks.map(item => (
                        <Item 
                            selectTask={selectTask}
                            key={item.id}
                            {...item}
                        />
                    ))}
                </ul>
            </aside>
        </Fragment>
    )
}

export default List;