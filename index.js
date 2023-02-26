


let profession = {
    'TTK': {
        website: 'www.ttk.ru',
        positions: {
            "Ведущий специалист центра управления сетями связи" : 
        ['Конфигурирование и мониторинг систем со спектральным уплотнением, систем SDH, TDM.',
        'Мониторинг и локализация проблем на системах электропитающих установок.','Координация и решение сетевых инцидентов.',
        'Оперативное взаимодействие с партнерами компании российскими и иностранными,устно и письменно.',
        'Ведение отчетности в корпоративных системах и базах данных.'],

        /* "Ведущий специалист центра технической эксплуатации сети" : 
        ['Техническая поддержка и консультирование региональных подразделений компании.',
        'Организация бесперебойной работы эксплуатирующих подразделений.','Разработка профильных нормативов и требований.'], */    
        
        "Инженер связи" : 
            
            ['Обслуживание оборудования транспортной сети: SDH Lucent Technologies, DWDM Huawei тестирование плат, снятие параметров.',
            'Эксплуатация систем гарантированного электропитания СБЭП, NTX: монтаж плат, проведение необходимых монтажных работ.',
            'Работы на ВОЛС (волоконно-оптические линии связи), проведение аварийно-восстановительных работ в нормативные сроки, сварка ВОК оборудованием Fujikura, INNO.',
            'Текущий ремонт, монтаж и измерения оптических кабелей приборами Exfo, Anritsu.',
            'Подготовка и ведение всей сопутствующей документации: схемы, паспорта, протоколы измерений. Проведение охранно-предупредительных мероприятий.']
            
        
    }
        

    },
    
}

let aboutMySelfParagraph = [
'После окончания университета в 2009г, начал свою карьеру, устроившись в компанию ТрансТелеКом, на позицию электромеханика ВОЛС в аварийно-восстановительную бригаду. Научился работать со всеми видами ВОК, проводить измерения и анализировать рефлектограммы.',
'Спустя полтора года, был переведен на позицию инженера и получил в ответственность всю ВОЛС-инфраструктуру компании в г. Ярославль и близлежащих городах области. Создал схемы кроссовых соединений для всех узлов в своей зоне ответственности, а так же подготовил схемы прокладки ВОК согласно стандартов компании.',
'В 2015 году был приглашен в Центр технической эксплуатации сетей компании, группу эксплуатации ВОЛС. И в обязанности группы входила уже экспертная работа на территории всей западной части страны. Проведена работа с регионами и выполнена ревизия загруженности всех ВОЛС компании.',
'Во второй половине 2016 года был приглашен в центр управления сетями компании, на позицию ведущего специалиста. В обязанности входил мониторинг всех систем синхронний иерархии и систем передачи данных со спектральным уплотнением на территории всей страны. Решение инцидентов и неисправностей на сетях, координация и руководство аварийных бригад. Решение проблем в том числе с иностранными партнерами.',

'<b>В свободное время изучаю технологии автотестирования и web-разработки, приобрел навыки:</b>',



];

let allProjectsObject = {
    'eKors':{
        'description':["Интернет магазин детских головных уборов, single-page application на ванильном JS"],
        'imageSource': "url(./images/ekors.jpg)",
        'projectLink': "https://whiitered.github.io/eKors/"

    },
    'justWeather':{
        'description':["React приложение с прогнозами погоды, построеное на переиспользуемых компонентах, для него использовал открытые API с openweather, познакомился с Fetch запросами. Поработал над адаптивностью для мобильных устройств. "],
        'imageSource': "url(./images/screenWeather.png)",
        'projectLink': "https://whiitered.store"
    }/* ,
    'isRipe':{
        'description':["Небольшой лендинг для приложения isRipe. Приложение еще в разработке, а лендинг доступен по ссылке под картинкой с авокадо. Совершенно точно в этом списке появится что-нибудь еще, так как учиться в области frontend разработки можно бесконечно :) "],
        'imageSource': "url(./images/vavSmall.jpg)",
        'projectLink': "https://isripe.avaplex.rocks/"
    } */

}

let skillsObject = {
    "Навыки автотестирования" : ["Базовые навыки Python", "Навыки работы с библиотекой Pytest", "Навыки создания кейсов работы пользователя с Selenium webdriver", "Знание принципов построения модели DOM"],
    "Навыки frontend разработки" : ["Знание языка разметки HTML и принципов построения DOM", "Работа с таблицами стилей CSS и знание препроцессора SCSS", "Адаптивная верстка для разных типов устройств", "Знание JS: функции, классы, модули, асинхронные функции", "Навыки работы с фреймворком React JS"]
}

let companyName = document.getElementById('companyName');
let companyWebSite = document.getElementById('companyWebsite');
let positionDescriptionDiv = document.getElementById('positionDescriptionDiv');
let positionCounter = 0;
let positionName = document.getElementById('positionName');
let positionDuties = document.getElementById('positionDuties');
let posPickCount = 1;
let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let posPick = Object.keys(profession['TTK'].positions);
let aboutMyself = document.querySelector('.aboutMyself');

