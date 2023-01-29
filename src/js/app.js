/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-unresolved
import DomInteraction from '../components/DOMInteraction/DOMInteraction';
import ValidateNumber from '../components/ValidateNumber/validateNumber';
import WhoseCard from '../components/WhoseСard/WhoseСard';

const Validate = new DomInteraction(
  ValidateNumber.validate,
  WhoseCard.visa,
  WhoseCard.masterCard,
  WhoseCard.jcb,
  WhoseCard.discover,
  WhoseCard.dinersClub,
  WhoseCard.americanExpress
);
