DVD Bounce Challenge

Engine: vanilla javascript with SVG rendering.

Proud lines of code:
dvd.js 133

Boilerplate lines of code:
index.html  34

Shameful lines of code:
dvd.css 15

Game engine concepts used:
DAS - had to block multiple keydown events from keyboard.

Complex data structures used:

One class "Color" to manage the color changes. Not forced, I just thought it was a nice way to compartmentalize the color changes.

Feedback loop:

Had to stop and start execution after every change, to refresh the game.
Feedback loop was janky because I was streaming, and had to shuffle things around to show what I was working on, and had to learn some OBS features I was unfamiliar with.

IDE:

None, just Notepad++ and Chrome for most of it, also using OBS browser source, which had some friction.

Sharing:

8 files in a single folder, only 3 of which are vital.
index.html - just defines the environment.
dvd.js - the meat. could be inlined, but I think it's nicer split out.
dvd.css - could be inlined, but I thought it better to split this out.
game.svg - this actually was inlined, but I thought it would be good to include
license.txt and readme.txt - required by the challenge
rules.txt - for my own reference, could be discarded
package.json - only required for building executables.

Canvas:

Trivial.

Export:

Trivial if you consider that "all the platforms" have browsers built in. Frustrating if you need an exe, because as much as I love javascript, NWJS is kind of a pain.

Output size:

Browser version as required by Itch was 7kb

Pains:

The biggest pain is that the engine has some things that it doesn't let you change or control very easily. Differences between browsers can cause problems that don't make sense.

DAS blocking - One of the three browsers we tried, the built-in browser on OBS, somehow ignored the DAS blocking. I do not know why or how it was ignoring parts of the code.

Packaging - if you like browser games, it's great, if you want an exe, it's annoying. Had some trouble getting package.json correct (and it's still not completely correct) and no real way of changing that behavior.

Layout - my lack of experience with css caused quite a lot of difficulty once we tried to put it into nwjs. If I knew the basic syntax of css, none of this trouble would have happened.

Color - the way I handled coloring the square was a bit janky, due to my lack of experience with SVG. The most direct way to do it was to concatenate color values with the style string. This is very likely not the engine's fault.

Recentering and bounding - had to calculate the position of the box's edges to know when to bounce, had to calculate ULHC to change the position of the graphic. Acceptable, but not optimal.

- How many proud lines of code did you have to write?
DONE

- How many different game engine concepts (eg: physics bodies, matrices, events, transforms, camera) did you have to be knowledgeable of before you could build your implementation?

DONE

- Did you have to use classes, inheritance, structs or any other overly complex data structures? Why does the engine you are using require these complexities for such a trivial game?

DONE

- How many times did you have to start and stop execution? What was the feedback loop like when you were developing?

DONE

- Were you required to use a dedicated IDE? How long did it take you to get familiar with the IDE when you first started off?

DONE

- Is the source code for the game easily sharable? If you have to share more than just one file and some sprites, what else did you have to provide? What do these ancillary files represent?

DONE

- How difficult was it to set up a 720p canvas?

DONE

- How difficult was it to export to "all the platforms"?

DONE

- What was the output binary size?
- Be sensitive to what pains the engine of your choice puts you through to build the simplest of 2D game and ask yourself if it's acceptable. What could the engine have done better?