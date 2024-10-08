 
let resolution = 60
function setup(resolution){

    let numRow = resolution
    let numCol = resolution
    let pixels = new Array(resolution)
    for(i=0;i<numRow;i++){
        let row = document.createElement('div');
        row.className = "row"
        pixels[i] = new Array(30)
        for(j=0;j<numCol;j++){
            let pixel = document.createElement('div')
            pixel.className = "pixel"
            pixel.title = "("+i+","+j+")"
            row.appendChild(pixel)
            pixels[i][j] = pixel
        }
        document.getElementById("wrapper").appendChild(row)
    }
// we reverse the array to resemble the cartesian plane
//pixels = pixels.reverse()
function setPixel(x,y){
    pixels[x][y].className += ' set' 
}
function setPixel(x,y,color){
    pixels[x][y].className += ' set'
    pixels[x][y].style.backgroundColor = color
}
function getPixel(x,y){
    return pixels[x][y].style.backgroundColor;
}
document.getElementById("run").addEventListener('click',(e)=>{
    let code = document.getElementById("txtCode").value
    eval(code)
})

}
setup(60)
document.getElementById('btn_update').addEventListener('click',function(){
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.id = 'wrapper'
    wrParent = document.getElementById('wrapper').parentElement
    wrParent.removeChild(document.getElementById('wrapper'))
    wrParent.appendChild(wrapper)
    console.log(document.getElementById('wrapper').children)
    setup(document.getElementById('txt_res').value)
})


// Save code
document.getElementById("save").addEventListener('click',()=>{
    let code = document.getElementById("txtCode").value
    let title = code.slice(code.indexOf("//")+2,code.indexOf("\n"))
    console.log("Title is " ,title);
    // write to file
})