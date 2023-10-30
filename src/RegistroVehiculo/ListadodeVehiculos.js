import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField'

//Iconos
import AirportShuttle from '@material-ui/icons/AirportShuttle';
import DeleteOutlineOutlined from '@material-ui/icons/DeleteOutlineOutlined';

import { useNavigate } from "react-router-dom";
import Router2 from '../Router/Route2'
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});




export default function ListadodeVehiculos() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1)
  const [search, setSearch] = useState('')
  const handleChange = (event, value) => {
    setPage(value)
  }

 

  return (
    <Container className="Div" style={{width: '60%', marginTop: '5%'}}>
      <Paper elevation={1} >
        <Grid container spacing={10} className="Root">
          <Grid item xs={12}>
            <div className="Div" >
              <div>
                <h1>
                  Listado de Vehiculo<Divider></Divider>
                </h1>
              </div>
            </div>
          </Grid>
          <Grid item md={6}>
            <div>
              <Pagination
                count={10}
                page={page}
                onChange={handleChange}
                style={{ marginBottom: '7px' }}
              />
            </div>
          </Grid>
          <Grid item md={6}>
            <div>
              <TextField
                size="medium"
                placeholder="Buscar"
                inputProps={{ maxLength: 13 }}
                value={search}
                onChange={event => {
                  // setSearch(event.target.value)
                }}
              ></TextField>
            </div>
          </Grid>
          <Grid item md={4}>
            <Card className="card" style={{ width: '100%', height: '100%' }}>
              <CardActionArea button onClick={() => {navigate('/EditarRegistroVehiculo')}} className={classes.nested}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <div
                        style={{
                          borderRadius: 80,
                          width: 50,
                          height: 50,
                          overflow: 'hidden',
                          marginLeft: '100px'
                          
                        }}
                      >
                        <AirportShuttle
                            size={100}
                            style={{ marginLeft: 5, marginTop: 6 }}
                          ></AirportShuttle>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Marca: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Modelo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Placa del Vehiculo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Fecha de Registro: 
                    </h3>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <Button size="small">
                <DeleteOutlineOutlined></DeleteOutlineOutlined>
              </Button>
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card className="card" style={{ width: '100%', height: '100%', }}>
              <CardActionArea button onClick={() => {navigate('/EditarRegistroVehiculo')}} className={classes.nested}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <div
                        style={{
                          borderRadius: 80,
                          width: 50,
                          height: 50,
                          overflow: 'hidden',
                          marginLeft: '100px'
                          
                        }}
                      >
                        <AirportShuttle
                            size={100}
                            style={{ marginLeft: 5, marginTop: 6 }}
                          ></AirportShuttle>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Marca: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Modelo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Placa del Vehiculo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Fecha de Registro: 
                    </h3>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <Button size="small">
                <DeleteOutlineOutlined></DeleteOutlineOutlined>
              </Button>
            </Card>
          </Grid>

          <Grid item md={4}>
            <Card className="card" style={{ width: '100%', height: '100%'}}>
              <CardActionArea button onClick={() => {navigate('/EditarRegistroVehiculo')}} className={classes.nested}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <div
                        style={{
                          borderRadius: 80,
                          width: 50,
                          height: 50,
                          overflow: 'hidden',
                          marginLeft: '100px'
                          
                        }}
                      >
                        <AirportShuttle
                            size={100}
                            style={{ marginLeft: 5, marginTop: 6 }}
                          ></AirportShuttle>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Marca: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Modelo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Placa del Vehiculo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Fecha de Registro: 
                    </h3>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <Button size="small">
                <DeleteOutlineOutlined style={{Color: 'red'}}></DeleteOutlineOutlined>
              </Button>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="card" style={{ width: '100%', height: '100%'}}>
              <CardActionArea button onClick={() => {navigate('/EditarRegistroVehiculo')}} className={classes.nested}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <div
                        style={{
                          borderRadius: 80,
                          width: 50,
                          height: 50,
                          overflow: 'hidden',
                          marginLeft: '100px'
                          
                        }}
                      >
                        <AirportShuttle
                            size={100}
                            style={{ marginLeft: 5, marginTop: 6 }}
                          ></AirportShuttle>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Marca: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Modelo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Placa del Vehiculo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Fecha de Registro: 
                    </h3>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <Button size="small">
                <DeleteOutlineOutlined style={{Color: 'red'}}></DeleteOutlineOutlined>
              </Button>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="card" style={{ width: '100%', height: '100%'}}>
              <CardActionArea button onClick={() => {navigate('/EditarRegistroVehiculo')}} className={classes.nested}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <div
                        style={{
                          borderRadius: 80,
                          width: 50,
                          height: 50,
                          overflow: 'hidden',
                          marginLeft: '100px'
                          
                        }}
                      >
                        <AirportShuttle
                            size={100}
                            style={{ marginLeft: 5, marginTop: 6 }}
                          ></AirportShuttle>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Marca: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Modelo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Placa del Vehiculo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Fecha de Registro: 
                    </h3>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <Button size="small">
                <DeleteOutlineOutlined style={{Color: 'red'}}></DeleteOutlineOutlined>
              </Button>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="card" style={{ width: '100%', height: '100%'}}>
              <CardActionArea button onClick={() => {navigate('/EditarRegistroVehiculo')}} className={classes.nested}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={2}>
                      <div
                        style={{
                          borderRadius: 80,
                          width: 50,
                          height: 50,
                          overflow: 'hidden',
                          marginLeft: '100px'
                          
                        }}
                      >
                        <AirportShuttle
                            size={100}
                            style={{ marginLeft: 5, marginTop: 6 }}
                          ></AirportShuttle>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Marca: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Modelo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Placa del Vehiculo: 
                    </h3>
                  </Grid>
                  <Grid item xs={12}>
                    <h3 style={{ textAlign: 'left' }}>
                      Fecha de Registro: 
                    </h3>
                  </Grid>
                </CardContent>
              </CardActionArea>
              <Button size="small">
                <DeleteOutlineOutlined style={{Color: 'red'}}></DeleteOutlineOutlined>
              </Button>
            </Card>
          </Grid>
        </Grid>
        <Router2></Router2>
      </Paper>
    </Container>
  );
}
