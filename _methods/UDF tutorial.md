---
---
Making udf's is easier than you think.
Tuesday, 4 March 2025

[disclaimer: this is the cheaty method, if you want to make something proper read the docs.]

Recall how define works:

Define f(x) = x^2 + 3
(or f(x):= x^2 + 3) (ctrl + template)

you are predefining a function so that you can just put in f(the number) and a number is outputted.

and that is what a udf is (user defined function).

The only thing different is you simply change the "f" into something else like "calculate".

that's it. that's all there is to it.

====

There are some useful extra things to know.

I'm sure you could figure this out yourself but there are two very simple things that you can do:

	- adding multiple variables into the input
	- adding multiple outputs


**Multiple inputs**

here is an example of a basic distance formula. You can put multiple variables within the f(x) brackets.
$$dist(x1, y1, x2, y2):=\sqrt{(x2-x1)^2-(y2-y1)^2}$$


**Multiple outputs**

matrices.

As matrices allow multiple input boxes you can essentially cram multiple rules into a single calculation.

Here's an example (not sure you need it though it's pretty obvious)

$$intercepts(f, var):=\begin{bmatrix}
\text{"x int"} & solve(f=0, var) \\\\
\text{"y int"} & f|var=0
\end{bmatrix}$$


**You can mix random stuff**
Find the formula and x int of a linear graph given 2 points

$$
l2p(x_1, y_1, x_2, y_2) := \text{solve}\left(\\left\\{
\begin{array}{c}
m x_1 + c = y_1 \\\\
m x_2 + c = y_2 \\\\
0 = m x_{\text{int}} + c \\\\
y = m x + c
\end{array},\ \{x_{\text{int}},y,m,c\}
\\right\\}\right)
$$

---

**Programs**
(I don't have markdown notes for this, I just pasted this from my other notes thus the broken formatting)

Use tinspire app (so can type faster)

Menu-add program editor - New\
Choose program, not function (as program lets you do more advanced code). However for programs you can't go 1 + myprogram()

make sure you run it before you refresh libraries to let it process

Template you will get\
Define myfunc(insert params)=\
Prgm\
[write your code here]\
EndPrgm

Print\
hello [value of a]\
Disp "hello", a

Input\
Request "type here: ", a\
(user's answer gets allocated into var a)\
Define\
myvar:= a + 2\
(this is the same as how you normally do shift-template) (if you are still doing menu 1 1 switch to this) (but if you are really picky Define is at menu 3 2)\
Display a popup with text\
clicking cancel stops the program\
Text "Do you want to continue?"\
Set var to \
a + 1 -> b\
(-> is a right arrow character)

Control\
While\
Menu 4 6\
While n>1\
…\
EndWhile\
For\
Params:\
var, begin, end, increment\
(i checks both the begin and end values)\
increment optional\
Exit from current loop\
Exit\
Forever\
Loop\
EndLoop\
(use exit)\
Conditional\
If = a single line conditional\
if then = multi line\
Gotos\
Lbl labelname\
Goto labelname\
other\
Just look at the menu. It's all listed there.


Functions (inside the function)\
Local myfunc2

then:\

Define myfunc2(x, y)\
Pgrm\
…\
EndPgrm\
(essentially you are copying the template you got at the start)\
menu 3 5

if you want a return value then do menu 3 4\
to return do \
Return ___ \
Remember that using func instead of prgm means a lot of code (eg Text) you can't use inside it.\
Set a calculation mode (does not persist outside the program)\
From the mode menu, click the mode to change, and click the new setting.\
It will insert eg setMode(1, 3)\

(menu 7)
Call an external UDF\
Just use the normal syntax

Stop a program\
Windows: f12 + spam enter\
handheld: on + spam enter\

normal cas functions to knowa\
Always output decimal\
approx()

If you even have basic understanding of coding, you can pick this up pretty quick. (code you can use is listed in the menu)