import styled from "styled-components"
import { PostCard } from "./PostCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faEnvelope, faBookmark, faFolderOpen } from "@fortawesome/free-solid-svg-icons"

const App = () => {
  return (
    <MainComp>
      <LeftBar>
        <LeftBarComp>
          <LeftBarItem> BHW의</LeftBarItem>
          <LeftBarItem> IT 블로그 </LeftBarItem>
          <Line></Line>
        </LeftBarComp>
        <LeftBarImgs>
            <FontAwesomeIcon icon={faFolderOpen} style={{color: "#ffffff",}} size="2x"/>
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff",}} size="2x"/>
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} size="2x"/>
            <FontAwesomeIcon icon={faBookmark} style={{color: "#ffffff",}} size="2x"/>
          </LeftBarImgs>
      </LeftBar>
      <RightContainer>
        <RightPostingCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </RightPostingCard>
      </RightContainer>
    </MainComp>
  );
}

const MainComp = styled.div`
  height : 100vh;
  width : 100vw;
  display : flex;
  flex-direction : row;
`;

const LeftBar = styled.div`
  height : 100%;
  width : 300px;

  display : flex;
  flex-direction : column;
  justify-content : flex-end;

  background-color : rgb(22, 78, 171);
`;

const RightContainer = styled.div`
  width : 100%;
  height : 100%;
`

const LeftBarComp = styled.div`
  display : flex;
  flex-direction : column;

  padding : 0px 0px 0px 30px;
  margin : 0px;
`

const LeftBarImgs = styled.div`
display : flex;
flex-direction : row;
justify-content: space-evenly;

margin-bottom : 10px;
`

const RightPostingCard = styled.div`
width : 100%;
padding : 100px;

display : flex;
flex-direction : row;
flex-wrap : wrap;
align-items : flex-start;
justify-content : space-evenly;
`

const LeftBarItem = styled.p`
  font-size : 40px;

  color : rgb(255, 255, 255);

  padding : 0px;
  margin : 0px;
`;

const Line = styled.p`
width : 90%;
border-top : 1px solid white;
`

export default App;
