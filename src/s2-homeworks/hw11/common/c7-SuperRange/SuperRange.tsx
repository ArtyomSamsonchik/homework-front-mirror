import React from 'react'
import { Slider, SliderProps, sliderClasses } from '@mui/material'

const colors = {
  green: 'hsl(130, 100%, 40%)',
  lightGreen: 'hsla(130, 100%, 40%, 16%)',
  grey: 'hsl(0, 0%, 55%)',
}

const SuperRange: React.FC<SliderProps> = ({ sx, ...props }) => {
  const { green, grey, lightGreen } = colors

  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        padding: '0.875em 0',
        height: '0.25em',
        color: green,
        [`& .${sliderClasses.rail}`]: { backgroundColor: grey, opacity: 1 },
        [`& .${sliderClasses.thumb}`]: {
          width: '1.5em',
          height: '1.5em',
          border: `1px solid ${green}`,
          color: 'white',
          [`&:hover, &.${sliderClasses.focusVisible}`]: {
            boxShadow: `0 0 0 6px ${lightGreen}`,
          },
          [`&.${sliderClasses.active}`]: { boxShadow: `0 0 0 10px ${lightGreen}` },
          '&::before': {
            width: '40%',
            height: '40%',
            backgroundColor: green,
            boxShadow: 'none',
          },
        },
        ...sx,
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
