/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector('#reviews');
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLGdFQUFnRTtBQUNoRSxpQ0FBaUM7QUFDakMsV0FBVztBQUNYLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7QUFFN0QsTUFBTSxPQUFPLEdBQUc7SUFDWjtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLEVBQUUsSUFBSTtRQUNqQixJQUFJLEVBQUUsWUFBWTtLQUNyQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLFNBQVM7UUFDZixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0lBQ0Q7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLFlBQVk7S0FDckI7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOdW1iZXIgVHlwZXMgbWluaS1jaGFsbGVuZ2UgMTAgMTAuMlxyXG4vLyBXcml0ZSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGFjY2VwdCBudW1iZXJzIGFuZCBhdHRlbmQgdG8gXHJcbi8vIGFsbCBUeXBlU2NyaXB0IHdlYWtuZXNzIGZsYWdzLlxyXG4vLyA6IG51bWJlclxyXG5jb25zdCByZXZpZXdUb3RhbERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV2aWV3cycpXHJcblxyXG5jb25zdCByZXZpZXdzID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdTaGVpYScsXHJcbiAgICAgICAgc3RhcnM6IDUsXHJcbiAgICAgICAgbG95YWx0eVVzZXI6IHRydWUsXHJcbiAgICAgICAgZGF0ZTogJzAxLTA0LTIwMjEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdBbmRyemVqJyxcclxuICAgICAgICBzdGFyczogMyxcclxuICAgICAgICBsb3lhbHR5VXNlcjogZmFsc2UsXHJcbiAgICAgICAgZGF0ZTogJzI4LTAzLTIwMjEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdPbWFyJyxcclxuICAgICAgICBzdGFyczogNCxcclxuICAgICAgICBsb3lhbHR5VXNlcjogdHJ1ZSxcclxuICAgICAgICBkYXRlOiAnMjctMDMtMjAyMSdcclxuICAgIH0sXHJcbl1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9