import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Logo from "../components/Logo";
import AOS from "aos";
import "aos/dist/aos.css";

export const ContentContainer = Styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  position: relative;
  bottom: 5em;
  left: 12em;
  width: 80vw;
`;

export const PhotoSnsWrapper = Styled.div`
  display:flex;
  flex-direction:column;
`;

export const PhotoWrapper = Styled.div`
  margin:0;
  padding:0;
`;
export const MyPhoto = Styled.img`
    margin:0;
    padding:0;
    width: 30vh;
`;

export const SnsIconButtonWrapper = Styled.ul`
  margin:0;
  padding:0;
  display: flex;
  align-items:center;
  justify-content:space-evenly;
`;

export const SnsIconButton = Styled.li`
  list-style : none;
  width:50px;
  height:40px;
  cursor: pointer;
`;

export const SnsIconContent = Styled.img`
  width:100%;
  height: 100%;
  transition: 0.5s;
  display: flex !important;
  justify-content:center;
  align-items:center;
  color: #fff;
  font-size:30px !important;
`;
export const Email = Styled.a`
  text-decoration:none;
  color:white;
`;

export const ContactWrapper = Styled.div`
  margin:1em;
`;
export const Contact = Styled.div`
  margin: 0.3em;
  padding: 0;
  display: flex;
  justify-content:center;
  align-items:center;
`;

export const ContentWrapper = Styled.div`
    display: flex;
    flex-direction:column;
    position: relative;
    left: 3em;
`;

export const ContentTitle = Styled.p`
    font-size:2em;
    width:60vw;
`;

export const Content = Styled.p`
    font-size:1.2em;
    width:60vw;
`;

export const SkillContainer = Styled.div`
    display: flex;
    justify-content : space-evenly;
    position: relative;
    padding: 1em;
    margin: 1em;
    bottom: 8em;
`;

export const SkillTitle = Styled.p`
    font-size: 2em;
`;

export const SkillContent = Styled.p`
    display: flex;
`;

export const BlankContent = Styled.p`
  display: flex;
  justify-content:center;
  position: fixed;
  bottom:2em;
  width:100%;
`;

export const BlankImg = Styled.a`
  width: 6rem;
  border: solid #fff;
  position: absolute;
  bottom: 1;
  opacity: ${(props) => (props.scroll ? 0 : 1)};
  /* transition: transparent; */
`;

export const SkillImg = Styled.img`
width: 14em;
height: 8em;
border: solid #fff;
border-width: 2px;
`;
export const SkillImg2 = Styled.img`
width: 14em;
height: 8em;
`;

export const HideScroll = Styled.div`
  position: relative;
  bottom:4em;
  overflow:hidden;
`;

export const SlideContainer = Styled.div`
  width:1000vw;
  transition: transform 0.3s;
  transform: ${(props) => {
    if (props.button === "left") {
      return `translate(${props.value}vw)`;
    } else if (props.button === "right") {
      return `translate(${props.value}vw)`;
    }
  }};
`;

export const SlideInner = Styled.div`
  width:100vw;
  float:left;
`;

export const SlideImg = Styled.img`
  width:100%;
`;

export const SlideButtonWrapper = Styled.div`
  /* position: relative; */
  /* bottom:4em; */
  display: flex;
  justify-content: space-between;
`;
export const SlideButton = Styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  font-size:3em;
  width:2em;
  height:1.5em;
  border-radius : 0.1em;
  padding: 0;
  margin:0;
  border: none;
  cursor: pointer;
  &:hover{
  background: #FFF;
  color: white;
  }
`;
export const SlideDescription = Styled.p`
    font-size: 2.5em;
    display: flex;
    align-items:center;
    justify-content:center;
    position: relative;
    bottom:1em;
`;

export const CertificateContainer = Styled.div`
display: flex;
justify-content:center;
margin: 10px;
`;

export const CertificateWrapper = Styled.div`
  display: flex;
  flex-direction:column;
  `;

export const CertificateImg = Styled.img`
border-radius : 10px;
  width:30vw;
  height:50vh;
`;

export const CertBlank = Styled.p`
width:5vw;
`;

export const CertDiscription = Styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  font-size:2em;
  height:20vh;
