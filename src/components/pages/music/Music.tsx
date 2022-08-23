import styled from 'styled-components';
import logo from '../../../logo.svg';

type Props = {
  handleImageOnClick: () => void
}

const Music = ({ handleImageOnClick }: Props) => {

  return (
    <MusicWrapper>
      <img src={logo} className="App-logo" alt="logo" onClick={handleImageOnClick} />
    </MusicWrapper>
  )
}

export default Music

const MusicWrapper = styled.div`
  position: relative;
  width: 100px;
  border: 1px solid black;
  margin: 16px;
`