function previousCareer () {
    let compNameArray = Object.keys(profession);
    console.log(compNameArray[0]);
    let aForWebsite = document.createElement('a');
    companyName.innerHTML = compNameArray[0];
    companyWebSite.appendChild(aForWebsite);
    aForWebsite.href = `https://${profession['TTK'].website}`
    aForWebsite.innerHTML = profession['TTK'].website; 
    
    
    
    function posPickChanger () {
        for (let j = 0; j<posPick.length; j++ ){
        let divForP = document.createElement('div');//
        positionDuties.appendChild(divForP);
        divForP.classList.add('sliderElement'); 
        let divForPositionName = document.createElement('div');//
        divForP.appendChild(divForPositionName); 
        divForPositionName.classList.add('sliderElement');
        
        let pForPositionName = document.createElement('p');//
        divForPositionName.appendChild(pForPositionName);              
        pForPositionName.innerHTML = posPick[j];
        pForPositionName.classList.add('positionName');
        

           for (let i = 0; i < profession['TTK'].positions[posPick[j]].length; i++) {
           
               let pForPosDuties = document.createElement('p');
               divForP.appendChild(pForPosDuties);
               pForPosDuties.innerHTML = profession['TTK'].positions[posPick[j]][i];

        }       


       }
       if (posPickCount<posPick.length-1) {
          posPickCount++;
       } else {
          posPickCount = 0; 
       }
       
    }
    posPickChanger();
}

nextButton.addEventListener('click', function () {
    
    positionCounter++

    if (positionCounter===posPick.length){
      positionCounter = 0;
    }
    
    positionDuties.style.transform = `translateX(-${positionCounter}00%)`;
    
})  

previousButton.addEventListener('click', function () {
    
    positionCounter--

    if (positionCounter === -1){
        positionCounter = posPick.length-1;
    }
    positionDuties.style.transform = `translateX(-${positionCounter}00%)`;
    
    
})  



previousCareer();


function aboutMyselfBuilder(){

    aboutMySelfParagraph.forEach( el => {
        let mainParagraphAboutMyself = document.createElement('div');
        aboutMyself.appendChild(mainParagraphAboutMyself);
        mainParagraphAboutMyself.innerHTML = `&nbsp; &nbsp; &nbsp;`+`${el}`;
        mainParagraphAboutMyself.classList.add('mainParagraphAboutMyself');
    }    
    )
    let petProjectsParentBlock = document.createElement('div');

    let skillsBlock = document.createElement('div');
    skillsBlock.classList.add('petProjectsParentBlock');
    aboutMyself.appendChild(skillsBlock);

    
    
    
    Object.keys(skillsObject).forEach(elem => {

        let theBlock = document.createElement('div');
        theBlock.classList.add("theBlock");
        
        let theBlockName = document.createElement('p');

        let theBlockNameContainer = document.createElement('div');
        theBlockNameContainer.classList.add("skillsNameContainer");
        

        theBlockName.innerHTML = `${elem}`;
        theBlockName.classList.add("bigText");
        theBlockNameContainer.appendChild(theBlockName);
        let skillsList = document.createElement('ul');
        skillsBlock.appendChild(theBlock);

        theBlock.appendChild(theBlockNameContainer);
        theBlock.appendChild(skillsList);

        skillsObject[elem].forEach( el => {
            let newSkill = document.createElement('li');
            newSkill.innerHTML = `${el}`;
            newSkill.classList.add("newSkill")
            skillsList.appendChild(newSkill)
    
        })

    })

    let textAboutProjects = "Создал проекты:";
    let ParagraphAboutProjects = document.createElement('div');
    aboutMyself.appendChild(ParagraphAboutProjects);
    ParagraphAboutProjects.innerHTML = `&nbsp; &nbsp; &nbsp;`+`<b>${textAboutProjects}</b>`;
    ParagraphAboutProjects.classList.add('mainParagraphAboutMyself');


    aboutMyself.appendChild(petProjectsParentBlock);
    petProjectsParentBlock.classList.add('petProjectsParentBlock');


    


    Object.keys(allProjectsObject).map(el=>{
        let mainDivInAboutMyselfBlock = document.createElement('div');
        mainDivInAboutMyselfBlock.classList.add("mainDivInAboutMyselfBlock");
        
        petProjectsParentBlock.appendChild(mainDivInAboutMyselfBlock);

            let imageLink = document.createElement('a');
            mainDivInAboutMyselfBlock.appendChild(imageLink);
            imageLink.href = allProjectsObject[el].projectLink;

            let projectImageDiv = document.createElement('div');
            imageLink.appendChild(projectImageDiv);
            projectImageDiv.classList.add('projectPicture');
            projectImageDiv.style.backgroundImage = allProjectsObject[el].imageSource;

            let aboutMyselfDiv = document.createElement('div');
            aboutMyselfDiv.classList.add('aboutMyselfDiv');
            mainDivInAboutMyselfBlock.appendChild(aboutMyselfDiv);

            if (allProjectsObject[el].description.length>1){
                let bigText = document.createElement('p');
                bigText.classList.add('bigText');
                aboutMyselfDiv.appendChild(bigText);
                bigText.innerHTML = allProjectsObject[el].description[0];

                for (let i=1; i<allProjectsObject[el].description.length; i++){
                    let ordinaryText = document.createElement('p');
                    ordinaryText.classList.add('ordinaryText');
                    ordinaryText.innerHTML = allProjectsObject[el].description[i];
                    aboutMyselfDiv.appendChild(ordinaryText);
                    
                }
            } else {
                let ordinaryText = document.createElement('p');
                    ordinaryText.classList.add('ordinaryText');
                    ordinaryText.innerHTML = allProjectsObject[el].description[0];
                    aboutMyselfDiv.appendChild(ordinaryText);
            }
            




    }) ;  

}
aboutMyselfBuilder();

window.addEventListener('scroll',scrollback)
