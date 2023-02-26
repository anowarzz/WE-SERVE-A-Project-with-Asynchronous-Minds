import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";


const NewsLetter = () => {
    return (
        <Box my={5}>
            <Typography variant="h4" align="center" gutterBottom>
             THE VIP ROOM
            </Typography>
            <Typography sx={{marginTop:'2rem'}} align="center" variant="h6" component='p'>
                Join Our newsletter community for exclusive emails and updates
            </Typography>
            <Stack mt={2} direction='row' spacing={2}  justifyContent="center" alignItems="center">
            <TextField type='email' placeholder="Email Address" size="small"/>
            <Button variant="outlined" 
            sx={{
                "&:hover": {
                    variant:'contained'
                },
              }}>
            Subscribe
            </Button>
            </Stack>
            <Typography variant="subtitle2" align="center" mt={2}> 
                We respect your privacy. Unsubscribe anytime.
            </Typography>
      
        </Box>
    );
};

export default NewsLetter;