import {LoginForm} from "../../components/LoginForm";
// import withGuest from "../routes/hoc/withGuest";
// import defaultLogo from '../../assets/images/Logo-BRI-Life-Format.png';
import bgImage from '../../assets/login-bg.png'
export function LoginPage(props) {
	return (
		<div
			className="flex text-sm justify-center items-center login-container h-screen"
			style={{ backgroundImage: `url(${bgImage})`, backgroundColor: `#0d1345` }}
		>
			<section className="px-10 w-full space-y-10 sm:w-1/3 flex items-center bg-white login-section rounded-xl">
				<div className="w-full">
					<div className="flex justify-center mt-4">
					</div>
					<LoginForm />
				</div>
			</section>
		</div>
	);
}

// export default withGuest(LoginPage);
