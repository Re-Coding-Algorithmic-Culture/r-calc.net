---
layout: layouts/blob
title: Accessibility for r-calc.net
author: Isabel Paehr (author), Johanna Schaffer (editing)
icon: spiral
iconlabel: 'Icon of a violet spiral.'
---

## A few 'Pins'

This document provides a collection of ‚pins’ on different aspects of accessibility – thoughts to be pinned onto an imaginary wall for inspiration. It started from the wish that accessibility be not just a formal check list to be followed, but about structural engagement or engagement with structures of normativity, normative standards, and their disabeling effects. 

## Pin: How We Structure Knowledge
Aimi Hamraie writes and teaches on the intersections of knowing, making and relating in a field they call "Critical Access Studies" (Aimi Hamraie 2017, Building Access. Universal Design and the Politics of Disability. Minneapolis: University of Minnesota Press, p. 13) Concerning accessibility, Hamraie writes about knowledge as a kind of design itself (p. 3): 

> [T]he built world is inseparable from social attitudes, discriminatory systems, and knowledge about which users designers must keep in mind. Put another way, how we structure knowledge, interact with material things, and tell stories about the users of built environments matter for belonging and justice.

For this website as a built environment we imagine a readership that also encompasses disabled readers and thus follow a couple of basic accessibility recommendations.


## Pin: Screen Readers
A screen reader is a piece of software that reads out aloud what is written on a website. Screen readers are used by blind people, people with low vision, people who have intellectual disabilities, dyslexic people and illiterate people. Screen readers are also helpful for people who for many different reasons might want to listen to text instead of reading it. Screen readers navigate by using the HTML structure of a website, a process that is also referred to as Content Linearization.

