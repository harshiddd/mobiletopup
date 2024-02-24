import CustomNavBar from "./Navbar"
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popularp from "./popularp";
import Annualp from "./annualp";





// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
// import Popularp from "./popularp";

// const AntTabs = styled(Tabs)({
//   borderBottom: '1px solid #e8e8e8',
//   '& .MuiTabs-indicator': {
//     backgroundColor: '#1890ff',
//   },
// });

// const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
//   textTransform: 'none',
//   minWidth: 0,
//   [theme.breakpoints.up('sm')]: {
//     minWidth: 0,
//   },
//   fontWeight: theme.typography.fontWeightRegular,
//   marginRight: theme.spacing(1),
//   color: 'rgba(0, 0, 0, 0.85)',
//   fontFamily: [
//     '-apple-system',
//     'BlinkMacSystemFont',
//     '"Segoe UI"',
//     'Roboto',
//     '"Helvetica Neue"',
//     'Arial',
//     'sans-serif',
//     '"Apple Color Emoji"',
//     '"Segoe UI Emoji"',
//     '"Segoe UI Symbol"',
//   ].join(','),
//   '&:hover': {
//     color: '#40a9ff',
//     opacity: 1,
//   },
//   '&.Mui-selected': {
//     color: '#1890ff',
//     fontWeight: theme.typography.fontWeightMedium,
//   },
//   '&.Mui-focusVisible': {
//     backgroundColor: '#d1eaff',
//   },
// }));

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   '& .MuiTabs-indicator': {
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//   },
//   '& .MuiTabs-indicatorSpan': {
//     maxWidth: 40,
//     width: '100%',
//     backgroundColor: '#635ee7',
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: 'none',
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: 'rgba(255, 255, 255, 0.7)',
//     '&.Mui-selected': {
//       color: '#fff',
//     },
//     '&.Mui-focusVisible': {
//       backgroundColor: 'rgba(100, 95, 228, 0.32)',
//     },
//   }),
// );

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Jio() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <>
    <div><CustomNavBar/></div>

    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Popular plans" {...a11yProps(0)} />
        <Tab label="Annual plans" {...a11yProps(1)} />
        <Tab label="Data Packs" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      
      <TabPanel value={value} index={0}>
        
      <div>
        <h1 style={{fontSize:"50px",textAlign:"center"}}>Popular plans</h1>
      
       <h2>Recommended(3)</h2>
       <br></br>

       <div><Popularp/></div>

       </div> 
       
       
        
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div>
        <h1 style={{fontSize:"50px",textAlign:"center"}}>Annual plans</h1>
      
       <h2>Recommended(3)</h2>
       <br></br>

       <div><Annualp/></div>

       </div> 
      </TabPanel>
      <TabPanel value={value} index={2}>
        Data Packs
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>

    {/* <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
       
        <Box sx={{ p: 3 }} />
      </Box>
      <Box sx={{ bgcolor: '#2e1534',textAlign:"center",justifyContent:'center',alignItems:'center',display:'flex' }}>
        <StyledTabs 
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"

          
        >
          <StyledTab label="Popular" />
          <StyledTab label="Annual" />
          <StyledTab label="Entertainment" />
        </StyledTabs>
        
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
    <div><Popularp/></div> */}
   
    </>
  );
}
