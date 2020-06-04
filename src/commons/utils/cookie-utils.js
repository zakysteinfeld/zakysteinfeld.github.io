import Cookies from 'universal-cookie';

export const getCookies = (item) => {
    const cookies = new Cookies();
    return cookies.get(item);
}

export const setCookies = (name, value) => {
    const cookie = new Cookies();
    cookie.set(name, value, { path: '/' })
}

export const deleteCookies = (name) => {
    const cookie = new Cookies();
    cookie.remove(name);
}