var a = new Intl.DateTimeFormat("en-US"); //english
var b = new Intl.DateTimeFormat("de-DE"); //german
var c = new Intl.DateTimeFormat("ta-IN");//tamil
console.log(a.format(new Date("2021-01-02"))); // "1/2/2021"
console.log(b.format(new Date("2021-01-02"))); //"2.1.2021"
console.log(c.format(new Date("2021-01-02"))); //"2/1/2021"
console.log(a.format(new Date("05-07-2021"))); //"5/7/2021"

var d = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
var e = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });
var f = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" });
var g = new Intl.NumberFormat("en-US");
var h = new Intl.NumberFormat("en-IN");
console.log(d.format(100200300.4));
console.log(e.format(100200300.4));
console.log(f.format(100200300.4));
console.log(g.format(123456789.5));
console.log(h.format(123456789.5));
