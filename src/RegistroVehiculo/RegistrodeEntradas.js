import React from "react";
import {
  TextField,
  Grid,
  Container,
  Button,
  Paper,
  Divider,
  MenuItem,
} from '@material-ui/core'
  import { makeStyles} from '@material-ui/core/styles';
  import { useNavigate } from "react-router-dom";

  
  import {
    Save,
    Cancel,
  } from '@material-ui/icons'
  
  export default function AgregarNuevoVehiculo() {
 
  
    const Marca = [
      {
        label: 'Toyota',
      },
      {
       
        label: 'Isuzu',
      },
      {
        
        label: 'Kia',
      },
      {
        
        label: 'Dimax',
      },
    ];

    const Modelo = [
      {
        label: 'Hilux',
      },
      {
       
        label: 'Rave4',
      },
      {
        
        label: 'Yaris',
      },
      {
        
        label: 'Proace',
      },
    ];

    
    const useStyles = makeStyles((theme) => ({
      root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }));
    
    const classes = useStyles();
    const [currency, setCurrency] = React.useState('');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };

    const navigate = useNavigate();

    const handlerCancel = event => {
      // console.log('Canceló')
      navigate('/ListadodeVehiculo', {state: null})
    }

    return (
      <Container className="Div" style={{width: '60%', marginTop: '5%'}}>
        {/* <SpeedDials></SpeedDials> */}
        <Paper elevation={1}>
          <Grid container spacing={10} className="Root">
            <Grid item xs={12}>
              <div className="Div" >
                <div>
                  <h1>
                    Nueva Entrada<Divider></Divider>
                  </h1>
                </div>
              </div>
            </Grid>
  
            <Grid item xs={4}>
              <TextField
                style={{marginLeft:'15%'}}
                id="standard-select-currency"
                select
                label="Vehiculo"
                value={currency}
                onChange={handleChange}
                helperText="Seleccione el vehiculo"
              >
              {Marca.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
              </TextField>
            </Grid>

            <Grid item xs={4}>
            <TextField
            style={{marginLeft:'10%'}}
          id="standard-select-currency"
        
          label="Nombre"
          value={currency}
          onChange={handleChange}
          helperText="Ingrese nombre del motorista"
        >
          {Modelo.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            </Grid>

            <Grid item xs={4}>
              <TextField
                style={{marginTop:'5%'}}
                size="medium"
                placeholder="Kilometraje:"
                InputProps={{
                }}
                helperText="Ingrese el kilometraje"
                
              ></TextField>
            </Grid>

            <Grid item xs={4}>
              <TextField
                style={{marginLeft:'15%'}}
                id="datetime-local"
                label="Fecha y Hora"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                helperText="Fecha y hora de Entrada"
              ></TextField>
            </Grid>
           
            <Grid item xs={12} style={{marginLeft:'60%'}}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Cancel />}
                onClick={handlerCancel}
                className="boton"
              >
                Cancelar
              </Button>


              {/* Boton Guardar */}
              <Button
              
                variant="contained"
                startIcon={<Save />}
                
                className="boton"
                style={{ backgroundColor: '#00e676', marginLeft:'5%'}}
              >
                Guardar
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    )
  }