const fixValues = (name, value) => {
  switch (name) {
    case 'civico':
    case 'cap':
      return value;
    case 'via':
    case 'comune':
      return value
        .replace(/\s\s+/g, ' ')
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
        .join(' ');
    case 'provincia':
    case 'nazione':
      return value.toUpperCase();
    default:
      break;
  }
};

export default fixValues;
