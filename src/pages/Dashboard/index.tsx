import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Board, Container } from "./styles";
import { KontactCard } from "../../components/KontactCard";
import { ModalAddKontact } from "../../components/ModalAddKontact";

export interface IUser {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    userImage: string;
    createdAt: string;
}

export interface IKontact {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    kontactImage: string;
    createdAt: string;
}

export const Dashboard = () => {
    const [kontacts, setKontacts] = useState<IKontact[]>([]);

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await api.get<IKontact[]>("/kontacts");

            setKontacts(response.data);
        })();
    }, []);

    const toggleModal = () => setIsOpenModal(!isOpenModal);

    return (
        <Container>
            <header>
                <div>
                    <h1>Kontatinhos</h1>
                </div>
            </header>
            <main>
                <aside>
                    <div>
                        <h2>user</h2>
                        <button type="button" onClick={toggleModal}>
                            Novo Kontatinho
                        </button>
                        {isOpenModal && (
                            <ModalAddKontact
                                toggleModal={toggleModal}
                                setKontacts={setKontacts}
                            />
                        )}
                    </div>
                </aside>
                <Board>
                    {kontacts.map((kontact) => (
                        <KontactCard key={kontact.id} kontact={kontact} />
                    ))}
                </Board>
            </main>
        </Container>
    );
};
