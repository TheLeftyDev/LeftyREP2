const startbtnjs = document.getElementById('startbtn')
startbtnjs.onclick = () =>{
    document.body.innerHTML = `<div class="QandAarea" id="QandAareaID" style="background-color: yellow;">
    <div class="answer" style="width: 100px; height: 25px; background-color: blue;"></div>
    <div class="answer" style="width: 100px; height: 25px; background-color: blue;"></div>
    <div class="answer" style="width: 100px; height: 25px; background-color: blue;"></div>
    <div class="answer" style="width: 100px; height: 25px; background-color: blue;"></div>
</div>`
}