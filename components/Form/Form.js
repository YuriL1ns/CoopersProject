import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import { IMaskInput } from 'react-imask'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props
    return (
        <IMaskInput
            {...other}
            mask='[(00) 0 0000-0000]'
            definitions={{
                '#': /[1-9]/
            }}
            inputRef={ref}
            onAccept={(value) =>
                onChange({ target: { name: props.name, value } })
            }
            overwrite
        />
    )
})

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default function Form() {
    const [values, setValues] = React.useState({
        textmask: 'type your telephone number',
        numberformat: '1320'
    })

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Box
            className='justify-center'
            component='form'
            sx={{
                '& .MuiTextField-root': { m: 1, width: '500' },
                maxWidth: '100%'
            }}
            noValidate
            autoComplete='off'
        >
            <div className='justify-center'>
                <div>
                    <TextField
                        required
                        id='fullWidth'
                        label='Yout Name'
                        placeholder='Type your name here'
                        fullWidth
                        sx={{ m: 1 }}
                        border='#46BD62'
                    />
                </div>
                <div className='container flex'>
                    <TextField
                        width='20ch'
                        required
                        id='outlined-required'
                        label='E-mail'
                        type='email'
                        placeholder='example@example.com'
                    />
                    <FormControl variant='standard'>
                        <InputLabel
                            required
                            htmlFor='formatted-text-mask-input'
                        >
                            Telephone
                        </InputLabel>
                        <Input
                            value={values.textmask}
                            onChange={handleChange}
                            name='textmask'
                            id='formatted-text-mask-input'
                            inputComponent={TextMaskCustom}
                        />
                    </FormControl>
                </div>
                <div className='pb-4'>
                    <TextField
                        required
                        fullWidth
                        id='outlined-multiline-static'
                        label='Message'
                        multiline
                        rows={4}
                        placeholder='type what you want to say to us'
                    />
                </div>
                <div className='pl-2'>
                    <button className='w-full bg-[#46BD62] rounded-sm justify-center text-white py-3 font-bold text-sm'>
                        SEND NOW
                    </button>
                </div>
            </div>
        </Box>
    )
}
