import './DomInteraction.css';

export default class DomInteraction {
  constructor(
    cartNumberHandler1,
    cartNumberHandler2,
    cartNumberHandler3,
    cartNumberHandler4,
    cartNumberHandler5,
    cartNumberHandler6,
    cartNumberHandler7
  ) {
    this.cartNumber = document.querySelector('.card-number-field');
    this.btn = document.querySelector('.submit');
    this.form = document.querySelector('.validate-form');
    this.validateText = document.querySelector('.validate-text');
    this.cartImg = document.querySelectorAll('.cart-img');
    this.imgVisa = document.querySelector('.visa');
    this.imgMastercard = document.querySelector('.mastercard');
    this.imgJcb = document.querySelector('.jcb');
    this.imgDiscover = document.querySelector('.discover');
    this.imgDinersClub = document.querySelector('.diners-club');
    this.imgAmericanExpress = document.querySelector('.american-express');

    this.cartNumberHandler1 = cartNumberHandler1;
    this.cartNumberHandler2 = cartNumberHandler2;
    this.cartNumberHandler3 = cartNumberHandler3;
    this.cartNumberHandler4 = cartNumberHandler4;
    this.cartNumberHandler5 = cartNumberHandler5;
    this.cartNumberHandler6 = cartNumberHandler6;
    this.cartNumberHandler7 = cartNumberHandler7;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (this.cartNumberHandler1(this.cartNumber.value)) {
        this.cartNumber.style.borderColor = '#0cbb7d';
        this.cartNumber.classList.remove('card-number-field__invalid');
        this.cartNumber.classList.add('card-number-field__valid');
        this.validateText.textContent = '';
      } else {
        this.cartNumber.style.borderColor = 'red';
        this.cartNumber.classList.remove('card-number-field__valid');
        this.cartNumber.classList.add('card-number-field__invalid');
        this.validateText.textContent = 'Еггог in card number';
      }
      if (this.cartNumberHandler2(this.cartNumber.value)) {
        this.imgVisa.style.backgroundPositionY = '0px';
      }
      if (this.cartNumberHandler3(this.cartNumber.value)) {
        this.imgMastercard.style.backgroundPositionY = '0px';
      }
      if (this.cartNumberHandler4(this.cartNumber.value)) {
        this.imgJcb.style.backgroundPositionY = '0px';
      }
      if (this.cartNumberHandler5(this.cartNumber.value)) {
        this.imgDiscover.style.backgroundPositionY = '0px';
      }
      if (this.cartNumberHandler6(this.cartNumber.value)) {
        this.imgDinersClub.style.backgroundPositionY = '0px';
      }
      if (this.cartNumberHandler7(this.cartNumber.value)) {
        this.imgAmericanExpress.style.backgroundPositionY = '0px';
      }
    });

    this.form.addEventListener('input', () => {
      this.cartNumber.classList.remove('card-number-field__invalid');
      this.cartNumber.classList.remove('card-number-field__valid');
      this.validateText.textContent = '';
      for (let i = 0; i < this.cartImg.length; i += 1) {
        this.cartImg[i].style.backgroundPositionY = '-25px';
      }
    });
  }
}
