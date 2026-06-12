---
title: Dangau Suluah
layout: default
---
"Lauikkan titiak, gunuangkan kapa."

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
