function FormValidator(form) {
    this._form = form;
    this._elem = document.querySelectorAll('.validate');
    this._form.addEventListener('submit', this.some.bind(this));
    this._errors = [];
}

FormValidator.prototype.addRules = function(rules){
    this._rules = rules.rules;
    this._messages = rules.messages;
};

FormValidator.prototype.some = function(event){
    event.preventDefault(); 
    this._errors.length = 0;
    for (let i = 0; i < this._elem.length; i++){
        if (!this._rules[this._elem[i].name].test(this._elem[i].value)) {

            this._errors.push([this._elem[i].name]);

            let p = document.createElement("p");
            p.innerHTML = this._messages[this._elem[i].name];
            console.log(this._messages[this._elem[i].name]);
            document.body.appendChild(p);
        }
    }
};

FormValidator.prototype.isValid = function() {
    if (this._errors.length > 0) {
        console.log("Количество ошибок: ", this._errors.length);
        return;
    } return true;
};

let form = document.forms.someForm;




let formValidator = new FormValidator(form);


formValidator.addRules({
    rules: {
        login: /login/,
        pwd: /pwd/
    },
    messages: {
        login: "Неправильно заполнено поле login",
        pwd: "Неправильно заполнено поле password"
    }
});

form.addEventListener("submit", nice);

function nice() {
    if(formValidator.isValid()){
        console.log("Ошибок нет");
    }
}