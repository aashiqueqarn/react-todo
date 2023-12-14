export interface ITaskCardComponent {
    color: string;
    taskTitle: string;
    taskDescription: string;
    priority?: Priority;
    status?: TaskStatus;
    deleteTask?: (data: string) => object;
}

export enum Priority {
    HIGH="HIGH",
    MEDIUM="MEDIUM",
    LOW="LOW"
}

export enum TaskStatus {
    IN_PROGRESS="IN_PROGRESS",
    NOT_STARTED="NOT_STARTED",
    DONE="DONE"
}