import styled from "styled-components";



export const List = styled.div`
    width: 100%;
    min-height: 448px;
    background-color: #212529;
    border: #FEFEFE;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    overflow-y: scroll;
    margin-bottom: 25px;
    padding: 25px;


    #emptyList {
        padding: 30px;
    }
    #listCard {
        margin-top: 10px;
    }
    /* width */
::-webkit-scrollbar {
        width: 10px;
}
/* Track */
::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
}
`;

export const Tech = styled.div`
    width: 100%;
    height: 49px;
    list-style: none;
    background: #121214;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    transition: 0.4s;

    h3{
        font-size: 14px;
    }
    span{
        font-weight: 400;
        font-size: 12px;
        color: #868E96;
    }
    .controls{
        display: flex;
        align-items: center;
        gap: 20px
    }
    button {
        width: 28px;
        height: 28px;
        margin-left: 15px;
    }
    :hover {
        background-color: #343B41;
    }
`;