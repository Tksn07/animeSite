import React from "react";
import styled from "styled-components";
import Header from "../../organisms/Header";
import ReactPlayer from 'react-player'

/** 
 * react-player�̎������� 
 * ���y�Ƃ�����Ƃ��������Ƃ��Ɏg�������ȃ��C�u����
 */
const Video = () => {
  return (
    <>
      <ReactPlayer url="https://youtu.be/dJJwUcMRGBA" />
    </>
  )
}

export default Video
