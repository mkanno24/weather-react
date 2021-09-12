import React from "react";
import "./search.css";

export default function Search() {
  return (
    
    <div>
      <form id="searchForm">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control search-input weatherSearch"
              placeholder="Enter a city..."
              id="citySearch"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
