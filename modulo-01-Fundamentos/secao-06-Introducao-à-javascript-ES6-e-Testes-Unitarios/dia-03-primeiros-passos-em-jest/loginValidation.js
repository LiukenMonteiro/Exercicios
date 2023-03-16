// loginValidation.js
const greetingMessage = (user) => {
    return `Hello, ${user}! Que bom ter você de volta`;
  };
  
  const loginErrorMessage = (user) => {
    return `Pessoa usuária '${user}' não encontrada, tente novamente!`;
  };
  
  const user = {
    userName: "Bob",
    password: 123456,
  };
  
  const verifyCredentials = ({ userName, password }) => {
    if (password === 123456 && userName === "Joana") {
      return greetingMessage(userName);
    } else {
      return loginErrorMessage(userName);
    }
  };
  
  const { userName, password } = user;

  console.log(verifyCredentials(user));
  
  module.exports = { greetingMessage, loginErrorMessage, verifyCredentials }

  // const multiplyByTwo = (number) => {
  //   if (!number) {
  //     throw new Error('number é indefinido')
  //   }
  //   try{
  //     multiplyByTwo(number)
  //     return number * 2;
  //   } catch (erro){
  //     return erro.message;
  //   }   
  // }; 
  // // multiplyByTwo(4);
  // console.log(multiplyByTwo(0));

  // test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  //   expect(multiplyByTwo(4)).toBe(8);
  // });
  // test('testa se é lançado um erro quando number é indefinido', () => {
  //   expect(() => { multiplyByTwo() }).toThrow();
  // });
  // test('testa se a mensagem de erro é "number é indefinido"', () => {
  //   expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  // });