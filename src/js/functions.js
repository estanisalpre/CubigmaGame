//Cube rotation
export function cubeRotation(){
    const cube = document.getElementById('cube')
    const backButton = document.getElementById('backButton')
    const frontButton = document.getElementById('frontButton')
    const topButton = document.getElementById('topButton')
    const leftButton = document.getElementById('leftButton')
    const rightButton = document.getElementById('rightButton')
    const bottomButton = document.getElementById('bottomButton')

    backButton.addEventListener('click', () => {
        cube.style.animation = 'toBackFace 0.5s ease-in-out forwards';
    });
    frontButton.addEventListener('click', () => {
        cube.style.animation = 'toFrontFace 0.5s ease-in-out forwards';
    });
    topButton.addEventListener('click', () => {
        cube.style.animation = 'toTopFace 0.5s ease-in-out forwards';
    });
    leftButton.addEventListener('click', () => {
        cube.style.animation = 'toLeftFace 0.5s ease-in-out forwards';
    });
    rightButton.addEventListener('click', () => {
        cube.style.animation = 'toRightFace 0.5s ease-in-out forwards';
    });
    bottomButton.addEventListener('click', () => {
        cube.style.animation = 'toBottomFace 0.5s ease-in-out forwards';
    });
};

//Funcion efecto de sonido controles
export function controlSoundEffect(){
    const soundEffect = document.getElementById('soundEffect');
   
    leftButton.addEventListener('click', () => {
        soundEffect.volume = 0.2
        soundEffect.play();
    });
    rightButton.addEventListener('click', () => {
        soundEffect.volume = 0.2
        soundEffect.play();
    });
    topButton.addEventListener('click', () => {
        soundEffect.volume = 0.2
        soundEffect.play();
    });
    bottomButton.addEventListener('click', () => {
        soundEffect.volume = 0.2
        soundEffect.play();
    });
    frontButton.addEventListener('click', () => {
        soundEffect.volume = 0.2
        soundEffect.play();
    });
    backButton.addEventListener('click', () => {
        soundEffect.volume = 0.2
        soundEffect.play();
    });
};

//Función aparición y desaparición modal Papiro
export function controlPapyrus(){
    const modalPapyrus = document.getElementById('notesModal');
    const papyrusButton = document.getElementById('papyrusIcon');
    const closeModal = document.querySelector('#closePapyrusModal');
    const importantIcon = document.getElementById('importantIcon');
    const openPapyrusSound = document.getElementById('openPapyrus');
    const closePapyrusSound = document.getElementById('closePapyrus');

    //Abrir
    papyrusButton.addEventListener('click', () => {
        openPapyrusSound.play();
        importantIcon.style.display = 'none';
        modalPapyrus.style.display = 'flex';
        modalPapyrus.style.animation = 'openModalPapyrus 1s ease forwards';

        //Eliminamos el evento listener para que la animacion no se repita
        modalPapyrus.removeEventListener('animationend', closeAnimation);
    });

    //Cerrar
    closeModal.addEventListener('click', () => {
        closePapyrusSound.play();
        modalPapyrus.style.animation = 'closeModalPapyrus 1s ease forwards';

        modalPapyrus.addEventListener('animationend', closeAnimation);
    });

    function closeAnimation(){
        modalPapyrus.style.display = 'none';
    };
};

