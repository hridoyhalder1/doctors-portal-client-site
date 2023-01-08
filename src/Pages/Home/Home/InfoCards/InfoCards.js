import React from 'react';
import clock from '../../../../assets/icons/clock.svg';
import location from '../../../../assets/icons/marker.svg';
import phone from '../../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {

    const cardData = [
        {
            id:1,
            name: 'Opening Hours',
            description: 'Open 10.00 Am to 6 PM',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id:2,
            name: 'Visit Our Location',
            description: 'Brooklyn, NY 10036, United States',
            icon: location,
            bgClass: 'bg-accent'
        },
        {
            id:3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]

    return (
        <div className=' grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 mb-14 gap-6'>
            {
                cardData.map(card=> <InfoCard
                key={card.id}
                card={card}
                >

                </InfoCard>)
            }
        </div>
    );
};

export default InfoCards;