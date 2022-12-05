import { t } from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Error = () => {
  const {t, i18n} = useTranslation()
  return (
    <div>
        <h1>404</h1>
        <p>{t("not_found")}</p>
    </div>
    
  )
}

export default Error