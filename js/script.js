const video = document.getElementById('heroVideo');
const btn = document.getElementById('videoSoundBtn');

btn.addEventListener('click', () => {
    video.muted = !video.muted;
    btn.classList.toggle('unmuted', !video.muted);
    btn.setAttribute('aria-label', video.muted ? 'Включить звук' : 'Выключить звук');
});