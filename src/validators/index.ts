import billValidator from './bill.validator';
import userValidator from './user.validator';

interface Validators {
    user:typeof userValidator,
    bill:typeof billValidator
}

const validator:Validators={
    user:userValidator,
    bill:billValidator
}


export default validator