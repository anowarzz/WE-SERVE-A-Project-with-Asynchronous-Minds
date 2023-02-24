import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Tab } from "@mui/material";
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const DrawerCom = () => {
    const [openDrawer,setOpenDrawer]=useState(false)
    const PAGES=["HOME","SERVICES","ABOUT US","PRODUCTS","CONTACT US"]
    return (
        <>
            <Drawer open={openDrawer}
            onClose={()=>setOpenDrawer(false)}
            >
                <List>
                {
                        PAGES.map((page,index)=>(
                        <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                            <ListItemIcon>
                              <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                        ))
                    }
                    
                </List>
            </Drawer>
            <IconButton sx={{ color:'white'}}  onClick={()=>setOpenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </>
    );
};

export default DrawerCom;