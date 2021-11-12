import React from 'react';
import Unity, { UnityContent, UnityContext } from 'react-unity-webgl';
import Login from '../Login';
import ReactPlayer from 'react-player'
//import apk from '../../assets/images/narrativa.app/Contents/MacOS/narrativa'

const InGame = props => {
  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  const unityContent = new UnityContent(
    '../../../build/Narrativa.json',
    '../../../build/UnityLoader.js'
  )

  unityContent.on("quitted", () => {
    console.log('Game quit')
  })
  unityContent.on("loaded", () => {
    console.log('Game loaded')
  })
  unityContent.on("progress", progression => {
    console.log('Game loading', progression)
  })
  unityContent.on("error", message => {
    console.log('Game errored', message)
  })
  unityContent.on("DemoUnityToReact", (params) => {
    console.log('DemoUnityToReact', params)
  })

  return (
    <>
      {hasUser ?
        <Login /> :
          <Unity unityContent={unityContent} width="90%" height="100%" />
      }
    </>
  )
}

export default InGame;