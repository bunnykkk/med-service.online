import React from "react";
import {Grid, Link, Rating, styled, Typography} from '@mui/material'
import imgChrome from '../../img/icons8-chrome.svg'
import imgYandex from '../../img/icons8-yandex-67.png'
import Box from '@mui/material/Box'
import MobileStepper from '@mui/material/MobileStepper'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import {useTheme} from '@mui/material/styles'
import {autoPlay} from 'react-swipeable-views-utils'
import SwipeableViews from 'react-swipeable-views'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: '#011669',

  '&:focus': {
    textDecoration: 'none',
    color: '#011669',
  },
  '&:hover': {
    textDecoration: 'none',
    color: '#011669',
  },
  '&:visited': {
    textDecoration: 'none',
    color: '#011669',
  },
  '&:link': {
    textDecoration: 'none',
    color: '#011669',
  },
  '&:active': {
    textDecoration: 'none',
    color: '#011669',
  },
})

const images = [
  {
    label: 'Болотбекова Айжаркын  Каныбековна',
    title:
      '"Талантбекова Айдай - замечательный доктор! Объяснит, покажет и лишнего не назначит. Всем советую."',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Сергеева Мария Светлановна',
    title:
      '"Талантбекова Айдай - замечательный доктор! Объяснит, покажет и лишнего не назначит. Всем советую."',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Жапаров Адилет Омурбекович',
    title:
      '"Талантбекова Айдай - замечательный доктор! Объяснит, покажет и лишнего не назначит. Всем советую."',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Сергеева Мария Светлановна',
    title:
      '"Талантбекова Айдай - замечательный доктор! Объяснит, покажет и лишнего не назначит. Всем советую."',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
]

const Loader = () => {

  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  return(
    <Grid mt={5} container sx={{height: 500, background: '#011669'}}>
      <Grid mt={5} container justifyContent={'center'} color={'white'} xs={6}>
        <Grid mt={5} xs={5}>
          <Grid ml={5}>
            <Typography variant={'h5'}>Наши Отзывы</Typography>
            <Typography mt={1} width={200} variant={'body2'}>
              Вы можете посмотреть наши отзывы в таких сервисах как “Яндекс” и
              “Гугл”
            </Typography>
          </Grid>
          <Grid container justifyContent={'space-around'} mt={5} xs={12}>
            <StyledLink href={'https://yandex.com'}><img width={42} src={imgChrome}/></StyledLink>
            <StyledLink href={'https://chrome.com'}><img width={42} src={imgYandex}/></StyledLink>
          </Grid>
          <Grid mt={1} ml={3}>
            <Rating name="read-only" value={5} size="small" readOnly/>
            <Rating
              sx={{marginLeft: 7}}
              name="read-only"
              size="small"
              value={5}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid mt={5} container justifyContent={'center'} color={'white'} xs={6}>
        <Box mt={5} sx={{maxWidth: 400, flexGrow: 1}}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            enableMouseEvents>
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 60,
                      display: 'block',
                      maxWidth: 60,
                      overflow: 'hidden',
                      width: '100%',
                      borderRadius: '50%',
                      marginLeft: 20,
                    }}
                    src={step.imgPath}
                    alt={step.label}

                  />
                ) : null}
                <div
                  square
                  elevation={0}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                  }}>
                  <div style={{marginTop: 25, textAlign: 'center'}}>
                    <Typography variant={'h6'}>
                      {images[activeStep].label}
                    </Typography>
                    <Typography mt={2}>{images[activeStep].title}</Typography>
                  </div>
                </div>
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            style={{backgroundColor: '#011669', marginTop: 30}}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                sx={{color: 'white'}}
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft/>
                ) : (
                  <KeyboardArrowRight/>
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
                sx={{color: 'white'}}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight/>
                ) : (
                  <KeyboardArrowLeft/>
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Grid>
    </Grid>
  )
};

export default Loader;
