import { IKontact } from "../../pages/Dashboard";
import { Container } from "./styles";

interface IKontactCardProps {
    kontact: IKontact;
}

export const KontactCard = ({ kontact }: IKontactCardProps) => {
    return <Container key={kontact.id}>{kontact.name}</Container>;
};
