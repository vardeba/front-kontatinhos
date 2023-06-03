import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface IKontact {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    kontactImage: string;
    createdAt: string;
}

export const Dashboard = () => {
    const [kontacts, setKontacts] = useState<IKontact[]>([]);

    useEffect(() => {
        (async () => {
            const response = await api.get<IKontact[]>("/kontacts");

            setKontacts(response.data);
        })();
    }, []);

    return (
        <>
            <h1>Dashboard</h1>
            <ul>
                {kontacts.map((kontact) => (
                    <li key={kontact.id}>{kontact.name}</li>
                ))}
            </ul>
        </>
    );
};
