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
    <div className='sidebar'  style={{ display: 'flex',height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#6DA5C0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Navegación
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            
            <ul className="navbar-nav ml-auto">
                <Link exact to="main" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Inicio</CDBSidebarMenuItem>
                </Link>
                <Link exact to="perfil" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
                </Link>
                <Link exact to="projects" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="file-code">Proyectos</CDBSidebarMenuItem>
                </Link>
                <Link exact to="skills" activeClassName="activeClicked">
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
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;