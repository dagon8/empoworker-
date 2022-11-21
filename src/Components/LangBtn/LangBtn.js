import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import i18next, { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export default function LangBtn() {
  const [lang, setLang] = React.useState('');
  const {t, i18n} = useTranslation()

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang",event.target.value)
    i18next.changeLanguage(event.target.value)
  };


  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Language"
          onChange={handleChange}
          size="small"
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"sp"}>Spanish</MenuItem>
          <MenuItem value={"pt"}>Portuguese</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
