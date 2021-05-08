import React from "react"
const styles = {
    srch: {
        margin: "5px"
    },

}
function SearchForm(props) {


    return (

        <div className="container">

            <form className="search" onSubmit={props.handleFormSubmit}>

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
                    type="button" style={styles.srch} className="srch btn btn-dark" onClick={props.handleFormSubmit}
                >Search</button>
                <button
                    type="button" className="btn btn-dark" onClick={props.reset}
                >Clear</button>
            </form>
        </div>

    );
}

export default SearchForm;
