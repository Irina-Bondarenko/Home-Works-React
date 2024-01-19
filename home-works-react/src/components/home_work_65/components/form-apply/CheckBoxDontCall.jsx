import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const CheckBoxDontCall = () => {
    return (
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Do not call me back" />
        </FormGroup>
    );
}
