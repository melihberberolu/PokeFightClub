export const BACK = 'NAV/NAVIGATION_BACK';
export function createNavigationBack(payload) {
  return {
    type: BACK,
    payload
  };
}

export const INIT = 'NAV/NAVIGATION_INIT';
export function createNavigationInit(payload) {
  return {
    type: INIT,
    payload
  };
}

export const NAVIGATE = 'NAV/NAVIGATION_NAVIGATE';
export function createNavigationNavigate(payload) {
  return {
    type: NAVIGATE,
    payload
  };
}

export const RESET = 'NAV/NAVIGATION_RESET';
export function createNavigationReset(payload) {
  return {
    type: RESET,
    payload
  };
}

export const SET_PARAMS = 'NAVIGATION_SET_PARAMS';
export function createNavigationSetParams(payload) {
  return {
    type: SET_PARAMS,
    payload
  };
}

export const URI = 'NAV/NAVIGATION_URI';
export function createNavigationUri(payload) {
  return {
    type: URI,
    payload
  };
}

export const COND = 'NAV/NAVIGATION_COND';
export function createNavigationCond(payload) {
  return {
    type: COND,
    payload
  };
}
