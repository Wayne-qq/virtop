
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const logoText = document.getElementById('logo-text');
        const text = 'Token';
        let index = 0;

        logoText.style.visibility = 'visible'; // Показуємо текст після затримки

        function typeWriter() {
            if (index < text.length) {
                logoText.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, 200); // Швидкість друкування (100 мс на символ)
            }
        }

        typeWriter();
    }, 100); // Затримка 1.2 секунди
});





document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var preloader = document.querySelector(".main__preloader");
        preloader.classList.add("hidden");
    }, 100); // Встановлюємо затримку в 2.5 секунди
});






document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.querySelector('.close__error-sub');
    const mainElement = document.querySelector('.main__sub');

    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        mainElement.classList.add('hidden');
    });
});










document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav__link');
    const userLinks = document.querySelectorAll('.main__user-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = link.getAttribute('data-target');
            showPage(target);
            setActiveLink(link);
        });
    });

    userLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            showPage('main__user');
            setActiveLink(null);
        });
    });

    function showPage(className) {
        let pages = document.querySelectorAll('main');
        pages.forEach(page => {
            if (page.classList.contains(className)) {
                page.style.display = 'block';
            } else {
                page.style.display = 'none';
            }
        });
    }

    function setActiveLink(activeLink) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});



document.addEventListener('DOMContentLoaded', function() {
    // Отримання кнопок
    var timerBtn = document.querySelector('.timer__shh');
    var refBtn = document.querySelector('.ref__back');
    var mainTime = document.querySelector('.main__time');

    // Додавання обробника події для кнопки timer__shh
    timerBtn.addEventListener('click', function() {
        mainTime.classList.add('hidden'); // Додаємо клас, щоб сховати main__time
    });

    // Додавання обробника події для кнопки ref__back
    refBtn.addEventListener('click', function() {
        mainTime.classList.remove('hidden'); // Видаляємо клас, щоб показати main__time
    });
});












const targetDate = new Date();

targetDate.setDate(targetDate.getDate() + 0);
targetDate.setHours(0);                         
targetDate.setMinutes(0);                      
targetDate.setSeconds(0);                       

const timer = document.getElementById('timer');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const mainTime = document.querySelector('.main__time');
const mainRef = document.querySelector('.main__ref');

function updateTime() {
  const now = new Date();
  const timeLeft = targetDate.getTime() - now.getTime();

  const daysRemaining = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursRemaining = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesRemaining = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsRemaining = Math.floor((timeLeft % (1000 * 60)) / 1000);

  days.textContent = `${daysRemaining}D`;
  hours.textContent = `${hoursRemaining}h`;
  minutes.textContent = `${minutesRemaining}m`;
  seconds.textContent = `${secondsRemaining}s`;

  if (timeLeft <= 0) {
    clearInterval(intervalId);
    mainTime.classList.add('hidden');
    mainRef.classList.add('hidden');
  }
}

const intervalId = setInterval(updateTime, 1000);






document.addEventListener("DOMContentLoaded", function() {
  // Отримати елементи
  var menu = document.querySelector('.menu');
  var mainPreloader = document.querySelector('.main__preloader');
  var mainTime = document.querySelector('.main__time');
  var mainRef = document.querySelector('.main__ref');
  var mainSub = document.querySelector('.main__sub');
  var mainCode = document.querySelector('.main__code'); // Додано новий елемент

  // Функція перевірки стану всіх елементів
  function checkAllHidden() {
      if (mainPreloader.classList.contains('hidden') &&
          mainTime.classList.contains('hidden') &&
          mainRef.classList.contains('hidden') &&
          mainSub.classList.contains('hidden') &&
          mainCode.classList.contains('hidden')) { // Додано перевірку нового елементу
          menu.style.position = 'fixed';
      } else {
          menu.style.position = 'relative';
      }
  }

  // Створити спостерігача змін класів
  var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
          if (mutation.attributeName === 'class') {
              checkAllHidden();
          }
      });
  });

  // Налаштування спостерігача
  var config = {
      attributes: true,
      attributeFilter: ['class']
  };

  // Почати спостереження за всіма main елементами
  observer.observe(mainPreloader, config);
  observer.observe(mainTime, config);
  observer.observe(mainRef, config);
  observer.observe(mainSub, config);
  observer.observe(mainCode, config); // Додано спостереження за новим елементом

  // Перевірити стан елементів на початку
  checkAllHidden();
});

document.getElementById('custom-input').addEventListener('input', function() {
  if (this.value) {
      this.classList.add('modified');
  } else {
      this.classList.remove('modified');
  }
});



document.querySelector('.code__skip').addEventListener('click', function() {
  document.querySelector('.main__code').classList.toggle('hidden');
});




