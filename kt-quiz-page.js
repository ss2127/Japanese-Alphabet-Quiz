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

document.getElementById('first-q1').innerHTML = shuffledLetterRow1[0];
document.getElementById('second-q1').innerHTML = shuffledLetterRow1[1];
document.getElementById('third-q1').innerHTML = shuffledLetterRow1[2];
document.getElementById('fourth-q1').innerHTML = shuffledLetterRow1[3];
document.getElementById('fifth-q1').innerHTML = shuffledLetterRow1[4];

document.getElementById('1st-q1').value = shuffledLetterRow1[0]
document.getElementById('2nd-q1').value = shuffledLetterRow1[1]
document.getElementById('3rd-q1').value = shuffledLetterRow1[2]
document.getElementById('4th-q1').value = shuffledLetterRow1[3]
document.getElementById('5th-q1').value = shuffledLetterRow1[4]

///////////////////////////////// 2ND ROW ////////////////////////////////////
const alphabetRow2 = ['カ', 'キ', 'ク', 'ケ', 'コ'];
const randomIntQ2  = getRandomInt();
document.getElementById('second-question').innerHTML = alphabetRow2[randomIntQ2];

const letterRow2 = ['ka', 'ki', 'ku', 'ke', 'ko'];
const shuffledLetterRow2 = shuffleArray(letterRow2);

document.getElementById('first-q2').innerHTML = shuffledLetterRow2[0];
document.getElementById('second-q2').innerHTML = shuffledLetterRow2[1];
document.getElementById('third-q2').innerHTML = shuffledLetterRow2[2];
document.getElementById('fourth-q2').innerHTML = shuffledLetterRow2[3];
document.getElementById('fifth-q2').innerHTML = shuffledLetterRow2[4];

document.getElementById('1st-q2').value = shuffledLetterRow2[0]
document.getElementById('2nd-q2').value = shuffledLetterRow2[1]
document.getElementById('3rd-q2').value = shuffledLetterRow2[2]
document.getElementById('4th-q2').value = shuffledLetterRow2[3]
document.getElementById('5th-q2').value = shuffledLetterRow2[4]

///////////////////////////////// 3RD ROW ////////////////////////////////////
const alphabetRow3 = ['サ', 'シ', 'ス', 'セ', 'ソ'];
const randomIntQ3  = getRandomInt();
document.getElementById('third-question').innerHTML = alphabetRow3[randomIntQ3];

const letterRow3 = ['sa', 'shi', 'su', 'se', 'so'];
const shuffledLetterRow3 = shuffleArray(letterRow3);

document.getElementById('first-q3').innerHTML = shuffledLetterRow3[0];
document.getElementById('second-q3').innerHTML = shuffledLetterRow3[1];
document.getElementById('third-q3').innerHTML = shuffledLetterRow3[2];
document.getElementById('fourth-q3').innerHTML = shuffledLetterRow3[3];
document.getElementById('fifth-q3').innerHTML = shuffledLetterRow3[4];

document.getElementById('1st-q3').value = shuffledLetterRow3[0]
document.getElementById('2nd-q3').value = shuffledLetterRow3[1]
document.getElementById('3rd-q3').value = shuffledLetterRow3[2]
document.getElementById('4th-q3').value = shuffledLetterRow3[3]
document.getElementById('5th-q3').value = shuffledLetterRow3[4]

///////////////////////////////// 4th ROW ////////////////////////////////////

const alphabetRow4 = ['タ', 'チ', 'ツ', 'テ', 'ト'];
const randomIntq4  = getRandomInt();
document.getElementById('fourth-question').innerHTML = alphabetRow4[randomIntq4];

const letterRow4 = ['ta', 'chi', 'tsu', 'te', 'to'];
const shuffledLetterRow4 = shuffleArray(letterRow4);

document.getElementById('first-q4').innerHTML = shuffledLetterRow4[0];
document.getElementById('second-q4').innerHTML = shuffledLetterRow4[1];
document.getElementById('third-q4').innerHTML = shuffledLetterRow4[2];
document.getElementById('fourth-q4').innerHTML = shuffledLetterRow4[3];
document.getElementById('fifth-q4').innerHTML = shuffledLetterRow4[4];

document.getElementById('1st-q4').value = shuffledLetterRow4[0]
document.getElementById('2nd-q4').value = shuffledLetterRow4[1]
document.getElementById('3rd-q4').value = shuffledLetterRow4[2]
document.getElementById('4th-q4').value = shuffledLetterRow4[3]
document.getElementById('5th-q4').value = shuffledLetterRow4[4]

