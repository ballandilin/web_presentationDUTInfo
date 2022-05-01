/*var fileIut = '../textCode/iut.txt';
var fileVie = '../textCode/vie.txt';
var fileautre = '../textCode/autre.txt';

var txtIut = '';
var txtVie = '';
var txtAutre = '';





// $.get(fileVie, function (data) {
//     txtVie = data;
// }, 'text');

// $.get(fileIut, function (data) {
//     txtIut = data;
// }, 'text');

// $.get(fileautre, function (data) {
//     txtAutre = data;
// }, 'text');

var btIut = document.getElementById('iut');
var btVie = document.getElementById('vie');
var btFly = document.getElementById('fly');
var textair = document.querySelector('textarea');


btIut.addEventListener("click", function () {
    fetch(fileIut)
  .then(response => response.text())
  .then(text =>
    textair.innerHTML = text)
});

btVie.addEventListener("click", function () {
    fetch(fileVie)
    .then(response => response.text())
    .then(text => 
        textair.innerHTML = text)
});

btFly.addEventListener("click", function () {
    fetch(fileautre)
    .then(response => response.text())
    .then(text =>
        textair.innerHTML = text)
});*/




var fileIut = "import turtle\nimport time\n\nt = turtle.Turtle()\nscreen=turtle.Screen()\nscreen.setup(700,500)\n               \n# definition d'une fonction grace au mot cle 'def'\ndef iut(color, size, speed):\n	t.color(color)\n	t.speed(speed)\n	t.up()\n	t.backward(150)\n	t.down()\n                \n	# I\n	t.left(90)\n	t.forward(20 * size)\n	t.right(90)\n	t.forward(50 * size)\n	t.left(90)\n	t.forward(100 * size)\n	t.left(90)\n	t.forward(50 * size)\n	t.right(90)\n	t.forward(20 * size)\n	t.right(90)\n	t.forward(125 * size)\n	t.right(90)\n	t.forward(20 * size)\n	t.right(90)\n	t.forward(50 * size)\n	t.left(90)\n	t.forward(100 * size)\n	t.left(90)\n	t.forward(50 * size)\n	t.right(90)\n	t.forward(20 * size)\n	t.right(90)\n	t.forward(125 * size)\n\n\n	t.up()\n	#145 pour expace + 125 pour largeur lettre = 270\n	t.backward(270 * size)\n	t.down()\n\n	# U\n	t.right(90)\n	t.forward(140 * size)\n	t.left(90)\n	t.forward(25 * size)\n	t.left(90)\n	t.forward(120 * size)\n	t.right(90)\n	t.forward(75 * size)\n	t.right(90)\n	t.forward(120 * size)\n	t.left(90)\n	t.forward(25 * size)\n	t.left(90)\n	t.forward(140 * size)\n	t.left(90)\n	t.forward(125 * size)\n\n	t.up()\n	t.forward(70 * size)\n	t.down()\n\n	# T\n	t.left(90)\n	t.forward(120 * size)\n	t.left(90)\n	t.forward(50 * size)\n	t.right(90)\n	t.forward(20 * size)\n	t.right(90)\n	t.forward(120 * size)\n	t.right(90)\n	t.forward(20 * size)\n	t.right(90)\n	t.forward(50 * size)\n	t.left(90)\n	t.forward(120 * size)\n	t.right(90)\n	t.forward(20 * size)\n        \n                    \ndef forme():\n    for i in range(50):\n        t.circle(i*3)\n        t.left(10)\n                    \n\niut('blue', 1, 20)\ntime.sleep(1.5)\nt.reset()\nt.speed(0)\nforme() \n";
var fileVie = 'import turtle\nimport random\nimport copy\n\nscreen=turtle.Screen()\nscreen.setup(500,500)\n\nturtle.hideturtle()\nturtle.speed(0)\nturtle.tracer(0,0)\n\nlifeturtle = turtle.Turtle() # turtle for drawing life\nlifeturtle.up()\nlifeturtle.hideturtle()\nlifeturtle.speed(0)\nlifeturtle.color("black")\n\nn = 50 # nxn grid\ndef draw_line(x1,y1,x2,y2): # this function draw a line between x1,y1 and x2,y2\n    turtle.up()\n    turtle.goto(x1,y1)\n    turtle.down()\n    turtle.goto(x2,y2)\n    \ndef draw_grid(): # this function draws nxn grid\n    turtle.pencolor("gray")\n    turtle.pensize(3)\n    x = -400\n    for i in range(n+1):\n        draw_line(x,-400,x,400)\n        x += 800/n\n    y = -400\n    for i in range(n+1):\n        draw_line(-400,y,400,y)\n        y += 800/n\n\nlife = list() # create an empty list\ndef init_lives():\n    for i in range(n):\n        liferow = [] # a row of lives\n        for j in range(n):\n            if random.randint(0,7) == 0: # 1/7 probability of life\n                liferow.append(1) # 1 means life\n            else:\n                liferow.append(0) # 0 means no life\n        life.append(liferow) # add a row to the life list -> life is a list of list\n\ndef draw_square(x,y,size): # draws a filled square \n    lifeturtle.up()\n    lifeturtle.goto(x,y)\n    lifeturtle.down()\n    lifeturtle.seth(0)\n    lifeturtle.begin_fill()\n    for i in range(4):\n        lifeturtle.fd(size)\n        lifeturtle.left(90)\n    lifeturtle.end_fill()\n\ndef draw_life(x,y): # draws life in (x,y)\n    lx = 800/n*x - 400 # converts x,y to screen coordinate \n    ly = 800/n*y - 400\n    draw_square(lx+1,ly+1,800/n-2)\n\ndef draw_all_life(): # draws all life\n    global life\n    for i in range(n):\n        for j in range(n):\n            if life[i][j] == 1: draw_life(i,j) # draw live cells\n\ndef num_neighbors(x,y): # computes the number of life neighbours for cell[x,y]\n    sum = 0\n    for i in range(max(x-1,0),min(x+1,n-1)+1):\n        for j in range(max(y-1,0),min(y+1,n-1)+1):\n            sum += life[i][j]\n    return sum - life[x][y]\n        \ndef update_life(): # update life for each cycle\n    global life \n    newlife = copy.deepcopy(life) # make a copy of life\n    for i in range(n):\n        for j in range(n):\n            k = num_neighbors(i,j)\n            if k < 2 or k > 3:\n                newlife[i][j] = 0\n            elif k == 3:\n                newlife[i][j] = 1\n    life = copy.deepcopy(newlife) # copy back to life\n    lifeturtle.clear() # clears life in previous cycle\n    draw_all_life()\n    screen.update() \n    screen.ontimer(update_life,200) # update life every 0.2 second\n\ndraw_grid()\ninit_lives()\nupdate_life()\n';
var fileautre = 'import turtle\n\nruleInput = ["F", "X"]\nruleOutput = ["FF", "F-[[X]+X]+F[+FX]-X"]\nstart = "X"\n\nfront = 5\nturn = 30\nstack = []\ndirstack = []\n\nturtle.left(90)\nturtle.penup()\nturtle.setpos(0, -350)\nturtle.pendown()\nturtle.speed(0)\n\ndef generate(iteration):\n	result = start\n	temp = ""\n	for i in range(iteration):\n		for j in range(len(result)):\n			for k in range(len(ruleInput)):\n				if (result[j] == ruleInput[k]):\n					temp += ruleOutput[k]\n					break\n				if (k == len(ruleInput)-1):\n					temp += result[j]\n		result = temp\n		temp = ""\n	return result\n\ndef draw(input):\n	for x in input:\n		if (x == "F"):\n			turtle.forward(front)\n		elif (x == "-"):\n			turtle.left(turn)\n		elif (x == "+"):\n			turtle.right(turn)\n		elif (x == "["):\n			stack.append(turtle.pos())\n			dirstack.append(turtle.heading())\n		elif (x == "]"):\n			turtle.penup()\n			post = stack.pop()\n			direc = dirstack.pop()\n			turtle.setpos(post)\n			turtle.setheading(direc)\n			turtle.pendown()\n	turtle.hideturtle()\n	turtle.done()\n\ndraw(generate(6))\n';


var btIut = document.getElementById('iut');
var btVie = document.getElementById('vie');
var btFly = document.getElementById('fly');
var textair = document.querySelector('textarea');


btIut.addEventListener("click", function () {
    textair.innerHTML = fileIut;
});

btVie.addEventListener("click", function () {
    textair.innerHTML = fileVie;
});

btFly.addEventListener("click", function () {
    textair.innerHTML = fileautre;
});