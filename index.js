let text1 = document.getElementById("textfeild1");

// text1.textContent = "jb";



let text2 = document.getElementById("textfeild2");
// text2.textContent = "yashi";

let text3 = document.getElementById("textfeild3");
// text3.textContent = "ritika";

let text4 = document.getElementById("textfeild4");
// text4.textContent = "rashi";





// for(let k=0;k<4;k++){
// function password() {
//     var str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890@#$%&";
//     var str2 = "";
//     for(let i=0;i<8;i++){
//         let j = Math.floor(Math.random()*str.length);
//         str2 += str.charAt(j);
//     }

//     text1.textContent = str2;
//     text2.textContent = str2;
//     text3.textContent = str2;
//     text4.textContent = str2;
    
// }



function showpass() {
    // for(let k =0;k<4;k++){
        password();
    // }
}





// }
// text2.textContent = str2;
// text3.textContent = str2;
// text4.textContent = str2;


//exp_01

function password() {
    var str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890@#$%&";
    var str2 = "";
    var str22 = "";
    var str222 = "";
    var str2222 = "";
    for(let i=0;i<8;i++){
        let j = Math.floor(Math.random()*str.length);
        str2 += str.charAt(j);
    }
    for(let w=0;w<8;w++){
        let e = Math.floor(Math.random()*str.length);
        str22 += str.charAt(e);
    }
    for(let q=0;q<8;q++){
        let r = Math.floor(Math.random()*str.length);
        str222 += str.charAt(r);
    }
    for(let y=0;y<8;y++){
        let m = Math.floor(Math.random()*str.length);
        str2222 += str.charAt(m);
    }
    
    text1.textContent = str2;
    text2.textContent = str22;
    text3.textContent = str222;
    text4.textContent = str2222;








}












