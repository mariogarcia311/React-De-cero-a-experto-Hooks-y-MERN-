import CounterApp from "../CounterApp"
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"

describe('pruebas primera APP', () => {
    

    test('debe de mostrar CounterApp correctamente ', () => {
        const value=0;
        const wrapper= shallow(< CounterApp value={value} />)
        expect(wrapper).toMatchSnapshot();
    })
    test('debe mostrat subtítulo enviado por props', () => {
        
        const value=100;
        const wrapper= shallow(
            < CounterApp 
                value={value}
                
            />
        );
        
        const textoParrafo= wrapper.find('h2').text().trim();
        expect(textoParrafo).toBe('100')
        
    })
    test('debe incrementar con botón +1', () => {
        const value=0;
        const wrapper= shallow(< CounterApp value={value} />)

        wrapper.find('button').at(2).simulate('click');

        const counterText= wrapper.find('h2').text().trim();

        expect(counterText).toBe('1')
        
    })
    test('debe incrementar con botón -1', () => {
        const value=0;
        const wrapper= shallow(< CounterApp value={value} />)

        wrapper.find('button').at(0).simulate('click');

        const counterText= wrapper.find('h2').text().trim();

        expect(counterText).toBe('-1')
        
    })
    
})