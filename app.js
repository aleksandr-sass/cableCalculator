console.log('hello world!');
const VOLTAGE = 220;
let loadInWatts = 0;

let led = document.querySelector('#led');
let tv = document.querySelector('#tv');
let teapot = document.querySelector('#teapot');
let microwave = document.querySelector('#microwave');
let hvac = document.querySelector('#hvac');

let result = document.querySelector('#result');
result.value = 'Выберите нагрузку:';
console.log(result);

document
    .querySelectorAll('.tumbler')
    .forEach((el) =>
        el.addEventListener('click', main));

function main() {
    getLoadInWatts();
    let amps = convertLoadToAmpers();
    calcAndShowTheResult(amps)
    console.log(`amps = ${amps} \n ${typeof amps}`);

}

function getLoadInWatts() {
    loadInWatts = 0;
    if (led.checked) loadInWatts += 10;
    if (tv.checked) loadInWatts += 50;
    if (teapot.checked) loadInWatts += 2000;
    if (microwave.checked) loadInWatts += 1200;
    if (hvac.checked) loadInWatts += 2000;
    // console.log(`loadInWatts = ${loadInWatts}`);
}

function convertLoadToAmpers() {
    return +(loadInWatts / VOLTAGE).toFixed(2);
}

function calcAndShowTheResult(num) {
    let str = '';
    if (num == 0) {
        str = 'Выберите нагрузку:';
    } else if (num <= 15) {
        str = 'Вам подойдёт: Кабель ВВГнг(А)-LS 3х1';
    } else if (num <= 16) {
        str = 'Вам подойдёт: Кабель ВВГнг(А)-LS 3х1.2';
    } else if (num <= 18) {
        str = 'Вам подойдёт: Кабель ВВГнг(А)-LS 3х1.5';
    } else if (num <= 23) {
        str = 'Вам подойдёт: Кабель ВВГнг(А)-LS 3х2';
    } else if (num <= 25) {
        str = 'Вам подойдёт: Кабель ВВГнг(А)-LS 3х2.5';
    }
    result.value = `Расчётный ток = ${num} Ампер.`+'\n' + str;
}