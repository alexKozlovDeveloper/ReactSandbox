import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import CustomOptionList from "./CustomOptionList";
import styles from "../../styles/CustomOptionList.css"

configure({adapter: new Adapter()});

describe('CustomOptionList component', () => {

    it('Rendering test', () => {

        var config = {
            title: "Search by",
            selectedIndex: "0",
            options: ["Title", "Genre"]
        }
    
        const component = mount(<CustomOptionList config={config} />);
        expect(shallowToJson(component)).toMatchSnapshot();
    });

    it('Click to second button', () => {

        var config = {
            title: "Search by",
            selectedIndex: "0",
            options: ["Title", "Genre"]
        }
    
        const component = mount(<CustomOptionList config={config} />);
                
        component.findWhere(node => node.key() === '1').simulate('click');

        expect(component.findWhere(node => node.key() === '1').hasClass(styles.isactive)).toBe(true);
        expect(component.state().selectedItem).toBe('option1');
    });

    it('Click to first button', () => {

        var config = {
            title: "Search by",
            selectedIndex: "1",
            options: ["Title", "Genre"]
        }
    
        const component = mount(<CustomOptionList config={config} />);
                
        component.findWhere(node => node.key() === '0').simulate('click');

        expect(component.findWhere(node => node.key() === '0').hasClass(styles.isactive)).toBe(true);
        expect(component.state().selectedItem).toBe('option0');
    });
})



