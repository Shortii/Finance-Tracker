const formValidation = (value) => {
    const isValueValid = !isNaN(Number(value));
    return isValueValid;
}

export default formValidation;