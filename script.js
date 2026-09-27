//😺😺😺
const catBtn=document.getElementById('catBtn');
const List=document.getElementById('List');

catBtn.addEventListener('click',()=>{
  const catDIV=document.createElement('div');
  catDIV.textContent='😺😺😺';
  List.appendChild(catDIV);
}
);//Event


//単語カード
const FrBtn=document.getElementById('FrBtn');
const GerBtn=document.getElementById('GerBtn');
const SpaBtn=document.getElementById('SpaBtn');
const ItaBtn=document.getElementById('ItaBtn');
const createBtn=document.getElementById('createBtn');
const STAGE=document.getElementById('stage');
const langStatus=document.getElementById('langStatus');

const French = [
  // --- 動物・生き物 ---
  { front: '🐺', back: 'loup' },
  { front: '🦊', back: 'renard' },
  { front: '🐯', back: 'tigre' },
  { front: '🦁', back: 'lion' },
  { front: '🦇', back: 'chauve-souris' },
  { front: '🐵', back: 'singe' },
  { front: '🦉', back: 'hibou' },
  { front: '🐢', back: 'tortue' },
  { front: '🐻‍❄️', back: 'ours polaire' },
  { front: '🐨', back: 'koala' },
  { front: '🐴', back: 'cheval' },
  { front: '🐹', back: 'hamster' },
  { front: '🦓', back: 'zèbre' },
  { front: '🐑', back: 'mouton' },
  { front: '🐖', back: 'cochon' },
  { front: '🐄', back: 'vache' },
  { front: '🦒', back: 'girafe' },
  { front: '🐘', back: 'éléphant' },
  { front: '🐫', back: 'chameau' },
  { front: '🐣', back: 'poussin' },
  { front: '🐓', back: 'coq' },
  { front: '🕊️', back: 'colombe' },
  { front: '🦚', back: 'paon' },
  { front: '🐬', back: 'dauphin' },
  { front: '🦈', back: 'requin' },
  { front: '🦀', back: 'crabe' },
  { front: '🪼', back: 'méduse' },
  { front: '🐛', back: 'chenille' },
  
  // --- 食べ物 ---
  { front: '🍎', back: 'pomme' },
  { front: '🍓', back: 'fraise' },
  { front: '🍉', back: 'pastèque' },
  { front: '🍒', back: 'cerise' },
  { front: '🍍', back: 'ananas' },
  { front: '🍊', back: 'orange' },
  { front: '🍑', back: 'pêche' },
  { front: '🥕', back: 'carotte' },
  { front: '🥦', back: 'brocoli' },
  { front: '🥑', back: 'avocat' },
  { front: '🫑', back: 'poivron' },
  { front: '🍆', back: 'aubergine' },
  { front: '🍇', back: 'raisin' },
  { front: '🥒', back: 'concombre' },
  { front: '🍄‍🟫', back: 'champignon' },
  { front: '🧄', back: 'ail' },
  { front: '🍺', back: 'bière' },
  
  // --- 自然・天気・その他 ---
  { front: '💎', back: 'diamant' },
  { front: '🌸', back: 'fleur de cerisier' },
  { front: '☔', back: 'parapluie' },
  { front: '☀️', back: 'soleil' },
  { front: '🌙', back: 'lune' },
  { front: '🌏', back: 'terre' },
  { front: '🌕', back: 'pleine lune' },
  { front: '⚡', back: 'éclair' },
  { front: '🎉', back: 'confettis' },
  { front: '🧭', back: 'boussole' },
  { front: '🎡', back: 'grande roue' },
  { front: '💍', back: 'bague' },
  { front: '🛡️', back: 'bouclier' },
  { front: '🗡️', back: 'épée' },
  { front: '⚰️', back: 'cercueil' },
  { front: '🪦', back: 'tombe' },
  { front: '🗝️', back: 'vieille clé' },
  
  // --- 感情・顔 ---
  { front: '😄', back: 'sourire' },
  { front: '🥲', back: 'rire avec une larme' },
  { front: '😱', back: 'peur' },
  { front: '👻', back: 'fantôme' },
  { front: '💀', back: 'crâne' },
  
  // --- 職業 (女性) ---
  { front: '👩🏻‍🎨', back: 'artiste' },
  { front: '👩🏻‍🍳', back: 'cuisinière' },
  { front: '👩🏻‍🚒', back: 'pompière' },
  { front: '👩🏻‍🌾', back: 'agricultrice' },
  { front: '👩🏻‍✈️', back: 'pilote' },
  { front: '👩🏻‍🎓', back: 'étudiante' },
  { front: '👩🏻‍🎤', back: 'chanteuse' },
  { front: '👩🏻‍⚖️', back: 'juge' }
];

