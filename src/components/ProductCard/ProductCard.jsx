import React from 'react'
import {Box, Divider, Grid, Typography,} from '@mui/material'
import '../../styles/ProductCard.css'

const ProductCard = () => {
  const product = ['Урология ', 'Гинекология', 'Проктология', 'Пульмонология', 'Неврология', 'Трихология', 'Дермотология', 'УЗИ']

  return (
    <Grid mt={5} container justifyContent={'center'} spacing={5}>
      <Grid justifyContent={'center'} container>
        <Grid textAlign={'center'} xs={3}>
          <Typography variant={'h4'}>
            Направления
          </Typography>
          <Divider
            sx={{
              border: '1px solid #020B57',
              margin: 1,
            }}
          />
        </Grid>
      </Grid>
      <Grid container ml={5} mt={5} justifyContent={'center'} spacing={5}>
        {product.map(e => {
          return (
            <Box
              className={'card'}
              sx={{
                '& > :not(style)': {
                  m: 1,
                  width: 300,
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
    </Grid>
  )
}

export default ProductCard
