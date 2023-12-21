import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

import GetTemp from './Comp_GetTemp'

const TempTemp = 6;


const ClothSuggestUI = () => {

  if(GetTemp() <= 4) {
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
            오늘은
        </Typography>
        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="2.5rem" color="#2c6fb5"> 
          패딩이 어울리는 날씨입니다. (4도 이하)
        </Typography>
      </Box>
    </Box>
  );
} else if (8 >= GetTemp() > 4) {
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
            오늘은
        </Typography>
        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="2.5rem" color="#2c6fb5"> 
          기모 옷이 어울리는 날씨입니다. (8~5도)
        </Typography>
      </Box>
    </Box>
  );
} else if (11 >= GetTemp() > 8) {
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
            오늘은
        </Typography>
        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="2.5rem" color="#2c6fb5"> 
          점퍼가 어울리는 날씨입니다. (11~9도)
        </Typography>
      </Box>
    </Box>
  );
} else if (16 >= GetTemp() > 11) {
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
            오늘은
        </Typography>
        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="2.5rem" color="#2c6fb5"> 
          가디건이 어울리는 날씨입니다. (16~12도)
        </Typography>
      </Box>
    </Box>
  );
} else if (19 >= GetTemp() > 16) {
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
            오늘은
        </Typography>
        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="2.5rem" color="#2c6fb5"> 
          맨투맨이 어울리는 날씨입니다. (19~17도)
        </Typography>
      </Box>
    </Box>
  );
} else if (22 >= GetTemp() > 19) {
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
            오늘은
        </Typography>
        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="2.5rem" color="#2c6fb5"> 
          긴팔 티가 어울리는 날씨입니다. (22~20도)
        </Typography>
      </Box>
    </Box>
  );
} else if (27 >= GetTemp() > 22) {
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
            오늘은
        </Typography>
        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="2.5rem" color="#2c6fb5"> 
          반팔이 어울리는 날씨입니다. (27~23도)
        </Typography>
      </Box>
    </Box>
  );
} else if (GetTemp() > 27) {
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
            오늘은
        </Typography>
        <Typography variant="h4" fontWeight="bold" marginBottom="16px" fontSize="2.5rem" color="#2c6fb5"> 
         더욱 반팔이 어울리는 날씨입니다. (28도 이상)
        </Typography>
      </Box>
    </Box>
  );
}

};

export default ClothSuggestUI;
