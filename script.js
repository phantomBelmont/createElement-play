    //サービスワーカー登録
    if('serviceWorker' in navigator){
      window.addEventListener('load',()=>{
      navigator.serviceWorker.register('./sw.js').then(reg=>console.log('SW登録成功!',reg)
        )//thenここまで
        .catch(err=>console.log('SW登録失敗🥲',err)
        );//catchここまで
      }//ロードイベントのアロー関数ここまで
      );//イベリス ここまで
    }//ifここまで

//😺😺😺
window.catBtn=document.getElementById('catBtn');
window.cathomeBtn=document.getElementById('cathomeBtn');
window.catStage=document.getElementById('catStage');

function clearStage(stageName){
  while (stageName.firstChild) {
  stageName.removeChild(stageName.firstChild);
}
}//clearStage


catBtn.addEventListener('click',()=>{
  const catDIV=document.createElement('div');
  catDIV.textContent='😺😺😺';


  catDIV.addEventListener('dblclick',()=>{
    const isFlipped = catDIV.classList.toggle('flipped');

    catDIV.textContent = isFlipped ? '💤💤💤':
      '😺😺😺';
  });//catDIV dblclick Event

  catStage.appendChild(catDIV);
}
);//catBtn Event

cathomeBtn.addEventListener('click',()=>{

[...catStage.children].forEach(c => 
c.classList.add('fade-out')
);//forEach

  setTimeout(()=>{
    [...catStage.children].forEach(ca =>ca.textContent = '🏡🏡🏡'

    );//forEach
  },700);//setTimeout

  setTimeout(()=>{
    clearStage(catStage);
  },2000);//setTimeout
});//cathomeBtn Event



//単語カード
window.EnBtn=document.getElementById('EnBtn');
window.DraBtn=document.getElementById('DraBtn');
window.GerBtn=document.getElementById('GerBtn');
window.SpaBtn=document.getElementById('SpaBtn');
window.ItaBtn=document.getElementById('ItaBtn');
window.createBtn=document.getElementById('createBtn');
window.wordsStage=document.getElementById('wordsStage');
window.langStatus=document.getElementById('langStatus');
window.delBtn=document.getElementById('delBtn');
window.showAllBtn = document.getElementById('showAllBtn');




let langArray = English;
let shuffledArray =[];
let currentIndex = 0;
langStatus.textContent='English';


function switchLang(arrayName,langName){
  langArray = arrayName;
  langStatus.textContent = langName;
  shuffledArray = [];
  clearStage(wordsStage);
}//switchLang

EnBtn.addEventListener(
  'click', () => {
    switchLang(English, 'English');
  }); //EnBtn Event

DraBtn.addEventListener(
  'click',()=>{
    switchLang(Dracula, 'Dracula');
  });//DraBtn Event

GerBtn.addEventListener(
  'click',()=>{
    switchLang(German,'German');
  });//GerBtn Event

SpaBtn.addEventListener(
  'click',()=>{
    switchLang(Spanish,'Spanish');
  });//SpaBtn Event

  ItaBtn.addEventListener(
  'click', () => {
    switchLang(Italian,'Italian');
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
  currentIndex++;

  if(shuffledArray.length===0 || currentIndex===shuffledArray.length){
    shuffledArray = ShuffleArr(langArray);
    currentIndex = 0;
  }//if



  const OBJset=shuffledArray[currentIndex];
  const li=document.createElement('li');
    li.textContent=OBJset.front;
    li.classList.add('firstSight');

    li.addEventListener('click',()=>{

     const isFlipped = li.classList.toggle('flipped');

      li.textContent = isFlipped?
      OBJset.back:
      OBJset.front;

      li.style.backgroundColor = isFlipped ?
      '#200':
      '#020';
      
      li.style.border = isFlipped ? 'solid':'solid';
      
      li.style.borderColor = isFlipped ? '#500':'#050';
  });//li click Event

  wordsStage.appendChild(li);

});//createBtn click Event



delBtn.addEventListener('click',()=>{
  clearStage(wordsStage);
});//delBtn Event

showAllBtn.addEventListener('click',()=>{
  clearStage(wordsStage);

  shuffledArray = ShuffleArr(langArray);

shuffledArray.forEach(OBJset => {

  const li = document.createElement('li');
  li.textContent = OBJset.front;
  li.classList.add('firstSight');

  li.addEventListener('click', () => {

      const isFlipped = li.classList.toggle('flipped');

      li.textContent = isFlipped ?
        OBJset.back :
        OBJset.front;

      li.style.backgroundColor = isFlipped ?
        '#300' :
        '#030';
        
        
});//li Event
  wordsStage.appendChild(li);
});//forEach
});//showAllBtn Event

function syncSpinner() {
  document.body.classList.toggle('is-visible', !document.hidden);
}
syncSpinner(); // ← 初回も必ず呼ぶ
document.addEventListener('visibilitychange', syncSpinner);