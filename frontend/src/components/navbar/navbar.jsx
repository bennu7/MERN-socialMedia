import React from "react";
import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="left">
				<Link to={"/"} style={{ textDecoration: "none" }}>
					<span>ibnusocial</span>
				</Link>
				<HomeOutlinedIcon />
				<DarkModeOutlinedIcon />
				<GridViewOutlinedIcon />
				<div className="search">
					<SearchOutlinedIcon />
					<input type="text" placeholder="Search..." />
				</div>
			</div>
			<div className="right">
				<PersonOutlineOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsNoneOutlinedIcon />
				<div className="user">
					<img
						src="https://images.pexels.com/photos/12627287/pexels-photo-12627287.jpeg?cs=srgb&dl=pexels-norma-gabriela-galván-12627287.jpg&fm=jpg&_gl=1*l26btu*_ga*MTQ0NDIwMzU5OC4xNjY3MDIyMjU2*_ga_8JE65Q40S6*MTY2NzAyMjI1Ny4xLjEuMTY2NzAyMjM5MC4wLjAuMA.."
						alt=""
						loading="lazy"
					/>
					<span>Lalu Ibnu</span>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