Sighted users can scan an entire screen almost instantaneously, comprehending the overall layout, the artistic style, and other macro-level aspects of the content. Screen reader users cannot comprehend these macro-level aspects as quickly. The linear progression through the content from beginning to end is somewhat like automated telephone menu systems which do not reveal all of the options at once. Users must progress through such systems in a step-wise manner. (https://webaim.org/techniques/screenreader/#linearization)

To make using our website possible for people using screen readers, it is important to
- use clear descriptions of links, and use descriptive link names (for example‚ to find out more about our work, read our [project description]' instead of ‚[click here] to read more about our project‘.)
- organize content by using headings. The headings should provide a clear overview of the following section or paragraph. Also the HTML structure should be strictly followed (HTML is an abbreviation of Hypertext Markup Language and is the most widely used markup language for structuring websites). So the heading H1 comes first, next is the heading H2, etc. (for example, on this webpage, the title of this text is wrapped in a H1 element, and looks like this: 
```html
<h1>Accessibility for r-calc.org: A few  'Pins'</h1>)
```
- place the most important information of a paragraph in its first sentence. Then different paragraphs will be easy to distinguish by their first sentence.
- use skip links that make it easier to skip from the navigation to the main content (https://webaim.org/techniques/skipnav/). A skip link is an internal link at the beginning of a page or a paragraph that helps readers to jump to beginnings of sections quickly.
use landmark elements that describe the type of elements on the page (https://webaim.org/techniques/aria/#landmarks)

It is also possible to have a section of text that is particularly dedicated to screenreaders, and thus especially easy to be read by them. For example https://www.mapping-access.com , if one scrolls down, has a screen readable section called „TEXT-BASED NAVIGATION FOR SCREEN READERS“.


## Pin: Keyboard Accessibility
Some people who have motor disabilities use the keyboard as the main navigational tool, and many blind users do, too. Keyboard users mostly use the TAB key to navigate the web. Some disabled people build their own custom keyboards, or use speech input instead of a keyboard. Technically, the keyboard jumps to HTML elements and puts them 'into focus' which means that the web browser creates an outline around them. As with screen reader accessibility, a clear navigational order and HTML structure is necessary. It is also recommended not to set any general outlines to zero in CSS. CSS stands for Cascading Style Sheets and is a language for altering and adding design elements such as fonts, colors, layouts to a Web document. Keyboard accessibility can be tested by navigating any website with the keyboard.


## SubPin: Alt Texts
Alt texts describe an image and are usually embedded in the img HTML element. Writing good alt texts is a form of writing in its own right. 

> Now alt-text can be really bad. I walked some students through this recently, we were looking at a website from the Smithsonian and they had a picture with the alt-text, "Vintage listeners." Do you even know what I'm saying? No, that doesn't bring an image to mind, that doesn't tell you what it's for, that doesn't tell you what's in there. And these are the kind of things that standards are really bad at capturing, like, "Alt-text must be meaningful and useful," is a much harder standard when we start talking about enforcement. (Liz Ellcessor on the Contra* Podcast: https://www.mapping-access.com/podcast/2020/5/11/contra-podcast-episode-29-contratechnology-with-liz-ellcessor)

Here’s a list with best practices: https://moz.com/learn/seo/alt-text. Working with alt text as a poetic and playful dimension of meaning-making, the artists Bojana Coklyat and Shannon Finnegan have developed the website https://alt-text-as-poetry.net. 

We suggest to care for alt text just like for any other text on a website, and to go through the same editorial process for it as well. You can explore the alt texts that we have written for this website by either using a screen reader, or by opening the web developer console in your browser.

## Pin: Contrast
This online tool checks the contrast between two colours and indicates if the contrast between two chosen colours is compliant with the Web Content Accessibility Guidelines (https://www.w3.org/TR/WCAG20/) : https://webaim.org/resources/contrastchecker/. We have worked with this tool to make our website’s color design more accessible.


## Pin: Audio
Audio material accompanying written text can be more enjoyable to listen to than a screen reader. To make it possible to take breaks from listening, the audio player should have a 'pause' button. As some people prefer reading and listening simultaneously, scrolling should not stop the audio from playing.

A mechanism is provided to stop, pause, mute, or adjust volume for audio that automatically plays on a page for more than 3 seconds. (https://webaim.org/standards/wcag/checklist)

Should some of the audio not be equivalent to the written text, a transcript should be provided (https://webaim.org/techniques/captions/#transcripts). Here, it is recommended to also include „descriptions of important audio information (like laughter)”. However: 

Screen reader users also may also prefer a transcript over real-time audio, since most proficient screen reader users set their assistive technology to read at a rate much faster than natural human speech. (https://webaim.org/techniques/captions/#transcripts)


## Pin: Glossary and Wording
Having a glossary is highly recommended by web accessibility sites.

Words that may be ambiguous, unfamiliar, or used in a very specific way are defined through adjacent text, a definition list, a glossary, or other suitable method. (https://webaim.org/standards/wcag/checklist)

It is also recommended to use the HTML element <abbr> when using an abbreviation for the first time in a text. This helps people who have difficulty in understanding context, or in decoding abbreviations, or who use screen magnifiers and thus lose the context of the page. It can also be helpful for people with learning disabilities or limited memory (https://www.w3.org/WAI/WCAG21/Understanding/abbreviations.html)

We did consider writing a glossary, but ran out of time, so no glossary unfortunately.


## Pin: Language 
Different conventions and habits exist with regard to the naming of disability and disabled people. Please ask about and respect each disabled person’s right to decide how other people should speak with and about them and their disability.

'Person first language' puts the person first as in „person with a disability“. Identity first language puts the descriptor first, e. g. „disabled person“. The idea here is that disability is part of a person’s identity, and can’t be separated from the person – it’s not an 'extra'. Many activist disability contexts insist on identity first language, also because of 'cure culture' – the idea that disability can be removed from a person through medical/technical (for example Deafness) and violent behavioural (for example autism) intervention. Identity first language is also considered as less awkward, as it’s also „athletic person“ and not „person with athletic abilities“. For our writing, we are using identity first language while also acknowledging the variety in which disabled people self-describe. We do this also in light of research that shows that not using the word disabled is harmful to disabled people:

Decisions about language have important sociocultural meanings in the disability community, and erasure of the term “disability” can evoke fear and frustration among those who claim a disabled identity and align with disability culture. (Erin E Andrews, Anjali J Forber-Pratt, Linda R Mona, Emily M Lund, Carrie R Pilarski, and Rochelle Balter. # SaytheWord: A Disability Culture Commentary on the Erasure of “Disability”. Rehabilitation psychology (2019). https://cdn.vanderbilt.edu/vu-news/files/20190426152448/Andrews.Forber-Pratt.Mona_.Lund_.Pilarski.Balter-2019-RP-Say2.pdf)


## Pin: Social Model of Disability
Our considerations on accessibility rest on an understanding of apparent and non-apparent disabilities as socially produced as well as embodied experiences of knowing-making. This understanding is opposed to a medical definition of disability in which disability tends to be seen as a medical problem. Inclusion London is an umbrella organisation that supports over 70 Deaf and Disabled Organisations in London. They explain the social model of disability:

> The Social Model of Disability holds that people with impairments are ‘disabled’ by the barriers operating in society that exclude and discriminate against them. […] It states that people have impairments but that the oppression, exclusion and discrimination people with impairments face is not an inevitable consequence of having an impairment, but is caused instead by the way society is run and organised. (https://www.inclusionlondon.org.uk/disability-in-london/social-model/the-social-model-of-disability-and-the-cultural-model-of-deafness/)

We are also inspired and empowerd by the concept of neurodiversity that Katta Spiel, Christopher Frauenberger, Os Keyes, and Geraldine Fitzpatrick put forward in their text on the Agency of Autistic Children in Technology Research. They explain:

> As a movement and theory, neurodiversity stands outside of the dichotomy between a medical and a social model of disability; it instead opens up a discourse in which variation is celebrated but not negated in its embodiment. (Katta Spiel, Christopher Frauenberger, Os Keyes, and Geraldine Fitzpatrick. 2019. Agency of Autistic Children in Technology Research – A Critical Literature Review. ACM Trans. Comput.-Hum. Interact. 00, 00, Article 00 ( 2019), 40 pages)

If the causes of oppression, exclusions and discriminations are social then it is possible to think of other ways of collectively organizing and designing societies that minimize if not do away with oppression and discrimination. For our website, we wished to treat disability as a locus of meaning-making, and accessibility as a dimension that does not just undo some barriers, but that transforms a website by bringing with it its own structures, designs and languages.