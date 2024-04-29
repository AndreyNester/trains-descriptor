const validateEngineAmperage = (value: string): string | undefined => {
  let error;
  const regex = /^\d+$/;
  if (!regex.test(value)) {
    error = 'Invalid number';
  }
  return error;
}

export default validateEngineAmperage;
