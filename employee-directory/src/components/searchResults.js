import React from "react";
import API from "../utils/API"
import SearchForm from "./searchForm";
import ResultsList from "./resultsList"


class SearchResults extends React.Component {
    state = {
        search: "",
        results: [],
        filteredResults: []
    }

    componentDidMount() {
        this.searchUser();
    };

    searchUser = () => {
        API.search()

            .then(res => this.setState({ results: res.data.results }))
            .catch(err => console.log(err));
    };
    handleInputChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = e => {
        e.preventDefault();
        const filtered = this.state.results.filter(employee => {
            return employee.name.first.toLowerCase().includes(this.state.search.toLocaleLowerCase())
                || employee.name.last.toLowerCase().includes(this.state.search.toLocaleLowerCase())
        })
        this.setState({ filteredResults: filtered })
    };
    reset = e => {
        e.preventDefault();

        this.setState({ filteredResults: this.state.results, search: "" })

    };

    sortByFirstName = e => {
        e.preventDefault();
        const employees = this.state.results
        employees.sort(function (a, b) {
            var nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.first.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        this.setState({ results: employees })
    }
    sortByLastName = e => {
        e.preventDefault();
        const employees = this.state.results
        employees.sort(function (a, b) {
            var nameA = a.name.last.toUpperCase(); // ignore upper and lowercase
            var nameB = b.name.last.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        this.setState({ results: employees })
    }


    render() {
        return (
            <>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    sortByFirstName={this.sortByFirstName}
                    sortByLastName={this.sortByLastName}
                    co
                    reset={this.reset}
                />
                <ResultsList

                    results={this.state.results}
                    filteredResults={this.state.filteredResults}
                />

            </>
        )
    }

}

export default SearchResults