///////////////////////////////// 5TH ROW ////////////////////////////////////

const alphabetRow5 = ['ナ', '二', 'ヌ', 'ネ', 'ノ'];
const randomIntq5  = getRandomInt();
document.getElementById('fifth-question').innerHTML = alphabetRow5[randomIntq5];

const letterRow5 = ['na', 'ni', 'nu', 'ne', 'no'];
const shuffledLetterRow5 = shuffleArray(letterRow5);

document.getElementById('first-q5').innerHTML = shuffledLetterRow5[0];
document.getElementById('second-q5').innerHTML = shuffledLetterRow5[1];
document.getElementById('third-q5').innerHTML = shuffledLetterRow5[2];
document.getElementById('fourth-q5').innerHTML = shuffledLetterRow5[3];
document.getElementById('fifth-q5').innerHTML = shuffledLetterRow5[4];

document.getElementById('1st-q5').value = shuffledLetterRow5[0]
document.getElementById('2nd-q5').value = shuffledLetterRow5[1]
document.getElementById('3rd-q5').value = shuffledLetterRow5[2]
document.getElementById('4th-q5').value = shuffledLetterRow5[3]
document.getElementById('5th-q5').value = shuffledLetterRow5[4]

///////////////////////////////// 6TH ROW ////////////////////////////////////
const alphabetRow6 = ['ハ', 'ヒ', 'フ', 'へ', 'ホ'];
const randomIntQ6  = getRandomInt();
document.getElementById('sixth-question').innerHTML = alphabetRow6[randomIntQ6];

const letterRow6 = ['ha', 'hi', 'fu', 'he', 'ho'];
const shuffledLetterRow6 = shuffleArray(letterRow6);

document.getElementById('first-q6').innerHTML = shuffledLetterRow6[0];
document.getElementById('second-q6').innerHTML = shuffledLetterRow6[1];
document.getElementById('third-q6').innerHTML = shuffledLetterRow6[2];
document.getElementById('fourth-q6').innerHTML = shuffledLetterRow6[3];
document.getElementById('fifth-q6').innerHTML = shuffledLetterRow6[4];

document.getElementById('1st-q6').value = shuffledLetterRow6[0]
document.getElementById('2nd-q6').value = shuffledLetterRow6[1]
document.getElementById('3rd-q6').value = shuffledLetterRow6[2]
document.getElementById('4th-q6').value = shuffledLetterRow6[3]
document.getElementById('5th-q6').value = shuffledLetterRow6[4]

///////////////////////////////// 7TH ROW ////////////////////////////////////
const alphabetRow7 = ['マ', 'ミ', 'ム', 'メ', 'モ'];
const randomIntQ7  = getRandomInt();
document.getElementById('seventh-question').innerHTML = alphabetRow7[randomIntQ7];

const letterRow7 = ['ma', 'mi', 'mu', 'me', 'mo'];
const shuffledLetterRow7 = shuffleArray(letterRow7);

document.getElementById('first-q7').innerHTML = shuffledLetterRow7[0];
document.getElementById('second-q7').innerHTML = shuffledLetterRow7[1];
document.getElementById('third-q7').innerHTML = shuffledLetterRow7[2];
document.getElementById('fourth-q7').innerHTML = shuffledLetterRow7[3];
document.getElementById('fifth-q7').innerHTML = shuffledLetterRow7[4];

document.getElementById('1st-q7').value = shuffledLetterRow7[0]
document.getElementById('2nd-q7').value = shuffledLetterRow7[1]
document.getElementById('3rd-q7').value = shuffledLetterRow7[2]
document.getElementById('4th-q7').value = shuffledLetterRow7[3]
document.getElementById('5th-q7').value = shuffledLetterRow7[4]

///////////////////////////////// 8TH ROW ////////////////////////////////////
const alphabetRow8 = ['ヤ', 'ユ', 'ヨ'];
const randomIntQ8  = getRandomInt(0, 2);
document.getElementById('eighth-question').innerHTML = alphabetRow8[randomIntQ8];

const letterRow8 = ['ya', 'yu', 'yo'];
const shuffledLetterRow8 = shuffleArray(letterRow8);

document.getElementById('first-q8').innerHTML = shuffledLetterRow8[0];
document.getElementById('second-q8').innerHTML = shuffledLetterRow8[1];
document.getElementById('third-q8').innerHTML = shuffledLetterRow8[2];

