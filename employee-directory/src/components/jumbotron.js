import React from "react";

const styles = {
    header: {
        textAlign: "center",
        backgroundColor: "black"
    }
}
function Jumbotron() {
    return (
        <div style={styles.header} className="header">
            <section className="jumbotron">Employee Directory!</section>
        </div>
    );
}

export default Jumbotron