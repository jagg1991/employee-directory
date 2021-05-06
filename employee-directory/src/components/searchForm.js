import React from "react"

function searchForm() {
    return (
        <div className="container">
            <form className="search">

                <div className="form-group">
                    <label htmlFor="search" >Search by last name:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by last name"
                        id="search" />
                </div>
            </form>
        </div>
    );
}

export default searchForm;
