import { theShire,buckland } from './another-script.js';

var statement = () => `${theShire.name} was founded ${buckland.founding - theShire.founding} years before ${buckland.name}.`;

export{theShire,statement};