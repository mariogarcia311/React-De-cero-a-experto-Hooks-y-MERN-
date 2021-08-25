import { retornaArreglo } from "../../base/07-deses-arr"


describe('Prubea test 07-deses-arr',()=>{

    test('Prueba retornaArreglo debe restornar string y número', () => {
        
        // const arr=retornaArreglo();
        // expect(arr).toEqual(['ABC', 123])
        const [letras,numeros]=retornaArreglo();
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })
    

})