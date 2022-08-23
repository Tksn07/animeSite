import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import logo from '../../../logo.svg';
import MusicLibrary from "./MusicLibrary";


/** 
 * react-h5-audioの実装メモ 
 * これは完全に音楽アプリ向けのライブラリ
 */
const Music = () => {
  const [musicSrc, setMusicSrc] = useState<string>("")

  const handleOnPlay = (e: Event) => {
    console.log("動け！")
  }

  const handleOnPause = (e: Event) => {
    console.log("止まれ！")
  }

  const handleImageOnClick = () => {
    console.log("こんにちは＝！")
    setMusicSrc("https://www.ne.jp/asahi/music/myuu/wave/menuettm.mp3")
    console.log(musicSrc)
  }

  return (
    <>
      <GlobalStyle />
      <MusicWrapper>
        <AudioLibray>
          <Body>
            <MusicLibrary handleImageOnClick={handleImageOnClick} />
          </Body>
        </AudioLibray>
        <AudioPlayerWrapper>
          <AudioPlayer src={musicSrc} onPlay={handleOnPlay} onPause={handleOnPause} />
        </AudioPlayerWrapper>
      </MusicWrapper>
    </>
  )
}

export default Music

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
  }
`

const MusicWrapper = styled.div``

const Body = styled.div`
  min-height: 200px;
`

const AudioLibray = styled.div`
  display: block;
  width: 100%;
  height: 100%;
`

const AudioPlayerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
`