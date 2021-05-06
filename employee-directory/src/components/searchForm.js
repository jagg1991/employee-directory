import React from "react"

function SearchForm(props) {
    return (
        <div className="container">
            <form className="search">

                <div className="form-group">
                    <label htmlFor="search" >Search by last name:</label>
                    <input
                        onChange={props.handleInputChange}
                        name="search"
                        value={props.search}
                        type="text"
                        className="form-control"
                        placeholder="Search by last name"
                        id="search" />
                </div>
                <button
                    type="button" class="btn btn-dark"
                >Search</button>
            </form>
        </div>
    );
}

export default SearchForm;
