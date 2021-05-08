import React from "react"
const styles = {
    btn: {
        margin: "5px"
    },
    container: {
        margin: "50px"
    }

}
function SearchForm(props) {


    return (

        <div style={styles.container} className="container">

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
                    type="button" style={styles.btn} className="srch btn btn-dark" onClick={props.handleFormSubmit}
                >Search</button>
                <button
                    type="button" style={styles.btn} className="srch btn btn-dark" onClick={props.reset}
                >Clear</button>
                <button
                    type="button" style={styles.btn} className=" srch2 btn btn-dark" onClick={props.sortByFirstName}
                >Sort by first name</button>
                <button
                    type="button" style={styles.btn} className=" srch2 btn btn-dark" onClick={props.sortByLastName}
                >Sort by first last name</button>
            </form>
        </div>

    );
}

export default SearchForm;
