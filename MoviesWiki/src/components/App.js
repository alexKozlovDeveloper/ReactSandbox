import React, { Component } from "react";

import Home from "./Pages/Home";
import MovieView from "./Pages/MovieView";
import NotFound from "./Pages/NotFound";

import ErrorBoundary from "./Error/ErrorBoundary";

import styles from "../styles/App.css"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
            <Router>
                <ErrorBoundary>
                    <Switch>
                        <Route path="/view" render={(props) => <MovieView {...props} footerConfig={this.state.footerConfig} />} />
                        <Route exact path="/" render={(props) => <Home {...props} resultsBodyConfig={this.state.resultsBodyConfig} headerConfig={this.state.headerConfig} footerConfig={this.state.footerConfig} />} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </ErrorBoundary>
            </Router>
        </div>;
    }
}

export default App;