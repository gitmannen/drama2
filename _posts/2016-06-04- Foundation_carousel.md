---
layout: post
title: "Foundation Carousel"
description: 
headline: 
modified: 2016-06-04
category: webdevelopment
tags: [foundation, image, carousel]
imagefeature: 
mathjax: 
chart: 
comments: false
featured: true
---
<style>

	.orbit-container .orbit-prev  {
	  left:+25%;
	}
	.orbit-container .orbit-prev: hover {
	  left:+25%;
	}

	.orbit-container .orbit-next  {
	  left:+76%;
	}
	.orbit-container .orbit-next: hover  {
	   left:+76%;   
	}

</style>  

### Overview

I have not been successfull using Bootstrap Image Carousel, however, Foundation image carousel seems to work very well.

Foundation image carousel code snippets



{% highlight html %}
  <div class="small-7 small-centered columns">
  <div class="small-7 small-centered columns">
      <ul class="example-orbit" data-orbit >	
		<li>
		  <img src="..." alt="slide 1" />
		   <div class="orbit-caption" >Caption One.</div>
		</li>

		<li class="active">
			 <img src="http://www.w3schools.com/bootstrap/img_chania2.jpg" alt="slide 2" /> 
			 <div class="orbit-caption" >Caption Two.</div>		 
		</li>
		
		 ..   ..
     </ul>
	</div>
  </div>

 Navigation Next and Prev arrows will only be shown in PC only.
 For touch devices, they will not be shown. User just swipe left or right to change the slide.
 To manually change the Left position of Next and Prev arrows, create the following style at the top of the page
 You need to include the style tag. 	

	.orbit-container .orbit-prev  {
	    left:+25%;  
	}
	.orbit-container .orbit-prev: hover {
	   left:+25%;  
	}

	.orbit-container .orbit-next  {
	   left:+76%; 
	}
	.orbit-container .orbit-next: hover  {
	    left:+76%;    
	}

  
{% endhighlight %}
   


<!--   Foundation Image Carousel   1-->		
 	
 <div class="small-9 small-centered columns">
 <h3>Image Carousel</h3>
  <br/>
	<div class="small-9 small-centered columns">
    <ul class="example-orbit" data-orbit >	
		<li>
			<center> <img src="http://www.w3schools.com/bootstrap/img_chania.jpg" alt="slide 1" /></center>
		   <div style="text-align: center">Caption One.</div>
		</li>

		<li class="active">
			<center> <img src="http://www.w3schools.com/bootstrap/img_chania2.jpg" alt="slide 2" /></center> 
		     <div style="text-align: center">Caption Two</div>
			 <!-- <div class="orbit-caption" style="text-align: center">Caption Two.</div>		  -->
		</li>

		<li>
			<center> <img src="http://www.w3schools.com/bootstrap/img_flower.jpg" alt="slide 3" /> </center>
		      <div style="text-align: center">Caption Three</div>
			  <!-- <div class="orbit-caption" style="text-align: center">Caption Three.</div> -->
		</li>

		<li>
			<center>  <img src="http://www.w3schools.com/bootstrap/img_flower2.jpg" alt="slide 4" /></center>
		      <div style="text-align: center">Caption Four</div>
			   <!-- <div class="orbit-caption" style="text-align: center">Caption four.</div> -->
		 </li> 

    </ul>
	</div>
   </div>
   

   
 <!--  End  Foundation Image Carousel   1-->	 
  
  <br/>
  
  
