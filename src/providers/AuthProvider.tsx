import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

interface IAuthProviderProps {
    children: ReactNode;
}

interface IAuthContextValues {
    signIn: (data: TLoginData) => void;
    loading: boolean;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("kontatinhos:token");

        if (!token) {
            setLoading(false);

            return;
        }

        api.defaults.headers.common.authorization = ` Bearer ${token}`;

        setLoading(false);
    }, []);

    const signIn = async (data: TLoginData) => {
        try {
            const response = await api.post("/login", data);

            const { token } = response.data;

            api.defaults.headers.common.authorization = ` Bearer ${token}`;

            localStorage.setItem("kontatinhos:token", token);

            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider value={{ signIn, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
