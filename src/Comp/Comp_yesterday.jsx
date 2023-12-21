import React, {useState} from 'react';
import { Box, Typography, Radio, RadioGroup, FormControlLabel, Button} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import GetTemp from './Comp_GetTemp';

const YesterDayUI = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
        console.log(selectedOption);
      };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="200px"
  >
    <Box
      width="750px"
      height="250px"
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
         어제는... 00도!
      </Typography>

      <RadioGroup row
          value={selectedOption}
          onChange={handleChange}>

          <FormControlLabel color="#2c6fb5" value="cold" control={<Radio />} label="추웠다" style={{ color: "#2c6fb5" }} />
          <FormControlLabel color="#2c6fb5" value="comfortable" control={<Radio />} label="괜찮았다" style={{ color: "#2c6fb5" }}/>
          <FormControlLabel color="#2c6fb5" value="hot" control={<Radio />} label="더웠다" style={{ color: "#2c6fb5" }}/>
        </RadioGroup>

        <Button
          variant="contained"
          color="primary"
          startIcon={<CheckIcon />}
          style={{ marginTop: '16px' }}
        >
          확인
        </Button>

    </Box>
  </Box>
  );
};

export default YesterDayUI;
