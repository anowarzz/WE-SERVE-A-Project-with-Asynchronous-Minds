
import { IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Typography,useMediaQuery,useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import { useContext, useState } from 'react';
import DrawerCom from './DrawerCom';
import { AuthContext } from '@/contexts/AuthProvider';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [value,setValue]=useState()
  const theme=useTheme()
  const isMatch=useMediaQuery(theme.breakpoints.down('md'))
  
  const [anchorEl, setAnchorEl] =useState(null);
  const [anchorEl2, setAnchorEl2] =useState(null);
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };



// Using router Hook
const router = useRouter();


// Getting User and data from context api
const {user, logOut} = useContext(AuthContext);



// Logging out a user
const logOutHandler = () => {
logOut()
.then(() => {
  router.push('/login')
})
.catch((err) => console.error(err))
}


  
    return (
        <div>
            <AppBar sx={{background:'white'}}>
            <Toolbar>
            
                {
                    isMatch ?(
                        <>
                             <Typography color='primary' sx={{marginRight:"auto"}}>We Serve</Typography>
                             <DrawerCom/>
                            
                             
                            
                        </>
                    )
                    :(
                        <>
                        <Typography sx={{fontSize:'26px',fontFamily:'raleway', fontWeight:'700',color:'black'}}>We Serve</Typography> 
                                 <Tabs
                 sx={{marginLeft:"auto",}} 
                 value={value} 
                 indicatorColor="secondary"
                textColor='primary'
                 onChange={(e,value)=>setValue(value)}
                >
                   
                <Tab sx={{fontFamily:'raleway'}} label="HOME" />
                
                <Tab sx={{fontFamily:'raleway'}} label="SERVICES"
                     id="services"
                     aria-controls={open ? 'servicesItem' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? 'true' : undefined}
                     onClick={handleClick}
                />
                <Tab sx={{fontFamily:'raleway'}} label="ABOUT US"/>
                <Tab sx={{fontFamily:'raleway'}} label="PRODUCTS"
                 id="products"
                 aria-controls={open2 ? 'productsItem' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open2 ? 'true' : undefined}
                 onClick={handleClick2}
                
                />
                <Tab sx={{fontFamily:'raleway'}} label="CONTACT US"/>
                   
                </Tabs>
                <IconButton    size="large" aria-label="search" color="inherit">
            <SearchIcon />
            </IconButton>
                        </>
                    )
                }
           
          
            </Toolbar>
            
            </AppBar>
            <Menu
        id="servicesItem"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'services',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logOutHandler}>Logout</MenuItem>
      </Menu>  
            <Menu
        id="productsItem"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'products',
        }}
      >
        <MenuItem onClick={handleClose}>products</MenuItem>
        <MenuItem onClick={handleClose}>new products</MenuItem>
        <MenuItem onClick={handleClose}>old products</MenuItem>
      </Menu> 
        </div>
    );
};

export default Navbar;
