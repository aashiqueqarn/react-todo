import { Priority, TaskStatus } from "@interfaces/taskCardInterface";

export function backgroundColor(priority?: Priority, status?:TaskStatus): string {
    let color: string  = '';
    if (priority) {
        switch(priority) {
            case Priority.HIGH: color = "#F8D5D2"; break;
            case Priority.MEDIUM: color = "#D3D2F8"; break;
            case Priority.LOW: color = "#D2F8D7"; break;
            default: color = "#5FB0CA"; break;
        }
        return color;
    }
    if (status) {
        switch(status) {
            case TaskStatus.NOT_STARTED: color = "#F8D5D2"; break;
            case TaskStatus.IN_PROGRESS: color = "#D3D2F8"; break;
            case TaskStatus.DONE: color = "#D2F8D7"; break;
            default: color = "#5FB0CA"; break;
        }
        return color;
    }
    return color;
}