const German = [
  // --- 動物・生き物 ---
  { front: '🐺', back: 'Wolf' },
  { front: '🦊', back: 'Fuchs' },
  { front: '🐱', back: 'Katze' },
  { front: '🐯', back: 'Tiger' },
  { front: '🦁', back: 'Löwe' },
  { front: '🦇', back: 'Fledermaus' },
  { front: '🐵', back: 'Affe' },
  { front: '🦉', back: 'Eule' },
  { front: '🐢', back: 'Schildkröte' },
  { front: '🐻‍❄️', back: 'Eisbär' },
  { front: '🐨', back: 'Koala' },
  { front: '🐴', back: 'Pferd' },
  { front: '🐹', back: 'Hamster' },
  { front: '🦓', back: 'Zebra' },
  { front: '🐑', back: 'Schaf' },
  { front: '🐖', back: 'Schwein' },
  { front: '🐄', back: 'Kuh' },
  { front: '🦒', back: 'Giraffe' },
  { front: '🐘', back: 'Elefant' },
  { front: '🐫', back: 'Kamel' },
  { front: '🐣', back: 'Küken' },
  { front: '🐓', back: 'Hahn' },
  { front: '🕊️', back: 'Taube' },
  { front: '🦚', back: 'Pfau' },
  { front: '🐬', back: 'Delfin' },
  { front: '🦈', back: 'Hai' },
  { front: '🦀', back: 'Krabbe' },
  { front: '🪼', back: 'Qualle' },
  { front: '🐛', back: 'Raupe' },
  
  // --- 食べ物 ---
  { front: '🍎', back: 'Apfel' },
  { front: '🍓', back: 'Erdbeere' },
  { front: '🍉', back: 'Wassermelone' },
  { front: '🍒', back: 'Kirsche' },
  { front: '🍍', back: 'Ananas' },
  { front: '🍊', back: 'Orange' },
  { front: '🍑', back: 'Pfirsich' },
  { front: '🥕', back: 'Karotte' },
  { front: '🥦', back: 'Brokkoli' },
  { front: '🥑', back: 'Avocado' },
  { front: '🫑', back: 'Paprika' },
  { front: '🍆', back: 'Aubergine' },
  { front: '🍇', back: 'Traube' },
  { front: '🥒', back: 'Gurke' },
  { front: '🍄‍🟫', back: 'Pilz' },
  { front: '🧄', back: 'Knoblauch' },
  { front: '🍺', back: 'Bier' },
  
  // --- 自然・天気・その他 ---
  { front: '💎', back: 'Diamant' },
  { front: '🌸', back: 'Kirschblüte' },
  { front: '☔', back: 'Regenschirm' },
  { front: '☀️', back: 'Sonne' },
  { front: '🌙', back: 'Mond' },
  { front: '🌏', back: 'Erde' },
  { front: '🌕', back: 'Vollmond' },
  { front: '⚡', back: 'Blitz' },
  { front: '🎉', back: 'Konfetti' },
  { front: '🧭', back: 'Kompass' },
  { front: '🎡', back: 'Riesenrad' },
  { front: '💍', back: 'Ring' },
  { front: '🛡️', back: 'Schild' },
  { front: '🗡️', back: 'Schwert' },
  { front: '⚰️', back: 'Sarg' },
  { front: '🪦', back: 'Grabstein' },
  { front: '🗝️', back: 'alter Schlüssel' },
  
  // --- 感情・顔 ---
  { front: '😄', back: 'Lächeln' },
  { front: '🥲', back: 'Lächeln mit Träne' },
  { front: '😱', back: 'Angst' },
  { front: '👻', back: 'Geist' },
  { front: '💀', back: 'Totenkopf' },
  
  // --- 職業 (女性) ---
  { front: '👩🏻‍🎨', back: 'Künstlerin' },
  { front: '👩🏻‍🍳', back: 'Köchin' },
  { front: '👩🏻‍🚒', back: 'Feuerwehrfrau' },
  { front: '👩🏻‍🌾', back: 'Bäuerin' },
  { front: '👩🏻‍✈️', back: 'Pilotin' },
  { front: '👩🏻‍🎓', back: 'Studentin' },
  { front: '👩🏻‍🎤', back: 'Sängerin' },
  { front: '👩🏻‍⚖️', back: 'Richterin' }
];


