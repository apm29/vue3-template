import config from "@/config/storage.config";

let TOKEN_KEY = config.tokenKey;
let USER_INFO_KEY = config.userInfoKey;

/**
 * 私有方法,设置localStorage数据
 * @param key
 * @param token
 */
function setLocalStorage(key, token) {
  if (token) {
    localStorage.setItem(key, token);
  } else {
    localStorage.removeItem(key);
  }
}

/**
 * 私有方法,获取localStorage数据
 * @param key
 */
function getLocalStorage(key) {
  const token = localStorage.getItem(key);
  if (token && token !== "null" && token !== "undefined") {
    return token;
  } else {
    return undefined;
  }
}

/**
 * 私有方法,设置localStorage数据
 * @param key
 * @param token
 */
function setSessionStorage(key, token) {
  if (token) {
    sessionStorage.setItem(key, token);
  } else {
    sessionStorage.removeItem(key);
  }
}

/**
 * 私有方法,获取localStorage数据
 * @param key
 */
function getSessionStorage(key) {
  const token = sessionStorage.getItem(key);
  if (token && token !== "null" && token !== "undefined") {
    return token;
  } else {
    return undefined;
  }
}

/*
 * 暴露的公共方法,作为设置到浏览器本地的数据公共入口,方便统一修改
 */

export const setToken = token => {
  setLocalStorage(TOKEN_KEY, token);
};

export const getToken = () => {
  return getLocalStorage(TOKEN_KEY);
};

export const setUserInfo = user => {
  setLocalStorage(USER_INFO_KEY, JSON.stringify(user));
};

export const getUserInfo = () => {
  const userString = getLocalStorage(USER_INFO_KEY);
  if (userString) {
    try {
      return JSON.parse(userString);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  } else {
    return undefined;
  }
};

/**
 * 测试用
 * @param count
 */
export const setAuthCount = count => setSessionStorage("wx-auth-count", count);
export const getAuthCount = count => getSessionStorage("wx-auth-count", count);

//存储的动态路由
const ROUTES_KEY = "e-routes";

export function getRoutes() {
  const routesString = getLocalStorage(ROUTES_KEY);
  if (routesString) {
    try {
      return JSON.parse(routesString);
    } catch (e) {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function setRoutes(routes) {
  setLocalStorage(ROUTES_KEY, JSON.stringify(routes));
}

const THEME_KEY = "v-theme-dark";
export function getThemeDark() {
  try {
    return JSON.parse(getLocalStorage(THEME_KEY));
  } catch (e) {
    return false;
  }
}

export function setThemeDark(dark) {
  setLocalStorage(THEME_KEY, JSON.stringify(dark));
}
