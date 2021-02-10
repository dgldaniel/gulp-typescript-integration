(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = __importDefault(require("./model/Book"));
var book = new Book_1.default("Dom Quixote", 108.8, 0.1);
console.log(book.priceWithDiscount());

},{"./model/Book":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    Book.prototype.priceWithDiscount = function () {
        return this.price * (1 - this.discount);
    };
    return Book;
}());
exports.default = Book;

},{}]},{},[1]);
