import styled from 'styled-components';
import SvgSuperEllipse from '../../atoms/SvgSuperEllipse';

type Props = {
  handleImageOnClick: () => void
}

const Music = ({ handleImageOnClick }: Props) => {

  return (
    <MusicWrapper onClick={handleImageOnClick}>
      <SvgSuperEllipse />
    </MusicWrapper>
  )
}

export default Music

const MusicWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 16px;
  transition-duration: 0.5s;
  cursor: pointer;

  :hover{
    filter: drop-shadow(0px 8px 8px gray);
    transform: translateY(-10px);
    transition-duration: 0.5s;
  }
`