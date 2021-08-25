import PrimeraApp from "../PrimeraAPP"
import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from "enzyme"

describe('pruebas primera APP', () => {
    
    // test('debe mostrar mensaje hola lola', () => {
        
    //     const saludo='hola lola'
    //     const {getByText}=render(<PrimeraApp saludo={saludo} />)

    //     expect(getByText(saludo)).toBeInTheDocument();
    // })
    test('debe de mostrar primeraAPP correctamente ', () => {
        const saludo='hola lola'
        const wrapper= shallow(< PrimeraApp saludo={saludo} />)
        expect(wrapper).toMatchSnapshot();
    })
    test('debe mostrat subtítulo enviado por props', () => {
        
        const saludo='hola lola'
        const subtitulo='soy un subtítulo'
        const wrapper= shallow(
            < PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo} 
            />
        );
        
        const textoParrafo= wrapper.find('p').text();
        expect(textoParrafo).toBe(subtitulo)
    })
    
    
})
