import React, { useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Input from 'components/InputMask'

export default function Form() {
    const NameInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: theme.spacing(3)
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor:
                theme.palette.mode === 'light' ? '#fcfcfb' : '#46BD62',
            border: '1px solid #ced4da',
            fontSize: 14,
            width: '',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow'
            ]),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(','),
            '&:focus': {
                boxShadow: `${alpha(
                    theme.palette.primary.main,
                    0.25
                )} 0 0 0 0.2rem`,
                borderColor: theme.palette.primary.main
            }
        }
    }))

    const [phoneNumber, setPhoneNumber] = useState('')

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
            <div className='justify-center text-start'>
                <div className='form-control justify-center text-center'>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='name-input'>
                            Your name
                        </InputLabel>
                        <NameInput
                            id='fullWidth'
                            className='w-[13rem] md:w-[25rem]'
                            placeholder='type yout name here...'
                        />
                    </FormControl>
                </div>
                <div className='container flex pt-2'>
                    <FormControl variant='standard'>
                        <InputLabel shrink htmlFor='name-input'>
                            E-mail*
                        </InputLabel>
                        <NameInput
                            id='fullWidth'
                            className='w-11/12'
                            placeholder='example@example.com'
                        />
                    </FormControl>
                    <FormControl variant='standard' className='items-center'>
                        <InputLabel
                            shrink
                            htmlFor='name-input'
                            className='w-full pb-4'
                        >
                            Telephone*
                        </InputLabel>
                        <Input
                            id='PhoneNumber'
                            htmlFor='name-input'
                            mask='phone'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className='w-full mt-6 border-2 rounded-md border-opacity-5 md:px-6 py-2 text-start text-md active:border-[#4AC959]'
                            placeholder='( ) _____-_____'
                        />
                    </FormControl>
                </div>
                <div className='w-full pt-2 pb-2 text-center'>
                    <FormControl variant='standard'>
                        <InputLabel
                            shrink
                            htmlFor='name-input'
                            className='w-full text-start'
                        >
                            Message*
                        </InputLabel>
                        <NameInput
                            id='fullWidth'
                            className='w-[13rem] md:w-[25rem]'
                            multiline
                            rows={4}
                            placeholder='Type what you want to say to us'
                        />
                    </FormControl>
                </div>
                <div className='px-2 pb-4'>
                    <button className='w-full bg-[#46BD62] rounded-sm justify-center text-white py-3 font-bold text-sm'>
                        SEND NOW
                    </button>
                </div>
            </div>
        </Box>
    )
}
