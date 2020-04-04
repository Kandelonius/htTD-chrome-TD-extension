let page = document.getElementById('buttonDiv'); // gets the buttonDiv element from options.html

const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1']; // creates an array of button colors.

function constructOptions(kButtonColors){
    for (let item of kButtonColors){ // for...of statement iterates over iterable objects
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function(){
            chrome.storage.sync.set({color: item}, function(){ // clicking the div will set the color to the value assigned to the button.
                console.log('color is ' +item);
            })
        });
        page.appendChild(button); // appends the buttons to the page.
    }
}
constructOptions(kButtonColors); // calls the above function