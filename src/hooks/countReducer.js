function countReducer(initialState = 0, action) {
  if (action === 'decreament') {
    return initialState - 1;
  } else if (action === 'setValue') {
    return initialState * 9;
  } else if (action === 'increament') {
    return initialState + 1;
  } else if (action === 'reset') {
    return (initialState = 0);
  }
}

export default countReducer;
