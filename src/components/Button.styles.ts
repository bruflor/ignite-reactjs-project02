import styled, {css} from "styled-components";

export type ButtonVariant=
    "primary" | "secondary" | "danger" | "success" | "neutral"

interface ButtonContainerProps {
    variant: ButtonVariant;

}

const buttonVariants = {
    primary: "purple",
    secondary: "blue",
    danger: "red",
    success: "green",
}
export const ButtonContainer = styled.button<ButtonContainerProps>`
width: 100px;
height: 40px;
background-color: ${props => props.theme.primary};
color: ${props => props.theme.white}

`