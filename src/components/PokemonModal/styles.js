import styled from "styled-components";

export const Modal = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    
    inset: 0; 
    width: 100%;
    height: 100vh;

    z-index: 99;

    background: var(--color-overlay-black);
`

export const ModalBox = styled.div`
    background: var(--color-background);
    padding: 40px;
    width: 100%;
    max-width: 400px;
`