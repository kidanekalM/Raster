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
    document.getElementById("txtCode").value = document.getElementById("txtCode").value.replace("for","<span style='backgroundColor:green'>for</span>")
})