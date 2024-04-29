const validateSpeed = (value) => {
    let error;
    const regex = /^\d+$/;
    if (!regex.test(value)) {
        error = 'Invalid number';
    }
    return error;
};
export default validateSpeed;
