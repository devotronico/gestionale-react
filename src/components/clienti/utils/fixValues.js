const fixValues = (name, value) => {
  switch (name) {
    case 'nome':
    case 'cognome':
      return value
        .replace(/\s\s+/g, ' ')
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
        .join(' ');
    case 'email':
      return value.replace(/\s/g, '');
    case 'telefono':
      return value;
    case 'password':
      return value;
    default:
      return value;
  }
};

export default fixValues;
