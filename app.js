//Vote

let plus = document.querySelector('#plus'),
    minus = document.querySelector('#minus'),
    yes = document.querySelector('.yes'),
    no = document.querySelector('.no'),
    yesNum = document.querySelector('.yesNum'),
    noNum = document.querySelector('.noNum'),
    yesVote = 0,
    noVote = 0,
    allVote = 0,
    yesPer = document.querySelector('.yesPer'),
    noPer = document.querySelector('.noPer');

plus.addEventListener('click', function () {
    allVote++;
    yesVote++;
    no.style.width = `${(noVote / allVote) * 100}%`;
    yes.style.width = `${(yesVote / allVote) * 100}%`;
    yesNum.textContent = + yesVote;
    yesPer.textContent = `${Math.floor((yesVote / allVote) * 100)}%`;
    noPer.textContent = `${Math.floor((noVote / allVote) * 100)}%`;
});

minus.addEventListener('click', function () {
    allVote++;
    noVote++;
    yes.style.width = `${(yesVote / allVote) * 100}%`;
    no.style.width = `${(noVote / allVote) * 100}%`;
    noNum.textContent = + noVote;
    yesPer.textContent = `${Math.floor((yesVote / allVote) * 100)}%`;
    noPer.textContent = `${Math.floor((noVote / allVote) * 100)}%`;
});

//animate on scroll

let one = document.querySelector('#one'),
    two = document.querySelector('#two');

window.onscroll = function () {
    myFunction();
}

function myFunction() {
    if (document.documentElement.scrollTop > 100) {
        one.style.opacity = '1';
        one.style.left = '50%';
    } else {
        one.style.opacity = '0';
        one.style.left = '0%';
    }

    if (document.documentElement.scrollTop > 600) {
        two.style.opacity = '1';
        two.style.left = '50%';
    } else {
        two.style.opacity = '0';
        two.style.left = '100%';
    }
}