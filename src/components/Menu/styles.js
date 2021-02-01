import styled from 'styled-components';
<<<<<<< HEAD
import { COLORS } from '../../styles';
=======
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
<<<<<<< HEAD
=======
  color: #fff;
>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
  background-color: transparent;

  ${props => props.visible && `
    transform: translateX(0);
  `}

<<<<<<< HEAD
  .box-nav {
    display: flex;
    flex-flow: column nowrap;
    width: 8vw;
    height: 100vh;
    transition: width .4s ease-in-out;
    padding-top: 2vh;
    ${props => props.visible && `
      width: 18vw;
      background-color: transparent;
    `}
  }

  .nav-item {
    min-width: 0;
    color: ${COLORS.textSecondary};
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.2vw;
    margin: .1vw 1vw;
    transition: background .3s ease-out, padding .6s ease;
    border-radius: 6px;
    text-decoration: none;

    @media (max-height: 620px) {
      font-size: 1.5vw;
      padding: 1vw 0;
    }

    ${props => props.visible && `
      :hover,
      &.hover {
        background: ${COLORS.bgBar};
        font-weight: 600;
      }
    `}

    &.active .sky_icon {
      background: ${COLORS.bgBar};
    }

    .sky_icon {
      display: -webkit-box;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      justify-content: center;
      font-size: 1.6vw;
      min-width: 4vw;
      height: 3.8vw;
      border-radius: 6px;
    }

    .nav-title {
      flex: 1;
      white-space: nowrap;
      transform: translateX(-22vw);
      opacity: 0;
      margin-left: 1.5vw;
    }

    :nth-child(1) {
      margin: 3vh 1vw 3.5vh !important;

      > img {
        width: 3vw;
        height: 3vw;
        margin: 0 1.4vw 0 .5vw;
      }

      > .box-nickname {
        padding-bottom: 0.5vh;
        opacity: 0;
        flex: 1;
        transition: all .2s ease;
        transform: translateX(-15vw);
        white-space: nowrap;
        overflow: hidden;

        .nickname {
          flex: 1;
          color: #fff;
          width: 100%;
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span:last-of-type {
          font-size: 1vw;
        }
      }
    }

    :nth-child(1) .nav-title {
      transition: transform .2s ease, opacity .2s;
    }

    :nth-child(2) .nav-title {
      transition: transform .3s ease, opacity .2s;
    }

    :nth-child(3) .nav-title {
      transition: transform .4s ease, opacity .2s;
    }

    :nth-child(4) .nav-title {
      transition: transform .5s ease, opacity .2s;
    }

    :nth-child(5) .nav-title {
      transition: transform .6s ease, opacity .2s;
    }

    :nth-child(6) .nav-title {
      transition: transform .6s ease, opacity .2s;
    }

    :nth-child(7) .nav-title {
      transition: transform .7s ease, opacity .2s;
    }

    :nth-child(8) .nav-title {
      transition: transform .7s ease, opacity .2s;
    }

    :nth-child(9) .nav-title {
      transition: transform .7s ease, opacity .2s;
    }

    :last-child {
      margin-top: auto;
    } 

    ${props => props.visible && `
      .nav-title,
      :nth-child(1) > .box-nickname{
        transform: translateX(0);
        opacity: 1;
      }
    `}   
  }
=======
.box-nav {
  display: flex;
  flex-flow: column;
  width: 8vw;
  height: 100vh;
  transition: width .4s ease-in-out;
}

${props => props.visible && `
  .box-nav {
    width: 18vw;
    background-color: transparent;
  }
`}

.side-nav-header {
  margin: 3vh 1vw 3.5vh !important
}

.side-nav-header > img {
  width: 3vw;
  height: 3vw;
  margin: 0 1.4vw 0 .5vw;
}

.side-nav-header > .box-nickname {
  padding-bottom: 0.5vh;
  opacity: 0;
  flex: 1;
  transition: all .2s ease;
  transform: translateX(-15vw);
  white-space: nowrap;
  overflow: hidden;

  .nickname {
    flex: 1;
    color: #fff;
    width: 100%;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span:last-of-type {
    font-size: 1vw;
  }
}

${props => props.visible && `
  .side-nav-header > .box-nickname {
    transform: translateX(0);
    opacity: 1;
  }
`}

.side-nav-body {
  padding-top: 2vh;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}

.side-nav-body .nav-item {
  min-width: 0;
  color: #bbb;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.2vw;
  margin: .1vw 1vw;
  -webkit-transition: background .3s ease-out, padding .6s ease;
  -moz-transition: background .3s ease-out, padding .6s ease;
  -o-transition: background .3s ease-out, padding .6s ease;
  transition: background .3s ease-out, padding .6s ease;
  border-radius: 6px;
}

@media (max-height: 620px) {
  .side-nav-body .nav-item {
    font-size: 1.5vw;
    padding: 1vw 0;
  }
}

${props => props.visible && `
  .side-nav-body .nav-item:hover,
  .side-nav-body .nav-item.nav-focused {
    background: #363d3e;
    font-weight: 600;
  }
`}

.side-nav-body .nav-item.active .sky_icon {
  background: #363d3e;
}

.side-nav-body .nav-item .sky_icon {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  font-size: 1.6vw;
  min-width: 4vw;
  height: 3.8vw;
  border-radius: 6px;
}

.side-nav-body .nav-item .nav-title {
  flex: 1;
  white-space: nowrap;
  transform: translateX(-22vw);
  opacity: 0;
  margin-left: 1.5vw;
}

.side-nav-body .nav-item:nth-child(1) .nav-title {
  transition: transform .2s ease, opacity .2s;
}

.side-nav-body .nav-item:nth-child(2) .nav-title {
  transition: transform .3s ease, opacity .2s;
}

.side-nav-body .nav-item:nth-child(3) .nav-title {
  transition: transform .4s ease, opacity .2s;
}

.side-nav-body .nav-item:nth-child(4) .nav-title {
  transition: transform .5s ease, opacity .2s;
}

.side-nav-body .nav-item:nth-child(5) .nav-title {
  transition: transform .6s ease, opacity .2s;
}

.side-nav-body .nav-item:nth-child(6) .nav-title {
  transition: transform .6s ease, opacity .2s;
}

.side-nav-body .nav-item:nth-child(7) .nav-title {
  transition: transform .7s ease, opacity .2s;
}

.side-nav-body .nav-item:nth-child(8) .nav-title {
  transition: transform .7s ease, opacity .2s;
}

.side-nav-body .nav-item:nth-child(9) .nav-title {
  transition: transform .7s ease, opacity .2s;
}

${props => props.visible && `
  .side-nav-body .nav-item .nav-title {
    transform: translateX(0);
    opacity: 1;
  }
`}

.side-nav-body .nav-item.config {
  margin-top: auto;
}

.version {
  font-size: 0.8vw;
  transform: translateX(50%);
  position: fixed;
  bottom: 0;
  opacity: 0;
}

>>>>>>> 4bfdf7b01511592715ceb8aada3cbbb77be203ed
`;