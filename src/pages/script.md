---
layout: '@layouts/Layout.astro'
---

- Hi folks, the name of my talk is Mise en mode. We'll get to what that is in a few minutes. For the French speakers in the audience, don't get ahead of me.
- Before we begin, I want to thank Jina for providing me a platform and community to present. I want to thank my coworker Sean Rice for ensuring me that I wasn't completely crazy. And thank you to my wife Jen for hearing this talk dozens of times, thankful that I'm now across the country.
[SLIDE](name)
- So, my name is Donnie D'Amato. I'm founder and chief architect at a startup called Design Systems House, where we're dedicated to the future of design systems. I'm interested in how the practice could evolve beyond what we're doing today. For the past 4 years, I've been working at GoDaddy as a principle engineer on the UXCore component library. In the evening, I teach user research and interaction design at Parsons School of Design in New York, where I live with my wife who also works in design systems. That's where the design systems house comes from.
- About a year ago, my wife and I were invited to Schema, Figma's design systems conference. It was chock-full of amazing content. One of the talks was by Lauren LoPrete, who walked the audience through her journey to gain influence in her organization. It's a topic I think we can all resonate with, that "design systems are for people". No matter all the components and tokens we are trying to manage, it doesn't mean much with adopting. So building trustworthy reloationships is the key to success in our practice.
- The final slide of that talk, was this:
[SLIDE](lauren)
- They're just rectangles on the internet. There was a collective chuckle in the crowd, myself included. It's common for us to belittle the work we do in the grand scheme of things. Here's another example from the internet.
[SLIDE](hand)
- There's people out there doing inverse kinematics on 3d soft bodies; it's cool stuff! And here we are arguing about if the rectangle should be gray or dark gray.
[SLIDE](think)
- However, in retrospect, I wouldn't be in this room without rectangles. I wouldn't have the same career without them. In fact I wouldn't have met my wife without them; online dating! So in reality, rectangles are changing humanity, maybe we're becoming dependent on them. Rectangles make the world go 'round, socio-economically speaking.
- I didn't know it then, but I'd come to find that rectangles are also potentially a gateway to a whole new design paradigm. One that I believe delivers what Nate is excited for here.
[SLIDE](nate)
- (READ TWEET)
- Sounds like Nate might have better luck asking for a pony but this Christmas I'm the Design System Santa and I intend to make your wishes come true. So what we're about to go on is a crazy ride about how I got here. All the questions that I asked myself over the past year. So if you can stick with me, it could be all worth it in the end.
[SLIDE](pricing)
- In this example, we have a section of a pricing page. There's different tiers of products, maybe standard, pro, and enterprise. Each card has some text, a button, and maybe some links but they have different treatments based on how premium the product. The task would be, how do we support these slight variations using design tokens?
- What many might do is create new tokens to support the variations. So just focusing on the surface and buttons, maybe the first button is the regular primary background. Then the second is an accent version of primary. And then the third, because it is on an accent color, gets something like onaccent primary. So maybe that could look like this:
[SLIDE](tokens)
- Where we had 4 tokens for the card surface and button before, we now would have 10. A 250% increase of tokens. Ok, maybe that's not so bad. But what happens if we now needed to add an input field? We'd need more tokens for that. Maybe that input field needs to show error text, that's more tokens too. Before long, you might have variations for all the tokens in your system to support accent and onaccent. So what's the solution?
- To find out, let's simplify:
[SLIDE](footer)
- I think we've all seen this before, it's a light page with a dark footer.
[SLIDE](ondark)
- What I've seen many folks do is create new tokens to describe the text in the footer as "text-ondark" and the button as "button-ondark". These new tokens along with variations like contrast and inverse are the problem. In fact, the blog post where I describe this behavior is called "Ondark Virus" because I believe this is an infection across systems. It is resulting in many more tokens that are needed.
- So what's the remedy? Treat the footer as a mini-dark-mode. 
[SLIDE](remedy)
- The same way we assign new values to existing tokens to support dark mode for an entire page, we can do the same for a smaller part of a page. That way, we can keep a core set of tokens and provide different values for a new treatment. There's a few benefits to this, one of which is no new tokens. The button background continues to use the button background token just with a new value applied in the same way that you might apply new values for dark mode.
[SLIDE](solution)
- Back in our pricing page example, we are back to 4 tokens to describe the basic structure and then provide new values for each treatment to get the intended result.
[SLIDE](spacing)
- How might we introduce semantic naming for space? We've already solved semantic naming for color and typography, but what about the other parts of design?
- Now most systems distribute space tokens using either t-shirt sizing or proportional naming. Neither of which are semantic. Let me explain this:
[SLIDE](space-4)
- The token name "button-bgcolor" is semantic because I know where it goes just by the name; it should be applied to the button's background. However, the token name "space-4" gives no indication where it goes from only the name. You need more context to know where it should go. To me, this means that these are different categories of token naming where button-bgcolor is semantic and space-4 is not.
- So I still wanted to answer the question, can we make semantic spacing tokens. And I think we can.
- In my exploration, it was important that I achieved the same results that other approaches the community has adopted even if executed differently. I was heavily influenced by Nathan Curtis's article about Space in Design Systems from 2016. So much so, that I stole the example right out of it. Great artists steal, right?
[SLIDE](nathan)
- What you see here is the card example from Nathan's article, the first one is the final result without any markup. The second example is how Nathan recommends to use tokens. We have tokens like space inset medium, and space stack small. I think this approach is in many systems today and for good reason. It's easy to understand what the value of the space is at any time.
- The third one is using the result of my exploration called Complementary Space. In it, we mark where space goes with a single token for all areas that need space. Then, each region determines what the value of tokens found within. Here, the act of applying space is a binary decision. Is there space or not?
- This highlights another quality about true semantic tokens.
[SLIDE](suggest)
- The name doesn't suggest the value. Just like button-bgcolor doesn't give indication about what the color is this approach doesn't suggest how much space through the token either.
[SLIDE](complementary)
- If you want to learn more about the approach, you can visit Complementary dot Space, that site also uses a version of the approach and folks who have tried this method have reported positive results.
- After completing that exploration, I paused to reflect on the work I've done. I realized that both Ondark Virus and Complementary Space were using the same technique of changing token values depending on a targeted scope. From here I wanted to understand how I got here.
[SLIDE](shared)
- What were the shared principles in these approaches? How are they in common? And this how I understood it.
[SLIDE](wireframe)
- This is a wireframe of some experience. Now I could ask, what is this a wireframe of? However, I think a more interesting question is "how do you know?". I think some of you already know what this represents, you might have even been a bit triggered. Maybe you forgot to close a ticket. It's a project management tool. But the question is, how did you know? It doesn't say project management, or Jira. There's no branding, so how?
- The answer is because we've seen something similar before. Our prior experience is informing this newly introduced one. This is Jakob's law of familiarity, which goes on to say:
[SLIDE](jakob)
- User's prefer familiar experiences. This makes sense because users don't need to relearn anything. The experience will meet their expectations. As an example, the layout of a project management tool should both be immediately identifiable and different from the layout of a social media feed to be the most successful.
[SLIDE](rtl)
- Even when the layout does change, in the case of right-to-left languages or responsive reflow, the purpose, hierarchy and methods of user input should persist as a blueprint for how a certain experience should behave.
[SLIDE](colored)
- From here, we can enhance that experience with personality using a new collection of values. This concept was very clearly demonstrated at Config earlier this year:
[SLIDE](config)
- Here is a video from the keynote where Dylan takes a predetermined app structure, wired with variables, and moves the structure into these sections which provide different values to those variables. The first being Japanese and Dark mode, the next being German and Config mode. This was exciting to see live, but I saw more potential based on the earlier work. From here, what's stopping us from putting a mode inside a mode?
[SLIDE](xzibit)
- Yo dawg, I heard you like modes. So we put a dark mode in your light mode so you can stop making more tokens.
[SLIDE](mise)
- That's why I've have called this technique mise en mode, meaning “placement in mode”. It is a play on the art history term mise en abyme, which is the act of creating smaller artwork within a larger composition. And here's an example of that:
[SLIDE](coat)
- Here we can see the coat of arms for the United Kingdom in 1816, with a smaller one inside and then an even smaller one inside of that. In the case of user experience design, we can use an example from earlier.
[SLIDE](enhancement)
- Both of these pages are functionally identical, however the experience on the left is what I'll call expressively enhanced with mise en mode. Now what do I mean by that.
[SLIDE](bars)
- Going back to the ondark virus examples, if the token text-ondark didn't load or was simply forgotten during the curation step. Anything meant to receive the value of that token is completely unstyled. It is not informed by other tokens.
[SLIDE](fallback)
- Meanwhile, if we use the same tokens and provide a new collection of values. If those new values fail, the configuration higher up says "No worries, I got you fam'. I have a value for that token." And while you might not get the expression you intended, the experience will remain cohesive. But if everything is successful, we'd get that enhancement.
- Now, I know some of you are thinking. Donnie, I'm smarter than that, I choose what text-ondark should fallback to in my configuration to get the same results. And I'd say sure, you could do that. But then your tokens look like this:
[SLIDE](graph)
- And I don't know about you, but I feel like I need a degree in graph theory to understand all these relationships here. When all I want to do is change the background color. Mise en mode reintroduces simplicity to the process.
- In fact, I'm about to make this really simple.
[SLIDE](critical)
- Perhaps there is no critical button, only a button that exists within a critical mode.
- Alright, I'm confident the system you maintain has a critical button for when the user is about to do something destructive.
[SLIDE](modal)
- Here's an example of one from Atlassian's design system and we can clearly see the critical button. But I'd argue that the entire modal is meant to display as wholly critical. The icon, content, and buttons are meant to convey the concept of danger. So why not consider this a new mode of expression?
[SLIDE](github)
- Here's another example from github. This is a edit profile experience and we can see the danger zone gets a different treatment than the rest of the page. We can even see the compare changes between the normal headings and button above and ones that are found in what could be a critical mode.
- So if we think about designing an experience in this way, as a nested collection of modes, each providing new values to existing tokens, we can enhance our messaging,
[SLIDE](mcd)
- or to promote a brand. Mise en mode unlocks a creative freedom of expression that designers have been asking for. They can now round those corners, flourish that typography and purple those gradients using mise en mode.
- They could go wild with power, muahahahaa.
[SLIDE](doge)
- But with great power comes a great question. This comes from community member Mike Mai.
[SLIDE](question)
- He asks, is this light mode or dark mode. Take a second to think, lock in your answers. Ok show of hands, who thinks this is light mode. Ok, who thinks this is dark mode? Ok, and who has no clue. Alright, I'm with you. I don't know.
- What is the purpose of this treatment? Is it meant to help with reading, improve battery performance, portray a brand identity, or another user need entirely? What message is this mode meant to convey?
- Here lies a challenge in our work. Asking “why?” about new treatments often starts conflict because it puts designers on defense and then they may go rogue. As humans, it's hard to articulate our needs and is just easier to avoid that conflict.
- So here's one weird trick for designers to get the look they want using mise en mode; name the mode just like you would a component. Consider that other people might want to use this expression for the same reason you need it. So, give it a name that has shared meaning.
[SLIDE](jeopardy)
- For this tweet, one of the responses was "What is Jeopardy mode" and I think that was great. Maybe even a better name than Fred!
- So in the same way we create components to perform a function, we can create modes to express a form. In fact that is exactly what mise en mode is.
[SLIDE](fff)
- Mise en mode is the practical application of form following function. 
[SLIDE](collab) <-----------
- As design systems practicioners, we identify the patterns and best practices which support a particular function with an expectation of shared reuse. This library of functions can create a full experience; a blueprint of user familiarity. From here, on top of this re-enforced scaffolding, designers form modes of expression by freely curating the placement of these rectangles of influence.
- Design and system each with their own clear responsibilities, working together in a beautiful harmony.
[SLIDE](handshake)
- So maybe they're just rectangles on the internet, or maybe...
[SLIDE](burdened)
- They're just rectangles burdened with glorious purpose. Thank you.



