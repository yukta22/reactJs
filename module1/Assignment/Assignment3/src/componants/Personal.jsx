import React from 'react'

const Personal = ({p:{Id,firstName,lastName,DOB}}) => {
    return (
    <article className='person'>
        <div>
        <p>ID: <span>{Id}</span></p>
        <p>First Name: <span>{firstName}</span></p>
        <p>Last Name: <span>{lastName}</span></p>
        <p>DOB: <span>{DOB}</span></p>
        </div>
    </article>
    )
}

export default Personal;