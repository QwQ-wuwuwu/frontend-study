const light = ['red', 'yellow', 'green']

let index = 1
function changeLight() {
    console.log(light[0])
    setInterval(() => {
        console.log(light[index])
        index = (index + 1) % 3
    }, 1000);
}
changeLight()