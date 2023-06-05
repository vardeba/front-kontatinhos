import { useNavigate } from "react-router-dom";
import { Modal } from "../Modal";

interface IModalErrorProps {
    toggleModal: () => void;
}

export const ModalError = ({ toggleModal }: IModalErrorProps) => {
    const navigate = useNavigate();

    const handleCloseAndRedirect = () => {
        toggleModal();

        navigate("/");
    };

    return (
        <Modal toggleModal={toggleModal} blockClosing>
            <h2>Você não está autenticado</h2>
            <button onClick={handleCloseAndRedirect}>Ir para login</button>
        </Modal>
    );
};
