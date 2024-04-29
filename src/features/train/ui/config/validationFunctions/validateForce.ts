const validateForce = (value: string): string | undefined => {
  let error;
  if (!value) {
    error = 'Required';
    console.log(value, 'err');
    
  }
  return error;
}

export default validateForce;