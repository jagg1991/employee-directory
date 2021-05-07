import React from "react"

function ResultsList(props) {
    return (
        <ul className="list-group">
            {props.results.map(results => (
                <li className="list-group-item" key={results.id}>
                    <div>{results.name}</div>

                </li>

            ))}
        </ul>
    )
}

export default ResultsList