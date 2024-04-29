const validateForce = (value: string): string | undefined => {
  let error;
  const regex = /^[0-9]*[.,]?[0-9]+$/;
  if (!regex.test(value)) {
    error = 'Invalid number';
  }
  return error;
}

export default validateForce;
