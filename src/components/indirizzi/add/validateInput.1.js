const validateVia = ({ valid, valueMissing, tooShort, tooLong, typeMismatch, patternMismatch }) => {
  // console.log(validity);
  let error = '';
  if (!valid) {
    error = 'ERRORE: ';
    if (valueMissing) {
      error += 'il campo via è vuoto';
    } else if (tooShort) {
      error += 'il campo via è troppo corto';
    } else if (tooLong) {
      error += 'il campo via è troppo lungo';
    } else if (typeMismatch) {
      error += 'il valore digitato non corrisponde a un valore di tipo via';
    } else if (patternMismatch) {
      error += 'il campo via non corrisponde al modello specificato';
    }
    // console.log(error);
  }
  return error;
};

const validateCivico = ({ valid, valueMissing, tooShort, tooLong, typeMismatch, patternMismatch }) => {
  // console.log(validity);
  let error = '';
  if (!valid) {
    error = 'ERRORE: ';
    if (valueMissing) {
      error += 'il campo civico è vuoto';
    } else if (tooShort) {
      error += 'il campo civico è troppo corto';
    } else if (tooLong) {
      error += 'il campo civico è troppo lungo';
    } else if (typeMismatch) {
      error += 'il valore digitato non corrisponde a un valore di tipo civico';
    } else if (patternMismatch) {
      error += 'il campo civico non corrisponde al modello specificato';
    }
    // console.log(error);
  }
  return error;
};

const validateCap = ({ valid, valueMissing, tooShort, tooLong, typeMismatch, patternMismatch }) => {
  // console.log(validity);
  let error = '';
  if (!valid) {
    error = 'ERRORE: ';
    if (valueMissing) {
      error += 'il campo cap è vuoto';
    } else if (tooShort) {
      error += 'il campo cap è troppo corto';
    } else if (tooLong) {
      error += 'il campo cap è troppo lungo';
    } else if (typeMismatch) {
      error += 'il valore digitato non corrisponde a un valore di tipo cap';
    } else if (patternMismatch) {
      error += 'il campo cap non corrisponde al modello specificato';
    }
    // console.log(error);
  }
  return error;
};

const validateComune = ({ valid, valueMissing, tooShort, tooLong, typeMismatch, patternMismatch }) => {
  // console.log(validity);
  let error = '';
  if (!valid) {
    error = 'ERRORE: ';
    if (valueMissing) {
      error += 'il campo comune è vuoto';
    } else if (tooShort) {
      error += 'il campo comune è troppo corto';
    } else if (tooLong) {
      error += 'il campo comune è troppo lungo';
    } else if (typeMismatch) {
      error += 'il valore digitato non corrisponde a un valore di tipo comune';
    } else if (patternMismatch) {
      error += 'il campo comune non corrisponde al modello specificato';
    }
    // console.log(error);
  }
  return error;
};
const validateProvincia = ({ valid, valueMissing, tooShort, tooLong, typeMismatch, patternMismatch }) => {
  // console.log(validity);
  let error = '';
  if (!valid) {
    error = 'ERRORE: ';
    if (valueMissing) {
      error += 'il campo provincia è vuoto';
    } else if (tooShort) {
      error += 'il campo provincia è troppo corto';
    } else if (tooLong) {
      error += 'il campo provincia è troppo lungo';
    } else if (typeMismatch) {
      error += 'il valore digitato non corrisponde a un valore di tipo provincia';
    } else if (patternMismatch) {
      error += 'il campo provincia non corrisponde al modello specificato';
    }
    // console.log(error);
  }
  return error;
};
const validateNazione = ({ valid, valueMissing, tooShort, tooLong, typeMismatch, patternMismatch }) => {
  // console.log(validity);
  let error = '';
  if (!valid) {
    error = 'ERRORE: ';
    if (valueMissing) {
      error += 'il campo nazione è vuoto';
    } else if (tooShort) {
      error += 'il campo nazione è troppo corto';
    } else if (tooLong) {
      error += 'il campo nazione è troppo lungo';
    } else if (typeMismatch) {
      error += 'il valore digitato non corrisponde a un valore di tipo nazione';
    } else if (patternMismatch) {
      error += 'il campo nazione non corrisponde al modello specificato';
    }
    // console.log(error);
  }
  return error;
};

const validateInput = validity => {
  let errors = {};

  for (var key in validity) {
    const error = validity[key]();
    if (error) {
      errors = { ...errors, [key]: error };
    }
  }

  console.log(errors);

  return errors;
};

export { validateInput, validateVia, validateCivico, validateCap, validateComune, validateProvincia, validateNazione };
