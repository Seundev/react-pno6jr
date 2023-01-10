const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'multiply':
      return { count: state.count * 3 };
    case 'setValue':
      return { count: action.value };
    default:
      return state;
  }
};

export default countReducer;
