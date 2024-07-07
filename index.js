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
            row.appendChild(pixel)
            pixels[i][j] = pixel
        }
        document.getElementById("wrapper").appendChild(row)
    }
// we reverse the array to resemble the cartesian plane
pixels = pixels.reverse()
function setPixel(x,y){
    pixels[y][x].className += ' set' 
}
function setPixel(x,y,color){
    pixels[y][x].className += ' set'
    pixels[y][x].style.backgroundColor = color
}
function getPixel(x,y){
    return pixels[y][x].style.backgroundColor;
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
