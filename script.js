'use strict';

var nowTime = new Date();

var nowInMillsec = Date.now();


/// это файл с исходными данными
var dataOfForecastWeather2 = []; 
var dataOfForecastWeather2 = [
{
    date: 1549845124331,
    temperature: {
        night: -33,
        day: 27,
    },
    
    cloudiness: 'Облачно',
    snow: true,
    rain: true,
  },
    
    
  {
      date: 1549948724331,
    temperature: 
      {
      night: 44,
      day: 33,
    },
      
    cloudiness: 'Ясно',
    snow: false,
    rain: true,
  },
    
    
  {
    date: 1550017124331,
    temperature: 
      {
      night: -80,
      day: 55,
    },
      
    cloudiness: 'Облачно',
    snow: true,
    rain: false,
  },
    
    {
    date: 1550103624331,
    temperature: 
      {
      night: 45,
      day: -41,
    },
      
    cloudiness: 'Ясно',
    snow: false,
    rain: true,
  },
];


// приведение данных даты к формату ДДММГГ для возможности сравнения текущей даты и даты из исходных данных 
var formatDateFull = function(YourDate, plusDay) {
    let dated = new Date(YourDate);
    let dd = dated.getDate();
    dd = dd + plusDay;
    if (dd < 10) dd = '0' + dd;
    let mm = dated.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = dated.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    return  dd + mm + yy;
}



var getWeekDay = function (plusDay) {
    const daysArr = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const numberWeekDay = nowTime.getDay ();    
    return daysArr[numberWeekDay+plusDay];
};


var formatDateDM = function(plusDay) {
    
    const dd = nowTime.getDate() + plusDay;
    const monthsArr = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const mm = nowTime.getMonth();
    const nameMonth = monthsArr[mm];
    return dd + ' ' + nameMonth;    
};



// функция обращения к DOM-элементу
var refreshForecast = function (parentClass, currentClass, yourText) {
    let elem = document.querySelector(parentClass).querySelector(currentClass);
    elem.textContent = yourText;
    };
// функция обращения к DOM-элементу для картинки
var refreshForecastImg = function (parentClass, currentClass, yourImg) {
    let elem = document.querySelector(parentClass).querySelector(currentClass);
    elem.setAttribute('src', yourImg);
    };


var imgSnowRain = "rainSnow.jpg";
var imgRain = "rain.jpg";
var imgSnow = "snow.jpg";
var imgClear = "clear.jpg";



// исходные данные для примера из ТЗ
var dataOfForecastWeather = [
{
    date: 1538337600000,
    temperature: {
        night: -3,
        day: 2,
    },
    
    cloudiness: 'Ясно',
    snow: true,
    rain: true,
  },
    
    
  {
      date: 1538524000000,
    temperature: 
      {
      night: 0,
      day: 4,
    },
      
    cloudiness: 'Облачно',
    snow: true,
    rain: true,
  },
    
    
  {
    date: 1538510400000,
    temperature: 
      {
      night: 0,
      day: 1,
    },
      
    cloudiness: 'Облачно',
    snow: true,
    rain: true,
  },
];



var arrayOfDayClasses = [".today", ".secondDay", ".thirdDay", ".fourthDay"];

// новый массив с отсортированными данными 
var newArrayOne = []

// создание отсортированного массива по дате
var createNewArrayForecast = function(array, newArray){
    for (var i=0; i < array.length; i++) {
    if (formatDateFull(array[i].date, 0) == formatDateFull(nowInMillsec, 0)) {
        newArray[0] = array[i]};
        if (formatDateFull(array[i].date, 0) == formatDateFull(nowInMillsec, 1)) {
        newArray[1] = array[i]};
        if (formatDateFull(array[i].date, 0) == formatDateFull(nowInMillsec, 2)) {
        newArray[2] = array[i]};
        if (formatDateFull(array[i].date, 0) == formatDateFull(nowInMillsec, 3)) {
        newArray[3] = array[i]};
        };
 };


// определение картинки погоды
var identCloudnessImg = function (array) {
    if (array[i].snow && array[i].rain) {
        return imgSnowRain
    } if (array[i].snow){
        return imgSnow
        } if (array[i].rain){
        return imgRain} 
            return imgClear};

// ображение к DOM-элементу по облачности
var identCloudness = function (array){
    refreshForecast(arrayOfDayClasses[i],".cloudiness", array[i].cloudiness)};


// применение данных из отсортированного массива
var installNewInfo = function(array){
    for (var i=0; i < array.length; i++){
        refreshForecast (arrayOfDayClasses[i], ".day", getWeekDay(i));
        refreshForecast (arrayOfDayClasses[i], ".date", formatDateDM(i));
        refreshForecast (arrayOfDayClasses[i], ".tDay", array[i].temperature.day);
        refreshForecast (arrayOfDayClasses[i], ".tNight", array[i].temperature.night);
        console.log(refreshForecast (arrayOfDayClasses[i], ".tNight", array[i].temperature.night));
        refreshForecast(arrayOfDayClasses[i], ".cloudiness", array[i].cloudiness);
        
        };
    };

// определение картинки погоды
var identImgWthr = function (array,numberOfDay){
    if (array[numberOfDay].snow && array[numberOfDay].rain) {
        return imgSnowRain
    } if (array[numberOfDay].snow){
        return imgSnow
        } if (array[numberOfDay].rain){
        return imgRain} 
            return imgClear};


// функция обращения к DOM-элементу для картинки
var refreshForecastImg = function (parentClass, currentClass, yourImg) {
    const elem = document.querySelector(parentClass).querySelector(currentClass);
    elem.setAttribute('src', yourImg);
    };

// постановка картинок 
var resultImgWthrToday = identImgWthr(dataOfForecastWeather2, 0);
refreshForecastImg (".today","img", resultImgWthrToday);
var resultImgWthSecondDay = identImgWthr(dataOfForecastWeather2, 1);
refreshForecastImg (".secondDay","img", resultImgWthSecondDay);
var resultImgWthThirdDay = identImgWthr(dataOfForecastWeather2, 2);
refreshForecastImg (".thirdDay","img", resultImgWthThirdDay);
var resultImgWthFourthDay = identImgWthr(dataOfForecastWeather2, 3);
refreshForecastImg (".fourthDay","img", resultImgWthFourthDay);


createNewArrayForecast(dataOfForecastWeather2, newArrayOne);

installNewInfo(newArrayOne);

refreshForecast(".today", ".day", "сегодня");

