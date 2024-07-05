// random integer generator
const getRandomInt = (min=0, max=4) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


// shuffle function
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const alphabetRow1 = ['ア', 'イ', 'ウ', 'エ', 'オ'];
const randomIntQ1  = getRandomInt();
document.getElementById('first-question').innerHTML = alphabetRow1[randomIntQ1];

const letterRow1 = ['a', 'i', 'u', 'e', 'o'];
const shuffledLetterRow1 = shuffleArray(letterRow1);

// use querrSelectorAll
const firstQuestionList = document.querySelectorAll('.first');

// use forEach to assign
shuffledLetterRow1.forEach((element, index) => {
    firstQuestionList[index].innerHTML = element;
});

const firstQuestionInputValues = document.querySelectorAll('.first-value');

shuffledLetterRow1.forEach((element, index) => {
    firstQuestionInputValues[index].value = element;
});


///////////////////////////////// 2ND ROW ////////////////////////////////////
const alphabetRow2 = ['カ', 'キ', 'ク', 'ケ', 'コ'];
const randomIntQ2  = getRandomInt();
document.getElementById('second-question').innerHTML = alphabetRow2[randomIntQ2];

const letterRow2 = ['ka', 'ki', 'ku', 'ke', 'ko'];
const shuffledLetterRow2 = shuffleArray(letterRow2);

const secondQuestionLists = document.querySelectorAll('.second');
shuffledLetterRow2.forEach((element, index) => {
    secondQuestionLists[index].innerHTML = element;
});

const secondQuestionInputValues = document.querySelectorAll('.second-value');
shuffledLetterRow2.forEach((element, index) => {
    secondQuestionInputValues[index].value = element;
});


///////////////////////////////// 3RD ROW ////////////////////////////////////
const alphabetRow3 = ['サ', 'シ', 'ス', 'セ', 'ソ'];
const randomIntQ3  = getRandomInt();
document.getElementById('third-question').innerHTML = alphabetRow3[randomIntQ3];

const letterRow3 = ['sa', 'shi', 'su', 'se', 'so'];
const shuffledLetterRow3 = shuffleArray(letterRow3);

const thirdQuestionLists = document.querySelectorAll('.third');
shuffledLetterRow3.forEach((element, index) => {
    thirdQuestionLists[index].innerHTML = element;
});

const thirdQuestionInputValues = document.querySelectorAll('.third-value');
shuffledLetterRow3.forEach((element, index) => {
    thirdQuestionInputValues[index].value = element;
});

///////////////////////////////// 4th ROW ////////////////////////////////////

const alphabetRow4 = ['タ', 'チ', 'ツ', 'テ', 'ト'];
const randomIntq4  = getRandomInt();
document.getElementById('fourth-question').innerHTML = alphabetRow4[randomIntq4];

const letterRow4 = ['ta', 'chi', 'tsu', 'te', 'to'];
const shuffledLetterRow4 = shuffleArray(letterRow4);

const fourthQuestionLists = document.querySelectorAll('.fourth');
shuffledLetterRow4.forEach((element, index) => {
    fourthQuestionLists[index].innerHTML = element;
});

const fourthQuestionInputValues = document.querySelectorAll('.fourth-value');
shuffledLetterRow4.forEach((element, index) => {
    fourthQuestionInputValues[index].value = element;
});

///////////////////////////////// 5TH ROW ////////////////////////////////////

const alphabetRow5 = ['ナ', '二', 'ヌ', 'ネ', 'ノ'];
const randomIntq5  = getRandomInt();
document.getElementById('fifth-question').innerHTML = alphabetRow5[randomIntq5];

const letterRow5 = ['na', 'ni', 'nu', 'ne', 'no'];
const shuffledLetterRow5 = shuffleArray(letterRow5);

const fifthQuestionLists = document.querySelectorAll('.fifth');
shuffledLetterRow5.forEach((element, index) => {
    fifthQuestionLists[index].innerHTML = element;
});

const fifthQuestionInputValues = document.querySelectorAll('.fifth-value');
shuffledLetterRow5.forEach((element, index) => {
    fifthQuestionInputValues[index].value = element;
});

///////////////////////////////// 6TH ROW ////////////////////////////////////
const alphabetRow6 = ['ハ', 'ヒ', 'フ', 'へ', 'ホ'];
const randomIntQ6  = getRandomInt();
document.getElementById('sixth-question').innerHTML = alphabetRow6[randomIntQ6];

const letterRow6 = ['ha', 'hi', 'fu', 'he', 'ho'];
const shuffledLetterRow6 = shuffleArray(letterRow6);

const sixthQuestionLists = document.querySelectorAll('.sixth');
shuffledLetterRow6.forEach((element, index) => {
    sixthQuestionLists[index].innerHTML = element;
});

const sixthQuestionInputValues = document.querySelectorAll('.sixth-value');
shuffledLetterRow6.forEach((element, index) => {
    sixthQuestionInputValues[index].value = element;
});

