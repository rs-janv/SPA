//FAQで回答部分を表示する処理
const question = document.querySelectorAll('.question');

function toggle(){
    const content = this.nextElementSibling;
    this.classList.toggle('is-active');
    content.classList.toggle('is-open');
}

for(let i = 0; i < question.length; i++){
    question[i].addEventListener('click' , toggle);
}

// モーダル画面を表示させる処理
const buttonOpen = document.getElementById('submit');
const modal = document.getElementById('contact-modal');
const buttonClose = document.getElementById('closeArea');

//contactの「送信する」が押下されたとき
buttonOpen.addEventListener('click',submit);
function submit(){
    modal.style.display = 'block';
};
//モーダル画面の「閉じる」が押下されたとき
buttonClose.addEventListener('click',closeArea);
function closeArea(){
    modal.style.display = 'none';
};
//「閉じる」以外が押下されたとき
addEventListener('click',outsideClose);
function outsideClose(event){
    if(event.target === modal){
        modal.style.display = 'none';
    };
};

//スマホサイズの時のメニュー画面
const btn = document.querySelector('.menu-icon');
const list = document.querySelector('.resposive-menu-list');

//変数listに「menu-list」クラスを追加しメニュー画面を表示する
btn.addEventListener('click' , () => {
    list.classList.toggle('menu-list');
});
//「menu-list」の<li>を選択後「menu-list」を削除する
list.addEventListener('click',(event) => {
    if(event.target.closest('menu-list')===null){
        //alert('メニューが選択されました');
        list.classList.remove('menu-list');
    }
});