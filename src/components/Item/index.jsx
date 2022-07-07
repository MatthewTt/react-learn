import React, { Component } from 'react';
import PropTypes from "prop-types";

class index extends Component {
    static propTypes = {
        updateItem: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }
    handleClick = (e) => {
        const { id, updateItem } = this.props
        updateItem(id, e.target.checked)
    }

    handleDelete = (id) => {
        console.log(id)
        this.props.deleteItem(id)
    }
    render() {
        const { title, completed , id} = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" checked={completed} onChange={this.handleClick}/>
                    <span>{title}</span>
                </label>
                <button className="del-danger" onClick={() => this.handleDelete(id)}>删除</button>
            </li>
        );
    }
}

export default index;
