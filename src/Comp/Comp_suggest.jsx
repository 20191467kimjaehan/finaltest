import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

import GetTemp from './Comp_GetTemp'



const ClothSuggestUI = () => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="60hw"
    >
      <Box
        width="750px"
        height="750px"
        display="flex"
        flexDirection="column"
        border="11px solid #2c6fb5"
        justifyContent="center"
        alignItems="center"
        marginTop="-20px"
        borderRadius="21px"
        marginBottom="20px"
      >
        <Typography variant="body2" fontWeight="bold" marginBottom="8px" fontSize="2rem" color="#2c6fb5">
            오늘의 동서대는
        </Typography>

        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="5rem" color="#2c6fb5"> 
          {GetTemp()}°C
        </Typography>

      </Box>
    </Box>
  );
};

export default ClothSuggestUI;
