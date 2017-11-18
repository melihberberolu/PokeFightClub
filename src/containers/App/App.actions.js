export const INIT_START = 'APP/INIT_START';
export const initStart = () => {
  return {
    type: INIT_START,
    initInProgress: true
  };
};

export const INIT_FINISH = 'APP/INIT_FINISH';
export const initFinish = () => {
  return {
    type: INIT_FINISH,
    initInProgress: false
  };
};
