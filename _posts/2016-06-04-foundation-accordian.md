---
layout: post
title: "Foundation Accordian"
description: "Collapsible headlines"
headline: 
modified: 2016-06-02
category: webdevelopment
tags: [accordian]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
---
### Foundation Accordian
    
Accordian enables you to create collapsible headlines like the one shown below.

<div class="small-7 small-centered columns"> 
<dl class="accordion" data-accordion>
  <dd class="accordion-navigation">
    <a href="#panel1a">Accordion 1</a>
    <div id="panel1a" class="content active">
      Panel 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </dd>
  <dd class="accordion-navigation">
    <a href="#panel2a">Accordion 2</a>
    <div id="panel2a" class="content">
      Panel 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </dd>
  <dd class="accordion-navigation">
    <a href="#panel3a">Accordion 3</a>
    <div id="panel3a" class="content">
      Panel 3. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </div>
  </dd>
</dl>
</div>
   
### How to create Foundation Accordian
    
You need to use 'dl' and 'dd' tags with the following attribute classes.
For Foundation version 5.5 or greater, you can use 'ul' and 'li' tags.

{% highlight html %}
<dl class="accordion" data-accordion>
  <dd class="accordion-navigation">
    <a href="#panel1a">Accordion 1</a>
    <div id="panel1a" class="content active">
          Content of accordian 1
    </div>
  </dd>
  <dd class="accordion-navigation">
    <a href="#panel2a">Accordion 2</a>
    <div id="panel2a" class="content">
          Content of accordian 2
    </div>
  </dd>
  <dd class="accordion-navigation">
    <a href="#panel3a">Accordion 3</a>
    <div id="panel3a" class="content">
           Content of accordian 3
    </div>
  </dd>
</dl>
{% endhighlight %}
       