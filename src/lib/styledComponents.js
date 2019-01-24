import styled from 'styled-components';

export const MeinSectionDivSV = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #f5efef;
    min-height: 100vh;
    justify-content: center;
    align-items: center;

    h2{
    padding: 20px;
    margin: 0;
    }

`;

export const ContainerForOneItemSC = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: bisque;
    margin: 30px 0px;
    border-radius: 30px;
    
    div{
        width: 50%;
        
        img{
            width: 100%;
            height: 160px;
            cursor:pointer;
            transition: 1s;
            z-index: 3;
        }
        img:hover{
            position: absolute;
            left: 0;
            width: 150%;
            height: auto;
            transition: 1s;
            z-index: 10;
            margin-left:-25%;
        }
    }
`;
export const ContainerForPhoto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
`;

export const TextInImageSC = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    margin-left: 10px;

`;