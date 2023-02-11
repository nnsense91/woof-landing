import Cookies from 'js-cookie';
const COOKIES_EXPIRES_DAYS = 0.00347222;

type TWoofsData = string[]

const saveWoofsToCookies = (woofsArr: TWoofsData) => {
    Cookies.set("woofs", JSON.stringify(woofsArr), { expires: COOKIES_EXPIRES_DAYS, secure: true, sameSite: "lax" })
}

const getWoofsFromCookies = (): TWoofsData | null => {
    const arrFromCooks = Cookies.get("woofs");

    if (!arrFromCooks) return null;

    return JSON.parse(arrFromCooks)
}

export { saveWoofsToCookies, getWoofsFromCookies }