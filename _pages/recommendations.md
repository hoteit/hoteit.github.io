---
permalink: /recommendations/
title: "Recommendations"
layout: single 
author_profile: true
---
<div class="flexslider">
  <ul class="slides">
	    {% for recommendation in site.recommendations %}
	  	<li>
          {{ recommendation.excerpt }} - {{ recommendation.name}} ({{ recommendation.position}})
	 		</li>
	  {% endfor %}
		</ul>
</div>
