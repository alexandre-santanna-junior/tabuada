function tabuada(){
    const n = Number(document.getElementById('numero').value);
    let c = 1;
    if(n === 0){
        alert('Por favor,digite um número!');
    }
    else{
        document.getElementById('res').innerHTML = ' '
        while(c <= 10) {
            let item = document.createElement('option');
            item.innerHTML = `${n} x ${c} = ${n*c}`;
            document.getElementById('res').appendChild(item)
            c++

        }

    }



}