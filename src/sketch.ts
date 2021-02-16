// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    N: 140,
    p: 0.7,
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "N", 0, 1000, 1)
gui.add(params, "p", 0, 1, 0.001)
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    rectMode(CENTER)
    noStroke()
    background(254, 255, 250)
    for (let i = 0; i < params.N; i++) {
        fill(random([
            color(252, 52, 38), 
            color(96, 207, 17),
            color(89, 142, 255)
        ]))
        push()
            translate(random(width), random(height))
            if (random() < params.p)
                rotate(TAU/4)
            rect(0, 0, random(40, 100), random(10, 30))
        pop()
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}