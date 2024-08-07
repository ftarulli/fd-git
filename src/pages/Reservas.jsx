import  { useState } from 'react';
import Swal from 'sweetalert2';
import { MDBBtn, MDBCol, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../css/reservas.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import testApi from '../api/testApi';
import backgroundImg from '../assets/img-reservas/plato.jpeg';
import { setHours, setMinutes } from 'date-fns';

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

    const nameRegex = /^[a-zA-Z\s]*$/;
    const isValidName = nameRegex.test(name);

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ajustamos a la medianoche del día actual para comparaciones de fecha

    const minTime = setHours(setMinutes(new Date(), 30), 9); // 09:30 AM
    const maxTime = setHours(setMinutes(new Date(), 30), 23); // 11:30 PM

    const tiempoFormat = (dat, tim) => {
        const combinar = new Date(dat);
        combinar.setHours(tim.getHours());
        combinar.setMinutes(tim.getMinutes());
        return combinar.toISOString();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidEmail || !isValidName || !date || !time || !comment || !phone || !cant) {
            alert('Por favor completa todos los campos correctamente');
            return;
        }

        if (date < today) {
            alert('No se puede hacer una reserva en una fecha anterior a la actual');
            return;
        }

        const tiempo = tiempoFormat(date, time);

        try {
            const resp = await testApi.post('/auth/saveReservas', {
                name,
                tiempo,
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

        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Horario no disponible!',
                        footer: '<a href="#">Why do I have this issue?</a>',
                    });
                } else if (error.response.status === 500) {
                    alert('Comunicarse con un administrador');
                }
            } else {
                console.error('Error:', error.message);
                alert('Error en la conexión. Por favor, inténtalo de nuevo más tarde.');
            }
        }
    };

    return (
        <div
            className="background-image"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.10)), url(${backgroundImg})`,
                marginTop: '-50px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            <div
                className="mx-auto gradient-custom mt-5"
                style={{ maxWidth: '800px', padding: '20px', borderRadius: '8px' }}
            >
                <MDBRow className="pt-3 mx-3">
                    <MDBCol md="12">
                        <div className="text-center mb-4">
                            <h3 className="text-warning">Reservaciones</h3>
                            <h1 className="mb-3" style={{ color: '#FF9800' }}>
                                Reserva tu <span style={{ color: '#FFF' }}>mesa</span>
                            </h1>
                        </div>

                        <form className="mb-0" onSubmit={handleSubmit}>
                            <MDBRow className="mb-4">
                                <MDBCol md="6">
    <label className="form-label text-white">
        Nombre y Apellido *
    </label>
    <MDBInput
        type="text"
        value={name}
        onChange={(e) => {
            if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                setName(e.target.value);
            }
        }}
        className="text-dark"
        style={{ backgroundColor: '#FFF', borderColor: '#555' }}
        placeholder="Ejemplo: Juan Pablo Martinez"
        title="Solo se permiten letras y espacios"
    />
</MDBCol>

                                <MDBCol md="6">
                                    <label className="form-label text-white">
                                        Número de teléfono *
                                    </label>
                                    <PhoneInput
                                        country={'ar'}
                                        value={phone}
                                        onChange={setPhone}
                                        inputStyle={{
                                            width: '100%',
                                            height: '100%',
                                            padding: '0.375rem 0.75rem',
                                            fontSize: '1rem',
                                            lineHeight: '1.5',
                                            color: '#000',
                                            backgroundColor: '#FFF',
                                            borderColor: '#555',
                                        }}
                                        containerStyle={{
                                            width: '100%',
                                            backgroundColor: '#FFF',
                                            color: '#000',
                                            borderColor: '#555',
                                            borderRadius: '5px',
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-4">
                                <MDBCol md="6">
                                    <label className="form-label text-white">
                                        Correo electrónico *
                                    </label>
                                    <MDBInput
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="text-dark"
                                        style={{ backgroundColor: '#FFF', borderColor: '#555' }}
                                        placeholder="Ejemplo: usuario@usuario.com"
                                    />
                                </MDBCol>
                                <MDBCol md="6">
                                    <label className="form-label text-white">
                                        Fecha de la reserva *
                                    </label>
                                    <DatePicker
                                        selected={date}
                                        onChange={(date) => setDate(date)}
                                        className="form-control text-white date-picker"
                                        dateFormat="dd/MM/yyyy"
                                        autoComplete="off"
                                        calendarClassName="orange-calendar"
                                        minDate={today}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-4">
                                <MDBCol md="6">
                                    <label className="form-label text-white">
                                        Hora de la reserva *
                                    </label>
                                    <DatePicker
                                        selected={time}
                                        onChange={(time) => setTime(time)}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={30}
                                        timeCaption="Hora"
                                        dateFormat="h:mm aa"
                                        minTime={minTime}
                                        maxTime={maxTime}
                                        className="form-control text-white date-picker"
                                        style={{ backgroundColor: '#FFF', borderColor: '#555' }}
                                    />
                                </MDBCol>
                                <MDBCol md="6">
                                    <label className="form-label text-white">
                                        Número de comensales *
                                    </label>
                                    <div className="select-container">
                                        <select
                                            className="form-select text-white"
                                            value={cant}
                                            onChange={(e) => setCant(e.target.value)}
                                            style={{
                                                backgroundColor: '#FFF',
                                                borderColor: '#555',
                                                color: '#ccc',
                                            }}
                                        >
                                            <option value="" style={{ color: '#666' }}>
                                                Seleccionar cantidad
                                            </option>
                                            <option value="1" style={{ color: '#666' }}>
                                                1 persona
                                            </option>
                                            <option value="2" style={{ color: '#666' }}>
                                                2 personas
                                            </option>
                                            <option value="3" style={{ color: '#666' }}>
                                                3 personas
                                            </option>
                                            <option value="4" style={{ color: '#666' }}>
                                                4 personas
                                            </option>
                                            <option value="5" style={{ color: '#666' }}>
                                                5 personas
                                            </option>
                                            <option value="6" style={{ color: '#666' }}>
                                                6 personas
                                            </option>
                                            <option value="7" style={{ color: '#666' }}>
                                                7 personas
                                            </option>
                                            <option value="8" style={{ color: '#666' }}>
                                                8 personas
                                            </option>
                                        </select>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-4">
                                <MDBCol md="12">
                                    <label className="form-label text-white">
                                        Información Adicional
                                    </label>
                                    <textarea
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        className="textarea-control"
                                        placeholder="Escribe aquí..."
                                        style={{
                                            width: '700px',
                                            height: '200px',
                                            padding: '20px',
                                            borderRadius: '5px',
                                        }}
                                    />
                                </MDBCol>
                            </MDBRow>
                            <div className="text-center">
                                <MDBBtn
                                    rounded
                                    style={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                        borderColor: '#fff',
                                        borderWidth: '1px',
                                        borderRadius: '5px',
                                        color: '#fff',
                                        width: '120px',
                                        height: '40px',
                                    }}
                                    type="submit"
                                    onMouseOver={(e) => (e.target.style.backgroundColor = '#FF9800')}
                                    onMouseOut={(e) => (e.target.style.backgroundColor = '#000')}
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
