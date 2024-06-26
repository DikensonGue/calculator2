const info = document.querySelector('.info')

const allBtn = document.querySelectorAll('input[type="button"]')

function val(result){
    form.window.value = form.window.value + result
}

function calcul(){
    if(form.window.value == ""){
        info.innerText = "Eseye ekri yon chif"
        allBtns.forEach(btn => {
            addEventListener('click',function(){
                info.innerText == ""
        })
        })
    }else {
        form.window.value = eval(form.window.value)
    }
}

function del(){
    form.window.value = "";
}