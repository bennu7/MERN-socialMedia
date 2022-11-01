import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
	return (
		<div className="login">
			<div className="card">
				<div className="left">
					<h1>Hello World</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
						similique doloribus laboriosam laudantium enim, eum ratione dolore
					</p>
					<span>Don't have an account?</span>
					<Link to={"/register"}>
						<button>register</button>
					</Link>
				</div>
				<div className="right">
					<h1>Login</h1>
					<form>
						<input type="text" placeholder="input your username" />
						<input type="password" placeholder="input your password" />
						<button>Login</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
