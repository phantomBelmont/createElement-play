

const B = document.getElementById('btn');
    const List = document.getElementById('List');

    function HappenSth() {
      const badge = document.createElement('badge');  
      badge.textContent = '😺😺😺';
      List.appendChild(badge);
    }

    B.addEventListener('click', HappenSth);