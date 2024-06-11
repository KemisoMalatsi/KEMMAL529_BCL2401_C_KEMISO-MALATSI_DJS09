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
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
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
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
const you = {
    userName: 'Kemiso',
    isReturning: true,
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.userName);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLGdFQUFnRTtBQUNoRSxpQ0FBaUM7QUFDakMsV0FBVztBQUVYLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBZ0I7QUFDckYsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQWdCO0FBQ3RFLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCO0FBRTVFLE1BQU0sT0FBTyxHQUFHO0lBQ1o7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLFlBQVk7S0FDckI7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUUsWUFBWTtLQUNyQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0NBQ0o7QUFFRCxTQUFTLGVBQWUsQ0FBRSxLQUFjLEVBQUUsUUFBZ0IsRUFBRSxTQUFtQjtJQUMzRSxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN4QyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxxQkFBcUIsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFdBQVc7QUFDNUgsQ0FBQztBQUVELGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUl4RSxNQUFNLEdBQUcsR0FBRztJQUNSLFFBQVEsRUFBRSxRQUFRO0lBQ2xCLFdBQVcsRUFBRSxJQUFJO0NBQ3BCO0FBR0QsU0FBUyxZQUFZLENBQUMsV0FBcUIsRUFBRSxRQUFpQjtJQUMxRCxJQUFJLFdBQVcsRUFBQyxDQUFDO1FBQ2Isb0JBQW9CLENBQUMsU0FBUyxHQUFHLE1BQU07SUFDM0MsQ0FBQztJQUNELGVBQWUsQ0FBQyxTQUFTLEdBQUcsUUFBUTtBQUN4QyxDQUFDO0FBRUQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOdW1iZXIgVHlwZXMgbWluaS1jaGFsbGVuZ2UgMTAgMTAuMlxyXG4vLyBXcml0ZSBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBvbmx5IGFjY2VwdCBudW1iZXJzIGFuZCBhdHRlbmQgdG8gXHJcbi8vIGFsbCBUeXBlU2NyaXB0IHdlYWtuZXNzIGZsYWdzLlxyXG4vLyA6IG51bWJlclxyXG5cclxuY29uc3QgcmV0dXJuaW5nVXNlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV0dXJuaW5nLXVzZXInKSBhcyBIVE1MRWxlbWVudFxyXG5jb25zdCB1c2VyTmFtZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcicpIGFzIEhUTUxFbGVtZW50XHJcbmNvbnN0IHJldmlld1RvdGFsRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXdzJykgYXMgSFRNTEVsZW1lbnRcclxuXHJcbmNvbnN0IHJldmlld3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NoZWlhJyxcclxuICAgICAgICBzdGFyczogNSxcclxuICAgICAgICBsb3lhbHR5VXNlcjogdHJ1ZSxcclxuICAgICAgICBkYXRlOiAnMDEtMDQtMjAyMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FuZHJ6ZWonLFxyXG4gICAgICAgIHN0YXJzOiAzLFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiBmYWxzZSxcclxuICAgICAgICBkYXRlOiAnMjgtMDMtMjAyMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ09tYXInLFxyXG4gICAgICAgIHN0YXJzOiA0LFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiB0cnVlLFxyXG4gICAgICAgIGRhdGU6ICcyNy0wMy0yMDIxJ1xyXG4gICAgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jldmlld1RvdGFsICh2YWx1ZSA6IG51bWJlciwgcmV2aWV3ZXI6IHN0cmluZywgaXNMb3lhbHR5IDogYm9vbGVhbikge1xyXG4gICAgY29uc3QgaWNvbkRpc3BsYXkgPSBpc0xveWFsdHkgPyAn4q2QJyA6ICcnXHJcbiAgICByZXZpZXdUb3RhbERpc3BsYXkuaW5uZXJIVE1MID0gJ3JldmlldyB0b3RhbCAnICsgdmFsdWUudG9TdHJpbmcoKSArICd8IGxhc3QgcmV2aWV3ZWQgYnkgJyArIHJldmlld2VyICsgJyAnICsgaWNvbkRpc3BsYXlcclxufVxyXG5cclxuc2hvd1Jldmlld1RvdGFsKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpXHJcblxyXG5cclxuXHJcbmNvbnN0IHlvdSA9IHtcclxuICAgIHVzZXJOYW1lOiAnS2VtaXNvJyxcclxuICAgIGlzUmV0dXJuaW5nOiB0cnVlLFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVVc2VyKGlzUmV0dXJuaW5nIDogYm9vbGVhbiwgdXNlck5hbWUgOiBzdHJpbmcgKSB7XHJcbiAgICBpZiAoaXNSZXR1cm5pbmcpe1xyXG4gICAgICAgIHJldHVybmluZ1VzZXJEaXNwbGF5LmlubmVySFRNTCA9ICdiYWNrJ1xyXG4gICAgfVxyXG4gICAgdXNlck5hbWVEaXNwbGF5LmlubmVySFRNTCA9IHVzZXJOYW1lXHJcbn1cclxuXHJcbnBvcHVsYXRlVXNlcih5b3UuaXNSZXR1cm5pbmcsIHlvdS51c2VyTmFtZSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=