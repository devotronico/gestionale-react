const checkValidity = objCurrent => {
  const { validity, name } = objCurrent.current;
  const { valid, valueMissing, tooShort, tooLong, typeMismatch, patternMismatch } = validity;

  let error = '';
  if (!valid) {
    error = 'ERRORE: ';
    if (valueMissing) {
      error += 'il campo ' + name + ' è vuoto';
    } else if (tooShort) {
      error += 'il campo ' + name + ' è troppo corto';
    } else if (tooLong) {
      error += 'il campo ' + name + ' è troppo lungo';
    } else if (typeMismatch) {
      error += 'il valore digitato non corrisponde a un valore di tipo ' + name;
    } else if (patternMismatch) {
      error += 'il campo ' + name + ' non corrisponde al modello specificato';
    }
  }
  return error;
};

const validateInputs = validity => {
  let errors = {};

  for (var key in validity) {
    const error = checkValidity(validity[key]);
    if (error) {
      errors = { ...errors, [key]: error };
    }
  }
  return errors;
};

export default validateInputs;
