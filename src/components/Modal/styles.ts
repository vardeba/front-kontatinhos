import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    > div {
        background-color: var(--color-gray-2);
        padding: 2rem;
        box-shadow: 0 0 2.5rem 0 rgba(0, 0, 0, 0.25);
        width: 100%;
        max-width: 40rem;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    input {
        margin-bottom: 1.5rem;
        height: 4rem;
        padding-left: 1rem;
    }
`;
