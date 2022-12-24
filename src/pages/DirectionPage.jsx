import React from 'react'
import {Box, Grid, Link, styled, Typography} from '@mui/material'
import imgBac from '../img/Rectangle 12424.png'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'

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

const DirectionPage = () => {

  const product =
    ['Урология ', 'Гинекология', 'Проктология', 'Пульмонология',
      'Неврология', 'Трихология', 'Дермотология', 'УЗИ', 'Офтальмология',
      'Диагностика', 'Момология', 'Гастроэнерология', 'Пластическая хирургия',
      'Проктология', 'Стоматология', 'Услуги психолога', 'Трансплантация волос',
      'Терапевтические услуги', 'Дермотология', 'Стационары',
    ]
  return (
    <>
      <Grid
        height={486}
        container sx={{
        backgroundImage: `url("${imgBac}")`,
        backgroundRepeat: 'no-repeat',
      }}>
        <Grid mt={5} xs={12}>
          <Grid mt={5} textAlign={'center'} xs={12}>
            <Typography
              fontWeight={700}
              color={'#011669'}
              fontSize={32}
              variant={'body2'}>
              Наши Направления
            </Typography>
          </Grid>
          <Grid textAlign={'center'} mt={5} container>
            <Grid xs={4}>
              <Typography
                variant={'body2'}
                fontSize={40}
                fontWeight={500}
                color={'rgba(2, 11, 87, 1)'}
              >
                15
              </Typography>
              <Typography
                variant={'body2'}
                color={'rgba(2, 11, 87, 0.75)'}
                fontSize={18}
              >
                лет работы
              </Typography>
            </Grid>
            <Grid xs={4}>
              <Typography
                variant={'body2'}
                fontSize={40}
                fontWeight={500}
                color={'rgba(2, 11, 87, 1)'}
              >
                98%
              </Typography>
              <Typography
                variant={'body2'}
                color={'rgba(2, 11, 87, 0.75)'}
                fontSize={18}
              >
                Эффективности работы
              </Typography>
            </Grid>
            <Grid xs={4}>
              <Typography
                variant={'body2'}
                fontSize={40}
                fontWeight={500}
                color={'rgba(2, 11, 87, 1)'}
              >
                200 000
              </Typography>
              <Typography
                variant={'body2'}
                color={'rgba(2, 11, 87, 0.75)'}
                fontSize={18}
              >
                здоровых пациентов
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container mt={5} justifyContent={'center'} spacing={5}>
        {product.map(e => {
          return (
            <Box
              mt={4}
              className={'card'}
              sx={{
                '& > :not(style)': {
                  m: 1,
                  width: 280,
                  height: 150,
                  borderRadius: 5,
                  boxShadow: '4px 4px 8px 4px rgba(134, 187, 229, 0.4)',
                },
              }}>
              <button className={'product'}>
                {e}
              </button>
            </Box>
          )
        })}
      </Grid>
      <NotFoundPage />
    </>
  )
}

export default DirectionPage
