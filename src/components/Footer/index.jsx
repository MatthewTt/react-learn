import React, { Component } from 'react';

class index extends Component {
    render() {
        const { list } = this.props;
        const doneLength = list.filter(item => item.completed).length;
        return (
            <div className="todo-footer">
                <input type="checkbox"/>
                <span>已完成 {doneLength}/全部 {list.length}</span>
                <button className="btn-danger" onClick={this.handleClearDone}>清除已完成任务</button>
            </div>
        );
    }

    handleClearDone = () => {
        this.props.clearDone()
    }
}

export default index;
