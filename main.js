img1 = "";
img2 = "";
img3 = "";
img4 = "";
page = 0;

stats = "";
objects = [];

function preload() {
    img1 = loadImage("dog_cat.jpg")
    img2 = loadImage("table_setup.jpg")
    img3 = loadImage("living_room.jpg")
    img4 = loadImage("tv_stand.jpg")
}

function modelLoaded() {
    console.log("model loaded");
    stats = true;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting Objects";
}

function draw() {
    if (page == 0) {
        image(img1, 0, 0, 640, 420);
        if (stats != "") {
            r = random(255);
            g = random(255);
            b = random(255);

            objectDetector.detect(img1, gotResult);
            for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status = Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + objects.length;

            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
        }
    } if (page == 1) {
        image(img2, 0, 0, 640, 420);
        if (stats != "") {
            if (stats != "") {
                r = random(255);
                g = random(255);
                b = random(255);
    
                objectDetector.detect(img2, gotResult);
                for (i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status = Object Detected";
                document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + objects.length;
    
                fill(r, g, b);
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke(r, g, b);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
            }
        }

    } if (page == 2) {
        image(img3, 0, 0, 640, 420);
        if (stats != "") {
            if (stats != "") {
                r = random(255);
                g = random(255);
                b = random(255);
    
                objectDetector.detect(img3, gotResult);
                for (i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status = Object Detected";
                document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + objects.length;
    
                fill(r, g, b);
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke(r, g, b);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
            }
        }

    } if (page == 3) {
        image(img4, 0, 0, 640, 420);
        if (stats != "") {
            if (stats != "") {
                r = random(255);
                g = random(255);
                b = random(255);
    
                objectDetector.detect(img4, gotResult);
                for (i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status = Object Detected";
                document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + objects.length;
    
                fill(r, g, b);
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke(r, g, b);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
            }
        }

    }
}

function movePage() {
    page = page + 1
    console.log("Image changed!")
    draw();
    if (page == 3) {
        page = 0
        console.log("Image reset!")
    } 
}