const Spanish = [
  // --- 動物・生き物 ---
  { front: '🐺', back: 'lobo' },
  { front: '🦊', back: 'zorro' },
  { front:'🐱', back:'gato' },
  { front: '🐯', back: 'tigre' },
  { front: '🦁', back: 'león' },
  { front: '🦇', back: 'murciélago' },
  { front: '🐵', back: 'mono' },
  { front: '🦉', back: 'búho' },
  { front: '🐢', back: 'tortuga' },
  { front: '🐻‍❄️', back: 'oso polar' },
  { front: '🐨', back: 'koala' },
  { front: '🐴', back: 'caballo' },
  { front: '🐹', back: 'hámster' },
  { front: '🦓', back: 'cebra' },
  { front: '🐑', back: 'oveja' },
  { front: '🐖', back: 'cerdo' },
  { front: '🐄', back: 'vaca' },
  { front: '🦒', back: 'jirafa' },
  { front: '🐘', back: 'elefante' },
  { front: '🐫', back: 'camello' },
  { front: '🐣', back: 'pollito' },
  { front: '🐓', back: 'gallo' },
  { front: '🕊️', back: 'paloma' },
  { front: '🦚', back: 'pavo real' },
  { front: '🐬', back: 'delfín' },
  { front: '🦈', back: 'tiburón' },
  { front: '🦀', back: 'cangrejo' },
  { front: '🪼', back: 'medusa' },
  { front: '🐛', back: 'oruga' },
  
  // --- 食べ物 ---
  { front: '🍎', back: 'manzana' },
  { front: '🍓', back: 'fresa' },
  { front: '🍉', back: 'sandía' },
  { front: '🍒', back: 'cereza' },
  { front: '🍍', back: 'piña' },
  { front: '🍊', back: 'naranja' },
  { front: '🍑', back: 'durazno' },
  { front: '🥕', back: 'zanahoria' },
  { front: '🥦', back: 'brócoli' },
  { front: '🥑', back: 'aguacate' },
  { front: '🫑', back: 'pimiento' },
  { front: '🍆', back: 'berenjena' },
  { front: '🍇', back: 'uva' },
  { front: '🥒', back: 'pepino' },
  { front: '🍄‍🟫', back: 'seta' },
  { front: '🧄', back: 'ajo' },
  { front: '🍺', back: 'cerveza' },
  
  // --- 自然・天気・その他 ---
  { front: '💎', back: 'diamante' },
  { front: '🌸', back: 'flor de cerezo' },
  { front: '☔', back: 'paraguas' },
  { front: '☀️', back: 'sol' },
  { front: '🌙', back: 'luna' },
  { front: '🌏', back: 'tierra' },
  { front: '🌕', back: 'luna llena' },
  { front: '⚡', back: 'rayo' },
  { front: '🎉', back: 'confeti' },
  { front: '🧭', back: 'brújula' },
  { front: '🎡', back: 'noria' },
  { front: '💍', back: 'anillo' },
  { front: '🛡️', back: 'escudo' },
  { front: '🗡️', back: 'espada' },
  { front: '⚰️', back: 'ataúd' },
  { front: '🪦', back: 'lápida' },
  { front: '🗝️', back: 'llave vieja' },
  
  // --- 感情・顔 ---
  { front: '😄', back: 'sonrisa' },
  { front: '🥲', back: 'sonrisa con lágrima' },
  { front: '😱', back: 'miedo' },
  { front: '👻', back: 'fantasma' },
  { front: '💀', back: 'calavera' },
  
  // --- 職業 (女性) ---
  { front: '👩🏻‍🎨', back: 'artista' },
  { front: '👩🏻‍🍳', back: 'cocinera' },
  { front: '👩🏻‍🚒', back: 'bombero' },
  { front: '👩🏻‍🌾', back: 'agricultora' },
  { front: '👩🏻‍✈️', back: 'piloto' },
  { front: '👩🏻‍🎓', back: 'estudiante' },
  { front: '👩🏻‍🎤', back: 'cantante' },
  { front: '👩🏻‍⚖️', back: 'jueza' }
];

