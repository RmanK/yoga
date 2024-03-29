window.addEventListener('DOMContentLoaded', function() {
 'use strict';

 let tab = document.querySelectorAll('.info-header-tab'),
     info = document.querySelector('.info-header'),
     tabContent = document.querySelectorAll('.info-tabcontent');

     function hideTabContent(a) {
         for (let i = a; i < tabContent.length; i++) {
             tabContent[i].classList.remove('show');
             tabContent[i].classList.add('hide');
         }
     }

     hideTabContent(1);

     function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show'); 
        }
     }

     info.addEventListener('click', function(event) {
         let target = event.target;
         if (target && target.classList.contains('info-header-tab')) {
             for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
             }
         }
     });

     // timer
//     let deadline = '2019-06-20';
    
//     function getTimeRemaining (endTime) {
//         let t = Date.parse(endTime) - Date.parse(new Date()),
//             seconds = Math.floor((t/1000) % 60),
//             minutes = Math.floor((t/1000/60) % 60),
//             hours = Math.floor ((t/1000/60/60));

//         return {
//             'total' : t,
//             'hours' : hours,
//             'minutes' : minutes,
//             'seconds' : seconds
//         };
//     }

//     function setClock (id, endTime) {
//         let timer = document.getElementById(id),
//             hours = timer.querySelector('.hours'),
//             minutes = timer.querySelector('.minutes'),
//             seconds = timer.querySelector('.seconds'),
//             timeInterval = setInterval (updateClock, 1000)

//         function updateClock () {
//             let t = getTimeRemaining (endTime);
//             hours.textContent = t.hours;
//             minutes.textContent = t.minutes;
//             seconds.textContent = t.seconds;

//             if (t.total <= 0) {
//                 clearInterval (timeInterval)
//             }
//         }

//     }
//     setClock('timer', deadline);


let finishTime = '2019-06-19';

function getTimeRemaining (endTime) {
    let t = Date.parse(endTime)-Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor(t/1000/60/60);

    return {
        'total' : t,
        'seconds' : seconds,
        'minutes' : minutes,
        'hours' : hours
    };
}
  function setClock (id, endTime) {
    let timer = document.getElementById(id),
        seconds = timer.querySelector('.seconds'),
        minutes = timer.querySelector('.minutes'),
        hours = timer.querySelector ('.hours'),
        timeInterval = setInterval(updateClock, 1000);
    
    function updateClock () {
        let t = getTimeRemaining(endTime);
        seconds.textContent = t.seconds;
        if (t.seconds < 10) {
            seconds.textContent = '0' + t.seconds
        }
        minutes.textContent = t.minutes;
        if (t.minutes < 10) {
            minutes.textContent = '0' + t.minutes
        }
        hours.textContent = t.hours;
        if (t.hours < 10) {
            hours.textContent = '0' + t.hours
        }

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
  }  

    setClock ('timer', finishTime);

});