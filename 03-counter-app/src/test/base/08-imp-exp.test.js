import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('PPruebas en funciones de heroes',()=>{

    test('pruebas por id ', () => {
        const id=1;
        const heroe=getHeroeById(id);
        
        const heroeData=heroes.find(h=>h.id===id);
        expect(heroe).toEqual(heroeData);
    })
    test('debe retornar un undefined si héroe no existe ', () => {
        const id=10;
        const heroe=getHeroeById(id);
        
        expect(heroe).toBe(undefined);
    })

    test('debe retornar un undefined si héroe no existe ', () => {
        const owner='DC';
        const heroe=getHeroesByOwner(owner);
        const heroesData=heroes.filter(h=>h.owner===owner);
        expect(heroe).toEqual(heroesData);
    })
    test('debe retornar un undefined si héroe no existe ', () => {
        const owner='Marvel';
        const heroe=getHeroesByOwner(owner);
        const heroesData=heroes.filter(h=>h.owner===owner);
        expect(2).toBe(heroesData.length);
    })
})