
var i = 0;
var speed = 100;
var city_options = ['Harrisburg', 'Camp Hill', 'Mechanicsburg', 'Hershey', 'Elizabethtown'];
var txt = [0, 'Harrisburg', city_options.length - 1];
var cycle_var = false;

function typeWriter() {
    var typing_element = document.getElementById("typing_animation_id");
    //if length is not zero, but the deletion isn't done
    console.log('in');
    if (typing_element.innerHTML.length != 0 & cycle_var == false) {
        console.log('first');

        typing_element.innerHTML = typing_element.innerHTML.slice(0, -1);
        setTimeout(typeWriter, speed);

    }
    
    //check if old is fully gone and deletion is done
    else if (typing_element.innerHTML.length == 0) {
        console.log('second');

        if (txt[0] < txt[2]) {

            console.log('adding to txt0');
            txt[0] = txt[0] + 1;

        } else {

            txt[0] = 0;

        }

        txt[1] = city_options[txt[0]];
        cycle_var = true;
        typing_element.innerHTML = txt[1][0];
        setTimeout(typeWriter, speed);
    }

    //if length
    else if (typing_element.innerHTML.length != 0 & cycle_var == true) {
        console.log('third');
        console.log(txt[1].length);
        if (typing_element.innerHTML.length < txt[1].length) {

            typing_element.innerHTML = typing_element.innerHTML + txt[1].substring(typing_element.innerHTML.length, typing_element.innerHTML.length + 1);
            setTimeout(typeWriter, speed);

        } else {

            cycle_var = false;
            setTimeout(typeWriter, (speed * 15));

        }
        

    }
    
    


}

setTimeout(typeWriter, (speed * 15));