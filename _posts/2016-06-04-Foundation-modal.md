---
layout: post
title: "Foundation modal"
description: 
headline: 
modified: 2016-06-04
category: webdevelopment
tags: [foundation, modal]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
---

* msdjew
{:toc}

### Modal component
Has problem using Bootstrap Modal. When the modal window appears, it is dimmed and its dialog buttons are inactive.
The alternative is to use Foundation Modal.


### Modal Using Foundation 

  <!-- Modal Foundation -->
<a href="#" data-reveal-id="myModal">Click Me For A Modal</a>

<div id="myModal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h2 id="modalTitle">Awesome. I have it.</h2>
  <p class="lead">Your couch.  It is mine.</p>
  <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>  
