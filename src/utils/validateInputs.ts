export function validateInputs(val: string, key: string) {
    switch(key) {
        case 'email':
            return validateEmail(val);
        default:
            return val !== '' ? true : false;
    }
}

function validateEmail(val: string) {
    if (/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(val)) {
        return true
    }
    return false
}