import jest from 'jest';
jest.mock('Animated', () => {
  return {
    createTimer: jest.fn(),
    timing: jest.fn(() => {
      return {
        start: jest.fn()
      };
    }),
    Value: jest.fn(() => {
      return {
        interpolate: jest.fn()
      };
    })
  };
});
