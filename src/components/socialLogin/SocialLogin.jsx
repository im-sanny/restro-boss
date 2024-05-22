import { FaGoogle } from "react-icons/fa6";


const SocialLogin = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center p-5">
                <button className="btn">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;