export default class WhoseCard {
  static visa(cardNumber) {
    // 4539381129227382750
    let result = false;
    const { length } = cardNumber;
    if (cardNumber.startsWith(4) && (length === 13 || length === 16 || length === 19)) {
      result = true;
    }
    return result;
  }

  static masterCard(cardNumber) {
    // 5546064767651801
    const cardArrFormat = [51, 52, 53, 54, 55];
    let result = false;
    for (let i = 222100; i <= 272099; i += 1) {
      cardArrFormat.push(i);
    }
    cardArrFormat.forEach((element) => {
      if (cardNumber.startsWith(element) && cardNumber.length === 16) {
        result = true;
      }
    });
    return result;
  }

  static jcb(cardNumber) {
    // 3542212199325140046
    const { length } = cardNumber;
    const cardArrFormat = [];
    let result = false;
    for (let i = 3528; i <= 3589; i += 1) {
      cardArrFormat.push(i);
    }
    cardArrFormat.forEach((element) => {
      if (
        cardNumber.startsWith(element)
        && (length === 16 || length === 17 || length === 18 || length === 19)
      ) {
        result = true;
      }
    });
    return result;
  }

  static discover(cardNumber) {
    // 6011783751879825554
    const { length } = cardNumber;
    const cardArrFormat = [6011, 644, 645, 646, 647, 648, 649, 65];
    let result = false;
    for (let i = 622126; i <= 622925; i += 1) {
      cardArrFormat.push(i);
    }
    cardArrFormat.forEach((element) => {
      if (
        cardNumber.startsWith(element)
        && (length === 16 || length === 17 || length === 18 || length === 19)
      ) {
        result = true;
      }
    });
    return result;
  }

  static dinersClub(cardNumber) {
    // 36324404408298
    let result = false;
    const cardArrFormat = [300, 301, 302, 303, 304, 305, 36, 54];
    const { length } = cardNumber;
    cardArrFormat.forEach((element) => {
      if (cardNumber.startsWith(element) && (length === 14 || length === 16)) {
        result = true;
      }
    });
    return result;
  }

  static americanExpress(cardNumber) {
    // 341426606698293
    const cardArrFormat = [34, 37];
    let result = false;
    cardArrFormat.forEach((element) => {
      if (cardNumber.startsWith(element) && cardNumber.length === 15) {
        result = true;
      }
    });
    return result;
  }
}
