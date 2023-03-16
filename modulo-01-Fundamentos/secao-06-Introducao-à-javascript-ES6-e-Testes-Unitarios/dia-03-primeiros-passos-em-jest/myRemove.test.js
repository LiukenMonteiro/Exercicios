const myRemove = require('./myRemove');

describe('Recebe um array e um item que será removido do array', ()=>{
    it('se receber array [1, 2, 3, 4] e item 3, remove 3', ()=>{
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Não retorna o mesmo array que foi recebido', ()=>{
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('se receber array [1, 2, 3, 4, 5] e item 5, remove 5', ()=>{
        expect(myRemove([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4]);
    });
});
