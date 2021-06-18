
function mediaPlayer(config) {
    this.media = config.el
    }
mediaPlayer.prototype.play = function () {
        this.media.play()
}

mediaPlayer.prototype.pause = function () {
    this.media.pause()
}

mediaPlayer.prototype.togglePlay = function () {
    if (player.media.paused) {
        player.play()
    }else{
        player.pause()
    }    
}