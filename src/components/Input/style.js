import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;

width: 100%;
height: 5.6rem;

padding: 1.6rem 1.2rem;

background-color: ${({ theme }) => theme.COLORS.DARK_600};
color: ${({ theme }) => theme.COLORS.LIGHT_500};

border-radius: 1rem;


input {
    width: 100%;
    background: transparent;   
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_500};

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
}    


svg {
    margin-inline: 1rem;
}

`