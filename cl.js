/*  Better Console log
*
*   type cl() instead of console.log()
*
*   Objects and arrays are automatically displayed via console.table()
*
*   To add a label to the output (like "<variable name> is " <variable value>),
*   pass the variable name in as a string, with ~ at the beginning
*   like so:
*
*   const foo = "bar";
*   cl(foo); --> outputs "bar"
*   cl("~foo"); --> outputs "foo is bar"
*
*/




window.cl = () => {
  Object.keys(arguments).map(k=>{
    const a=arguments[k],
    l=(a[0]=="~")?(a.substr(1)+" is "):"",
    v=(l)?(this[a.substr(1)]||eval(a.substr(1))):a;
    (typeof v==="object")?(()=>{console.log(l);console.table(v)})():(console.log(l+v));
  });
}
var Q = "ssssss";
var a="z  ";
var l ="wswwew";
var p = {x:"s"};


cl("a",a,"~a",l,("A"=="B"),"~('A'=='A')",{sort:"a",top:"b",vara:l},["a", a, l],[{sort:"a",top:"b",vara:l},{sort:"c",top:"e",vara:"dssd"}],"~p")

cl("~Q")
