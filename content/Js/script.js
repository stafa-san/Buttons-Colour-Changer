//Let's grab all the buttons
let allButtons = document.getElementsByTagName('button');
console.log(allButtons);

let copyAllButtons = [];
for (let s=0; s<allButtons.length; s++) {
    copyAllButtons.push(allButtons[s].classList[1]);
}

//console.log(copyAllButtons);

function raGaraGaMe (press) {

    if (press.value === 'Green') {
        paintGreen();
    } else if (press.value === 'Red') {
        paintRed();
    } else if (press.value === 'Blue') {
        paintBlue();
    } else if (press.value === 'Yellow') {
        paintYellow();
    } else if (press.value === 'Black') {
        paintBlack();
    } else if (press.value === 'Ash')  {
        paintAsh();
    } else if (press.value === 'Teal') {
        paintTeal();
    } else if (press.value === 'Reset') {
        paintReset();
    } else if (press.value === 'Random') {
        paintRandom();
    } else if (press.value === 'Clear') {
        paintSakora();
    }

}


//Pain Job Functions

function paintGreen() {
    for (let f=0; f<allButtons.length; f++) {
        allButtons[f].classList.remove(allButtons[f].classList[1]);
        allButtons[f].classList.add('btn-success');
    }
}

function paintRed() {
    for (let g=0; g<allButtons.length; g++) {
        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add('btn-danger');
    }
}

function paintBlue() {
    for (let g=0; g<allButtons.length; g++) {
        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add('btn-primary');
    }
}

function paintYellow() {
    for (let g=0; g<allButtons.length; g++) {
        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add('btn-warning');
    }
}

function paintBlack() {
    for (let g=0; g<allButtons.length; g++) {
        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add('btn-dark');
    }
}

function paintAsh() {
    for (let g=0; g<allButtons.length; g++) {
        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add('btn-secondary');
    }
}

function paintTeal() {
    for (let g=0; g<allButtons.length; g++) {
        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add('btn-info');
    }
}

function paintSakora() {
    for (let g=0; g<allButtons.length; g++) {
        let choices = ['btn-outline-primary', 'btn-outline-success', 'btn-outline-warning', 'btn-outline-danger', 'btn-outline-secondary', 'btn-outline-info', 'btn-outline-dark'];

        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add(choices[g]);
    }
}

function paintRandom() {
    for (let g=0; g<allButtons.length; g++) {
        let rand = Math.floor(Math.random() * 7);

        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add(copyAllButtons[rand]);
    }
}

function paintReset() {
    for (let g=0; g<allButtons.length; g++) {
        allButtons[g].classList.remove(allButtons[g].classList[1]);
        allButtons[g].classList.add(copyAllButtons[g]);
    }
}