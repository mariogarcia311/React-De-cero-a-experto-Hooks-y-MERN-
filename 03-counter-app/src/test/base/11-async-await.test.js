import { getImagen } from "../../base/11-async-await"


describe('Pruebas con async-await y fecth', () => {
    
    test('debe retornar url de la imagen ', async () => {
        
        const url=await getImagen();
        // expect(typeof url).toBe('string')
        expect(url.includes('https')).toBe(true)
    })
    
})