`;

const AboutMePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [button, setButton] = useState("");
  const [value, setValue] = useState(0);
  const [scroll, setScroll] = useState(false);
  const scrollHandler = () => {
    window.onmousewheel = (e) => {
      if (e.wheelDelta > 0) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  const slideHandler = (e) => {
    if (e.target.className.split(" ")[2] === "leftButton") {
      setButton("left");
      if (value !== 0) {
        setValue(value + 100);
      }
    } else if (e.target.className.split(" ")[2] === "rightButton") {
      setButton("right");
      if (value !== -900) {
        setValue(value - 100);
      }
    }
  };

  return (
    <>
      <Logo />
      <ContentContainer>
        <PhotoSnsWrapper>
          <PhotoWrapper>
            <MyPhoto data-aos="zoom-in-left" src="images/hunProfile.PNG" />
            <SnsIconButtonWrapper data-aos="zoom-in-left">
              <SnsIconButton>
                <a href="https://github.com/findmytrueself">
                  <SnsIconContent src="images/github.png" />
                </a>
              </SnsIconButton>
              <SnsIconButton>
                <a href="https://tender-river-902.notion.site/TIL-b0cb4073403f43cb9cae81f3da7923e7">
                  <SnsIconContent src="images/notion.png" />
                </a>
              </SnsIconButton>
              <SnsIconButton>
                <a href="https://www.linkedin.com/in/hun-im-01644a207/">
                  <SnsIconContent src="images/linkedin.png"></SnsIconContent>
                </a>
              </SnsIconButton>
            </SnsIconButtonWrapper>
            <br />
            <SnsIconButtonWrapper data-aos="zoom-in-left">
              <SnsIconButton>
                <a href="https://www.instagram.com/instant.coffee_/?hl=ko">
                  <SnsIconContent src="images/instagram.png" />
                </a>
              </SnsIconButton>
              <SnsIconButton>
                <a href="https://www.youtube.com/channel/UCFCddKu8YvVdLIB-bYilGPg/videos">
                  <SnsIconContent src="images/youtube.png" />
                </a>
              </SnsIconButton>
            </SnsIconButtonWrapper>
          </PhotoWrapper>
          <ContactWrapper data-aos="zoom-in-left">
            <Contact>010-8077-8054</Contact>
            <Contact>
              <Email href="mailto:load1999@gmail.com?">
                load1999@gmail.com
              </Email>
            </Contact>
          </ContactWrapper>
        </PhotoSnsWrapper>
        <ContentWrapper>
          <ContentTitle data-aos="fade-right">
            ??????????????? ??????????????? ????????? ???????????????.
          </ContentTitle>
          <Content data-aos="fade-up">
            ??????????????? ????????? ????????? ?????? ?????? ??????????????? ?????? ?????? ??? ???
            ????????????.
          </Content>
          <Content data-aos="fade-up">
            ?????? ???????????? ????????? ??? ?????? ??? ?????? ?????????, ??? ???????????? ???????????????
            ?????? ???????????????.
          </Content>
          <Content data-aos="fade-up">
            ????????????????????? ????????? ?????? ???????????? ????????? ????????? ?????? ??? ????????????.
          </Content>
          <Content data-aos="fade-up">
            ?????? ????????? ???????????? ?????? ????????? ??????????????????.
          </Content>
          <Content data-aos="fade-up">
            ?????? ??????????????? ????????? ?????? ??????????????? ?????? ????????????.
          </Content>
          <Content data-aos="fade-up">
            ????????? ???????????????, ??????????????????, ??????????????? ?????????.
          </Content>
          <Content data-aos="fade-up">
            ????????? ???????????? ?????????????????? ?????? ????????? ????????? ???????????????.
          </Content>
        </ContentWrapper>
      </ContentContainer>
      <BlankContent>
        <BlankImg scroll={scroll}></BlankImg>
      </BlankContent>
      <br />
      <br />
      <br />
      <SkillContainer data-aos="fade-down">
        <SkillTitle>??????????????? ??????</SkillTitle>
        <SkillContent>
          <SkillImg src="images/JS.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg src="images/react.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg2 src="images/styledComponent.png"></SkillImg2>
        </SkillContent>
      </SkillContainer>
      <SkillContainer data-aos="fade-down">
        <SkillTitle>????????? ??????</SkillTitle>
        <SkillContent>
          <SkillImg src="images/nodejs.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg src="images/mysql.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg src="images/sequelizejs.png"></SkillImg>
        </SkillContent>
        <SkillContent>
          <SkillImg src="images/mvc.jpg"></SkillImg>
        </SkillContent>
      </SkillContainer>
      <HideScroll>
        <SlideContainer button={button} value={value}>
          <SlideInner>
            <SlideImg data-aos="fade-right" src="images/slide1.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide2.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide3.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide4.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide5.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide6.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide7.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide8.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide9.png" />
          </SlideInner>
          <SlideInner>
            <SlideImg src="images/slide10.png" />
          </SlideInner>
        </SlideContainer>
      </HideScroll>
      <SlideButtonWrapper
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <SlideButton className="leftButton" onClick={(e) => slideHandler(e)}>
          ????
        </SlideButton>
        <SlideDescription>
          ???????????????????????? ????????? ???????????? ?????? ?????? ?????? ???????????????.
        </SlideDescription>
        <SlideButton className="rightButton" onClick={(e) => slideHandler(e)}>
          ????
        </SlideButton>
      </SlideButtonWrapper>
      <CertificateContainer>
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/graduation1.png"
          />
        </CertificateWrapper>
        <CertBlank />
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/graduation2.png"
          />
        </CertificateWrapper>
      </CertificateContainer>
      <CertDiscription data-aos="fade-up">
        ?????????????????? ?????????????????? ??????
      </CertDiscription>
      <CertificateContainer>
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/kotracert.png"
          />
          <CertDiscription data-aos="fade-up" data-aos-duration="3000">
            KOTRA ?????? ????????? ?????? ?????? ??????
          </CertDiscription>
        </CertificateWrapper>
      </CertificateContainer>
      <CertificateContainer>
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/hskcert.png"
          />
          <CertDiscription data-aos="fade-up" data-aos-duration="3000">
            ???HSK 6??? 218???
          </CertDiscription>
        </CertificateWrapper>
      </CertificateContainer>
      <CertificateContainer>
        <CertificateWrapper>
          <CertificateImg
            data-aos="fade-up"
            data-aos-duration="3000"
            src="images/finacert.png"
          />
          <CertDiscription data-aos="fade-up" data-aos-duration="3000">
            Fina ??????????????????????????? ?????????
          </CertDiscription>
        </CertificateWrapper>
      </CertificateContainer>
    </>
  );
};

export default AboutMePage;
