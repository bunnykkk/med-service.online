import React from 'react'
import {Grid, Link, styled, Typography} from '@mui/material'
import logo from '../../img/лого медМонтажная область 1 1.svg'


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


const Footer = () => {
  return (
    <>
      <Grid
        container
        color={'#011669'}
        textAlign={'center'}
        alignItems={'center'}
        sx={{marginTop: 8}}>
        <Grid xs={4}>
          <StyledLink href={'/'}>
          <img style={{width: 300, height: 200, marginLeft: 10}} src={logo}/>
          </StyledLink>
        </Grid>
        <Grid xs={4}>
          <Typography variant={'body2'}>© Все права защищены</Typography>
        </Grid>
        <Grid xs={4}>
          <Typography variant={'body2'}>Служба поддержки:</Typography>
          <Typography variant={'body2'}>
            <StyledLink href={'tel:+996553676789'}>+996553676789</StyledLink>
          </Typography>
          <Typography variant={'body2'}>
            <StyledLink href={'tel:+996773676789'}>+996773676789</StyledLink>
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Footer

//onChangeIndex={handleStepChange}