///////////////////////////////// 7TH ROW ////////////////////////////////////
const alphabetRow7 = ['マ', 'ミ', 'ム', 'メ', 'モ'];
const randomIntQ7  = getRandomInt();
document.getElementById('seventh-question').innerHTML = alphabetRow7[randomIntQ7];

const letterRow7 = ['ma', 'mi', 'mu', 'me', 'mo'];
const shuffledLetterRow7 = shuffleArray(letterRow7);

const seventhQuestionLists = document.querySelectorAll('.seventh');
shuffledLetterRow7.forEach((element, index) => {
    seventhQuestionLists[index].innerHTML = element;
});

const seventhQuestionInputValues = document.querySelectorAll('.seventh-value');
shuffledLetterRow7.forEach((element, index) => {
    seventhQuestionInputValues[index].value = element;
});

///////////////////////////////// 8TH ROW ////////////////////////////////////
const alphabetRow8 = ['ヤ', 'ユ', 'ヨ'];
const randomIntQ8  = getRandomInt(0, 2);
document.getElementById('eighth-question').innerHTML = alphabetRow8[randomIntQ8];

const letterRow8 = ['ya', 'yu', 'yo'];
const shuffledLetterRow8 = shuffleArray(letterRow8);

const eighthQuestionLists = document.querySelectorAll('.eighth');
shuffledLetterRow8.forEach((element, index) => {
    eighthQuestionLists[index].innerHTML = element;
});

const eighthQuestionInputValues = document.querySelectorAll('.eighth-value');
shuffledLetterRow8.forEach((element, index) => {
    eighthQuestionInputValues[index].value = element;
});

///////////////////////////////// 9TH ROW ////////////////////////////////////
const alphabetRow9 = ['ラ', 'リ', 'ル', 'レ', 'ロ'];
const randomIntQ9  = getRandomInt();
document.getElementById('ninth-question').innerHTML = alphabetRow9[randomIntQ9];

const letterRow9 = ['ra', 'ri', 'ru', 're', 'ro'];
const shuffledLetterRow9 = shuffleArray(letterRow9);

const ninthQuestionLists = document.querySelectorAll('.ninth');
shuffledLetterRow9.forEach((element, index) => {
    ninthQuestionLists[index].innerHTML = element;
});

const ninthQuestionInputValues = document.querySelectorAll('.ninth-value');
shuffledLetterRow9.forEach((element, index) => {
    ninthQuestionInputValues[index].value = element;
});

///////////////////////////////// 10TH ROW ////////////////////////////////////
const alphabetRow10 = ['ワ', 'ヲ', 'ン'];
const randomIntQ10  = getRandomInt(0, 2);
document.getElementById('tenth-question').innerHTML = alphabetRow10[randomIntQ10];

const letterRow10 = ['wa', 'wo', 'n'];
const shuffledLetterRow10 = shuffleArray(letterRow10);

const tenthQuestionLists = document.querySelectorAll('.tenth');
shuffledLetterRow10.forEach((element, index) => {
    tenthQuestionLists[index].innerHTML = element;
});

const tenthQuestionInputValues = document.querySelectorAll('.tenth-value');
shuffledLetterRow10.forEach((element, index) => {
    tenthQuestionInputValues[index].value = element;
});


japaneseToEnglish();
// function to get corresponding matches

