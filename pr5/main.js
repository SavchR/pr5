//geroi
const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick2');

const $logs = document.querySelector('#logs');


function random(num) {
    return Math.ceil(Math.random() * num);
}

const character = {
    nameCharacter: 'Pikachu',
    type: 'electric',   
    defaultHP: 100,
    damageHP: 100,      
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character'),
    greet: function(){
        return 'Hi, my name is ' + this.name;
    },  
    
    renderHPLife: function(){
        const $character = document.getElementById('health-character');
        console.log($character.innerText);
        $character.innerText=this.damageHP+'/'+ this.defaultHP;
    },    
    renderHPLife: function(){
        this.elHP.innerText=this.damageHP + ' / ' + this.defaultHP;
    },    
    renderProgressbarHP: function(){
        this.elProgressbar.style.width = this.damageHP + '%';
    },
   
    changeHP: function(count) {

        const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
        console.log(log);
       // for (let i = 0; i<10; i++){

            const $p = document.createElement('p');
            $p.innerText = log;
            
            $logs.appendChild($p);
           // }
            
        if(this.damageHP<count) {
            this.damageHP=0;
            alert('Бедный '+ this.name+' проиграл бой!');
            $btn.disabled = true;
        }else{
            this.damageHP -= count;
        }
        renderHP();
    }  
}

 //console.log(name, type, damageHP);


const enemy = {
    nameEnemy: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy'),
   
   
    renderHPLife: function(){
        const $character = document.getElementById('health-character');
        console.log($character.innerText);
        $character.innerText=this.damageHP+'/'+ this.defaultHP;
    },    
    renderHPLife: function(){
        this.elHP.innerText=this.damageHP + ' / ' + this.defaultHP;
    },    
    renderProgressbarHP: function(){
        this.elProgressbar.style.width = this.damageHP + '%';
    },
   
    changeHP: function(count) {

        //console.log(generateLog());
        const log = this === enemy ? generateLog(this, character) : generateLog(this, enemy);
        console.log(log);

        const $p = document.createElement('p');
        $p.innerText = log;
        
        $logs.appendChild($p);
        
        if(this.damageHP<count) {
            this.damageHP=0;
            alert('Бедный '+ this.name+' проиграл бой!');
            $btn2.disabled = true;
        }else{
            this.damageHP -= count;
        }
        renderHP();
    }  
}


const {nameCharacter} = character;
const {nameEnemy} = enemy;

$btn.addEventListener('click', function(){
    console.log('Kick');
    character.changeHP(random(20));
});

$btn2.addEventListener('click', function(){
    console.log('Kick');
    enemy.changeHP(random(20));
});

function renderHP(){
    character.renderHPLife();
    character.renderProgressbarHP();
    enemy.renderHPLife();
    enemy.renderProgressbarHP();
};

function init() {
    console.log('Start Game!');
    // renderHP(character);
    // renderHP(enemy);
};



init();

