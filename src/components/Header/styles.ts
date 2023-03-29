import styled from "styled-components";

export const DivHeader = styled.header`
    width: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    h1 {
        color: #FF577F;
    }
    div {
        margin-top: 25px;
    }
    hr {
        margin-top: 50px;
        color: aliceblue;
        width: 100%;
    }
    #headerHome {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        button {
            width: 80px;
            background-color: #808080;
            border: #808080;
        }
    }
    @media screen and (max-width: 700px){
        #headerHome {
        flex-direction: column;
        }
    }
`