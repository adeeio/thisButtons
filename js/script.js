'use strict';


function Buttons(text) {
    this.text = text || "Hello";
}

Buttons.prototype = {
    create: function() {
        var self = this;
        this.element = document.createElement('button');
        this.element.innerText = this.text;
        this.element.addEventListener('click', function() {
            alert(self.text);
        });
        document.body.appendChild(this.element);
    }
}

var btn1 = new Buttons('Siema');
btn1.create();