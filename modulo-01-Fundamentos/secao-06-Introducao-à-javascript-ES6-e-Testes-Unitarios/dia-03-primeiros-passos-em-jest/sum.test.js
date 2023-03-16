const sum = require('./sum');

describe('Soma 4 e 5 e retorna 9', ()=> {
    it('verifica se a soma de 4 e 5 é 9', ()=>{
        expect(sum(4, 5)).toBe(9);
    });
    it('Retorna 0 se receber soma de 0 mais 0', ()=>{
        expect(sum(0, 0)).toBe(0);
    });
    it('Lança erro se os parâmetros são 4 e "5"', ()=> {
        try{
            expect(sum(4, '5')).toThrow(Error);
        } catch(erro){
            
        }
    });
});

