import i18next from "i18next"
import {initReactI18next} from "react-i18next"
import en from "./en.json"
import sp from "./sp.json"
import pt from "./pt.json"

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        sp: {
            translation: sp,
        },
        pt: {
            translation: pt,
        },
    },
    lng: localStorage.getItem("lang") || "en",
})

export default i18next;