import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const SoundPlayer = ({ source }) => {
  console.log(source)

  if (!source) {
    return (<></>)
  }

  return(
    <AudioPlayer
    autoPlay={false}
    autoPlayAfterSrcChange={false}
    src={source}
    showJumpControls={false}
    showDownloadProgress={false}
    showFilledProgress={false}
    layout='horizontal'
    customProgressBarSection={[]}
    customAdditionalControls={[]}
    customVolumeControls={[]}
    onPlay={e => console.log("onPlay")}
  />

  )
}

export default SoundPlayer;
