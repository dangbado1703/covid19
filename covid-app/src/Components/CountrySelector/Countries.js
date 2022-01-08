import React from 'react'
import './Countries.css'
import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'

function Countries({ value, handleOnChange, countries }) {

    return (
        <FormControl>
            <InputLabel htmlFor='country-selector' shrink>Quốc gia</InputLabel>
            <NativeSelect
                style={{
                    fontSize: 14
                }}
                value={value}
                onChange={handleOnChange}
                inputProps={{
                    name: 'country',
                    id: 'country-selector'
                }}
            >
                {countries.map((country) => (
                    <option
                        key={country.ISO2}
                        value={country.ISO2.toLowerCase()}>
                        {country.Country}
                    </option>
                ))}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}

export default Countries
