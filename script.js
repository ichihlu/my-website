const colors = [
    ['#ff7eb3', '#ff758c', '#ff5e62'],
    ['#ff758c', '#ff5e62', '#ff9966'],
    ['#ff5e62', '#ff9966', '#ffcc33'],
    ['#ff9966', '#ffcc33', '#ff7eb3']
];

let step = 0;
function changeGradient() {
    document.body.style.background = `linear-gradient(45deg, ${colors[step][0]}, ${colors[step][1]}, ${colors[step][2]})`;
    step = (step + 1) % colors.length;
}

setInterval(changeGradient, 3000); // Change gradient every 3 seconds
