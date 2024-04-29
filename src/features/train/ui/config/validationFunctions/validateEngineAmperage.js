const validateEngineAmperage = (value) => {
    let error;
    const regex = /^[1-9]\d*$/;
    if (!regex.test(value)) {
        error = 'Invalid number';
    }
    return error;
};
export default validateEngineAmperage;
