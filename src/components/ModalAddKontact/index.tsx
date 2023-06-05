import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { TCreateKontactData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../services/api";
import { IKontact } from "../../pages/Dashboard";
import { Modal } from "../Modal";

interface IModalAddKontactProps {
    toggleModal: () => void;
    setKontacts: Dispatch<SetStateAction<IKontact[]>>;
}

export const ModalAddKontact = ({
    toggleModal,
    setKontacts,
}: IModalAddKontactProps) => {
    const { register, handleSubmit } = useForm<TCreateKontactData>({
        resolver: zodResolver(schema),
    });

    const createKontact = async (data: TCreateKontactData) => {
        const response = await api.post("/kontacts", { ...data });

        setKontacts((previousKontacts) => [response.data, ...previousKontacts]);

        toggleModal();
    };

    return (
        <Modal toggleModal={toggleModal}>
            <h2>Dados do Kontatinho</h2>
            <form onSubmit={handleSubmit(createKontact)}>
                <label htmlFor="name">Nome</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Nome do kontatinho..."
                    {...register("name")}
                />
                <label htmlFor="email">E-mail</label>
                <input
                    type="email"
                    id="email"
                    placeholder="E-mail do kontatinho..."
                    {...register("email")}
                />
                <label htmlFor="phoneNumber">Telefone</label>
                <input
                    type="text"
                    id="phoneNumber"
                    placeholder="Telefone do kontatinho..."
                    {...register("phoneNumber")}
                />
                <label htmlFor="kontactImage">Foto</label>
                <input
                    type="text"
                    id="kontactImage"
                    placeholder="Link da foto do kontatinho..."
                    {...register("kontactImage")}
                />
                <button type="submit">Salvar Kontatinho</button>
            </form>
        </Modal>
    );
};
