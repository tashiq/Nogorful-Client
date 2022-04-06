import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SingleInfo from '../SingleInfo/SingleInfo';
const Info = () => {
    const [info, setInfo] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:4000/info')
    //         .then(res => res.json())
    //         .then(data => setInfo(data));

    // }, [])

    return (
        <Box id="info"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                m: 3,
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 220,
                    height: 150,
                }
            }}
        >
            {/* {
                Object.keys(info)?.map(item => <SingleInfo type={item} amount={info[item]} key={info[item]._id}></SingleInfo>)
                //  (singleInfo => )
            } */}
        </Box>
    );
};

export default Info;