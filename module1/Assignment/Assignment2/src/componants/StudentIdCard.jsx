import React from 'react';
import Image from './Image';
import Personal from './Personal';
import Collage from './Collage';

const StudentIdCard = () => {
  return (
    <div className='container'>
        <div className='main'>
            <div className='personal'>
                <Image />
            </div>
            <div className='personal2'>
                <Personal />

            </div>
        </div>
        <div className='collage'>

            <Collage />
        </div>
    </div>
  )
}

export default StudentIdCard;