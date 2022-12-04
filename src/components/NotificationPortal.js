import React, {Component} from "react";
import ReactDOM from 'react-dom'
const notificationBlock = document.getElementById('notification');

export default class NotificationPortal extends Component{
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.classList.add('notificationBlock');
    }
    componentDidMount() {
        notificationBlock.appendChild(this.el);
    }
    componentWillUnmount() {
        notificationBlock.removeChild(this.el);
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}