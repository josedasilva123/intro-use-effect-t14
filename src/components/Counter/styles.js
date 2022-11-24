import styled from "styled-components";

export const Container = styled.div`
    font-size: 25px;

    button {
        width: 60px;
        height: 60px;
        background-color: #d09a2a;

        border-radius: 50%;
        border: none;

        cursor: pointer;

        color: #fff;
        font-size: 25px;
    }

    button:hover {
        background-color: #b37a05;
    }

    button + button {
        margin-left: 15px;
    }
`