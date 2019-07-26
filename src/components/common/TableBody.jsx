import React, { Component } from "react";
import Like from "../common/Like";

//Interface of this component
/* 
  1. movies => array objects
  2. like => function
  3. onDelete = function
*/

class TableBody extends Component {
  render() {
    const { data, onLike, onDelete } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            <td> {item.title}</td>
            <td>{item.genre.name}</td>
            <td>{item.numberInStock}</td>
            <td>{item.dailyRentalRate}</td>
            <td>
              <Like liked={item.liked} onClick={() => onLike(item)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(item)}
                className="btn btn-danger btn-small"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
