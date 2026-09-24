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


const B = document.getElementById('btn');
    const List = document.getElementById('List');

    function HappenSth() {
      const badge = document.createElement('badge');  
      badge.textContent = '😺😺😺';
      List.appendChild(badge);
    }

    B.addEventListener('click', HappenSth);