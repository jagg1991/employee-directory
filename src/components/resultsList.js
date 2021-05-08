import React from "react"
import "../styles/results.css";
const styles = {

    listGroupEmployee: {
        margin: "40px",
        padding: 20,

    },
    listGroupItem: {


    },
    card: {

        width: "75%",
        height: "auto",
        margin: "20px"



    },
    container: {
        backgroundColor: "rgb(122, 0, 106)"
    }
};

function ResultsList(props) {
    var employees;

    if (props.filteredResults.length > 0) {
        employees = props.filteredResults
    }
    else {
        employees = props.results
    }
    return (
        <div className="container">
            <ul style={styles.listGroupEmployee} className="list-group-employee">
                {employees.map(result => (
                    <div className="card" style={styles.card}>
                        <li className="list-group-item" style={styles.listGroupItem} key={result.login.uuid}>
                            <div style={styles.results} >
                                <img alt="userImage" src={result.picture.thumbnail}></img>
                                <h4>{result.name.first} {result.name.last}</h4>
                                <h5>{result.email}</h5>
                            </div>

                        </li>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default ResultsList