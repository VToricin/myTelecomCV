


let profession = {
    'TTK': {
        website: 'www.ttk.ru',
        positions: {
        "Ведущий специалист центра управления сетями связи" : 
        ['Мониторинг и локализация проблем на сетях DWDM, SDH, TDM.',
        'Мониторинг и локализация проблем на системах электропитающих установок.','Координация и решение сетевых инцидентов.',
        'Заведение, поддержка и контроль плановых и аварийных работ, взаимодействие с подразделениями и службами компании.',
        'Оперативное взаимодействие с партнерами компании российскими и иностранными,устно и письменно.',
        'Ведение отчетности в корпоративных системах и базах данных.'],
        "Ведущий специалист центра технической эксплуатации сети" : 
        ['Техническая поддержка и консультирование эксплуатационно-технологических цехов и региональных подразделений компании.',
        'Организация бесперебойной работы эксплуатирующих подразделений.','Разработка профильных нормативов и требований.' ],
        "Инженер связи" : 
        ['Обслуживание оборудования транспортной сети: SDH Lucent Technologies, DWDM Huawei тестирование плат, снятие параметров.',
        'Эксплуатация систем гарантированного электропитания СБЭП, NTX: монтаж плат, проведение необходимых монтажных работ.',
        'Работы на ВОЛС (волоконно-оптические линии связи), проведение аварийно-восстановительных работ в нормативные сроки, сварка ВОК оборудованием Fujikura, INNO.',
        'Текущий ремонт, монтаж и измерения оптических кабелей приборами Exfo, Anritsu.',
        'Подготовка и ведение всей сопутствующей документации: схемы, паспорта, протоколы измерений. Проведение охранно-предупредительных мероприятий.']
        }

    },
    
}

let allProjectsObject = {
    'eKors':{
        'description':["О себе","Несмотря на большой опыт в сфере телекоммуникаций, хочу перейти в web-разработку. Последние полгода изучаю технологии frontend-программирования. Успел познакомиться с основами адаптивной верстки HTML страниц с помощью CSS, SCSS. Добавлением на страницы интерактивных элементов средставми Javascript. Изучаю React. Создал эту страницу и небольшой интернет-магазин детских головных уборов. Настоящий SPA на ванильном JS)"],
        'imageSource': "url(./images/ekors.jpg)",
        'projectLink': "https://whiitered.github.io/eKors/"

    },
    'justWeather':{
        'description':["Pet-проект - сайт с прогнозами погоды, для него использовал открытые API с openweather, где познакомился с Fetch запросами"],
        'imageSource': "url(./images/screenWeather.jpg)",
        'projectLink': "https://whiitered.github.io/justWeather/"
    },
    'isRipe':{
        'description':["А еще?", "Небольшой лендинг для приложения isRipe. Приложение еще в разработке, а лендинг доступен по ссылке под картинкой с авокадо. Совершенно точно в этом списке появится что-нибудь еще, так как учиться в области frontend разработки можно бесконечно :) "],
        'imageSource': "url(./images/vavSmall.jpg)",
        'projectLink': "https://isripe.avaplex.rocks/"
    }

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
    Object.keys(allProjectsObject).map(el=>{
        let mainDivInAboutMyselfBlock = document.createElement('div');
        mainDivInAboutMyselfBlock.classList.add("mainDivInAboutMyselfBlock");
            if ((Object.keys(allProjectsObject).indexOf(el)+1)%2===0){
            mainDivInAboutMyselfBlock.classList.add("reverseClass");
            }
        aboutMyself.appendChild(mainDivInAboutMyselfBlock);

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
            }else{
                let ordinaryText = document.createElement('p');
                    ordinaryText.classList.add('ordinaryText');
                    ordinaryText.innerHTML = allProjectsObject[el].description[0];
                    aboutMyselfDiv.appendChild(ordinaryText);
            }
            




    }) ;  
}
aboutMyselfBuilder();

window.addEventListener('scroll',scrollback)