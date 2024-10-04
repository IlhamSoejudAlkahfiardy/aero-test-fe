import React, { useState } from 'react'

const Text = () => {
    const [data, setData] = useState(null)
    return (
        <div className='w-full flex justify-center'>
            <p className='text-7xl text-red-400'>AERO</p>
        </div>
    )
}

export default Text