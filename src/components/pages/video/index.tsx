import React from "react";
import styled from "styled-components";
import Header from "../../organisms/Header";
import ReactPlayer from 'react-player'

/** 
 * react-playerの実装メモ 
 * 音楽とか動画とかを扱うときに使えそうなライブラリ
 */
const Video = () => {
  return (
    <>
      <ReactPlayer url="https://youtu.be/dJJwUcMRGBA" />
    </>
  )
}

export default Video
