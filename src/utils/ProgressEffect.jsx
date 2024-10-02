import * as React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';
import { useRef } from 'react';

export default function CircularProgressCountUp(color, valorFinal) {


  const { value: value2, reset } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 70,
  });

 


  return (
    <Stack
      direction="row"
      spacing={8}
      sx={{ alignItems: 'center', flexWrap: 'wrap' }}
    > 
      <Stack spacing={2}>
        <CircularProgress size="lg" determinate color="danger" value={value2}>
          <Typography>{value2}%</Typography>
        </CircularProgress>
      </Stack>
    </Stack>
  );
}
