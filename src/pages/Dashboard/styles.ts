import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 10rem;
        background-color: var(--color-gray-2);
    }

    main {
        display: flex;
        flex-direction: row;
        gap: 3.2rem;
        padding: 3.2rem;
    }

    aside {
        height: fit-content;
        width: 25.6rem;
        background-color: var(--color-gray-2);
        padding: 4rem;
    }
`;

export const Board = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 2rem;
`;
