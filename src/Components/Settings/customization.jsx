import styles from './Setting.module.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from "react";

export const Customization = () => {
    const [theme, setTheme] = useState("Default");
   console.log(theme);
    return (
        <div>
            <h2 className={styles.profileBoxHeader}>Themes</h2>
            <FormControl component="fieldset">
                <RadioGroup
                    aria-label="gender"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel onChange={(e) => { setTheme(e.target.value) }} value="Default" control={<Radio />} label="Default" />
                    <FormControlLabel onChange={(e) => { setTheme(e.target.value) }} value="Minimal Light Theme" control={<Radio />} label="Minimal Light Theme" />
                    <FormControlLabel onChange={(e) => { setTheme(e.target.value) }} value="Night Theme" control={<Radio />} label="Night Theme" />
                    <FormControlLabel onChange={(e) => { setTheme(e.target.value) }} value="Pink Theme" control={<Radio />} label="Pink Theme" />
                    <FormControlLabel onChange={(e) => { setTheme(e.target.value) }} value="Ten X Hacker Theme" control={<Radio />} label="Ten X Hacker Theme" />
                </RadioGroup>
            </FormControl>
            <div className={styles.formFields}>
                <input className={styles.submitBtn} value={"Save"} type="text" readonly="true" />
            </div>
        </div>
    );

}