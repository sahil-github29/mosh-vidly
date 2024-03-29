import React, { Component } from "react";
import TableHeader from "../common/TableHeader";
import TableBody from "../common/TableBody";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Title" },
    { key: "like" },
    { key: "delete" }
  ];
  render() {
    const { movies, onDelete, onLike, onSort, sortColumn } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} onLike={onLike} onDelete={onDelete} />
      </table>
    );
  }
}
export default MoviesTable;
