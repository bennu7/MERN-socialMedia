import React from "react";
import "./register.scss";

const Register = () => {
	return (
		<div className="register">
			<div className="card">
				<div className="left">
					<h1>Ibnu Social.</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
						similique doloribus laboriosam laudantium enim, eum ratione dolore
					</p>
					<span>Do you have an account?</span>
					<button>Login</button>
				</div>
				<div className="right">
					<h1>Register</h1>
					<form>
						<input type="text" placeholder="input your username" />
						<input type="email" placeholder="input your email" />
						<input type="password" placeholder="input your password" />
						<input type="text" placeholder="input your name" />
						<button>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
