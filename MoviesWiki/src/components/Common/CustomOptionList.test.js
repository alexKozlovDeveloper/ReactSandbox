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
    
        const output = mount(<CustomOptionList config={config} />);
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('Click test', () => {

        var config = {
            title: "Search by",
            selectedIndex: "0",
            options: ["Title", "Genre"]
        }
    
        const output = mount(<CustomOptionList config={config} />);
                
        const btn2 = output.findWhere(node => node.key() === '1').simulate('click');

        expect(output.findWhere(node => node.key() === '1').hasClass(styles.isactive)).to.equal(true);

        //expect(shallowToJson(output)).toMatchSnapshot();
    });


})



