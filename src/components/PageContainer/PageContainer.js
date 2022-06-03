import styled from 'styled-components';

export const PageContainer = styled.div`
margin-top: 4rem;
flex-direction: column;
justify-content: space-around;
allign-items: center;
`;

export const BannerContainer = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 1rem;
padding-bottom: 1rem;
`;


export const Banner = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    margin-left: 1.8rem;
    margin-right: 1.8rem;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }

`;