---
layout: post
title: "Markdown fenced code block"
description: 
headline: 
modified: 2016-06-02
category: webdevelopment
tags: [center, centralise]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
---
### Markdown fence code block
  
When writing markdown in Github Jekyll page, to have syntax highlighting code, use {% raw %} {% highlight html%}.... {% endhighlight%} {% endraw%} block as shown below.

{% highlight html %}
{% raw %}{% highlight html %} {% endraw%} 

 <div>
     <p> Paragraph 1   </p>
     <p> Paragraph 2   </p>
 </div>

{% raw %}{% endhighlight %}{% endraw%} 
   
{% endhighlight %}
        
	 
### Literally display liquid code double braces instead of parsing the object	 

Sometimes you may want to literally display double-brace liquid code instead of letting Jekyll render its output.
In this situation embed the liquid code within &#123;&#37; raw &#37;&#125; and &#123;&#37; endraw &#37;&#125;


  