const Italian = [
  // --- 動物・生き物 ---
  { front: '🐺', back: 'lupo' },
  { front: '🦊', back: 'volpe' },
  { front: '🐱', back: 'gatto' },
  { front: '🐯', back: 'tigre' },
  { front: '🦁', back: 'leone' },
  { front: '🦇', back: 'pipistrello' },
  { front: '🐵', back: 'scimmia' },
  { front: '🦉', back: 'gufo' },
  { front: '🐢', back: 'tartaruga' },
  { front: '🐻‍❄️', back: 'orso polare' },
  { front: '🐨', back: 'koala' },
  { front: '🐴', back: 'cavallo' },
  { front: '🐹', back: 'criceto' },
  { front: '🦓', back: 'zebra' },
  { front: '🐑', back: 'pecora' },
  { front: '🐖', back: 'maiale' },
  { front: '🐄', back: 'mucca' },
  { front: '🦒', back: 'giraffa' },
  { front: '🐘', back: 'elefante' },
  { front: '🐫', back: 'cammello' },
  { front: '🐣', back: 'pulcino' },
  { front: '🐓', back: 'gallo' },
  { front: '🕊️', back: 'colomba' },
  { front: '🦚', back: 'pavone' },
  { front: '🐬', back: 'delfino' },
  { front: '🦈', back: 'squalo' },
  { front: '🦀', back: 'granchio' },
  { front: '🪼', back: 'medusa' },
  { front: '🐛', back: 'bruco' },
  
  // --- 食べ物 ---
  { front: '🍎', back: 'mela' },
  { front: '🍓', back: 'fragola' },
  { front: '🍉', back: 'anguria' },
  { front: '🍒', back: 'ciliegia' },
  { front: '🍍', back: 'ananas' },
  { front: '🍊', back: 'arancia' },
  { front: '🍑', back: 'pesca' },
  { front: '🥕', back: 'carota' },
  { front: '🥦', back: 'broccoli' },
  { front: '🥑', back: 'avocado' },
  { front: '🫑', back: 'peperone' },
  { front: '🍆', back: 'melanzana' },
  { front: '🍇', back: 'uva' },
  { front: '🥒', back: 'cetriolo' },
  { front: '🍄‍🟫', back: 'fungo' },
  { front: '🧄', back: 'aglio' },
  { front: '🍺', back: 'birra' },
  
  // --- 自然・天気・その他 ---
  { front: '💎', back: 'diamante' },
  { front: '🌸', back: 'fiore di ciliegio' },
  { front: '☔', back: 'ombrello' },
  { front: '☀️', back: 'sole' },
  { front: '🌙', back: 'luna' },
  { front: '🌏', back: 'terra' },
  { front: '🌕', back: 'luna piena' },
  { front: '⚡', back: 'fulmine' },
  { front: '🎉', back: 'coriandoli' },
  { front: '🧭', back: 'bussola' },
  { front: '🎡', back: 'ruota panoramica' },
  { front: '💍', back: 'anello' },
  { front: '🛡️', back: 'scudo' },
  { front: '🗡️', back: 'spada' },
  { front: '⚰️', back: 'bara' },
  { front: '🪦', back: 'lapide' },
  { front: '🗝️', back: 'chiave vecchia' },
  
  // --- 感情・顔 ---
  { front: '😄', back: 'sorriso' },
  { front: '🥲', back: 'sorriso con lacrima' },
  { front: '😱', back: 'paura' },
  { front: '👻', back: 'fantasma' },
  { front: '💀', back: 'teschio' },
  
  // --- 職業 (女性) ---
  { front: '👩🏻‍🎨', back: 'artista' },
  { front: '👩🏻‍🍳', back: 'cuoca' },
  { front: '👩🏻‍🚒', back: 'vigile del fuoco' },
  { front: '👩🏻‍🌾', back: 'contadina' },
  { front: '👩🏻‍✈️', back: 'pilota' },
  { front: '👩🏻‍🎓', back: 'studentessa' },
  { front: '👩🏻‍🎤', back: 'cantante' },
  { front: '👩🏻‍⚖️', back: 'giudice' }
];



let Lang = French;
let shuffledArray =[];
let currentIndex=0;
langStatus.textContent='French';

FrBtn.addEventListener(
  'click',()=>{
    Lang=French;
    langStatus.textContent='French';
    shuffledArray =[];
    STAGE.innerHTML='';
  });//FrBtn Event

GerBtn.addEventListener(
  'click',()=>{
    Lang=German;
    langStatus.textContent='German';
    shuffledArray =[];
    STAGE.innerHTML='';
  });//GerBtn Event
  
SpaBtn.addEventListener(
  'click',()=>{
    Lang=Spanish;
    langStatus.textContent='Spanish';
    shuffledArray =[];
    STAGE.innerHTML='';
  });//SpaBtn Event
  
  ItaBtn.addEventListener(
  'click', () => {
    Lang = Italian;
    langStatus.textContent = 'Italian';
    shuffledArray = [];
    STAGE.innerHTML = '';
  }); //ItaBtn Event


function ShuffleArr(array){
  const arr=[...array];
  
  for(let L =array.length-1;L>0;L--){
    let R = Math.floor(
      Math.random()*(
      L+1));//floor
      
      [arr[L],arr[R]]=
      [arr[R],arr[L]];
  }//for
  return arr;
}//Shuffle

createBtn.addEventListener(
  'click',()=>{
  
  if(shuffledArray.length===0 || currentIndex>=shuffledArray.length){
    shuffledArray=ShuffleArr(Lang);
    currentIndex=-1;
  }//if
  
  currentIndex++;
  
  const OBJset=shuffledArray[currentIndex];
  const li=document.createElement('li');
    li.textContent=OBJset.front;
    li.className='firstSight';
    
    let flipped = false;
    
    li.addEventListener('click',()=>{
      flipped = !flipped;
      
      li.textContent=flipped?
      OBJset.back:
      OBJset.front;
      
      li.style.backgroundColor=flipped ?
      '#300':
      '#300';
  });//li click Event
  
  STAGE.appendChild(li);
  
});//createBtn click Event


    
