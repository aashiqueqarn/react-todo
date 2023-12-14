import { Priority, TaskStatus } from "./taskCardInterface";

export interface IHomeCardComponent {
    color: string;
    taskTitle: string;
    taskCount: number;
    priority?: Priority;
    status?: TaskStatus;
    onClick: () => object;
}