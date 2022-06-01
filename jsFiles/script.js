var dicon = document.getElementById("icon");
var count = 0;
function themechange(){
    count++;
    if(count%2 == 0){
        //Light Theme
        dicon.classList.remove("fa-moon");
        dicon.classList.add("fa-sun");
        document.documentElement.style.setProperty("--primary", "#303F9F");
        document.documentElement.style.setProperty("--primaryvariant", "#3F51B5");
        document.documentElement.style.setProperty("--grey", "lightgrey");
        document.documentElement.style.setProperty("--form", "#f1eeee");
        document.documentElement.style.setProperty("--surface", "#ffffff");
        document.documentElement.style.setProperty("--secondary", "#000000");
        document.documentElement.style.setProperty("--hover", "#e0e0e0");
    }
    else{
        //Dark Theme
        dicon.classList.remove("fa-sun");
        dicon.classList.add("fa-moon");
        document.documentElement.style.setProperty("--primary", "#121212");
        document.documentElement.style.setProperty("--primaryvariant", "#3F51B5");
        document.documentElement.style.setProperty("--grey", "#757575");
        document.documentElement.style.setProperty("--form", "#323232");
        document.documentElement.style.setProperty("--surface", "#323232");
        document.documentElement.style.setProperty("--secondary", "#ffffff");
        document.documentElement.style.setProperty("--hover", "#757575");
    }
}
// getting all required elements
var searchbox = document.querySelector(".inputBox");
var inputBox = searchbox.querySelector("input");
var suggBox = searchbox.querySelector(".searchBox");
var icon = searchbox.querySelector(".sicon");
let link = searchbox.querySelector("a");
let wlink;

inputBox.onkeyup = (e)=>{
    let udata = e.target.value;
    let newarray = [];
    if(udata){
        icon.onclick = ()=>{
            wlink = `https://www.google.com/search?q=${udata}`;
            link.setAttribute("href", wlink);
            link.click();
        }
        newarray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(udata.toLocaleLowerCase());
        });
        newarray = newarray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchbox.classList.add("active");
        showsug(newarray);
        let finalList = suggBox.querySelectorAll("li");
        for (let i = 0; i < finalList.length; i++) {
            finalList[i].setAttribute("onclick", "choose(this)");
        }
    }else{
        searchbox.classList.remove("active");
    }
}

function choose(element){
    let sdata = element.textContent;
    inputBox.value = sdata;
    icon.onclick = ()=>{
        wlink = `https://www.google.com/search?q=${sdata}`;
        link.setAttribute("href", wlink);
        link.click();
    }
    searchbox.classList.remove("active");
}

function showsug(list){
    let ldata;
    if(!list.length){
        userValue = inputBox.value;
        ldata = `<li>${userValue}</li>`;
    }else{
      ldata = list.join('');
    }
    suggBox.innerHTML = ldata;
}
