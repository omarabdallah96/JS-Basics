    var img1= document.querySelector("#image1");
    var img2= document.querySelector("#image2");
    var img3= document.querySelector("#image3");
    var img4= document.querySelector("#image4");
    var img5= document.querySelector("#image5");
   
function swap(img,id){
    img.onmouseover=()=>{img.src=id;}
}
    function reSwap(img,id){
        img.onmouseout=()=>{img.src=id;}

    }

    swap(img1,"images/image1_2.jpg");
    swap(img2,"images/image2_2.jpg");
    swap(img3,"images/image3_2.jpg");
    swap(img4,"images/image4_2.jpg");
    swap(img5,"images/image5_2.jpg");
    reSwap(img1,"images/image1.jpg");
    reSwap(img2,"images/image2.jpg");
    reSwap(img3,"images/image3.jpg");
    reSwap(img4,"images/image4.jpg");
    reSwap(img5,"images/image5.jpg");
  