// document.addEventListener('DOMContentLoaded', () => {
//   const boostButtons = document.querySelectorAll('.mining__boost');
//   const popup = document.querySelector('.mining__popup');
//   const closeButton = document.querySelector('.mining__popup-clbtn');
//   const buyButton = popup.querySelector('.mining__popup-buy');
//   const popupName = popup.querySelector('.mining__popup-name');
//   const popupPrice = popup.querySelector('.mining__popup-pricetxt');
//   const popupContent = popup.querySelector('.mining__popup-content'); // Якщо такого класу немає, додайте його до контейнера з вмістом попапу в HTML.

//   let selectedBoostMultiplier = 1;
//   let selectedBoostPrice = 0;

//   let miningNew = 50; // Початкове значення miningNew
//   let balance = 100000; // Приклад початкового балансу

//   // Додаємо подію для кожної кнопки "Boost"
//   boostButtons.forEach(boostButton => {
//       boostButton.addEventListener('click', (event) => {
//           event.stopPropagation(); // Запобігаємо спливанню події
//           const info = boostButton.querySelector('.boost__info').textContent;
//           const price = boostButton.querySelector('.boost_price').textContent.replace('k', '000');

//           popupName.textContent = info;
//           popupPrice.textContent = price;

//           // Зберігаємо вибраний множник і ціну
//           if (info.includes('X2')) {
//               selectedBoostMultiplier = 2;
//           } else if (info.includes('X10')) {
//               selectedBoostMultiplier = 10;
//           } else if (info.includes('X20')) {
//               selectedBoostMultiplier = 20;
//           } else if (info.includes('X50')) {
//               selectedBoostMultiplier = 50;
//           }

//           selectedBoostPrice = parseInt(price);

//           popup.classList.add('show');
//           popup.style.bottom = '-20px'; // Встановимо положення попапу
//       });
//   });

//   // Додаємо подію для кнопки закриття попапу
//   closeButton.addEventListener('click', () => {
//       closePopup();
//   });

//   // Додаємо подію для закриття попапу при кліку за його межами
//   document.addEventListener('click', (event) => {
//       if (!popup.contains(event.target)) {
//           closePopup();
//       }
//   });

//   // Додаємо подію для кнопки покупки
//   buyButton.addEventListener('click', () => {
//       if (balance >= selectedBoostPrice) {
//           balance -= selectedBoostPrice;
//           miningNew *= selectedBoostMultiplier;
//           console.log(`New mining power: ${miningNew}, Remaining balance: ${balance}`);
//           closePopup();
//       } else {
//           alert('Недостатньо коштів для покупки');
//       }
//   });

//   // Функція для закриття попапу
//   function closePopup() {
//       popup.classList.remove('show');
//       popup.style.bottom = '-290px';
//   }
// });





// document.addEventListener("DOMContentLoaded", function() {
//     Telegram.WebApp.ready();

//     const userData = Telegram.WebApp.initDataUnsafe.user;

//     function updateUserText(selector, text) {
//         const elements = document.querySelectorAll(selector);
//         elements.forEach(element => {
//             element.textContent = text;
//         });
//     }

//     if (userData) {
//         let username;
//         if (userData.username && userData.username.startsWith('@')) {
//             username = userData.username;
//         } else if (userData.first_name) {
//             username = userData.first_name;
//         } else {
//             username = 'error';
//         }

//         updateUserText(".home__user", username);
//         updateUserText(".mining__userc", username);
//         updateUserText(".friend__userc", username);
//         updateUserText(".task__userc", username);
//         updateUserText(".home__userc", username);

//         // Додаємо користувача до бази даних Firebase
//         addUserToDatabase(username);
//     } else {
//         updateUserText(".home__user", 'error');
//         updateUserText(".mining__userc", 'error');
//         updateUserText(".friend__userc", 'error');
//         updateUserText(".task__userc", 'error');
//         updateUserText(".home__userc", 'error');
//     }
// });








// document.addEventListener("DOMContentLoaded", function() {
//     Telegram.WebApp.ready();

//     const userData = Telegram.WebApp.initDataUnsafe.user;
//     let name; // оголошуємо змінну для збереження імені

//     function updateUserText(selector, text) {
//         const elements = document.querySelectorAll(selector);
//         elements.forEach(element => {
//             element.textContent = text;
//         });
//     }

//     if (userData) {
//         if (userData.username && userData.username.startsWith('@')) {
//             name = userData.username; // присвоюємо ім'я з username
//         } else if (userData.first_name) {
//             name = userData.first_name; // присвоюємо ім'я з first_name
//         } else {
//             name = 'error'; // якщо не вдалося знайти ім'я, присвоюємо 'error'
//         }

