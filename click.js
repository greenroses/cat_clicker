window.onload=function(){
    const elem_1 = document.getElementById('cat_img_1');
    let num_1 = document.getElementById('num_1').innerHTML;
    if(elem_1){
      elem_1.addEventListener('click', function(){
         console.log('clicked');
         num_1++;
         document.getElementById('num_1').innerHTML = num_1;
      }, false)
    }

    const elem_2 = document.getElementById('cat_img_2');
    let num_2 = document.getElementById('num_2').innerHTML;
    if(elem_2){
      elem_2.addEventListener('click', function(){
         console.log('clicked');
         num_2++;
         document.getElementById('num_2').innerHTML = num_2;
      }, false)
    }
}
