import React from 'react';
import { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fontWeight } from '@mui/system';

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='30px' textAlign='center'>
            Awesome Exercises You <br /> Should Know 
        </Typography>
        <Box position='relative' mb='72px'>
          <TextField 
            sx={{
              input: fontWeight
            }}
            height='76px'
            onClick={(e)=>{}} 
            type="text"
            placeholder='Search Exercises'  
          />
        </Box>
    </Stack>
  )
}

export default SearchExercises