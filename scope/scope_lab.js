//gobal varable this is 
var gobalvar='this is gobal varable ';
let goballet='this is gobal let';
const gobalconst="this is a gobal const";

//block
{
    var block_var='this is a block varable in block';
    let block_let= 'this is let varable';
    const block_const='this is a block const'
}
//consoe.log
console.log('this is gobal ', gobalvar);
console.log("this is a gobal ", goballet );
console.log("this gobal const", gobalconst);


//function  scope
 function show(){
    let block_letf=" i am block and in function"
    var block_varf='i am block and in function';
    const block_constf='i am is block and in function';

 }
 show();

 console.log(block_letf);
 console.log(block_constf);
 console.log(block_var);
