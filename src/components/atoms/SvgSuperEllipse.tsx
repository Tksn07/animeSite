import React from 'react'
import styled from 'styled-components'
import logo from '../../../logo.svg';

const SvgSuperEllipse = () => {

  return (
    <>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="0" height="0">
        <clipPath id="clip01">
          <path d="M400,200c-.3,38.51-.66,75.21-4.55,104.22-3.9,29.28-11.32,50.88-25.9,65.33s-36.05,22-65.33,25.9c-29,3.89-65.71,4.25-104.22,4.55-38.51-.3-75.21-.66-104.22-4.55-29.28-3.9-50.88-11.32-65.33-25.9s-22-36.05-25.9-65.33C.66,275.21.3,238.51,0,200c.3-38.51.66-75.21,4.55-104.22C8.45,66.5,15.87,44.9,30.45,30.45s36.05-22,65.33-25.9C124.79.66,161.49.3,200,0c38.51.3,75.21.66,104.22,4.55,29.28,3.9,50.88,11.32,65.33,25.9s22,36.05,25.9,65.33C399.34,124.79,399.7,161.49,400,200Z" />
        </clipPath>
      </Svg>

      <svg width={"100%"} height={"100%"} viewBox={`0 0 400 400`}>
        <image
          xlinkHref={"https://images.dog.ceo/breeds/mexicanhairless/n02113978_1069.jpg"}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clip01)"
        />
      </svg>
    </>
  )
}

export default SvgSuperEllipse

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
`