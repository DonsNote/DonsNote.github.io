---
---
{%- assign search_data = "" -%}
{%- assign index_docs = "" -%}
{%- for item in site.documents -%}
  {%- if item.search_exclude != true -%}
    {%- assign index_docs = index_docs | push: item -%}
  {%- endif -%}
{%- endfor -%}

window.searchData = {
  docs: [
    {%- for doc in index_docs -%}
    {
      id: {{ forloop.index }},
      title: {{ doc.title | default: doc.name | default: "Untitled" | jsonify }},
      url: {{ doc.url | absolute_url | jsonify }},
      body: {{ doc.content | markdownify | strip_html | jsonify }}
    }{%- unless forloop.last %},{%- endunless -%}
    {%- endfor -%}
  ]
};
