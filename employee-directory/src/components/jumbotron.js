import React from "react";
import "../styles/jumbotron.css";
const styles = {
    header: {
        textAlign: "center",

        padding: 20,
        color: "white",
        backgroundColor: "rgb(122, 0, 106)",
    }
}

function Jumbotron() {
    return (
        <div style={styles.header} className="header">
            {/* <section className="jumbotron">Employee Directory!</section> */}
            <h1>Employee Directory!</h1>
        </div>
    );
}

export default Jumbotron