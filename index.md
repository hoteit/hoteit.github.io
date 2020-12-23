---
layout: home
author_profile: true
---

Hello. I am Tarek Hoteit, computers passionate and always in a mission to help the next generation of technology enthusiasts.
You can read more about me [here](/about).
On this site, I share various [thoughts](/posts) on different technology topics, key past [achievements](/works), and certain personal projects.
  
<div>
	<div class="flexslider">
		<ul class="slides">
	  		{% for slide in site.slideshow %}
	  		<li>
	  			<!--<a href="{{ site.url}}{{ page.permalink }}">-->
		    		<img src="{{ slide.image }}">
		    		<p class="flex-caption">{{ slide.title }}</p>
		    	<!--</a> -->
	 		</li>
	  		{% endfor %}
		</ul>
	</div>
</div>