//Funcion del juego de luces
export function lightGame(){
    //Mensajes y localstorage
    const errorMessage = document.querySelector('.errorMessage');
    const enigmaSuccess = document.getElementById('enigmaSuccess');
    const frontFace = document.querySelector('.front');
    const errorSound = document.getElementById('errorSound');
    const frontFaceCompletedOrNot = localStorage.getItem("frontFace");
    
    //Botones
    const knob2 = document.getElementById('knob2');
    const knob3 = document.getElementById('knob3');
    const knob4 = document.getElementById('knob4');
    const knob5 = document.getElementById('knob5');
    const knob6 = document.getElementById('knob6');
    const knob7 = document.getElementById('knob7');
    const knob8 = document.getElementById('knob8');
    const knob9 = document.getElementById('knob9');
    const knob10 = document.getElementById('knob10');

    //Números secretos
    const p6 = document.getElementById('number6'); 
    const p1 = document.getElementById('number1'); 
    const p7 = document.getElementById('number7'); 
    const p4 = document.getElementById('number4'); 

    //Luces
    const light1 = document.querySelector('.light1');
    const light2 = document.querySelector('.light2');
    const light3 = document.querySelector('.light3');
    const light4 = document.querySelector('.light4');
    const light5 = document.querySelector('.light5');
    const light6 = document.querySelector('.light6');
    const light7 = document.querySelector('.light7');
    const light8 = document.querySelector('.light8');
    const light9 = document.querySelector('.light9');
    const light10 = document.querySelector('.light10');

    //Contador
    let contador = 0;

    //Consultamos en Localstorage si el enigma está completo o no
    if(frontFaceCompletedOrNot == "Completed"){
        frontFace.classList.add('backgroundSuccess');
        light1.classList.add('backgroundOn');
        light2.classList.add('backgroundOn');
        light3.classList.add('backgroundOn');
        light4.classList.add('backgroundOn');
        light5.classList.add('backgroundOn');
        light6.classList.add('backgroundOn');
        light7.classList.add('backgroundOn');
        light8.classList.add('backgroundOn');
        light9.classList.add('backgroundOn');
        light10.classList.add('backgroundOn');
        p7.style.display = 'block';
        p1.style.display = 'block';
        p6.style.display = 'block';
        p4.style.display = 'block';
    } else {
        const knob1 = document.getElementById('knob1');
        knob1.addEventListener('click', () => {
            if(contador == 6){
                light7.classList.add('backgroundOn');
                p4.style.display = 'block';
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block';
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });
        knob2.addEventListener('click', () => {
            if(contador == 0){
                errorMessage.style.display = 'none'
                light1.classList.add('backgroundOn');
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block';
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });
        knob3.addEventListener('click', () => {
            if(contador == 8){
                errorMessage.style.display = 'none';
                light9.classList.add('backgroundOn');
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block';
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });
        knob4.addEventListener('click', () => {
            if(contador == 5){
                errorMessage.style.display = 'none'
                light6.classList.add('backgroundOn');
                p7.style.display = 'block';
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block'
                errorMessage.classList.add('animationMessageError')
                hiddeNumbers();
                lightRemove();
            }
        });
        knob5.addEventListener('click', () => {
            if(contador == 2){
                errorMessage.style.display = 'none';
                light3.classList.add('backgroundOn');
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block'
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });
        knob6.addEventListener('click', () => {
            if(contador == 3){
                errorMessage.style.display = 'none';
                light4.classList.add('backgroundOn');
                p6.style.display = 'block';
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block';
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });
        knob7.addEventListener('click', () => {
            if(contador == 7){
                errorMessage.style.display = 'none';
                light8.classList.add('backgroundOn');
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block';
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });
        knob8.addEventListener('click', () => {
            if(contador == 9){
                errorMessage.style.display = 'none';
                light10.classList.add('backgroundOn');
                contador++;
                enigmaSuccess.style.display = 'flex';
                frontFace.classList.add('backgroundSuccess');
            } else {
                contador = 0;
                errorMessage.style.display = 'block';
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });
        knob9.addEventListener('click', () => {
            if(contador == 1){
                errorMessage.style.display = 'none';
                light2.classList.add('backgroundOn');
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block';
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });
        knob10.addEventListener('click', () => {
            if(contador == 4){
                errorMessage.style.display = 'none';
                light5.classList.add('backgroundOn');
                p1.style.display = 'block';
                contador++;
            } else {
                contador = 0;
                errorMessage.style.display = 'block';
                errorMessage.classList.add('animationMessageError');
                hiddeNumbers();
                lightRemove();
            }
        });

        //Guardamos progreso de la cara "front"
        const saveFront = document.getElementById('saveFront');
        
        saveFront.addEventListener('click', () => {
            lvlCompleted.style.display = 'block';
            localStorage.setItem('frontFace', "Completed");
        });
    };

    function lightRemove(){
        errorSound.volume = '0.1'
        errorSound.play();
        light1.classList.remove('backgroundOn');
        light2.classList.remove('backgroundOn');
        light3.classList.remove('backgroundOn');
        light4.classList.remove('backgroundOn');
        light5.classList.remove('backgroundOn');
        light6.classList.remove('backgroundOn');
        light7.classList.remove('backgroundOn');
        light8.classList.remove('backgroundOn');
        light9.classList.remove('backgroundOn');
        light10.classList.remove('backgroundOn');
    };

    function hiddeNumbers(){
        p7.style.display = 'none';
        p1.style.display = 'none';
        p6.style.display = 'none';
        p4.style.display = 'none';
    };
};

//Funcion codigo del back face
export function verifyNumber(){
        const verifyButton = document.getElementById('verifyButton');
        const numberErrorMessageClass = document.querySelector('.numberErrorMessage');
        const numberSuccess = document.getElementById('numberSuccess');
        const backFace = document.querySelector('.back');
        const number6174 = document.getElementById('number6174')

        //Recuperamos dato del localstorage
        const backFaceCompletedOrNot = localStorage.getItem('backFace');

        if(backFaceCompletedOrNot == 'Completed'){
            backFace.classList.add('backBackgroundSuccess');
            verifyButton.style.display = 'none';
            number6174.style.display = 'block'
        } else {
            verifyButton.addEventListener('click', () => {
            
                const inputNumber = document.getElementById('number').value;
                const correctNumber = 6174;
                
                if(inputNumber == correctNumber){
                    numberSuccess.style.display = 'flex';
                    numberErrorMessageClass.style.display = 'none';
                    backFace.classList.add('backBackgroundSuccess');
                } else {
                    numberErrorMessageClass.style.display = 'block';
                    numberErrorMessageClass.classList.add('animationMessageError');
                };
            });
    
            //Guardamos progreso con localstorage
            const saveBack = document.getElementById('saveBack');
    
            saveBack.addEventListener('click', () => {
                localStorage.setItem('backFace', "Completed");
            });
        };
};

//Función enigma Cesar
export function enigmaCesar(){

    const topFace = document.querySelector('.top');
    const countdown = document.querySelector('.countdown');
    const topSuccess = document.querySelector('.topSuccess');
    const verifyLetterButton = document.getElementById('verifyLetterButton');
    const titleFaceTop = document.getElementById('titleFaceTop');
    const saveGameSound = document.getElementById('saveGameSound');
    const lvlUpSound = document.getElementById('lvlUp');

    const letterDValue = document.getElementById('letterD');
    const letterVValue = document.getElementById('letterV');
    const letterSValue = document.getElementById('letterS');
    const letterHValue = document.getElementById('letterH');
    const letterUValue = document.getElementById('letterU');
    const letterGValue = document.getElementById('letterG');
    const letterH_2Value = document.getElementById('letterH_2');
    const letterU_2Value = document.getElementById('letterU_2');

    //Recuperamos datos de localstorage
    const topFaceCompletedOrNot = localStorage.getItem('topFace');

    if(topFaceCompletedOrNot == "Completed"){
        backgroundAnimation();
        countdown.style.display = 'none';
        topSuccess.style.display = 'none';
        letterDValue.value = 'A';
        letterDValue.disabled = true;
        letterVValue.value = 'S';
        letterVValue.disabled = true;
        letterSValue.value = 'P';
        letterSValue.disabled = true;
        letterHValue.value = 'E';
        letterHValue.disabled = true;
        letterUValue.value = 'R';
        letterUValue.disabled = true;
        letterGValue.value = 'D';
        letterGValue.disabled = true;
        letterH_2Value.value = 'E';
        letterH_2Value.disabled = true;
        letterU_2Value.value = 'R';
        letterU_2Value.disabled = true;
        verifyLetterButton.style.display = 'none';
        titleFaceTop.style.display = 'none';
        setTimeout(() => {clearInterval(countdownSeconds)});
    } else {
        const formLetters = document.getElementById('formLetters')

        formLetters.addEventListener('submit', (e) => {
            e.preventDefault();

            const letterD = document.querySelector('#letterD').value;
            const letterV = document.querySelector('#letterV').value;
            const letterS = document.querySelector('#letterS').value;
            const letterH = document.querySelector('#letterH').value;
            const letterU = document.querySelector('#letterU').value;
            const letterG = document.querySelector('#letterG').value;
            const letterH_2 = document.querySelector('#letterH_2').value;
            const letterU_2 = document.querySelector('#letterU_2').value;

            let contador = 0;

            if (letterD == 'A' || letterD == 'a'){
                letterDValue.value = 'A'
                letterDValue.disabled = true;
                contador++;
            } else {
                resetLetters();
            }

            if(letterV == 'S' || letterV == 's'){
                letterVValue.value = 'S'
                letterVValue.disabled = true;
                contador++;
            } else {
                resetLetters();
            }

            if(letterS == 'P' || letterS == 'p'){
                letterSValue.value = 'P'
                letterSValue.disabled = true;
                contador++;
            } else {
                resetLetters();
            }

            if(letterH == 'E' || letterH == 'e'){
                letterHValue.value = 'E'
                letterHValue.disabled = true;
                contador++;
            } else {
                resetLetters();
            }

            if(letterU == 'R' || letterU == 'r'){
                letterUValue.value = 'R'
                letterUValue.disabled = true;
                contador++;
            } else {
                resetLetters();
            }

            if(letterG == 'D' || letterG == 'd'){
                letterGValue.value = 'D'
                letterGValue.disabled = true;
                contador++;
            } else {
                resetLetters();
            }

            if(letterH_2 == 'E' || letterH_2 == 'e'){
                letterH_2Value.value = 'E'
                letterH_2Value.disabled = true;
                contador++;
            } else {
                resetLetters();
            }

            if(letterU_2 == 'R' || letterU_2 == 'r'){
                letterU_2Value.value = 'R'
                letterU_2Value.disabled = true;
                contador++;
            } else {
                resetLetters();
            }

            if(contador == 8){
                setTimeout(() => {clearInterval(countdownSeconds)});
                topSuccess.style.display = 'flex';
            } else {
                console.log('quiz incompleto');
            }
            //Efecto de sonido y background
            lvlUpSound.play();

            //Guardamos progreso en localstorage
            const saveTop = document.getElementById('saveTop');
            
            saveTop.addEventListener('click', () => {
                topSuccess.style.display = 'none';
                titleFaceTop.style.display = 'none';
                countdown.style.display = 'none';
                verifyLetterButton.style.display = 'none';
                backgroundAnimation();
                saveGameSound.play();
                localStorage.setItem('topFace', "Completed");
            });

            //Función de resetear los inputs
            function resetLetters(){
                letterDValue.value = null;
                letterDValue.disabled = false;
                letterVValue.value = null;
                letterVValue.disabled = false;
                letterSValue.value = null;
                letterSValue.disabled = false;
                letterHValue.value = null;
                letterHValue.disabled = false;
                letterUValue.value = null;
                letterUValue.disabled = false;
                letterGValue.value = null;
                letterGValue.disabled = false;
                letterH_2Value.value = null;
                letterH_2Value.disabled = false;
                letterU_2Value.value = null;
                letterU_2Value.disabled = false;
            };
        });   
    };
    
    //Intervalo cuenta regresiva
    let seconds = 20;

    let countdownSeconds = setInterval(() => {
        seconds--;
        countdown.innerHTML = seconds;
        if(seconds == 0){
            letterDValue.value = null;
            letterDValue.disabled = false;
            letterVValue.value = null;
            letterVValue.disabled = false;
            letterSValue.value = null;
            letterSValue.disabled = false;
            letterHValue.value = null;
            letterHValue.disabled = false;
            letterUValue.value = null;
            letterUValue.disabled = false;
            letterGValue.value = null;
            letterGValue.disabled = false;
            letterH_2Value.value = null;
            letterH_2Value.disabled = false;
            letterU_2Value.value = null;
            letterU_2Value.disabled = false;
            seconds = 20;
        }
    }, 1000);
};

//Animación final
export function finalAnimation(){
    const probamos = document.getElementById('probamos');
    const finalEffectAnimation = document.getElementById('cubeVibrationEffect');
    const contNotesRight = document.getElementById('contNotesRight');
    const cubeControls = document.getElementById('cubeControls');
    const finalMessage = document.getElementById('finalMessage');
    const musicFinalMessage = document.getElementById('musicFinalMessage')
    const messageFinal = document.getElementById('messageFinal');
    const finalCredits = document.getElementById('finalCredits');
    const monster = document.getElementById('monster');
    const musicCreditsFinal = document.getElementById('musicCredits');
    const finalButton = document.getElementById('finalButton');
    const jumpScareSound = document.getElementById('jumpScareSound');
    
    probamos.addEventListener('click', () => {
        contNotesRight.style.animation = 'contNotesDissappears 1s ease forwards'; 
        cubeControls.style.animation = 'controlsDissappears 1s ease forwards';
        cube.style.animation = 'cubeDissappears 2s forwards ease';
        finalEffectAnimation.play();
        finalMessage.style.animation = 'finalMessage 1s forwards ease'
        finalMessage.style.animationDelay = '5.5s'
        musicFinalMessage.play();
        messageFinal.style.animation = 'finalMessageDissappears 30s forwards ease'
        messageFinal.style.animationDelay = '5.5s' 
        monster.style.animation = 'monsterEffect 30s forwards ease'
        monster.style.animationDelay = '5.5s';
        musicCreditsFinal.play();
        finalCredits.style.display = 'flex';
        finalCredits.style.animation = 'finalCredits 36s forwards ease';
        finalCredits.style.animationDelay = '33s';
        finalButton.style.display = 'block';
        finalButton.style.animation = 'finalButton 5s infinite ease';
        finalButton.style.animationDelay = '45s';
    });

    finalButton.addEventListener('click', () => {
        monster.style.animation = 'finalJumpScare 0.8s ease forwards';
        finalCredits.style.display = 'none';
        finalButton.style.display = 'none';
        jumpScareSound.play();

        monster.addEventListener('animationend', redirectToGame);
    });

    function redirectToGame(){
        location.href = "/src/views/game.html"
    };
};

//Funcion de animación del fondo al pasar de nivel
function backgroundAnimation(){
    const topLeft = document.getElementById('leftTop');
    const topRight = document.querySelector('.rightTop');
    const bottomLeft = document.querySelector('.leftBottom');
    const rightBottom = document.querySelector('.rightBottom');
 
    topLeft.style.animation = 'leftTop 2s ease-in-out forwards';
    topRight.style.animation = 'rightTop 2s ease-in-out forwards';
    bottomLeft.style.animation = 'leftBottom 2s ease-in-out forwards';
    rightBottom.style.animation = 'rightBottom 2s ease-in-out forwards';
};