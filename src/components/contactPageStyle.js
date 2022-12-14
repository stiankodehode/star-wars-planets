import styled from "styled-components";

export const Background = styled.section`
    margin-top: 2em;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PostageWrapper = styled.section`
    margin: 2em 0;
    background: rgba(0, 0, 0, 0.63);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.25px);
    -webkit-backdrop-filter: blur(1.25px);
    border: 1px yellow solid;
    border-radius: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactWrapper = styled.section`
    background: rgba(0, 0, 0, 0.63);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1.25px);
    -webkit-backdrop-filter: blur(1.25px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    border: 1px yellow solid;
    padding: 1em;
    border-radius: 2em;
    padding: 3em;
    margin: 1em;
    @media screen and (max-width: 600px) {
        width: 50%;
    }
`;

export const ContactFormFlex = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const YellowText = styled.h2`
    color: yellow;
    text-align: start;
`;
export const HeaderText = styled.h2`
    color: yellow;
    text-align: start;
    width: 22em;
    @media screen and (max-width: 600px) {
        width: auto;
    }
`;

export const TextEmail = styled.input`
    border-radius: 2em;
    padding: 0.3em 0.6em;
    margin: 1em 1.1em;
    @media screen and (max-width: 600px) {
        width: auto;
        border: 1px yellow solid;
    }
`;

export const TextEmailWrapper = styled.section`
    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Application = styled.textarea`
    text-align: start;
    width: 29.5em;
    border-radius: 2em;
    border-radius: 1em;
    padding: 0.3em 0.6em;
    margin: 1em 0;
    @media screen and (max-width: 600px) {
        width: auto;
    }
`;

export const FormFlex = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormBtn = styled.button`
    border-radius: 1em;
    padding: 0.5em 0.8em;
    background: #ffff00;
    color: black;
    font-weight: bolder;
    &:hover {
        background: #808001;
        border: 1px solid #ffff00;
    }
`;

export const DeleteBtn = styled.button`
    border-radius: 1em;
    padding: 0.5em 0.8em;
    background: #ff0000;
    color: black;
    font-weight: bolder;
    &:hover {
        background: #8f0000;
        border: 1px solid #ff0000;
    }
`;

export const BtnWrapper = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 26em;
    @media screen and (max-width: 600px) {
        justify-content: center;
    }
`;

export const ImgStyle = styled.img`
    width: 5em;
    background: white;
    border-radius: 50%;
    padding: 0.2em;
`;
