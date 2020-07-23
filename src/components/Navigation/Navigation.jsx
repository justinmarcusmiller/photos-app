import React from "react";
import './Navigation.css';
export default function Navigation(props) {
  return (
    <nav id="navigation">
      <button disabled={props.page < 2}  id="pageBack" onClick={(e) => props.handlePageChange('back')}>Previous Page</button>
      <p>Page: {props.page}</p>
      <button id="pageForward" onClick={(e) => props.handlePageChange('forward')}>Next Page</button>
    </nav>
  );
}