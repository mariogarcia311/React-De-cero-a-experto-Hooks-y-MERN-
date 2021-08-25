
describe('Pruebas en el archivos demo.test.js',()=>{

    test('deben ser iguales los string', () => {
        // 1.inicialización
        const mensaje='hola mundo';
        //2.estimulo
        const mensaje2='hola mundo';
        //observar compontamiento
        expect(mensaje).toBe(mensaje2);
    })

})

