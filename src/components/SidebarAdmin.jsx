import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/SidebarAdmin.css';

export const SidebarAdmin = ({ setActiveTable }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState('Admin');
  const [userImage, setUserImage] = useState('https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg');
  const navigate = useNavigate();

  const handleProfile = (action) => {
    if (action === 'changePhoto') {
      setIsModalOpen(true);
    } else if (action === 'logout') {
      navigate('/login');
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSaveChanges = () => {
    setIsModalOpen(false);
    setIsProfileOpen(false); // Cierra el menú de perfil después de guardar cambios
  };

  return (
    <div className="container">
      <div className={`Sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="SidebarUser">
          <img
            src={userImage}
            alt="Admin"
            onClick={toggleProfileMenu}
          />
          {!isCollapsed && <p>{userName}</p>}
          {isProfileOpen && (
            <div className="profileMenu">
              <button onClick={() => handleProfile('changePhoto')}>Cambiar foto</button>
              <button onClick={() => handleProfile('logout')}>Cerrar sesión</button>
            </div>
          )}
        </div>
        <div className="SidebarControls">
          <button
            className={`OptionSidebar ${isCollapsed ? 'collapsed' : ''}`}
            onClick={() => setActiveTable('reservas')}
          >
            <i className="fas fa-calendar-alt"></i>
            {!isCollapsed && 'Reservas'}
          </button>
          <button
            className={`OptionSidebar ${isCollapsed ? 'collapsed' : ''}`}
            onClick={() => setActiveTable('usuarios')}
          >
            <i className="fas fa-users"></i>
            {!isCollapsed && 'Usuarios'}
          </button>
        </div>
        <button className="SidebarToggle" onClick={toggleSidebar}>
          {isCollapsed ? '>' : '<'}
        </button>
        <div className="SidebarFooter">
          <button className="OptionSidebar" onClick={() => navigate('/')}>
            <i className="fas fa-home"></i>
            {!isCollapsed && 'Volver a la página'}
          </button>
        </div>
      </div>
      <div className={`MainContent ${isCollapsed ? 'collapsed' : ''}`}>
        {/* The rest of your main content goes here */}
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modalContent">
            <h2>Cambiar foto y nombre</h2>
            <input type="file" onChange={handleImageChange} />
            <input
              type="text"
              value={userName}
              onChange={handleNameChange}
              placeholder="Nombre de usuario"
            />
            <button onClick={handleSaveChanges}>Guardar cambios</button>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};
