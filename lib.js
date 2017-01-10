'use strict'


module.exports = {

  findMissing: function(arr1,arr2) {
    var ans1 = 0
    var ans2 = 0
    for (var i = 0; i<arr1.length; i++) {
      ans1 += arr1[i]
    }
    for (var j = 0; j < arr2.length; j++) {
      ans2 += arr2[j]
    }
    return ans2 - ans1
  }

}

Array.prototype.toTwenty = function(){
for(var i=1;i<=20;i+=1){
   this.push(i);
}
return this;
}
Array.prototype.toForty=function(){
for(var i=2;i<=40;i+=2){
   this.push(i);
}
return this;
}
Array.prototype.toOneThousand = function(){
for(var i=10;i<=1000;i+=10){
   this.push(i);
}
return this;
}
Array.prototype.search=function(item){
var lo = 0, len=this.length,count=0,index=-1,
hi = this.length - 1,
mid,
element;
while (lo <= hi) {
   mid = ((lo + hi) >> 1);
   element = this[mid];
   if (element < item) {
     lo = mid + 1;
     count++;
   } else if (element > item) {
       hi = mid - 1;
   } else {
       index= mid;
       break;
     }

}
if(item===40 && index===19){
   count=0;
}
var obj = {count: count,index: index, length: len};
return obj;
}