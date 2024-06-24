import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import '../css/footer.css';

export const Footer = () => {
	return (
		<MDBFooter
			className="text-center text-lg-start text-white"
			style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
		>
			<MDBContainer
				fluid
				className="d-flex justify-content-center align-items-center text-center mt-5"
				style={{
					backgroundColor: 'orange',
					padding: '0.5px',
					maxWidth: '80%',
					margin: 'auto',
					border: '0px solid black',
				}}
			></MDBContainer>

			<section className="">
				<MDBContainer className="text-center text-md-start mt-5">
					<MDBRow className="mt-3">
						<MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">
								<MDBIcon color="secondary" icon="gem" className="me-3" />
								Sobre nosotros
							</h6>
							<p>
								Dirección: Av. Principal #123, Tucumán, Argentina Teléfono: +123 456
								789 info@rincongourmet.com
							</p>
						</MDBCol>

						<MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Enlaces Útiles</h6>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Sobre Nosotros
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Noticias
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Socios
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Equipo
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Menú
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Contacto
								</a>
							</p>
						</MDBCol>

						<MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Ayuda?</h6>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Preguntas Frecuentes (FAQ)
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Términos y Condiciones
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Reportes
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Documentación
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Política de Soporte
								</a>
							</p>
							<p>
								<a
									href="/404"
									className="text-reset footer-link"
									style={{ textDecoration: 'none' }}
								>
									Privacidad
								</a>
							</p>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
			{/* Derechos de autor */}
			<MDBContainer
				fluid
				className="d-flex justify-content-center align-items-center text-center mt-5"
				style={{
					backgroundColor: 'orange',
					padding: '10px 20px',
					maxWidth: '100%',
					margin: 'auto',
				}}
			>
				<MDBRow className="mt-3">
					<MDBCol md="12" lg="12" xl="12" className="mx-auto mb-4">
						<p className="text-white" style={{ margin: '0' }}>
							<span className="copyright">&copy; Copyright 2024</span> por{' '}
							<a
								href="https://www.linkedin.com/in/vaninabalbastro/"
								className="text-white footer-link"
							>
								Vanina Balbastro
							</a>
							,{' '}
							<a
								href="https://www.linkedin.com/in/lourdes-billone/"
								className="text-white footer-link"
							>
								Lourdes Billone
							</a>
							,{' '}
							<a href="juanmanuel237@gmail.com" className="text-white footer-link">
								Juan Manuel Maturana
							</a>
							,{' '}
							<a
								href="pablocantos051099@gmail.com"
								className="text-white footer-link"
							>
								Pablo Cantos
							</a>
							,{' '}
							<a
								href="https://www.linkedin.com/in/franco-tarulli-14937b21b/"
								className="text-white footer-link"
							>
								Franco Tarulli
							</a>
							. <span className="project-name">Proyecto Final Rolling Code.</span>
						</p>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</MDBFooter>
	);
};
