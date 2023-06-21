import React from 'react';
import image from '../assets/images/logo-DH.png';
import { NavItem } from './NavItem';
import { Link } from "react-router-dom";

function SideBar() {
	return (
		<React.Fragment>
			{/*<!-- Sidebar -->*/}
			<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

				{/*<!-- Sidebar - Brand -->*/}
				<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
					<div className="sidebar-brand-icon">
						<img className="w-100" src={image} alt="Digital House" />
					</div>
				</Link>

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider my-0" />

				{/*<!-- Nav Item - Dashboard -->*/}
				<NavItem href="/" icon='fa-tachometer-alt' name='Dashboard - DH movies' />

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider" />

				{/*<!-- Heading -->*/}
				<div className="sidebar-heading">Actions</div>

				{/*<!-- Nav Item - Pages -->*/}
				<NavItem href="/GenresInDb" icon='fa-folder' name='Genres in Db' />

				{/*<!-- Nav Item - Charts -->*/}
				<NavItem href="/LastMovieInDb" icon='fa-chart-area' name='Last movie in Db' />

				{/*<!-- Nav Item - Tables -->*/}
				<NavItem href="/ContenRowMovies" icon='fa-table' name='Content Row Movies' />

				{/*<!-- Divider -->*/}
				<hr className="sidebar-divider d-none d-md-block" />
			</ul>
			{/*<!-- End of Sidebar -->*/}

		</React.Fragment>
	)
}
export default SideBar;