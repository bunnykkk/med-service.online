import React from 'react'
import {Grid, Typography} from '@mui/material'


const ContactPage = () => {
  return (
    <Grid justifyContent={'center'} container>
      <Grid mt={5} textAlign={'center'} xs={12}>
        <Typography
          variant={'body2'}
          fontSize={24}
          fontWeight={700}
          color={'#020B57'}
        >
          Расписание клиники Health
        </Typography>
      </Grid>
      <Grid
        mt={5}
        container
        xs={7}
        textAlign={'center'}
      >
        <Grid
          container
          p={2}
          sx={{
            borderTop: '1px solid rgba(22, 132, 177, 0.4)',
          }}>
          <Grid xs={5}>
            <Typography
              variant={'body2'}
              fontSize={24}
              fontWeight={700}
              color={'#020B57'}
            >
              8:00- 18:00
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant={'body2'}
              fontSize={24}
              fontWeight={700}
              color={'#020B57'}
            >
              Понедельник- Пятница
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          p={2}
          sx={{
            borderTop: '1px solid rgba(22, 132, 177, 0.4)',
          }}>
          <Grid xs={5}>
            <Typography
              variant={'body2'}
              fontSize={24}
              fontWeight={700}
              color={'#020B57'}
            >
              8:00- 15:00
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant={'body2'}
              fontSize={24}
              fontWeight={700}
              color={'#020B57'}
            >
              Суббота
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          p={2}
          sx={{
            borderTop: '1px solid rgba(22, 132, 177, 0.4)',
            borderBottom: '1px solid rgba(22, 132, 177, 0.4)',
          }}>
          <Grid xs={5}>
            <Typography
              variant={'body2'}
              fontSize={24}
              fontWeight={700}
              color={'#020B57'}
            >
              Выходной
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography
              variant={'body2'}
              fontSize={24}
              fontWeight={700}
              color={'#020B57'}
            >
              Воскресенье
            </Typography>
          </Grid>
        </Grid>
        <Grid
          textAlign={'center'}
          xs={9}
          mt={2}
        >
          <Typography
            variant={'body2'}
            fontSize={20}
            fontWeight={400}
            color={'#020B57'}
          >
            Наша клиника расположена по адресу:
            <a href={'https://2gis.com'}> Осмонкула 123</a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactPage
