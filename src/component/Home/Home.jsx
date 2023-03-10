import React from 'react';
import {
  Box,
  Button,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
  styled,
} from '@mui/material';
import pexels from './pexels.mp4';
import { TabsIcons } from '../Data/Data';
import Tabicon from '../Tabicons/Tabicon';
import ManageSearch from '@mui/icons-material/ManageSearch';

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginLeft: 0,
  },
}));

const StyledBoxed = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
const StyledBoxeds = styled(Box)(({ theme }) => ({
  // [theme.breakpoints.('lg')]: {
  //   display: 'none',
  // },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  border: '1px solid white',
  color: 'white',
  '&:hover': {
    borderColor: 'white',
    boxShadow: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    size: 'small',
  },
}));
const StyledBoxs = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    overflowX: 'hidden',
  },
}));
const Home = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box position="relative" class="video-background overFlow: 'hidden ">
      <StyledBoxed>
        <video
          class="video"
          src={pexels}
          muted
          loop
          autoPlay
          type="video/mp4"
          style={{
            top: 0,
            left: 0,
            minWidth: '100%',
            minHeight: '50vh',
            objectFit: 'cover',
          }}
        />
      </StyledBoxed>
      <StyledBoxeds>
        <video
          class="video"
          src="https://player.vimeo.com/progressive_redirect/playback/792828811/rendition/540p/file.mp4?loc=external&oauth2_token_id=57447761&signature=221a6dd4babf593c86f70dfcaebc89ab67d303806d149fb70ef08f95c3672066"
          muted
          loop
          autoPlay
          type="video/mp4"
          style={{
            top: 0,
            left: 0,
            minWidth: '100%',
            minHeight: '110vh',
            objectFit: 'cover',
          }}
        />
      </StyledBoxeds>
      <StyledBox
        sx={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          top: { xs: '14%', sm: '20%', md: '20%', lg: '20%', xl: '20%' },
          // marginLeft: 5,
        }}
      >
        <Tabicon />
        <StyledBoxs
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 4,
          }}
        >
          <Stack direction="column" spacing={{ xs: 6, sm: 9, md: 10, lg: 10 }}>
            <Box display="flex" justifyContent={'center'} flexWrap="wrap">
              <Typography
                variant="h3"
                fontSize={40}
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  // marginLeft: { xs: 5 },
                }}
              >
                Explore the world's leading design portfolio's
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography
                variant="body1"
                fontSize={20}
                sx={{ fontWeight: 'bold', color: 'white' }}
              >
                Millions of designers and agencies around the world showcase
                their portfolio work <br /> on Dribble - the home to the world's
                best design and creative professionals
              </Typography>
            </Box>
            <Box>
              <Paper
                component={'form'}
                sx={{
                  // p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  border: '1px solid #ddd',
                  borderRadius: 20,
                }}
              >
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Where to?" />
                <IconButton type="submit" sx={{ p: '10px' }}>
                  <ManageSearch />
                </IconButton>
              </Paper>
            </Box>
            <Box
              display="flex"
              flexDirection={'row'}
              textAlign="baseline"
              flexWrap={'wrap'}
              gap={1}
              overFlow="hidden"
            >
              <Button variant="text" sx={{ color: 'white' }}>
                Trending Searches:
              </Button>
              <StyledButton
                variant="outlined"
                sx={{ borderRadius: 4 }}
                size="small"
              >
                landing page
              </StyledButton>
              <StyledButton
                variant="outlined"
                sx={{ borderRadius: 4 }}
                size="small"
              >
                ios
              </StyledButton>
              <StyledButton
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  display: {
                    xs: 'none',
                    sm: 'flex',
                    md: 'flex',
                    lg: 'flex',
                    xl: 'flex',
                  },
                }}
                size="small"
              >
                food
              </StyledButton>
              <StyledButton
                variant="outlined"
                sx={{ borderRadius: 4 }}
                size="small"
              >
                appdesign
              </StyledButton>
              <StyledButton
                variant="outlined"
                sx={{ borderRadius: 4 }}
                size="small"
              >
                uxdesign
              </StyledButton>
            </Box>
          </Stack>
        </StyledBoxs>
      </StyledBox>
    </Box>
  );
};

export default Home;

// import { Box, Paper, Typography } from '@mui/material';
// import pexels from './pexels.mp4';
// import './Home.css';
// import React from 'react';

// const Home = () => {
//   return (
//     <Box
//       sx={{ position: 'relative', marginTop: '50px', height: '560px' }}
//       class="video-background"
//     >
//       <video
//         style={{
//           top: 0,
//           left: 0,
//           minWidth: '100%',
//           minHeight: '100vh',
//           // objectFit: 'cover',
//         }}
//         autoplay
//         loop
//       >
//         <source
//           src="https://player.vimeo.com/progressive_redirect/playback/737844886/rendition/360p/file.mp4?loc=external&oauth2_token_id=57447761&signature=fa54186638ab9fe18e5d9265420a3381479e26e0d91dbf535b8e43fcd4ef5e04"
//           autoPlay
//           loop
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>
//       <Box
//         sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           zIndex: 1,
//           color: 'white',
//           textAlign: 'center',
//           padding: '5px',
//         }}
//         // class="content"
//       >
//         <Typography variant="h3">Welcome to my website</Typography>
//         <Typography variant="h3">Welcome to my website</Typography>

//         <Typography variant="body1">Some content here</Typography>
//         <Typography variant="body2">Some content here</Typography>
//         <Typography variant="body1">Some content here</Typography>
//       </Box>
//       <Box
//         // sx={{
//         //   position: 'absolute',
//         //   top: 0,
//         //   left: 0,
//         //   minWidth: '100%',
//         //   minHeight: '50vh' /* on bigger screen it is 110vh */,
//         //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         // }}
//         class="overlay"
//       ></Box>
//     </Box>
//   );
// };

// export default Home;