//         // оновлюємо тексти за допомогою функції updateUserText
//         updateUserText(".home__user", name);
//         updateUserText(".mining__userc", name);
//         updateUserText(".friend__userc", name);
//         updateUserText(".task__userc", name);
//         updateUserText(".home__userc", name);
//     } else {
//         name = 'error'; // якщо немає даних про користувача, присвоюємо 'error'
//         // оновлюємо тексти за допомогою функції updateUserText
//         updateUserText(".home__user", name);
//         updateUserText(".mining__userc", name);
//         updateUserText(".friend__userc", name);
//         updateUserText(".task__userc", name);
//         updateUserText(".home__userc", name);
//     }
// });





// Відключення контекстного меню
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

// Відключення вибору тексту
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
});












  // // Функція для заборони виділення тексту та копіювання
  // function disableCopying() {
  //   // Заборонити виділення тексту на сторінці
  //   document.addEventListener('selectstart', function(e) {
  //     e.preventDefault();
  //   });

  //   // Заборонити копіювання тексту та інших даних
  //   document.addEventListener('copy', function(e) {
  //     e.preventDefault();
  //   });

  //   // Опційно: заборонити клік правою кнопкою миші
  //   document.addEventListener('contextmenu', function(e) {
  //     e.preventDefault();
  //   });
  // }

  // // Виклик функції після завантаження сторінки
  // window.onload = disableCopying;





// Отримуємо всі кнопки friend__btn
const btns1 = document.querySelectorAll('.friend__btn');
const popup1 = document.querySelector('.friend__popup');
const popupInfo1 = document.querySelector('.friend__popup-name');
const popupPrice1 = document.querySelector('.friend__popup-pricetxt');
const closeBtn1 = document.querySelector('.friend__popup-clbtn');

btns1.forEach(btn1 => {
    btn1.addEventListener('click', function(event1) {
        const actualBtn1 = event1.target.closest('.friend__btn');
        const btnText1 = actualBtn1.querySelector('.friend__btn-info').textContent;
        const btnPrice1 = actualBtn1.querySelector('.friend__btn-num').textContent;
        popupInfo1.textContent = btnText1;
        popupPrice1.textContent = btnPrice1;
        popup1.classList.add('show');
    });
});

closeBtn1.addEventListener('click', function() {
    popup1.classList.remove('show');
});

document.addEventListener('click', function(event2) {
    if (!popup1.contains(event2.target) && !event2.target.closest('.friend__btn')) {
        popup1.classList.remove('show');
    }
});






// Отримуємо всі кнопки task__btn
const taskBtns = document.querySelectorAll('.task__btn');
// Отримуємо popup для завдань
const taskPopup = document.querySelector('.task__popup');
// Отримуємо елемент, в якому буде відображатися інформація про завдання
const taskPopupName = document.querySelector('.task__popup-name');
// Отримуємо елемент, в якому буде відображатися ціна
const taskPopupPrice = document.querySelector('.task__popup-pricetxt');
// Отримуємо кнопку закриття popup для завдань
const taskCloseBtn = document.querySelector('.task__popup-clbtn');

// Додаємо обробник події для кожної кнопки завдання
taskBtns.forEach(btn => {
    btn.addEventListener('click', function(event) {
        const actualBtn = event.target.closest('.task__btn');
        // Отримуємо текст з кнопки завдання
        const btnText = actualBtn.querySelector('.btn__info').textContent;
        // Отримуємо ціну з кнопки завдання
        const btnPrice = actualBtn.querySelector('.task__num').textContent;
        // Змінюємо вміст popup в залежності від тексту кнопки завдання
        taskPopupName.textContent = btnText;
        // Змінюємо вміст popup в залежності від ціни кнопки завдання
        taskPopupPrice.textContent = btnPrice;
        // Відображаємо popup для завдань
        taskPopup.classList.add('show');
    });
});

// Додаємо обробник події для кнопки закриття popup для завдань
taskCloseBtn.addEventListener('click', function() {
    taskPopup.classList.remove('show');
});

// Додаємо обробник події для кліка на документі для закриття popup для завдань
document.addEventListener('click', function(event) {
    // Перевіряємо, чи клік відбувся поза popup для завдань
    if (!taskPopup.contains(event.target) && !event.target.closest('.task__btn')) {
        // Закриваємо popup для завдань
        taskPopup.classList.remove('show');
    }
});






