import React, {useRef} from "react";
import NotificationPortal from "./NotificationPortal";
import {CSSTransition} from 'react-transition-group';

function Notification ({show, backgroundColor, borderColor, text}) {
    const nodeRef = useRef(null)
    return (
        <NotificationPortal>
            <CSSTransition
                nodeRef={nodeRef}
                classNames="alert"
                timeout={300}
                in={show}
                unmountOnExit={true}>
                <div className="compareBlock" ref={nodeRef} style={{backgroundColor, borderColor}}>
                    <p>{text}</p>
                </div>
            </CSSTransition>
        </NotificationPortal>
    )
}

export default Notification;