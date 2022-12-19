import React from 'react'
import {Button, Card, CardMedia, Divider, Grid, styled, Typography} from '@mui/material'
import doctorImg from '../../img/confident-doctor.png'
import smilingImg from '../../img/portrait-smiling.png'
import prettyImg from '../../img/smiling-pretty.png'

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  height: 63,
  width: 190,
  color: '#020B57',
  textTransform: 'none',
  fontSize: 24,
  fontWeight: 700,
  padding: '6px 12px',
  border: '1px solid #020B57',
  lineHeight: 1.5,
  backgroundColor: 'white',
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
  '&:hover': {
    backgroundColor: 'white',
  },
})

const ProductDetails = () => {
  return (
    <Grid mt={5} container spacing={5}>
      <Grid justifyContent={'center'} container>
        <Grid textAlign={'center'} xs={3}>
          <Typography variant={'h4'}>
            Врачи
          </Typography>
          <Divider
            sx={{
              border: '1px solid #020B57',
              margin: 1,
            }}
          />
        </Grid>
      </Grid>
      <Grid container mt={5} justifyContent={'center'}>
        <Grid xs={3}>
          <Card sx={{maxWidth: 300}}>
            <CardMedia
              component="img"
              height="250"
              image={doctorImg}
            />
            <br/>
            <div style={{textAlign: 'center'}}>
              <Typography
                fontFamily={'Roboto'}
                gutterBottom fontSize={18}
                fontWeight={700}
                variant="p"
                component="div"
              >
                Талантбеков Исхак Муратбекович
              </Typography>
              <Typography mt={1} variant="body2">
                Кардиолог
              </Typography>
              <Typography color={'blue'} textTransform={'none'} variant={'button'}>
                <a href={''}>
                  Подробнее
                </a>
              </Typography>
            </div>
          </Card>
        < /Grid>
        <Grid xs={3}>
          <Card sx={{maxWidth: 310}}>
            <CardMedia
              component="img"
              height="250"
              image={smilingImg}
            />
            <br/>
            <div style={{textAlign: 'center'}}>
              <Typography
                fontFamily={'Roboto'}
                gutterBottom
                fontSize={18}
                fontWeight={700}
                variant="p"
                component="div"
              >
                Талантбекова Айдай Камчыбековна
              </Typography>
              <Typography mt={1} variant="body2">
                Гинеколог
              </Typography>
              <Typography
                sx={{cursor: 'initial'}}
                color={'blue'}
                textTransform={'none'}
                variant={'button'}
              >
                <a href={''}>
                  Подробнее
                </a>
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{maxWidth: 300}}>
            <CardMedia
              component="img"
              height="250"
              image={prettyImg}
            />
            <br/>
            <div style={{textAlign: 'center'}}>
              <Typography
                fontFamily={'Roboto'}
                gutterBottom fontSize={18}
                fontWeight={700}
                variant="p"
                component="div"
              >
                Тологон кызы Салтанат
              </Typography>
              <Typography mt={1} variant="body2">
                Неврология
              </Typography>
              <Typography color={'blue'} textTransform={'none'} variant={'button'}>
                <a href={''}>
                  Подробнее
                </a>
              </Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Grid mt={4} justifyContent={'center'} container>
        <Grid textAlign={'center'} xs={3}>
          <BootstrapButton variant="contained" disableRipple>
            наши врачи
          </BootstrapButton>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProductDetails
