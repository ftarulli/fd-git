import { useState, useLayoutEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/galeria.css';
import imagen1 from '../assets/img-galeria/unsplash_-lHZUkiWM74 (1).jpg';
import imagen2 from '../assets/img-galeria/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash.jpg';
import imagen3 from '../assets/img-galeria/chad-montano--GFCYhoRe48-unsplash.jpg';
import imagen4 from '../assets/img-galeria/chad-montano-MqT0asuoIcU-unsplash.jpg';
import imagen5 from '../assets/img-galeria/joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg';
import imagen6 from '../assets/img-galeria/monika-grabkowska-P1aohbiT-EY-unsplash.jpg';
import imagen7 from '../assets/img-galeria/pablo-merchan-montes-MXovqM130UI-unsplash.jpg';
import imagen8 from '../assets/img-galeria/kobby-mendez-q54Oxq44MZs-unsplash.jpg';
import imagen9 from '../assets/img-galeria/michele-blackwell-rAyCBQTH7ws-unsplash.jpg';
import imagen10 from '../assets/img-galeria/chad-montano-lP5MCM6nZ5A-unsplash.jpg';
import imagen11 from '../assets/img-galeria/alexandra-kikot-mjP6MQz834E-unsplash.jpg';

export const Galeria = () => {
	useLayoutEffect(() => {
		document.body.style.backgroundColor = 'black';
	});

	const [modalOpen, setModalOpen] = useState(false);
	const [modalImage, setModalImage] = useState('');

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const handleImageClick = (image) => {
		setModalImage(image);
		setModalOpen(true);
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	return (
		<div>
			<div className="content-wrapper">
				<h2 className="subtitle">Galeria de Imágenes</h2>
				<h1 className="title">
					<span className="orange-text">Nuestros</span> increíbles platos
				</h1>
			</div>
			<div className="slider-container-wrapper">
				<div className="slider-container">
					<Slider {...settings}>
						<div>
							<img
								className="slider-image"
								src={imagen1}
								alt="Imagen 1"
								onClick={() => handleImageClick(imagen1)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen2}
								alt="Imagen 2"
								onClick={() => handleImageClick(imagen2)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen3}
								alt="Imagen 3"
								onClick={() => handleImageClick(imagen3)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen4}
								alt="Imagen 4"
								onClick={() => handleImageClick(imagen4)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen5}
								alt="Imagen 5"
								onClick={() => handleImageClick(imagen5)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen6}
								alt="Imagen 6"
								onClick={() => handleImageClick(imagen6)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen7}
								alt="Imagen 7"
								onClick={() => handleImageClick(imagen7)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen8}
								alt="Imagen 8"
								onClick={() => handleImageClick(imagen8)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen9}
								alt="Imagen 9"
								onClick={() => handleImageClick(imagen9)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen10}
								alt="Imagen 10"
								onClick={() => handleImageClick(imagen10)}
							/>
						</div>
						<div>
							<img
								className="slider-image"
								src={imagen11}
								alt="Imagen 11"
								onClick={() => handleImageClick(imagen11)}
							/>
						</div>
					</Slider>
				</div>
			</div>
			{modalOpen && (
				<div className="galeria-modal-overlay" onClick={closeModal}>
					<div className="galeria-modal-content">
						<span className="galeria-close" onClick={closeModal}>
							&times;
						</span>
						<img src={modalImage} alt="Modal" />
					</div>
				</div>
			)}
		</div>
	);
};
