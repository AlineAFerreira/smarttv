import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
  color: #fff;
  background-color: transparent;


&.visible {
  width: 100%;
  transform: translateX(0);
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 25%, rgba(8,8,8,0.76234243697479) 63%, rgba(0,0,0,0) 100%);
}

.box-nav {
  display: flex;
  flex-flow: column;
  width: 6.5vw;
  height: 100vh;
  transition: width .4s ease-in-out;
}

&.visible .box-nav {
  width: 22vw;
  background-color: transparent;
}

.side-nav-header {
  padding: 3vh 0  3.5vh !important
}

.side-nav-header > img {
  width: 3vw;
  height: 3vw;
  margin: 0 1.4vw;
}

.side-nav-header > .nickname {
  padding-bottom: 0.5vh;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0;
  flex: 1;
  transition: all .2s ease;
  transform: translateX(-15vw);
}

.main-nav.visible .side-nav-header > .nickname {
  transform: translateX(0);
  opacity: 1;
}

.side-nav-body {
  padding-top: 2vh;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}

.side-nav-body .nav-item {
  width: 100%;
  color: #bbb;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1.3vw;
  margin: .1vw 0;
  padding: 1vw 0;
  -webkit-transition: all .3s ease-out, padding .6s ease;
  -moz-transition: all .3s ease-out, padding .6s ease;
  -o-transition: all .3s ease-out, padding .6s ease;
  transition: all .3s ease-out, padding .6s ease;
}

@media (max-height: 620px) {
  .side-nav-body .nav-item {
    font-size: 1.5vw;
    padding: 1vw 0;
  }
}
.main-nav.visible .side-nav-body .nav-item:hover,
.main-nav.visible .side-nav-body .nav-item.nav-focused {
  background: rgb(29,29,29);
  background: linear-gradient(90deg, rgba(29,29,29,1) 4%, rgba(28,28,28,0.9220063025210083) 53%, rgba(1,1,1,0) 100%);
}

.side-nav-body .nav-item.active .sky_icon::after {
  opacity: 1;
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
  font-size: 1.8vw;
  padding: 0 2.2vw;
}

.side-nav-body .nav-item .nav-title {
  flex: 1;
  white-space: nowrap;
  transform: translateX(-22vw);
  opacity: 0;
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

.main-nav.visible .side-nav-body .nav-item .nav-title {
  transform: translateX(0);
  opacity: 1;
}

.side-nav-body .nav-item .sky_icon::after {
  content: "";
  display: block;
  width: 80%;
  height: 2px;
  margin: 4px auto 0;
  background-color: #f35c58;
  opacity: 0;
}

.side-nav-body .nav-item.terms {
  margin-top: auto;
}

.side-nav-body .nav-item.terms .sky_icon {
  width: 5.4vw;
  display: block;
}

.version {
  font-size: 0.8vw;
  transform: translateX(50%);
  position: fixed;
  bottom: 0;
  opacity: 0;
}

`;