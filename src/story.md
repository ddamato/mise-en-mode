[schema talk img]

Sitting toward the end of Lauren's talk, she ended with the slide "they're just rectangles on the internet". The audience and I had a good chuckle on this but after I got home, it stuck with me. There's no shortage of folks minimizing what we do, including us. It feels like there should be so much more to life than this.

[hand img]

However, in retrospect. I wouldn't have been in that room without rectangles. My career, which puts a roof over my head and food on the table, wouldn't exist without rectangles. I wouldn't have met my wife without these rectangles. The work that we do with rectangles is truly changing humanity every day. In reality, rectangles make the world go round, socio-economically speaking.

In the following piece, I will attempt to demonstrate how we might execute design decisions not through complex token naming, but using these very important shapes. I'm about to burden these rectangles with glorious purpose.

---

There's no shortage of articles on token naming, even I have one. If you don't have an opinion about naming tokens, are you even practicing design systems? While I won't go into opinions about the best naming scheme here, I was frustrated with one recommendation that I kept seeing. So much so, that I did what all of us do when we are angry at the internet; I wrote a blog post about it.

[dark mode footer img]

Here we have a basic footer. It has some text, links, and a button. What many folks who use tokens might do is create tokens that describe the concept of inverse or "ondark". Text ondark, button background ondark, etc. While that might seem reasonable at first, things may get out of hand over time.

What happens when we add an input? Maybe that input has an error that needs to be displayed? How do you account for that? If you're answer is more tokens, you're going to find that you'll end up trying to have an ondark version of every semantic token you have. You'll have to cover every possibility of each element appearing in this dark area of the page; at least doubling your token set.

What I recommend is to instead consider this footer as a separate mini "page" which has the dark mode applied to it. There's a few benefits to this, one of which is no new tokens. The button background remains the button background just with a new value applied in the same way that you might apply new values for dark mode.

[diagram of tokens / values applied img]

In this way, the footer is a boundary for new values for the same elements. It's functionally the same text, links, and button just visually changed by existing within a new scope.

Take that idea, put it in your pocket and save it for later.

The blog post, ondark virus, was simply meant as a response to frustration. Atg the time, my real focus earlier this year was expanding other themable properties into semantic naming. Is semantic naming for border radius possible? Spoiler, no it's not, but what about spacing?

I first began by grounding myself to understand why we apply space at all. The Gestalt principle of proximity says that objects closer together suggest that they are more related. If I asked to group apples and oranges, how might that look?

[apples and oranges separated, but all spaced the same from each other]

Most folks would believe that while the apples and oranges are grouped, the space is unsettling. If you'd perform the exercise yourself, you'd most likely move the groups farther from each other instinctually.

Ok all basic stuff, nothing revolutionary there. 

Here's a map with two points of interest. How far apart are they? What does the M stand for, meters or miles? Watch as I have them move apart. Actually they aren't moving at all, I'm just zooming in. It's similar to at first believing that the sun revolved around the Earth until we changed our frame of reference to see that Earth revolves around the sun.

This means we can physically move the points away from each other to create space OR (more importantly) zoom in to create an illusion of more space. The benefit of zooming instead of moving is that the relationship between the elements does not change, only our frame of reference. So perhaps we can think of the visual representation of space not as distance but zoom. This would mean that each time we need elements to be perceived as more dense is not a matter of moving them closer, but thinking of the region as zoomed out where the perceived distance between those elements is now less, making the region look more compact. Importantly this isn't recommending to increase the size of the elements themselves, just the space between those elements.

Through these separate units of work I soon realized that both ondark virus and complementary space were using the same technique of changing token values depending on the scope. Let's break this down to a few fundamental concepts of user interface design; layout, content, and appearance. Layout is the most important one of these, as you cannot change appearance without having elements in the layout and similarly once you place content on the page it is immediately also a layout. You can know where content will go without knowing the value of the content.

The value of a layout is an element which must eventually contain content with appearance When we choose elements for a layout, we are (hopefully) adding them with purpose, hierarchy, and user input in mind. As an example, the layout of a social media site should both be immediately identifiable and different from the layout of a calendar application to be the most succesful.

DEFINTION OF MODE???

From here we can use a mode to describe a change that needs to affect the entire page or (more innovately) part of the page. This area needs to be dense, this needs to standout, this needs to show another brand. From here what's stopping us from putting a mode _inside_ a mode? Yo dawg I heard you like modes. So we put a dark mode in your light mode so you can stop wasting time naming more tokens. 

[xzibit meme img]

That's why I've have called this technique "mise en mode" meaning placement in mode. A play on the art history term mise en abyme, which is act of creating smaller artwork within a larger work of art. In this idea, an experience is designed as a nested collection of modes, each with a specific purpose for being there by design. Each mode provides new values to existing tokens based on that purpose. This means that the semantics are moved from the tokens, to these new rectangular boundaries of the interface. Now the tokens are then simplified to functional categories and properties.

This isn't too far from wanting container queries after having media queries in a component driven architecture. We want micro experiences to be self contained and work within a larger experience.

Taking this a step further, and maybe too far for some but, perhaps there is no critical button, only a button that exists in a critical mode. When a double confirm modal appears the content of that modal is meant to display as wholly critical. It is not just the button. Therefore we could treat the entire region as critical and adjust the appearance through the scoping the token values to this boundary.

So how might we determine when something should be a token versus a mode? If the concept exists across modes, it is a good candidate to be a token. A button will exist across modes, but a state (like critical) could be considered a specific mode. Be careful, hierarchy is not state but structure and should persist between modes. Primary and secondary is herarchical. The lowest fidelity wireframes will help suggest the difference and inform necessary tokens. Wireframes are effectively a modeless representation of the experience. So the best way to name your tokens is to audit your lowest fidelity wireframes, identify the elements and group them by purpose.

Clearly I can't stop myself from recommending a token naming method; I am a design systems practicioner after all.

- Consider rethinking how we apply design intent to experiences using mise en mode.


- "Design is like a box of chocolates, a collection of meaningful experiences to enjoy".

- How do you like them rectangles?
- easter egg, website to presentation