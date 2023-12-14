import { HomeCardComponent } from "@components/common/homeCardComponent";
import { RouterEnum } from "@constants/router.enum";
import { Priority, TaskStatus } from "@interfaces/taskCardInterface";

import '@styles/home.css';
import { useNavigate } from "react-router-dom";

export function Home()  {
    const navigate = useNavigate();
    const routeChange = (params?: Priority | TaskStatus) => {
        const path: string = `${RouterEnum.TASKS}`;
        return navigate(path, {state: {params: params}});
    };

    return (
        <article className="home-wrapper">
            <h3>ToDo Task Dashboard</h3>
            <h4>Pending Tasks</h4>
            <div className="home-cards">
                <HomeCardComponent onClick={async () => routeChange(Priority.HIGH)} color={"black"} taskTitle={"High Priority"} taskCount={50} priority={Priority.HIGH} />
                <HomeCardComponent onClick={async () => routeChange(Priority.MEDIUM)} color={"black"} taskTitle={"Medium Priority"} taskCount={20} priority={Priority.MEDIUM} />
                <HomeCardComponent onClick={async () => routeChange(Priority.LOW)} color={"black"} taskTitle={"Low Priority"} taskCount={30} priority={Priority.LOW} />
            </div>
            <h4>Task status</h4>
            <div className="home-cards">
                <HomeCardComponent onClick={async () => routeChange(TaskStatus.NOT_STARTED)} color={"black"} taskTitle={"Not started"} taskCount={50} status={TaskStatus.NOT_STARTED} priority={Priority.HIGH} />
                <HomeCardComponent onClick={async () => routeChange(TaskStatus.IN_PROGRESS)} color={"black"} taskTitle={"In progress"} taskCount={20} status={TaskStatus.IN_PROGRESS} priority={Priority.MEDIUM} />
                <HomeCardComponent onClick={async () => routeChange(TaskStatus.DONE)} color={"black"} taskTitle={"Done"} taskCount={30} status={TaskStatus.DONE} priority={Priority.LOW} />
            </div>
        </article>
    );
}
