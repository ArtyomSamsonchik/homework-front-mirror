import React from 'react'
import { Slider, SliderProps, sliderClasses } from '@mui/material'

const colors = {
  green: 'var(--green-400)',
  lightGreen: 'var(--light-green)',
  grey: 'var(--grey-200)',
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
          border: `2px solid ${green}`,
          color: 'white',
          backgroundColor: 'var(--bg-primary)',
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
