var x = document.getElementsByClassName("icone_img_accordion");
var i;

for (i = 0; i < x.length; i++){
    x[i].addEventListener("click", function(){
        this.classList.toggle("active");
        this.style.transform = 'rotate(180deg)';
        var sobreMim = this.nextElementSibling;
        if(sobreMim.style.display === "block"){
            sobreMim.style.display = "none";
            this.style.transform = 'rotate(0deg)';
        } else{
            sobreMim.style.display = "block";
        }
    })
}