document.getElementById('1st-q8').value = shuffledLetterRow8[0]
document.getElementById('2nd-q8').value = shuffledLetterRow8[1]
document.getElementById('3rd-q8').value = shuffledLetterRow8[2]

///////////////////////////////// 9TH ROW ////////////////////////////////////
const alphabetRow9 = ['ラ', 'リ', 'ル', 'レ', 'ロ'];
const randomIntQ9  = getRandomInt();
document.getElementById('ninth-question').innerHTML = alphabetRow9[randomIntQ9];

const letterRow9 = ['ra', 'ri', 'ru', 're', 'ro'];
const shuffledLetterRow9 = shuffleArray(letterRow9);

document.getElementById('first-q9').innerHTML = shuffledLetterRow9[0];
document.getElementById('second-q9').innerHTML = shuffledLetterRow9[1];
document.getElementById('third-q9').innerHTML = shuffledLetterRow9[2];
document.getElementById('fourth-q9').innerHTML = shuffledLetterRow9[3];
document.getElementById('fifth-q9').innerHTML = shuffledLetterRow9[4];

document.getElementById('1st-q9').value = shuffledLetterRow9[0]
document.getElementById('2nd-q9').value = shuffledLetterRow9[1]
document.getElementById('3rd-q9').value = shuffledLetterRow9[2]
document.getElementById('4th-q9').value = shuffledLetterRow9[3]
document.getElementById('5th-q9').value = shuffledLetterRow9[4]

///////////////////////////////// 10TH ROW ////////////////////////////////////
const alphabetRow10 = ['ワ', 'ヲ', 'ン'];
const randomIntQ10  = getRandomInt(0, 2);
document.getElementById('tenth-question').innerHTML = alphabetRow10[randomIntQ10];

const letterRow10 = ['wa', 'wo', 'n'];
const shuffledLetterRow10 = shuffleArray(letterRow10);

document.getElementById('first-q10').innerHTML = shuffledLetterRow10[0];
document.getElementById('second-q10').innerHTML = shuffledLetterRow10[1];
document.getElementById('third-q10').innerHTML = shuffledLetterRow10[2];

document.getElementById('1st-q10').value = shuffledLetterRow10[0]
document.getElementById('2nd-q10').value = shuffledLetterRow10[1]
document.getElementById('3rd-q10').value = shuffledLetterRow10[2]


japaneseToEnglish();
// function to get corresponding matches

document.getElementById('submit-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    let sum = 0;
    
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
        sum += 1;
        document.getElementById('first-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('first-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ2 === `${alphabetRow2[randomIntQ2]}`){
        sum += 1;
        document.getElementById('second-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('second-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ3 === `${alphabetRow3[randomIntQ3]}`){
        sum += 1;
        document.getElementById('third-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('third-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ4 === `${alphabetRow4[randomIntq4]}`){
        sum += 1;
        document.getElementById('fourth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('fourth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ5 === `${alphabetRow5[randomIntq5]}`){
        sum += 1;
        document.getElementById('fifth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('fifth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }
  
    if (answerQ6 === `${alphabetRow6[randomIntQ6]}`){
        sum += 1;
        document.getElementById('sixth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('sixth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ7 === `${alphabetRow7[randomIntQ7]}`){
        sum += 1;
        document.getElementById('seventh-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('seventh-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ8 === `${alphabetRow8[randomIntQ8]}`){
        sum += 1;
        document.getElementById('eighth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('eighth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ9 === `${alphabetRow9[randomIntQ9]}`){
        sum += 1;
        document.getElementById('ninth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('ninth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    if (answerQ10 === `${alphabetRow10[randomIntQ10]}`){
        sum += 1;
        document.getElementById('tenth-result').style.backgroundColor = 'rgba(0, 255, 0, 0.2)'
    }
    else{
        document.getElementById('tenth-result').style.backgroundColor = 'rgba(255,0 , 0, 0.2)'
    }

    const feedbackMessage = document.getElementById('feedback-message');
    const sumResultMsg = `You've got ${sum}/10 questions correct.`
    if (sum === 10){
        feedbackMessage.innerHTML = `${sumResultMsg} Congrats!.   You've aced it!! 😊🎉`
    }
    else if (sum > 4) {
        feedbackMessage.innerHTML = `${sumResultMsg} Nice! You've passed it! 😊`
    }
    else {
        feedbackMessage.innerHTML = `${sumResultMsg} Please study more... 🙁`
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
