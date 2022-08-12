window.onscroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    let degrees = scrollPercent * 360;
    document.querySelector(".bg").style.background = `conic-gradient(#0EA5EA ${degrees / 2}deg, #0BD1D1 ${degrees}deg , #ddd ${degrees}deg)`;
};
