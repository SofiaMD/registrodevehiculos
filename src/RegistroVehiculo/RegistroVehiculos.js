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
        <Paper elevation={1}>
          <Grid container spacing={10} className="Root">
            <Grid item xs={12}>
              <div className="Div" >
                <div>
                  <h1>
                    Nuevo Vehiculo<Divider></Divider>
                  </h1>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <TextField
                style={{marginLeft:'15%'}}
                id="standard-select-currency"
                select
                label="Marca"
                value={currency}
                onChange={handleChange}
                helperText="Seleccione la marca del vehiculo"
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
          select
          label="Modelo"
          value={currency}
          onChange={handleChange}
          helperText="Seleccione el modelo del vehiculo"
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
                style={{marginLeft:'15%'}}
                size="medium"
                placeholder="Placa Vehicular:"
                InputProps={{
                }}
                helperText="Ingrese numero de placa del vehiculo"
                
              ></TextField>
            </Grid>

            <Grid item xs={4}>
              <TextField
                style={{marginLeft:'15%'}}
                size="medium"
                type="date"
                placeholder="Fecha de registro:"
                
                helperText="Seleccione fecha de registro"
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
  
