import { TaskCardComponent } from "@components/common/taskCardComponent";
import { ITaskCardComponent, Priority, TaskStatus } from "@interfaces/taskCardInterface";
import "@styles/task.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export function TaskComponent()  {
    const taskListData: ITaskCardComponent[] = [
        {
            color: "black",
            taskDescription: "Go on task 1",
            taskTitle: 'Task 1',
            priority: Priority.HIGH,
            status: TaskStatus.IN_PROGRESS,
        },
        {
            color: "green",
            taskDescription: "Go on task 2",
            taskTitle: 'Task 2',
            priority: Priority.LOW,
            status: TaskStatus.DONE,
        },
        {
            color: "red",
            taskDescription: "Go on task 3",
            taskTitle: 'Task 3',
            priority: Priority.MEDIUM,
            status: TaskStatus.NOT_STARTED,
        },
    ];
    // eslint-disable-next-line prefer-const
    let [taskList , useTaskData] = useState(taskListData);
    const { state } = useLocation();
    if (state?.params) {
        const abc = taskList.filter((task) => (task.priority === state.params) || (task.status === state.params));
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTaskData(abc);
    }
    
    const onDelete = (data: string) => {
        console.log(data, 'initial', taskList);
        const remainingTasks = taskList.filter((task) => task?.taskTitle !== data);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useTaskData(remainingTasks);
        return remainingTasks;
    };

    const taskListComponents = taskList.map((task: ITaskCardComponent, index: number) => {
        return <TaskCardComponent key={`${task.taskTitle}-${index}`} color={task.color} taskTitle={task.taskTitle} taskDescription={task.taskDescription} priority={task.priority} status={task.status} deleteTask={onDelete}></TaskCardComponent>
    })
    return (
        <section className="taskComponent">
            <h3>Task Lists</h3>
            { taskListComponents.length > 0 ? 
                <div className="task-cards">
                    {taskListComponents}
                </div> : 
                <p>No Data Available</p>
            }
        </section>
    );
}