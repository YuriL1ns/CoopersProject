import React, { useCallback } from 'react'
import { phone } from 'components/Mask'

const Input = ({ mask, ...props }) => {
    const handleKeyUp = useCallback(
        (e) => {
            if (mask === 'phone') {
                return phone(e)
            }
        },
        [mask]
    )

    return <input {...props} onKeyUp={handleKeyUp} />
}

export default Input
