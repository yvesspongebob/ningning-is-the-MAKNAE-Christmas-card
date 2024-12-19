let isPlaying = false;

function controlBGM() {
    const bgmElement = document.querySelector('.btn-bgm');
    const bgm = document.getElementById('audio-bgm');

    if (isPlaying) {
        bgm.pause();
        bgmElement.innerText = 'PLAY';
    } else {
        bgm.play();
        bgmElement.innerText = 'STOP';
    }

    isPlaying = !isPlaying;
}