window.onload=function(){
    let cats = [
    {
        name: 'Kitty',
        image: 'cat_1.png',
        num: 0,
        show: false
    },
    {
        name: 'Mitten',
        image: 'cat_2.png',
        num: 0,
        show: false
    },
    {
        name: 'Max',
        image: 'cat_3.png',
        num: 0,
        show: false
    },
    {
        name: 'Cindy',
        image: 'cat_4.png',
        num: 0,
        show: false
    },
    {
        name: 'Peanut',
        image: 'cat_5.png',
        num: 0,
        show: false
    },
    ]


    function addElement() {
        for (let i = 0; i < cats.length; i++) {
            let cat = cats[i];
            let elem = document.createElement('div');
            elem.setAttribute('id', cat.name);
            elem.style.display = 'none';    //hide all element
            elem.appendChild(document.createTextNode(cat.name));
            elem.appendChild(document.createElement('br'));
            elem.appendChild(document.createTextNode('Number of times clicked: '));
            let elem_num = document.createElement('p');
            elem_num.innerHTML = cat.num;
            elem_num.setAttribute('id', cat.name + '_num');
            elem.appendChild(elem_num);
            elem.appendChild(document.createElement('br'));
            let img = document.createElement('img');
            elem.appendChild(document.createElement('br'));
            elem.appendChild(img);
            img.src = cat.image;
            document.body.appendChild(elem);



        }
    }
    addElement();

    // click the li to show item and update number of time clicked
    for (let i = 0; i < cats.length; i++) {
        var button = document.getElementById((i+1).toString());
            button.addEventListener('click', function(){
                for (let j=0; j<cats.length; j++){
                    document.getElementById(cats[j].name).style.display = 'none';
                }
                cats[i].num++;
                document.getElementById(cats[i].name + '_num').innerHTML = cats[i].num;
                document.getElementById(cats[i].name).style.display = 'block';
            }, false);
    }

}







