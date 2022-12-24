import React, {useEffect, useState} from 'react'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  Paper,
  Typography,
} from '@mui/material'
import NotFoundPage from '../components/NotFoundPage/NotFoundPage'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import {useTheme} from '@mui/material/styles'
import Box from '@mui/material/Box'
import img1 from '../img/image 1.png'
import img2 from '../img/image 2.png'
import img4 from '../img/image 4.png'
import img3 from '../img/Intersect.png'

const DoctorsPage = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(7)
  const [activeArray, setActiveArray] = React.useState(0)
  const [open, setOpen] = React.useState(false)
  const [openRegister, setOpenRegister] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpenRegis = () => {
    setOpenRegister(true)
  }

  const handleCloseRegister = (value) => {
    setOpenRegister(false)
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 7)
    setActiveArray((prevActiveStep) => prevActiveStep - 7)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 7)
    setActiveArray((prevActiveStep) => prevActiveStep + 7)
  }

  const workDay = []
  let date = new Date()
  let Month = {
    month: 'long',
    day: 'numeric',
  }
  let WeekDey = {
    timezone: 'UTC',
    weekday: 'long',
  }
  for (let i = 0; i < 21; i++) {
    if (i == 0) {
      date.setDate(date.getDate())
      workDay.push({monthDay: date.toLocaleString('ru', Month), weekday: date.toLocaleString('ru', WeekDey)})

    } else {
      date.setDate(date.getDate() + 1)
      workDay.push({monthDay: date.toLocaleString('ru', Month), weekday: date.toLocaleString('ru', WeekDey)})
    }
  }

  const doctors = [
    {
      img: img1,
      name: 'Талышханов Наги Александрович',
      title: 'Хирург, эндовидеохирург Врачебный стаж: 8 лет',
      price: '600',
    },
    {
      img: img2,
      name: 'Джанузаков Нургазы Тимурович',
      title: 'Гинеколог-эндовидеохирург',
      price: '600',
    },
    {
      img: img3,
      name: 'Кенжаев Махамаджан Гуламович',
      title: 'Хирург, д.м.н., профессор',
      price: '1000',
    },
    {
      img: img4,
      name: 'Бейнарович Михаил Дмитриевич',
      title: 'Пластический хирург Врачебный стаж: 10 лет',
      price: '1200',
    },
  ]
  const product =
    ['Урология ', 'Гинекология', 'Проктология', 'Пульмонология',
      'Неврология', 'Трихология', 'Дермотология', 'УЗИ', 'Офтальмология',
      'Диагностика', 'Момология', 'Гастроэнерология', 'Пластическая хирургия',
      'Проктология', 'Стоматология', 'Услуги психолога', 'Трансплантация волос',
      'Терапевтические услуги', 'Дермотология', 'Стационары',
    ]
  return (
    <>
      <Dialog onClose={openRegister} open={openRegister}>
        <Grid p={3} sx={{background: 'rgba(22, 132, 177, 0.4)'}}>
          <DialogTitle textAlign={'center'}>Запись на <br/> прием к врачу </DialogTitle>
          <Typography ml={1} variant={'body2'}>
            Введите ваше имя:
          </Typography>
          <input
            type={'text'}
            placeholder={'Айдай Жантаева '}
            style={{
              width: 329,
              fontSize: 18,
              padding: 10,
              borderRadius: 10,
              border: 'none',
            }}/>
          <Typography mt={1} ml={1} variant={'body2'}>
            Введите ваш телефон:
          </Typography>
          <input
            type={'tel'}
            placeholder={'+996 (___) __ __ __'}
            style={{
              width: 329,
              fontSize: 18,
              padding: 10,
              borderRadius: 10,
              border: 'none',
            }}/>
          <Typography mt={1} ml={1} variant={'body2'}>
            Введите ваш Email:
          </Typography>
          <input
            type={'email'}
            placeholder={'janysh.janysh@mail.com'}
            style={{
              width: 329,
              fontSize: 18,
              padding: 10,
              borderRadius: 10,
              border: 'none',
            }}/>
          <Grid container>
            <Grid xs={6}>
              <Typography mt={1} ml={1} variant={'body2'}>
                День записи:
              </Typography>
              <input
                type={'date'}
                placeholder={'janysh.janysh@mail.com'}
                style={{
                  width: 150,
                  fontSize: 18,
                  padding: 10,
                  borderRadius: 10,
                  border: 'none',
                }}/>
            </Grid>
            <Grid xs={6}>
              <Typography mt={1} ml={1} variant={'body2'}>
                Время записи:
              </Typography>
              <input
                type={'time'}
                placeholder={'janysh.janysh@mail.com'}
                style={{
                  width: 150,
                  fontSize: 18,
                  padding: 10,
                  borderRadius: 10,
                  border: 'none',
                }}/>
            </Grid>
          </Grid>
          <Typography mt={1} ml={1} variant={'body2'}>
            Ваше беспокойство:
          </Typography>
          <input
            type={'text'}
            style={{
              width: 329,
              fontSize: 18,
              padding: 10,
              borderRadius: 10,
              border: 'none',
            }}/>
          <DialogActions>
            <button
              style={{
                width: 154,
                background: '#011669',
                height: 43,
                fontFamily: 'Roboto',
                fontWeight: 700,
                fontSize: 18,
                color: '#fff',
                borderRadius: 30,
                border: '2px solid #FFFFFF',
                cursor: 'pointer',
              }}
              onClick={handleCloseRegister}
            >
              Отправить
            </button>
            <Button onClick={handleCloseRegister}>Назад</Button>
          </DialogActions>
        </Grid>
      </Dialog>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Напрвление
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Grid justifyContent={'space-between'} container>
                {product.map(e => {
                  return (
                    <Box
                      mt={4}
                      className={'card'}
                      sx={{
                        '& > :not(style)': {
                          m: 1,
                          fontSize: 15,
                          width: 150,
                          height: 100,
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
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Назад</Button>
          </DialogActions>
        </Dialog>
      </div>

      <Grid mt={5} container>
        <Grid mt={5} textAlign={'center'} xs={12}>
          <Typography
            fontSize={32}
            fontWeight={700}
            variant={'body2'}
            color={'rgba(2, 11, 87, 1)'}
          >
            <u> Врачи В Health</u>
          </Typography>
        </Grid>
        <Grid ml={5} mt={5} xs={11} container>
          <Grid xs={4}>
            <List
              sx={{
                width: 432,
                background: '#F9F7F7',
                border: '1px solid #020B57',
                boxShadow: '5px 5px 8px rgba(16, 114, 186, 0.15)',
              }}
              aria-label="contacts"
            >
              <Typography
                ml={2}
                fontSize={24}
                color={'#020B57'}
                variant={'body2'}
                fontWeight={700}
              >
                Выбрать адрес
              </Typography>
              <Typography
                ml={2}
                mt={1}
                color={'rgba(2, 11, 87, 0.75)'}
                fontSize={20}
                variant={'body2'}>
                Ул.Осмонкула 123
              </Typography>
            </List>
          </Grid>
          <Grid xs={4}>
            <List
              sx={{
                width: 432,
                background: '#F9F7F7',
                border: '1px solid #020B57',
                boxShadow: '5px 5px 8px rgba(16, 114, 186, 0.15)',
              }}
              aria-label="contacts"
            >
              <Typography
                ml={2}
                fontSize={24}
                color={'#020B57'}
                variant={'body2'}
                fontWeight={700}
                sx={{cursor: 'pointer'}}
                onClick={handleClickOpen}
              >
                Напрвление
              </Typography>
              <Typography
                ml={2}
                mt={1}
                color={'rgba(2, 11, 87, 0.75)'}
                fontSize={20}
                variant={'body2'}>
                Хирургия
              </Typography>
            </List>
          </Grid>
          <Grid xs={4}>
            <List
              sx={{
                height: 71,
                background: '#F9F7F7',
                border: '1px solid #020B57',
                boxShadow: '5px 5px 8px rgba(16, 114, 186, 0.15)',
              }}
              aria-label="contacts"
            >
              <Grid container textAlign={'center'} alignItems={'center'} xs={12}>
                <Grid xs={1}>
                  <Button
                    size="small"
                    sx={{
                      marginTop: 2.5,
                      marginLeft: -2,
                    }}
                    onClick={handleNext}
                    disabled={activeStep === 7}
                  >
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight/>
                    ) : (
                      <KeyboardArrowLeft/>
                    )}
                  </Button>
                </Grid>
                <Grid ml={-1} container xs={10}>
                  <Grid mt={1} xs={12}>
                    {workDay.slice(activeArray, activeStep).map((e, i) => {
                      return (
                        <>
                          {e.weekday == 'суббота' || e.weekday == 'воскресенье' ?
                            null :
                            i <= activeStep ?
                              <>
                                <Typography
                                  variant={'p'}
                                  fontSize={20}
                                  color={'#020B57'}
                                  fontWeight={400}
                                  fontFamily={'Roboto'}
                                  sx={{marginLeft: 1}}
                                >
                                  {e.monthDay.slice(0, 6) + ' '}
                                </Typography>
                              </>
                              : null
                          }
                        </>
                      )
                    })}
                  </Grid>
                  <Grid mt={1} xs={12}>
                    {workDay.slice(activeArray, activeStep).map((e, i) => {
                      return (
                        <>
                          {e.weekday == 'суббота' || e.weekday == 'воскресенье' ?
                            null :
                            i <= activeStep ?
                              <>
                                {console.log(i)}
                                <Typography
                                  variant={'span'}
                                  fontSize={24}
                                  color={'#020B57'}
                                  fontWeight={400}
                                  p={3}
                                >
                                  {i == 3 ? 'вт' :
                                    i == 4 ? 'ср' :
                                      e.weekday.slice(0, 1) + e.weekday.slice(2, 3)
                                  }
                                </Typography>
                              </>
                              : null
                          }
                        </>
                      )
                    })}
                  </Grid>
                </Grid>
                <Grid xs={1}>
                  <Button
                    size="small"
                    sx={{
                      marginTop: 2.5,
                      marginLeft: -0.5,
                    }}
                    onClick={handleBack}
                    disabled={activeStep === 21}>
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft/>
                    ) : (
                      <KeyboardArrowRight/>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </List>
          </Grid>
        </Grid>
      </Grid>
      {doctors.map(e => {
        return (
          <Box
            mt={5}
            ml={4}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 1240,
                height: 296,
                borderRadius: 3,
              },
            }}
          >
            <Paper elevation={2}>
              <Grid container>
                <Grid xs={3}>
                  <img width={283} height={296} src={e.img}/>
                </Grid>
                <Grid mt={2} xs={5}>
                  <Typography mt={5} fontSize={24} variant={'body2'}>
                    {e.name}
                  </Typography>
                  <Typography width={200} mt={3} variant={'body2'}>
                    {e.title}
                  </Typography>
                  <Typography mt={3} variant={'body2'}>
                    <u>Консультация {e.price} сомов</u>
                  </Typography>
                  <Grid mt={3}>
                    <button
                      style={{
                        width: 154,
                        background: '#011669',
                        height: 43,
                        fontFamily: 'Roboto',
                        fontWeight: 700,
                        fontSize: 18,
                        color: '#fff',
                        borderRadius: 30,
                        border: '2px solid #FFFFFF',
                        cursor: 'pointer',
                      }}
                      onClick={handleOpenRegis}
                    >
                      Записаться
                    </button>
                  </Grid>
                </Grid>
                <Grid
                  textAlign={'center'}
                  container
                  sx={{
                    borderLeft: '1px solid rgba(2, 11, 87, 1)',
                    color: '#020B57',
                    fontSize: '20px',
                  }}
                  xs={4}
                >
                  <Grid mt={3} container xs={12}>
                    <Grid ml={4} xs={2}>
                      08:00
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      08:00
                    </Grid>
                    <Grid xs={2}>
                      08:00
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                  </Grid>
                  <Grid container xs={12}>
                    <Grid ml={4} xs={2}>
                      10:30
                    </Grid>
                    <Grid xs={2}>
                      09:30
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      9:30
                    </Grid>
                  </Grid>
                  <Grid container xs={12}>
                    <Grid ml={4} xs={2}>
                      12:00
                    </Grid>
                    <Grid xs={2}>
                      12:00
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      12:00
                    </Grid>
                  </Grid>
                  <Grid container xs={12}>
                    <Grid ml={4} xs={2}>
                      13:30
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      14:00
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                  </Grid>
                  <Grid container xs={12}>
                    <Grid ml={4} xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      15:30
                    </Grid>
                    <Grid xs={2}>
                      16:00
                    </Grid>
                  </Grid>
                  <Grid container xs={12}>
                    <Grid ml={4} xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      17:00
                    </Grid>
                    <Grid xs={2}>
                      -
                    </Grid>
                    <Grid xs={2}>
                      17:00
                    </Grid>
                    <Grid xs={2}>
                      17:00
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        )
      })}
      <NotFoundPage/>
    </>
  )
}

export default DoctorsPage
