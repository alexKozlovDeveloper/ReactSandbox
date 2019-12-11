import React from 'react';
import { Provider } from 'react-redux'
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import rootReducer from '../../reducers'
import { createStore } from 'redux'

import Search from "./Search";

configure({ adapter: new Adapter() });

test('Search rendering test', () => {

    var searchConfig = {
        placeHolder: "Quentin Tarantino",
        buttonText: "Search",
        searchFilter: {
            title: "Search by",
            selectedIndex: "0",
            options: ["Title", "Genre"]
        }
    }

    var defaultStore = {
        moviesReducer: {
            movies: [],
            isLoaded: true,
            error: null,
            searchText: 'father',
            searchBy: 'title',
        }
    }

    const store = createStore(rootReducer, defaultStore)

    const component = shallow(<Provider store={store}>
        <Search config={searchConfig} />
    </Provider>);
    expect(shallowToJson(component)).toMatchSnapshot();
});

