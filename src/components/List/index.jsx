import React, { Component } from 'react';
import Item from "../Item";
import PropTypes from "prop-types";

class index extends Component {
    static propTypes = {
        list: PropTypes.array.isRequired,
        updateItem: PropTypes.func.isRequired
    }
    render() {
        return (
            <div className="todo-body">
                <ul>
                    {
                        this.props.list.map((item) => {
                            return <Item key={item.id} { ...item } updateItem={this.props.updateItem} deleteItem={this.props.deleteItem}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default index;
