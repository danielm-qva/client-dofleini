
import {SpinnerRoundOutlined} from 'spinners-react';
import {Box, Container} from "@mui/material";

const LoadingApp = () => {
  return (
      <Container 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
       >
    <SpinnerRoundOutlined size={71} thickness={100} speed={100} color="rgba(57, 76, 172, 1)" />
      </Container>
  );
}

export default LoadingApp;
