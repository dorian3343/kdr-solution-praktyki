const Map1 = new Map([ 
  ["<p>", "\np{\n  "],
  ["<h1>", "\nh1{\n "],
  ["<h2>", "\nh2{\n "],
  ["<h3>", "\nh3{\n  "],
  ["<h4>", "\nh4{\n  "],
  ["<h5>", "\nh5{\n  "],
  ["<h6>", "\nh6{\n  "],
  ["<div>", "\ndiv{\n  "],
  ["<div style=","div: "],
  ["<span style=","span style="],
  ["<span>","span{\n  "],
  ["<p style=","p: "],
  ["<h1 style=","h1:"],
  ["<h2 style=","h2:"],
  ["<h3 style=","h3:"],
  ["<h4 style=","h4:"],
  ["<h5 style=","h5:"],
  ["<h6 style=","h6: "],
  ["<pre style=","pre: "],
  ["</pre>","\n}pre\n"],
  ["<em>","em{\n"],
  ["<strong>","\nstrong{\n  "],
  ["<s>","s{\n"],
  ["<sup>","sup{\n  "],
  ["<sub>","sub{\n  "],
  ["<blockquote>","blockqoute{\n  "],
  ["<code>","code{\n  "],
  ["</strong>","\n}strong\n"],
  ["</span>","\n}span\n"],
  ["</p>","\n}p\n"],
  ["</em>","\n}em\n"],
  ["</h1>","\n}h1\n"],
  ["</h2>","\n}h2\n"],
  ["</h3>","\n}h3\n"],
  ["</div>","\n}div\n"],
  ["</h4>","\n}h4\n"],
  ["</h5>","\n}h5\n"],
  ["</h6>","\n}h6\n"],
  ["</code>","\n}cede\n"],  
  ["</blockquote>","\n}blockquote\n"],
  ["</sub>","\n}sub\n"],
  ["</sup>","\n}sup\n"],
  ["</s>","\n}s\n"],
  ["text-decoration:","text-decoration:"],
  ["underline;","underline;"],
  ["pt;","pt"],
  ["px;","px"],
  ["font-size:","font-size:"],
  [";",""],
  ["font-family:","font-family:"],
  ["justify;","justify"],
  ["color:","color:"],
  ["rgb(","rgb("],
  [");",");"],
  ["padding-","padding-"],
  ["center;","center;"],
  ["left;","left;"],
  ["right;","right;"],
  ["background-","background-"],
  ["line-height","line-height"],
  [">","\n{\n"],
]);

const Map2 = new Map([ 
  ["p{ ", "<p>"],
  ["h1{ ", "<h1>"],
  ["h2{ ", "<h2>"],
  ["h3{ ", "<h3>"],
  ["h4{ ", "<h4>"],
  ["h5{ ", "<h5>"],
  ["h6{ ", "<h6>"],
  ["div{ ", "<div>"],
  ["div: ", "<div style="],
  ["span style=", "<span style="],
  ["span{ ", "<span>"],
  ["p: ", "<p style="],
  ["h1:", "<h1 style="],
  ["h2:", "<h2 style="],
  ["h3:", "<h3 style="],
  ["h4:", "<h4 style="],
  ["h5:", "<h5 style="],
  ["h6: ", "<h6 style="],
  ["pre: ", "<pre style="],
  ["}pre", "</pre>"],
  ["em{", "<em>"],
  ["strong{ ", "<strong>"],
  ["s{", "<s>"],
  ["sup{ ", "<sup>"],
  ["sub{ ", "<sub>"],
  ["blockqoute{ ", "<blockquote>"],
  ["code{ ", "<code>"],
  ["}strong", "</strong>"],
  ["}span", "</span>"],
  ["}p", "</p>"],
  ["}em", "</em>"],
  ["}h1", "</h1>"],
  ["}h2", "</h2>"],
  ["}h3", "</h3>"],
  ["}div", "</div>"],
  ["}h4", "</h4>"],
  ["}h5", "</h5>"],
  ["}h6", "</h6>"],
  ["}cede", "</code>"],  
  ["}blockquote", "</blockquote>"],
  ["}sub", "</sub>"],
  ["}sup", "</sup>"],
  ["}s", "</s>"],
  ["text-decoration:", "text-decoration:"],
  ["underline;", "underline;"],
  ["pt", "pt;"],
  ["px", "px;"],
  ["font-size:", "font-size:"],
  [";", ";"],
  ["font-family:", "font-family:"],
  ["justify", "justify;"],
  ["color:", "color:"],
  ["rgb(", "rgb("],
  [");", ");"],
  ["padding-", "padding-"],
  ["center;", "center;"],
  ["left;", "left;"],
  ["right;", "right;"],
  ["background-", "background-"],
  ["line-height", "line-height"],
  ["{", ">"],
]);


function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
}

function replaceWords(content,Map1) {
  const keysArray = [...Map1.keys()];
  const valuesArray = [...Map1.values()];
  let resultString = content;
  for (let i = 0; i < keysArray.length; i++) {
    const escapedKey = escapeRegExp(keysArray[i]);
    const regex = new RegExp(escapedKey, 'gi');
    resultString = resultString.replace(regex, valuesArray[i]);
  }
  console.log(resultString);
  return resultString;
  
}



function replaceWords2(content,Map2) {
  const keysArray = [...Map2.keys()];
  const valuesArray = [...Map2.values()];
  let resultString = content;
  for (let i = 0; i < keysArray.length; i++) {
    const escapedKey = escapeRegExp(keysArray[i]);
    const regex = new RegExp(escapedKey, 'gi');
    resultString = resultString.replace(regex, valuesArray[i]);
  }
  console.log(content);
  console.log(resultString);
  return resultString;
  
}