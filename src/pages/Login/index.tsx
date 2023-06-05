import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TLoginData, schema } from "./validator";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
    const { register, handleSubmit } = useForm<TLoginData>({
        resolver: zodResolver(schema),
    });

    const { signIn } = useAuth();

    return (
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(signIn)}>
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Digite seu e-mail"
                    {...register("email")}
                />
                <label htmlFor="password">E-mail</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senhal"
                    {...register("password")}
                />
                <button type="submit">Entrar</button>
            </form>
        </main>
    );
};
