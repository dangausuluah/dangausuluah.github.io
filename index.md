---
title: Dangau Suluah
layout: default
---
"Satitiak jadikan lauik, sakapa jadikan gunuang."

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
