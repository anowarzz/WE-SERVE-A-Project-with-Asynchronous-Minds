import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import { useContext, useState } from "react";
import DrawerCom from "./DrawerCom";
import { AuthContext } from "@/contexts/AuthProvider";
import { useRouter } from "next/router";
import Link from "next/link";
import PersonIcon from '@mui/icons-material/Person';


const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
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
  const { user, logOut } = useContext(AuthContext);

  // Logging out a user
  const logOutHandler = () => {
    logOut()
      .then(() => {
        router.push("/login");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <AppBar sx={{ background: "white" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography color="primary" sx={{ marginRight: "auto", cursor:'pointer' }}>
                WE SERVE
              </Typography>
              <DrawerCom />
            </>
          ) : (
            <>
              <Typography
                sx={{
                  fontSize: "26px",
                  fontFamily: "raleway",
                  fontWeight: "700",
                  color: " #3899E3",
                  cursor:'pointer'
                }}
              >
                WE SERVE
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                value={value}
                indicatorColor="secondary"
                textColor="primary"
                onChange={(e, value) => setValue(value)}
              >
                  <Link href="/" style={{textDecoration:'none'}}>
                <Tab sx={{ fontFamily: "raleway" }} label="HOME">
                  
                  </Tab>
                  </Link>

                <Tab
                  sx={{ fontFamily: "raleway" }}
                  label="SERVICES"
                  id="services"
                  aria-controls={open ? "servicesItem" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
                <Tab sx={{ fontFamily: "raleway" }} label="ABOUT US" />
                {/* <Tab sx={{fontFamily:'raleway'}} label="PRODUCTS"
                 id="products"
                 aria-controls={open2 ? 'productsItem' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open2 ? 'true' : undefined}
                 onClick={handleClick2}
                
                /> */}
                <Tab sx={{ fontFamily: "raleway" }} label="CONTACT US" />
                {user?.uid ? 
                
               <>
               <Button>
               Dashboard
               </Button>
                    <Button onClick={logOutHandler} size="small" style={{color:'red'}}>Log Out</Button>
            <Tooltip title={user?.displayName}>
            <IconButton size="large" aria-label="search" color="inherit">
                  <PersonIcon sx={{color:'black'}}/>
              </IconButton>
            </Tooltip>
                   
                    </>
                    
                    :
                   <>      
                                 <Button>
                      <Link href="/login" style={{ textDecoration: "none" }}>
                        Login
                      </Link>
                  </Button>
                
                  <Button>
                    <Link href="/register" style={{ textDecoration: "none" }}>
                      Register
                    </Link>
                    </Button>
                  </>
                }
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        id="servicesItem"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "services",
        }}
      >
        <MenuItem onClick={handleClose}>Survey</MenuItem>
        <MenuItem onClick={handleClose}>HR Management</MenuItem>
        <MenuItem onClick={handleClose}>Work Desk</MenuItem>
        {/* <MenuItem onClick={logOutHandler}>Logout</MenuItem> */}
      </Menu>
      <Menu
        id="productsItem"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          "aria-labelledby": "products",
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
