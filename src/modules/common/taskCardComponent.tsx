import { ITaskCardComponent, Priority, TaskStatus } from "@interfaces/taskCardInterface";
import { backgroundColor } from "@utils/cardBackgroundColor";
import { useState } from "react";
import { FcMediumPriority, FcLowPriority, FcHighPriority } from "react-icons/fc";
import { MdDoneAll, MdOutlineRemoveDone, MdDelete } from "react-icons/md";

export function TaskCardComponent(props?: ITaskCardComponent)  {
    // eslint-disable-next-line prefer-const
    let [taskDetails, setTaskStatus] = useState(props);
    const markTaskDone =() => {
        if (taskDetails) {
            const localTaskDetails = {
                color: taskDetails.color,
                taskTitle: taskDetails.taskTitle,
                taskDescription: taskDetails.taskDescription,
                priority: taskDetails.priority,
                status: (taskDetails.status === TaskStatus.DONE) ? TaskStatus.IN_PROGRESS : TaskStatus.DONE,
            }
            taskDetails = localTaskDetails;
        }
        setTaskStatus(taskDetails);
    }

    return (
        <section
            style={{
                backgroundColor: taskDetails?.status ? backgroundColor(undefined, taskDetails?.status) : backgroundColor(),
                color: taskDetails?.color ?? 'black',
            }}
        className="task-card-wrapper">
            <div className="content-wrapper">
                <div className="card-topic">
                    <strong style={{
                        textDecoration: taskDetails?.status === TaskStatus.DONE ? 'line-through' : 'none'
                    }}>{props?.taskTitle}</strong>
                </div>
                <div className="card-data" style={{
                    textDecoration: taskDetails?.status === TaskStatus.DONE ? 'line-through' : 'none'
                }}>
                    {taskDetails?.taskDescription || 'No data available'}
                </div>
            </div>
            <div className="card-icon">
                <div className="priority-icon">
                    {
                        (taskDetails?.priority) ? <div>
                            {(taskDetails?.priority === Priority.LOW) && <FcLowPriority />}
                            {(taskDetails?.priority === Priority.HIGH) && <FcHighPriority />}
                            {(taskDetails?.priority === Priority.MEDIUM) && <FcMediumPriority />}
                        </div> : <FcLowPriority />
                    }
                </div>
                <div onClick={markTaskDone} className="task-status-icon">
                    {
                        taskDetails?.status === TaskStatus.DONE ? <MdDoneAll /> : <MdOutlineRemoveDone />
                    }
                </div>
                <div onClick={() => taskDetails?.deleteTask(taskDetails.taskTitle)} className="task-status-icon">
                    {
                        <MdDelete />
                    }
                </div>
            </div>
        </section>
    );
}
