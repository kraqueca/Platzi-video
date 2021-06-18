import mediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video')
const player = new mediaPlayer({ el: video, plugins: [new AutoPlay] })


const buttonPlayPause = document.getElementById('Play/pause')
buttonPlayPause.onclick = () => player.togglePlay()

const buttonMuteUnmute = document.getElementById('mute/unmute')
buttonMuteUnmute.onclick = () => player.toggleMute()