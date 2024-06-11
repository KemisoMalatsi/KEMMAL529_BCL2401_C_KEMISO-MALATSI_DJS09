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
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + iconDisplay;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLGdFQUFnRTtBQUNoRSxpQ0FBaUM7QUFDakMsV0FBVztBQUNYLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCO0FBRTVFLE1BQU0sT0FBTyxHQUFHO0lBQ1o7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLFlBQVk7S0FDckI7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUUsWUFBWTtLQUNyQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0NBQ0o7QUFFRCxTQUFTLGVBQWUsQ0FBRSxLQUFjLEVBQUUsUUFBZ0IsRUFBRSxTQUFtQjtJQUMzRSxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN4QyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxxQkFBcUIsR0FBRyxRQUFRLEdBQUcsV0FBVztBQUN0SCxDQUFDO0FBRUQsZUFBZSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE51bWJlciBUeXBlcyBtaW5pLWNoYWxsZW5nZSAxMCAxMC4yXHJcbi8vIFdyaXRlIGEgZnVuY3Rpb24gdGhhdCB3aWxsIG9ubHkgYWNjZXB0IG51bWJlcnMgYW5kIGF0dGVuZCB0byBcclxuLy8gYWxsIFR5cGVTY3JpcHQgd2Vha25lc3MgZmxhZ3MuXHJcbi8vIDogbnVtYmVyXHJcbmNvbnN0IHJldmlld1RvdGFsRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXZpZXdzJykgYXMgSFRNTEVsZW1lbnRcclxuXHJcbmNvbnN0IHJldmlld3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1NoZWlhJyxcclxuICAgICAgICBzdGFyczogNSxcclxuICAgICAgICBsb3lhbHR5VXNlcjogdHJ1ZSxcclxuICAgICAgICBkYXRlOiAnMDEtMDQtMjAyMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0FuZHJ6ZWonLFxyXG4gICAgICAgIHN0YXJzOiAzLFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiBmYWxzZSxcclxuICAgICAgICBkYXRlOiAnMjgtMDMtMjAyMSdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ09tYXInLFxyXG4gICAgICAgIHN0YXJzOiA0LFxyXG4gICAgICAgIGxveWFsdHlVc2VyOiB0cnVlLFxyXG4gICAgICAgIGRhdGU6ICcyNy0wMy0yMDIxJ1xyXG4gICAgfSxcclxuXVxyXG5cclxuZnVuY3Rpb24gc2hvd1Jldmlld1RvdGFsICh2YWx1ZSA6IG51bWJlciwgcmV2aWV3ZXI6IHN0cmluZywgaXNMb3lhbHR5IDogYm9vbGVhbikge1xyXG4gICAgY29uc3QgaWNvbkRpc3BsYXkgPSBpc0xveWFsdHkgPyAn4q2QJyA6ICcnXHJcbiAgICByZXZpZXdUb3RhbERpc3BsYXkuaW5uZXJIVE1MID0gJ3JldmlldyB0b3RhbCAnICsgdmFsdWUudG9TdHJpbmcoKSArICd8IGxhc3QgcmV2aWV3ZWQgYnkgJyArIHJldmlld2VyICsgaWNvbkRpc3BsYXlcclxufVxyXG5cclxuc2hvd1Jldmlld1RvdGFsKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==