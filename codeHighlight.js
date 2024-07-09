dictionary = { "for":"green",
"let":"blue",
"const":"blue",
"if":"green",
"else":"green",
"while":"green",
"do":"green",
"setPixel":"blue",
"getPixel":"blue",

}
document.getElementById("txtCode").addEventListener('input',function(){
    console.log(document.getElementById("txtCode").value)
    document.getElementById("txtCode").innerHTML = document.getElementById("txtCode").value.replace("for","<span style='backgroundColor:"+dictionary['for']+"'>for</span>")
})