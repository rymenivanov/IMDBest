var logedUser =null
var userList = (function () {
    function User(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.arrayWatchList =[]
    }

    function UserList() {
        if (localStorage.getItem('users') != null) { 
            this._users = JSON.parse(localStorage.getItem('users')); 
        }
        else {
            this._users = [new User('Toni', '147852', 'aad@abv.bg')];
            localStorage.setItem('users', JSON.stringify(this._users));
        }
    }

    UserList.prototype.addUser = function (username, password, email) {
        if ((typeof username === 'string') && (username.trim().length > 3) &&
            (password.trim().length > 5) && email) {
            if (!(this._users.some(user => user.username === username))&&
                !(this._users.some(user => user.email === email))) { 
                this._users.push(new User(username, password, email));
                localStorage.setItem('users', JSON.stringify(this._users));
                return true;
            } else {
                return false;
            }
        }
    };

    UserList.prototype.login = function (username, password) {
                 
        if (this._users.some(user => user.username === username &&
            user.password === password)) {
                logedUser = this._users.find(user => user.username === username &&
                    user.password === password)
                    sessionStorage.setItem("Loged user",JSON.stringify(logedUser))
                return    this._users.some(user => user.username === username &&
                    user.password === password) // kakvo da returne konstantine,arrataWatchlist
        } 
        
    };
    User.prototype.addTowatchlist = function (title) {
        var movie = arrayMovies.find(movie=>movie.Title === title)
        this.arrayWatchList.push(movie)
    }
    
    return new UserList();
    
})();

console.log("gakdghalkg")