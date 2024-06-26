import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// Reviews
const reviews : {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
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
]

// Users
const you: {
    firstName : string;
    lastName : string;
    isReturning: boolean;
    age:number; 
    stayedAt: string[];
} = {
    firstName: 'Kemiso',
    lastName: 'Malatsi',
    isReturning: true,
    age: 25,
    stayedAt: ['Cape Town', 'Pretoria', 'Rustenburg']
}

// Propeties
const propeties  : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[] = [
    {
        image: './public/images/colombia-property.jpg',
        title: 'Luxury Apartment',
        price: 45,
        location: {
            firstLine: '123 Main',
            city: 'Cape Town',
            code: 8000,
            country: 'South Africa'
    },
    contact: 'info@luxuryapartment.com',
    isAvailable: true
    },
    {
        image: './public/images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
    },
    contact: 'garydavis@hotmail.com',
    isAvailable: false
    },
    {
        image: './public/images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: 'andyluger@aol.com',
        isAvailable: true
    }
]

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)