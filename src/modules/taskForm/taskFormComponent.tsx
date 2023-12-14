import { Priority, TaskStatus } from "@interfaces/taskCardInterface";
import "@styles/task-form.css";
export function TaskFormComponent()  {
    return (
        <article className="form-component-wrapper">
            <h2>Add to do tasks</h2>
            <form className="taskForm-wrapper">
                <div className="input-raw">
                    <label className="title-label">Task title</label>
                    <input className="input-title" type="text" placeholder="Enter task title"/>
                </div>
                <div className="input-raw">
                    <label className="title-label">Task Description</label>
                    <textarea placeholder="Enter task description" className="task-description"></textarea>
                </div>
                <div className="input-raw">
                    <label className="title-label">Task Priority</label>
                    <select className="task-priority" defaultValue={Priority.LOW} placeholder="Enter task priority">
                        <option value={Priority.HIGH}>{Priority.HIGH}</option>
                        <option value={Priority.MEDIUM}>{Priority.MEDIUM}</option>
                        <option value={Priority.LOW}>{Priority.LOW}</option>
                    </select>
                </div>
                <div className="input-raw">
                    <label className="title-label">Task Status</label>
                    <select className="task-status" defaultValue={TaskStatus.NOT_STARTED} placeholder="Enter task status">
                        <option value={TaskStatus.NOT_STARTED}>{TaskStatus.NOT_STARTED}</option>
                        <option value={TaskStatus.IN_PROGRESS}>{TaskStatus.IN_PROGRESS}</option>
                        <option value={TaskStatus.DONE}>{TaskStatus.DONE}</option>
                    </select>
                </div>
                <div className="button-wrapper">
                    <button className="submit-btn">Add ToDo Task</button>
                </div>
            </form>
        </article>
    );
}