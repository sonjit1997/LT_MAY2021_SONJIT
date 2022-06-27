function Showmore(){
    var  dots = document.getElementById('dot');
    console.log(dots)
    var  moreText = document.getElementById('read_more');
    var button = document.getElementById('btn')
    if(dots.style.display != "none"){
        dots.style.display = "none";
        moreText.style.display = "inline";
        button.innerHTML = "Read Less";
    }
    else{
        dots.style.display = "inline";
        moreText.style.display = "none";
        button.innerHTML = "Read More"
    }
}