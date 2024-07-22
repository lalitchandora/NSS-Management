import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();
    const toHome = () => {
        navigate("/");
    };

    return (
        <nav className="bg-[#303983] p-1">
            <div
                className="logo flex cursor-pointer items-center gap-2"
                onClick={toHome}
            >
                <img
                    className="w-16 rounded-full"
                    src={"./assets/logo.png"}
                    alt="hello world"
                />
                <h1 className="logo-text text-2xl font-medium text-white">
                    National Service Scheme
                </h1>
            </div>
        </nav>
    );
};

export default Nav;
