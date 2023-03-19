import constant from "../constant";
import useCookie from "../hooks/useCookie";

const getCookieValue = (key) => {
    const allcookies = document.cookie;
    let storedValue = "";
    if (allcookies) {
        const cookieArray = allcookies.split(";");
        const filteredCookie = cookieArray.filter((element) => {
            const singleCookie = element.split("=");
            if (singleCookie[0].trim() === key) {
                storedValue = singleCookie[1];
            }
            return storedValue;
        });
    }
    return storedValue;
};

export const getAuthHeader = () => {
    const token = getCookieValue(constant.keys.token)
    const header = {
        headers: { Authorization: "Bearer " + token }
    };
    return header;
}