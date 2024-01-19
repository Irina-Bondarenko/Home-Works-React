import {memo, useCallback, useMemo, useState} from "react";
import { FormCountry} from "./FormCountry";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {CheckBoxDontCall} from "./CheckBoxDontCall";

export const FormApply = memo(() => {



    return (
        <form className="form-apply-wrapper">
            <h2>Please fill for ordering</h2>
            <div className="input-group d-block">
                <TextField className="d-block" id="first-name"  label="First Name" variant="outlined" />
                <TextField className="d-block" id="last-name" label="Last Name" variant="outlined" />
                <TextField type="number" className="d-block" id="phone-number" label="Phone Number" variant="outlined" />
                <FormCountry />
                <TextField className="d-block" id="address"  label="Address" variant="outlined" />
                <TextField className="d-block" id="address2" label="Address #2" variant="outlined" />
                <TextField type="email" className="d-block" id="email" label="E-mail" variant="outlined" />
                <FormControl>
                    <FormLabel id="delivery-type">Choose Delivery Type</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="delivery-by-courier"
                >
                    <FormControlLabel value="pickup" control={<Radio />} label="Pickup" />
                    <FormControlLabel value="delivery-by-courier" control={<Radio />} label="Delivery by courier" />
                </RadioGroup>
                </FormControl>
                <CheckBoxDontCall />
                <TextField className="d-block" id="comment"  label="Comments to order" variant="outlined" />

            </div>


        </form>
    )

})
