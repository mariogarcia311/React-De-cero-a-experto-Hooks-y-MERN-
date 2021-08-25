import { getSaludo } from "../../base/02-template-string";
import '@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js',()=>{

    test('prueba en el método getSaludo debe retornar Hola Mario', () => {
        
        const nombre='Mario';
        const saludo= getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre)
    })
    
    //getSaludo debe retornar Hola Carlos! si no hay argumento nombre
    test('getSaludo debe retornar Hola Carlos! si no hay argumento nombre', () => {
        
        
        const saludo= getSaludo();
        expect(saludo).toBe('Hola Carlos!')
    })
})