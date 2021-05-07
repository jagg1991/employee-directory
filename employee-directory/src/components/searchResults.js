import React from "react";
import API from "../utils/API"
import SearchForm from "./searchForm";
import ResultsList from "./resultsList"

class SearchResultsContainer extends React.Component {
    state = {
        search: "",
        results: []
    }
    // componentDidMount() {
    //     this.searchEmployee("results");
    // }
    searchUser = query => {
        API.search(query)
            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };
    handleInputChange = e => {
        const name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = e => {
        e.preventDefault();
        this.searchUser(this.state.search);
    };
    render() {
        return (
            <>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <ResultsList
                    results={this.state.results}
                />

            </>
        )
    }

}

export default SearchResultsContainer