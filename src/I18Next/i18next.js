import i18next from "i18next"
import {initReactI18next} from "react-i18next"
import en from "./en.json"
import sp from "./sp.json"

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        sp: {
            translation: sp,
        },
    },
    lng: "sp",
})

export default i18next;