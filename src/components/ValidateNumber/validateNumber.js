/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-globals */

/// ///////////////////////////////////////////////////////////////////
// Modul for checking the validity of the card number - algorithm luna
/// ///////////////////////////////////////////////////////////////////

export default class ValidateNumber {
  static validate(cartNumber) {
    const arrInput = Array.from(cartNumber);
    const flippedArrInput = arrInput.reverse();
    const controlledFigure = Number(flippedArrInput[0]);
    const flippedPayload = flippedArrInput.slice(1);
    const oddNumbersArray = [];
    const evenNumbersArray = [];

    flippedPayload.forEach((element, index) => {
      if (index % 2 !== 0) {
        oddNumbersArray.push(element);
      } else {
        evenNumbersArray.push(element);
      }
    });
    const oddNumbersSum = oddNumbersArray.reduce(
      (counter, nextItem) => Number(counter) + Number(nextItem)
    );

    const evenNumbersSum = evenNumbersArray.reduce((counter, nextItem) => {
      if (nextItem * 2 < 10) {
        return Number(counter) + Number(nextItem * 2);
      }
      const item = Number(nextItem * 2);
      let dobleItem = String(item);
      dobleItem = Number(dobleItem[0]) + Number(dobleItem[1]);
      return Number(counter) + Number(dobleItem);
    }, 0);

    const sum = oddNumbersSum + evenNumbersSum;
    const result = (10 - (sum % 10)) % 10;

    if (controlledFigure === result) {
      console.log('Все ок!');
      return true;
    }
    console.log('В номере карты допущена ошибка');
    return false;
  }
}
