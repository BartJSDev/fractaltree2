var canvas = document.querySelector("canvas")
var c = canvas.getContext("2d")

canvas.width = innerWidth * devicePixelRatio
canvas.height = innerHeight * devicePixelRatio

$("canvas").css("width", 100 + "%")
$("canvas").css("height", 100 + "%")
$("body").css("backgroundColor", "black")
$("body").css("margin", 0)
$("body").css("overflow", "hidden")

let subAngle = Math.PI / 5
let angleSpeed = .05 
function Branch(x, y, angle, len, size, order) {

    if (order === 0) return

    let nx = x + len * Math.cos(angle)
    let ny = y + len * Math.sin(angle)

    
    if (order === 1) {

       color = "lime"

    } else{

        color = "saddlebrown"
    }

    c.beginPath()
    c.lineCap = "round"
    c.strokeStyle = color
    c.lineWidth = size
    c.moveTo(x, y)
    c.lineTo(nx, ny)
    c.stroke()
    c.closePath()


    Branch(nx, ny, angle - subAngle, len * .8, size * .5, order - 1)
    Branch(nx, ny, angle + subAngle, len * .7, size * .9, order - 1)

}

function Draw(){

    //drawing loop

    c.clearRect(0 , 0 , canvas.width , canvas.height)

    if(angleSpeed > 0){

        angleSpeed -= .0001
        subAngle += angleSpeed

        Branch(canvas.width / 2, canvas.height, -Math.PI / 2, canvas.height / 4, 80 , 15)
    
        requestAnimationFrame(Draw)

    }else{

        angleSpeed = 0
        Branch(canvas.width / 2, canvas.height, -Math.PI / 2, canvas.height / 4, 80 , 15)
        return

    }

    console.log("gogogogo")

}

Draw()

