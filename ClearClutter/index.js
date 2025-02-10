let file = require("fs");
let path = require("path");

let folder = "D:\\vs code\\Web_practice\\ExpressJs\\ClearClutter\\Downloads";
let newFolder =
  "D:\\vs code\\Web_practice\\ExpressJs\\ClearClutter\\Collections";
let dir ;
// let taget = path.join(folder,dir)
// if (!file.existsSync(taget)) {
//   file.mkdirSync(taget);
// }
let directories = file.readdirSync(folder)
console.log(directories)

// console.log(fold)
directories.forEach((ele)=>{
    let c = ele.toString();
    let fold = path.extname(c).replace(".", "");
    dir = fold;
    let taget = path.join(newFolder, dir);
    if (!file.existsSync(taget)) {
      file.mkdirSync(taget);
    }
    let neww = path.join(newFolder,dir,ele);
    let oldd = path.join(folder,ele);
    
    if (!file.existsSync(neww)) {
        file.rename(oldd,neww,(err)=>{
            if(err) throw err;
        });
    }
})