import styled from "styled-components";

export const DivUserHome = styled.div`
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
    #userHome {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        span {
            color: #868E96;
        }
    }
    @media screen and (max-width: 700px){
        #userHome {
        flex-direction: column;
        }
    }
`