import React, { useState } from 'react';
//react

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
//mui

import ClothSuggestUI from './Comp_suggest';
import YesterDayUI from './Comp_yesterday';
import CalendarUI from './Comp_calendar';
//comp


const TabPanel = ({ value, index, children }) => {
  return (
    <Fade in={value === index} timeout={1000}>
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    </Fade>
  );
};

const LayOutUI = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="온도" />
        <Tab label="옷차림" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ClothSuggestUI/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CalendarUI/>
      </TabPanel>

    </Box>
  );
};

export default LayOutUI;
