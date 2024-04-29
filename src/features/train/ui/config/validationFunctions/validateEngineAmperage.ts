const validateEngineAmperage = (value: string): string | undefined => {
  let error;
  const regex = /^[1-9]\d*$/;
  if (!regex.test(value)) {
    error = 'required';
  }
  return error
}

export default validateEngineAmperage;