document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav__link');
    const texts = document.querySelectorAll('.menu__list-text');

    function setActiveLink(activeLink) {
        links.forEach(link => {
            const text = link.querySelector('.menu__list-text');
            if (link === activeLink) {
                link.classList.add('active');
                text.classList.add('active');
            } else {
                link.classList.remove('active');
                text.classList.remove('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            setActiveLink(link);
        });
    });

    // Set the initial active link to the "Home" button (the first link)
    if (links.length > 0) {
        setActiveLink(links[0]);
    }
});





// function formatNumberWithSpaces(value) {
//     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
// }

// // Функція для обробки натискання
// function handleTap(x, y) {
//     const floatingNumber = document.createElement('div');
//     floatingNumber.classList.add('floating-number');
//     floatingNumber.innerHTML = formatNumberWithSpaces(tapFarm); // відображення значення, яке додається

//     document.body.appendChild(floatingNumber);

//     floatingNumber.style.left = `${x}px`;
//     floatingNumber.style.top = `${y}px`;

//     // Збільшуємо лічильник натискань
//     tapCount++;

//     // Оновлюємо баланс
//     balance += tapFarm;

//     // Оновлюємо текст балансу з використанням форматування з пробілами
//     document.getElementById('balanceTxt').innerHTML = formatNumberWithSpaces(balance);

//     setTimeout(() => {
//         floatingNumber.remove();
//     }, 1000); // Час має відповідати тривалості анімації
// }

// // Додавання обробника подій для кліка мишею
// document.getElementById('mainBtn').addEventListener('click', function(event) {
//     handleTap(event.clientX, event.clientY);
// });

// // Додавання обробника подій для торкань
// document.getElementById('mainBtn').addEventListener('touchstart', function(event) {
//     event.preventDefault(); // Запобігаємо стандартній обробці події
//     const touches = event.touches;
//     for (let i = 0; i < Math.min(touches.length, 3); i++) {
//         handleTap(touches[i].clientX, touches[i].clientY);
//     }
// });






// const miningInfo = document.querySelector('.home__mining-info');
// const miningButton = document.querySelector('.home__mining');
// const miningTimer = document.querySelector('.home__mining-num');

// // Задаємо початкові значення
// let miningProgress = 0;
// let timerSeconds = 10; // 10 секунд для тестування
// let timerInterval;

// // Функція для оновлення значень
// function updateValues() {
//     miningInfo.textContent = `${miningProgress.toFixed(2)} / 50`;
//     miningButton.textContent = `${Math.round((miningProgress / 50) * 100)}%`;

//     if (timerSeconds <= 0) {
//         miningButton.textContent = 'Claim';
//         miningButton.classList.add('ended');
//         clearInterval(timerInterval); // Зупиняємо інтервал після завершення таймеру
//         miningButton.disabled = false; // Дозволяємо натискати кнопку
//         return;
//     }

//     const hours = Math.floor(timerSeconds / 3600);
//     const minutes = Math.floor((timerSeconds % 3600) / 60);
//     const seconds = timerSeconds % 60;
//     miningTimer.textContent = `${hours}h ${minutes}m ${seconds}s`;

//     timerSeconds--;
//     miningProgress = Math.min(50, miningProgress + 50 / 10); // Збільшення прогресу кожну секунду
// }

// // Функція для запуску таймеру
// function startTimer() {
//     miningProgress = 0;
//     timerSeconds = 10; // Скидаємо таймер на 10 секунд
//     miningButton.classList.remove('ended');
//     miningButton.disabled = true; // Блокуємо кнопку під час роботи таймеру
//     updateValues(); // Викликаємо функцію один раз для початку
//     timerInterval = setInterval(() => {
//         updateValues();
//     }, 1000);
// }

// // Додаємо обробник подій для кнопки
// miningButton.addEventListener('click', () => {
//     if (miningButton.classList.contains('ended')) {
//         startTimer(); // Запускаємо таймер знову
//     }
// });

// // Запускаємо таймер при завантаженні сторінки
// startTimer();




// Оновлення сторінки для створення нового користувача
async function refreshPage() {
    try {
      // Виклик функції для створення нового користувача
      await createNewUser();
      // Оновлення сторінки
      location.reload();
    } catch (error) {
      console.error("Error creating new user:", error);
    }
  }
  
  // Виклик функції після завантаження сторінки
  document.addEventListener("DOMContentLoaded", () => {
    refreshPage();
  });
  




//   let userId, userName;

// if (user) {
//   userId = user.id;
//   if (user.username && user.username.startsWith('@')) {
//     userName = user.username;
//   } else if (user.first_name) {
//     userName = user.first_name;
//   } else {
//     userName = 'error';
//   }
// } else {
//   userId = 'user0';
//   userName = 'error';
// }

// // Тут ви маєте записати userId та userName в базу даних з полями name та id
