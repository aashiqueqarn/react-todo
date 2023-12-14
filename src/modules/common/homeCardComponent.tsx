import { FcMediumPriority, FcLowPriority, FcHighPriority } from "react-icons/fc";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineNotStarted } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { IHomeCardComponent } from '@interfaces/homeCardComponent';
import '@styles/homeCard.css';
import { backgroundColor } from "@utils/cardBackgroundColor";
import { Priority, TaskStatus } from "@interfaces/taskCardInterface";

export function HomeCardComponent(props?: IHomeCardComponent)  {
    return (
        <section
            style={{ 
                backgroundColor: props?.priority ? backgroundColor(props?.priority) : backgroundColor(),
                color: props?.color ?? 'black',
            }}
        className="home-card-wrapper" onClick={props?.onClick}>
            <div className="content-wrapper">
                <div className="card-topic">
                    <strong>{props?.taskTitle}</strong>
                </div>
                <div className="card-data">
                    <strong>Task Count:</strong> {props?.taskCount || 'N/A'}
                </div>
            </div>
            <div className="card-icon">
                {
                    <div>
                        <div>
                            {
                                (props?.priority) && <div className="icon-data">
                                    {(props?.priority === Priority.LOW) && <FcLowPriority />}
                                    {(props?.priority === Priority.HIGH) && <FcHighPriority />}
                                    {(props?.priority === Priority.MEDIUM) && <FcMediumPriority />}
                                </div>
                            }
                        </div>
                        {
                            (props?.status) && <div className="icon-data tooltip">
                                {(props?.status === TaskStatus.NOT_STARTED) && <div><span className="tooltipText">Not started</span><MdOutlineNotStarted /></div>}
                                {(props?.status === TaskStatus.IN_PROGRESS) && <div><span className="tooltipText">In progress</span><GrInProgress /></div>}
                                {(props?.status === TaskStatus.DONE) && <div><span className="tooltipText">Done</span><AiOutlineFileDone /></div>}
                            </div>
                        }
                    </div>
                }
            </div>
        </section>
    );
}