document.getElementById('submit-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    let countScore = 0;
    
    const formData = new FormData(event.target);

    const answerQ1 = formData.get('q1');
    const answerQ2 = formData.get('q2');
    const answerQ3 = formData.get('q3');
    const answerQ4 = formData.get('q4');
    const answerQ5 = formData.get('q5');
    const answerQ6 = formData.get('q6');
    const answerQ7 = formData.get('q7');
    const answerQ8 = formData.get('q8');
    const answerQ9 = formData.get('q9');
    const answerQ10 = formData.get('q10');

    if (answerQ1 === `${alphabetRow1[randomIntQ1]}`){
        countScore += 1;
        document.getElementById('first-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('first-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ2 === `${alphabetRow2[randomIntQ2]}`){
        countScore += 1;
        document.getElementById('second-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('second-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ3 === `${alphabetRow3[randomIntQ3]}`){
        countScore += 1;
        document.getElementById('third-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('third-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ4 === `${alphabetRow4[randomIntq4]}`){
        countScore += 1;
        document.getElementById('fourth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('fourth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ5 === `${alphabetRow5[randomIntq5]}`){
        countScore += 1;
        document.getElementById('fifth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('fifth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }
  
    if (answerQ6 === `${alphabetRow6[randomIntQ6]}`){
        countScore += 1;
        document.getElementById('sixth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('sixth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ7 === `${alphabetRow7[randomIntQ7]}`){
        countScore += 1;
        document.getElementById('seventh-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('seventh-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ8 === `${alphabetRow8[randomIntQ8]}`){
        countScore += 1;
        document.getElementById('eighth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('eighth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ9 === `${alphabetRow9[randomIntQ9]}`){
        countScore += 1;
        document.getElementById('ninth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('ninth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ10 === `${alphabetRow10[randomIntQ10]}`){
        countScore += 1;
        document.getElementById('tenth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('tenth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    const feedbackMessage = document.getElementById('feedback-message');
    const scoreResultMessage = `You've got ${countScore}/10 questions correct.`
    if (countScore === 10){
        feedbackMessage.innerHTML = `${scoreResultMessage} Congrats!.   You've aced it!! 😊🎉`
    }
    else if (countScore > 4) {
        feedbackMessage.innerHTML = `${scoreResultMessage} Nice! You've passed it! 😊`
    }
    else {
        feedbackMessage.innerHTML = `${scoreResultMessage} Please study more... 🙁`
    }

    disableRadios();
});


function japaneseToEnglish () {

    for (let i = 0; i < 5; i++) {
        switch(`${alphabetRow1[i]}`) {
            case 'ア':
                alphabetRow1[i] = 'a'
                break;
            case 'イ':
                alphabetRow1[i] = 'i'
                break;
            case 'ウ':
                alphabetRow1[i] = 'u'
                break;
            case 'エ':
                alphabetRow1[i] = 'e'
                break;
            case 'オ':
                alphabetRow1[i] = 'o'
                break;
        }

        switch(`${alphabetRow2[i]}`) {
            case 'カ':
                alphabetRow2[i] = 'ka'
                break;
            case 'キ':
                alphabetRow2[i] = 'ki'
                break;
            case 'ク':
                alphabetRow2[i] = 'ku'
                break;
            case 'ケ':
                alphabetRow2[i] = 'ke'
                break;
            case 'コ':
                alphabetRow2[i] = 'ko'
                break;
        }

        switch(`${alphabetRow3[i]}`) {
            case 'サ':
                alphabetRow3[i] = 'sa'
                break;
            case 'シ':
                alphabetRow3[i] = 'shi'
                break;
            case 'ス':
                alphabetRow3[i] = 'su'
                break;
            case 'セ':
                alphabetRow3[i] = 'se'
                break;
            case 'ソ':
                alphabetRow3[i] = 'so'
                break;
        }

        switch(`${alphabetRow4[i]}`) {
            case 'タ':
                alphabetRow4[i] = 'ta'
                break;
            case 'チ':
                alphabetRow4[i] = 'chi'
                break;
            case 'ツ':
                alphabetRow4[i] = 'tsu'
                break;
            case 'テ':
                alphabetRow4[i] = 'te'
                break;
            case 'ト':
                alphabetRow4[i] = 'to'
                break;
        }

        switch(`${alphabetRow5[i]}`) {
            case 'ナ':
                alphabetRow5[i] = 'na'
                break;
            case '二':
                alphabetRow5[i] = 'ni'
                break;
            case 'ヌ':
                alphabetRow5[i] = 'nu'
                break;
            case 'ネ':
                alphabetRow5[i] = 'ne'
                break;
            case 'ノ':
                alphabetRow5[i] = 'no'
                break;
        }

        switch(`${alphabetRow6[i]}`) {
            case 'ハ':
                alphabetRow6[i] = 'ha'
                break;
            case 'ヒ':
                alphabetRow6[i] = 'hi'
                break;
            case 'フ':
                alphabetRow6[i] = 'fu'
                break;
            case 'へ':
                alphabetRow6[i] = 'he'
                break;
            case 'ホ':
                alphabetRow6[i] = 'ho'
                break;
        }

        switch(`${alphabetRow7[i]}`) {
            case 'マ':
                alphabetRow7[i] = 'ma'
                break;
            case 'ミ':
                alphabetRow7[i] = 'mi'
                break;
            case 'ム':
                alphabetRow7[i] = 'mu'
                break;
            case 'メ':
                alphabetRow7[i] = 'me'
                break;
            case 'モ':
                alphabetRow7[i] = 'mo'
                break;
        }

        switch(`${alphabetRow9[i]}`) {
            case 'ラ':
                alphabetRow9[i] = 'ra'
                break;
            case 'リ':
                alphabetRow9[i] = 'ri'
                break;
            case 'ル':
                alphabetRow9[i] = 'ru'
                break;
            case 'レ':
                alphabetRow9[i] = 're'
                break;
            case 'ロ':
                alphabetRow9[i] = 'ro'
                break;
        }
    }

    for(let i = 0; i < 3; i++){
        switch(`${alphabetRow8[i]}`) {
            case 'ヤ':
                alphabetRow8[i] = 'ya'
                break;
            case 'ユ':
                alphabetRow8[i] = 'yu'
                break;
            case 'ヨ':
                alphabetRow8[i] = 'yo'
                break;
        }

        switch(`${alphabetRow10[i]}`) {
            case 'ワ':
                alphabetRow10[i] = 'wa'
                break;
            case 'ヲ':
                alphabetRow10[i] = 'wo'
                break;
            case 'ン':
                alphabetRow10[i] = 'n'
                break;
        }
    }
}


// scroll to top function
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        }

        // Scroll to the top of the document
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' 
        });
    }

// diable button function

function disableRadios() {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => {
        radio.disabled = true;
    });

    document.getElementById('submit-button').style.cursor = 'default';
    document.getElementById('submit-button').disabled = true;
    document.getElementById('submit-button').style.backgroundColor = 'greenyellow';

    
}
