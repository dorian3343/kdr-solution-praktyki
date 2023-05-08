const Map1 = new Map([ 
  ["<p>", "p!{"],
  ["<h1>", "h1!{"],
  ["<h2>", "value3"],
  ["<h3>", "value3"],
  ["<h4>", "value3"],
  ["<h5>", "value3"],
  ["<h6>", "value3"]
]);
function stringContainsKey(string, keyMap) {
  console.log(keyMap)
  console.log(string)
  if (keyMap.has(string)){
console.log("kej")
  }else{
    console.log("throw error")
  }
}
