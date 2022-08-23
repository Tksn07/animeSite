import Music from './Music';
import styled from 'styled-components';

type Props = {
  handleImageOnClick: () => void
}

const MusicLibrary = ({ handleImageOnClick }: Props) => {
  const musics =[0, 1, 2]

  return (
    <MusicLibraryWrapper>
      {musics.map((m, i) => (
        <Music key={i} handleImageOnClick={handleImageOnClick}/>
      ))}
    </MusicLibraryWrapper>
  )
}

export default MusicLibrary

const MusicLibraryWrapper = styled.div`
  display: flex;
`