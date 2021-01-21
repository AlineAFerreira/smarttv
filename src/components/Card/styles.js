import styled from 'styled-components';

const CardSizes = {
    heightRelatedSizes: {
        width: 19,
        height: 30,

    }
}


const CardTypes = {
    content: 'content',
    button: 'button'
}

const Container = styled.div`
    width: ${CardSizes.heightRelatedSizes.width}vh;
    height: ${CardSizes.heightRelatedSizes.height}vh;
    background: ${props => props.type === CardTypes.content ? 'url(' + props.cover.url + ')' : '#363D3E'};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: .6vh;
    & .infos {
        text-align: center;
        height: 22vh;        
        margin-top: 8vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        & img {
            width: 9vh;
        }
        & span {
            display: block;
            font-size: 2.1vh;
            font-weight: bold;
            & span {
                font-weight: normal;
                color: #A3A3A3;
                font-size: 1.8vh;
            }
        }
    }
    `;


export { Container, CardSizes, CardTypes };