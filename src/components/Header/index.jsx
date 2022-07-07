import React, { Component } from 'react';
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

class index extends Component {

    static propTypes = {
        addItem: PropTypes.func.isRequired
    }
    handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            this.props.addItem({
                id: nanoid(),
                title: e.target.value,
                completed: false
            });
            e.target.value = '';
        }
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入你的任务名称" onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}

export default index;
