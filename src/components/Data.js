import React from 'react'

export default function Data() {
    return (
        <div className="container mt-4">
            <img src={process.env.PUBLIC_URL + '/gloved_hands.png'} width="100%" style={{ borderRadius: '10px' }} />
        </div>
    )
}
