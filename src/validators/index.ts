import userValidator from './user.validator';

interface Validators {
    user:typeof userValidator
}

const validator:Validators={
    user:userValidator
}


export default validator