import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';
import { useRef } from 'react';

export  function Spinner1() {

  
  const { value: value2, reset } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 89,
  });

 


  return (
    <Stack
      direction="row"
      spacing={8}
      sx={{ alignItems: 'center', flexWrap: 'wrap' }}
    > 
      <Stack spacing={2}>
        <CircularProgress size="lg" determinate color="danger" value={parseInt(value2)}>
          <Typography>{value2}%</Typography>
        </CircularProgress>
      </Stack>
    </Stack>
  );
}



export  function Spinner2() {

  
    const { value: value2, reset } = useCountUp({
      isCounting: true,
      duration: 1,
      start: 0,
      end: 69,
    });
  
   
  
  
    return (
      <Stack
        direction="row"
        spacing={8}
        sx={{ alignItems: 'center', flexWrap: 'wrap' }}
      > 
        <Stack spacing={2}>
          <CircularProgress size="lg" determinate color="primary" value={parseInt(value2)}>
            <Typography>{value2}%</Typography>
          </CircularProgress>
        </Stack>
      </Stack>
    );
  }
  

  export  function Spinner3() {

  
    const { value: value2, reset } = useCountUp({
      isCounting: true,
      duration: 1,
      start: 0,
      end: 56,
    });
  
   
  
  
    return (
      <Stack
        direction="row"
        spacing={8}
        sx={{ alignItems: 'center', flexWrap: 'wrap' }}
      > 
        <Stack spacing={2}>
          <CircularProgress size="lg" determinate color="success" value={parseInt(value2)}>
            <Typography>{value2}%</Typography>
          </CircularProgress>
        </Stack>
      </Stack>
    );
  }


  export  function Spinner4() {

  
    const { value: value4, reset } = useCountUp({
      isCounting: true,
      duration: 1,
      start: 0,
      end: 80,
    });
  
   
  
  
    return (
      <Stack
        direction="row"
        spacing={8}
        sx={{ alignItems: 'center', flexWrap: 'wrap' }}
      > 
        <Stack spacing={2}>
          <CircularProgress size="lg" determinate color="warning" value={parseInt(value4)}>
            <Typography>{value4}%</Typography>
          </CircularProgress>
        </Stack>
      </Stack>
    );
  }
  
  