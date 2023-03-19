import { useState } from "react";

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

export default function useCookie(key, initialvalue) {
    const [cookie, setCookie] = useState(() => {
        try {
            const value = getCookieValue(key);
            return value;
        } catch (error) {
            return initialvalue;
        }
    });

    const updateCookie = (newValue) => {
        
        setCookie(newValue);
        document.cookie = `${key}=${newValue};`;
    };

    const removeCookie = () => {
        if (getCookieValue(key)) {
            setCookie("");
            var now = new Date();
            now.setMonth(now.getMonth() - 1);
            document.cookie = `${key}=;expires= ${now.toUTCString()}`;
            window.location.reload();
        }
    };

    return [cookie, updateCookie, removeCookie];
}
