import React from 'react';

const CardSection = () => {
  const cardData = [
    {
      title: 'Pizza',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
    {
      title: 'Burger',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
    {
      title: 'Pasta',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
    {
      title: 'Sushi',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
    {
      title: 'Salad',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
    {
      title: 'Dessert',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
    {
      title: 'Tacos',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
    {
      title: 'Steak',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
    {
      title: 'Ice Cream',
      imageUrl: 'https://via.placeholder.com/150',
      link: 'https://www.zomato.com',
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img src={card.imageUrl} className="card-img-top" alt={card.title} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <a href={card.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View on Zomato
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;