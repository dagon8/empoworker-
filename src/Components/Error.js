import { t } from 'i18next'
import React from 'react'

const Error = () => {
  return (
    <div>
        <h1>404</h1>
        <p>{t("not_found")}</p>
    </div>
    
  )
}

export default Error