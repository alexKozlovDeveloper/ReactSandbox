import React, { Component } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ResultsBody from "./ResultsBody";
import DetailsView from "./DetailsView";

import ErrorBoundary from "./Error/ErrorBoundary";

import styles from "../styles/App.css"

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headerConfig: {
                title: "Find Your Movies",
                searchConfig: {
                    placeHolder: "The Godfather",
                    buttonText: "Search",
                    searchFilter: {
                        title: "Search by",
                        options: [{
                            title: "Title",
                            value: "title"
                        }, {
                            title: "Genre",
                            value: "genres"
                        }]
                    }
                }
            },
            footerConfig: {
                title: "Copyright © 2019 AkTest"
            },
            resultsBodyConfig: {
                itemsPerRow: 4,
                resultSortConfig: {
                    title: "Sort by",
                    options: [{
                        title: "Release date",
                        value: "release_date"
                    }, {
                        title: "Rating",
                        value: "vote_average"
                    }]
                },
                resultsCountConfig: {
                    title: "movies found"
                }
            }
        };
    }

    render() {
        return <div className={styles.font}>
            <ErrorBoundary>
                <Header config={this.state.headerConfig} />
                <DetailsView />
                <ResultsBody config={this.state.resultsBodyConfig} />
                <Footer config={this.state.footerConfig} />
            </ErrorBoundary>
        </div>;
    }
}

export default App;