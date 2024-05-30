import { useState } from 'react';
import Swal from 'sweetalert2';
import {
  MDBBtn,
  MDBCol,
  MDBInput,
  MDBRow,
//   MDBTypography
} from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import apiTest from '../api/apiTest';

import '../css/reservas.css'; // Asegúrate de tener estilos personalizados si es necesario
import PhoneInput from 'react-phone-input-2'; // Librería para entrada de teléfono
import 'react-phone-input-2/lib/style.css'; // Estilos de la librería de entrada de teléfono

export const Reservas = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [cant, setCant] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '' || date === null || time === null || cant === '' || phone === '' || email === '' || !isValidEmail) {
      alert('Por favor completa todos los campos correctamente');
      return;
    }

    try {
      const resp = await apiTest.post('/auth/saveReservas', {
        name,
        date,
        time,
        cant,
        phone,
        email,
        comment,
      });

      if (resp.status === 201) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro de mesa exitoso',
          showConfirmButton: false,
          timer: 1500,
        });

        // Limpiar los campos después de enviar la información al backend solo si la solicitud fue exitosa
        setName('');
        setDate(null);
        setTime(null);
        setCant('');
        setPhone('');
        setEmail('');
        setComment('');
      }

      console.log(resp);
    } catch (error) {
      console.log(error);
      alert('Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo.');
    }
  };

  return (
<div className="background-image" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.10)), url("src/assets/img-reservas/plato.jpeg")',marginTop:'-50px', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>

    <div className="mx-auto gradient-custom mt-5" style={{ maxWidth: '800px', padding: '20px', borderRadius: '8px' }}>
      <MDBRow className="pt-3 mx-3">
        <MDBCol md="12">
		<div className="text-center mb-4">
		<h3 className="text-warning">Reservaciones</h3>
  
		<h1 className="mb-3" style={{ color: '#FF9800' }}>Reserva tu <span style={{ color: '#FFF' }}>mesa</span></h1>

  
</div>


          <form className="mb-0" onSubmit={handleSubmit}>
            <MDBRow className="mb-4">
              <MDBCol md="6">
                <label className="form-label text-white">Nombre y Apellido *</label>
                <MDBInput
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-dark" // Cambiado a texto gris oscuro
                  style={{ backgroundColor: '#FFF', borderColor: '#555' }}
                  placeholder="Ejemplo: Juan Pablo Martinez"
                />
              </MDBCol>
              <MDBCol md="6">
                <label className="form-label text-white">Número de teléfono *</label>
                <PhoneInput
                  country={'ar'} // Cambia este valor según el país predeterminado
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{ width: '100%', height: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', lineHeight: '1.5', color: '#000', backgroundColor: '#FFF', borderColor: '#555' }}
                  containerStyle={{ width: '100%', backgroundColor: '#FFF', color: '#000', borderColor: '#555',borderRadius:'5px'}}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
              <MDBCol md="6">
                <label className="form-label text-white">Correo electrónico *</label>
                <MDBInput
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-dark" // Cambiado a texto gris oscuro
                  style={{ backgroundColor: '#FFF', borderColor: '#555' }}
                  placeholder="Ejemplo: usuario@usuario.com"
                />
              </MDBCol>
              <MDBCol md="6">
                <label className="form-label text-white">Fecha de la reserva *</label>
                <DatePicker
  selected={date}
  onChange={(date) => setDate(date)}
  className="form-control text-white date-picker"
  dateFormat="dd/MM/yyyy"
  autoComplete="off"
  calendarClassName="orange-calendar" // Aplica la clase CSS al calendario
/>

              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
              <MDBCol md="6">
                <label className="form-label text-white">Hora de la reserva *</label>
                <DatePicker
                  selected={time}
                  onChange={(time) => setTime(time)}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  timeCaption="Hora"
                  dateFormat="h:mm aa"
                  className="form-control text-white date-picker"
                  style={{ backgroundColor: '#FFF', borderColor: '#555' }}
                  
                />
              </MDBCol>
              <MDBCol md="6">
                <label className="form-label text-white">Número de comensales *</label>
                <div className="select-container">
                  <select
                    className="form-select text-white"
                    value={cant}
                    onChange={(e) => setCant(e.target.value)}
                    style={{
                      backgroundColor: '#FFF',
                      borderColor: '#555',
                      color: '#ccc', // Nuevo color del texto
                    }}
                  >
                    <option value="" style={{ color: '#666' }}>Seleccionar cantidad</option>
                    <option value="1" style={{ color: '#666' }}>1 persona</option>
                    <option value="2" style={{ color: '#666' }}>2 personas</option>
                    <option value="3" style={{ color: '#666' }}>3 personas</option>
                    <option value="4" style={{ color: '#666' }}>4 personas</option>
                    <option value="5" style={{ color: '#666' }}>5 personas</option>
                    <option value="6" style={{ color: '#666' }}>6 personas</option>
                    <option value="7" style={{ color: '#666' }}>7 personas</option>
                    <option value="8" style={{ color: '#666' }}>8 personas</option>
                  </select>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-4">
              <MDBCol md="12">
                <label className="form-label text-white">Información Adicional</label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="textarea-control"
                  placeholder="Escribe aquí..."
                  style={{ width: '700px', height: '200px', padding: '20px', borderRadius: '5px' }}
                />
              </MDBCol>
            </MDBRow>
            <div className="text-center">
              <MDBBtn
                rounded
                style={{
					backgroundColor: 'rgba(0, 0, 0, 0.6)', // Fondo negro con opacidad del 60%
                  borderColor: '#fff', // Borde blanco
                  borderWidth: '1px', // Grosor del borde
                  borderRadius: '5px', // Border radius de 1
                  color: '#fff', // Color de la fuente blanco
				width: '120px', // Ancho fijo del botón
				height: '40px', // Alto fijo del botón
                }}
                type="submit"
                onMouseOver={(e) => e.target.style.backgroundColor = '#FF9800'} // Cambio de color en hover
                onMouseOut={(e) => e.target.style.backgroundColor = '#000'} // Volver al color original al salir del hover
              >
                Confirmar
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </div>
	</div>
  );
};
