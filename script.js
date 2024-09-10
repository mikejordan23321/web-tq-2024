// 表单提交交互逻辑
document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;
    document.getElementById('response').textContent = `Thanks for your feedback: "${feedback}"!`;
});

// 滚动淡入效果
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        let position = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.5;
        if (position < screenPosition) {
            element.classList.add('active');
        }
    });
});

// 音乐播放和暂停控制
const music = document.getElementById('backgroundMusic');
const musicControl = document.getElementById('musicControl');

musicControl.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        musicControl.textContent = 'Pause Music';
    } else {
        music.pause();
        musicControl.textContent = 'Play Music';
    }
});
