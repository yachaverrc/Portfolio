/* Sidebar.js */
import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
    <CDBSidebar textColor="#fff" backgroundColor="#6DA5C0">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
          Navegación
        </a>
      </CDBSidebarHeader>

      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu open = "false">
          <ul className="navbar-nav ml-auto">
            <Link to="main" spy={true} smooth={true} duration={500} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Inicio</CDBSidebarMenuItem>
            </Link>
            <Link to="perfil" spy={true} smooth={true} duration={500} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
            </Link>
            <Link to="projects" spy={true} smooth={true} duration={500} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="file-code">Proyectos</CDBSidebarMenuItem>
            </Link>
            <Link to="skills" spy={true} smooth={true} duration={500} activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="tasks">Habilidades</CDBSidebarMenuItem>
            </Link>
          </ul>
          {/* Agrega más enlaces aquí */}
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '20px 5px',
          }}
        >
          {/* Contenido del footer */}
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Sidebar;
