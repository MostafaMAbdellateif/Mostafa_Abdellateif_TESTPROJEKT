/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

const initialState = {
    Apartments: [
        {
            id: 1,
            image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            details: {
                price: "13,500",
                currency: "$",
                perSquare: "14",
                rate: "Per Month",
                name: "2BHK 2Baths Residential",
                status: "Apartment for Rent",
                location: "in Arasur Avantika, Pallikaranni, Chenni South",
                room: "2 bedrooms, 2 Bathrooms, 1 Balacony"
            },
            extraImages:[
                "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            ]
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            details: {
                price: "10,500",
                currency: "$",
                perSquare: "11",
                rate: "Per Month",
                name: "2BHK 2Baths Residential",
                status: "Apartment for Rent",
                location: "in Arasur Avantika, Pallikaranni, Chenni North",
                room: "2 bedrooms, 2 Bathrooms, 1 Balacony"
            },
            extraImages:[
                "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            ]
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            details: {
                price: "23,500",
                currency: "$",
                perSquare: "18",
                rate: "Per Month",
                name: "2BHK 2Baths Residential",
                status: "Apartment for Rent",
                location: "in Arasur Avantika, Pallikaranni, Chenni South",
                room: "3 bedrooms, 2 Bathrooms, 2 Balacony"
            },
            extraImages:[
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
            ]
        },
    ],
};

export const homeReducer = createReducer(initialState, {
});
