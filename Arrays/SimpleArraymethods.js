 let arr = [`a`,`b`,`c`,`d`,`e`,`f`]
 //slice method,to slice items from array  but it wont alter the original array

 console.log(` ==Slice Method===${arr.slice(2)}`); // Will slice 0,1,2 items from array
 console.log(arr.slice(1,4));
 console.log(arr.slice(-2));
 console.log(arr.slice(1,-3));

 //splice method is same as slice method but it will alter the actual array

 console.log(` ======== splice method ========= `);
 let arr2 = [`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`]
//console.log(arr2.splice(1));
 console.log(arr2.splice(1,4));
 console.log(arr2); // Here original array is now alter due to splice method

 //contcat Method == use to concat two arrays

 //here we will concat two arrays
 console.log(` =========concat method ========== `);
 console.log(arr.concat(arr2));


 //join method == used go join items of an array using a seperator
 console.log(` ==========join method ========= `);
 console.log(arr.join(`-`));

 console.log(arr.concat(arr2).join(`-`));

