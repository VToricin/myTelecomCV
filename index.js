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