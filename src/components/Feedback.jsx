import React from 'react';
import { FaStar } from 'react-icons/fa6';

const Feedback = () => {
  const feedbacks = [
    {
      name: 'Jenny Wilson',
      review:
        'The food was excellent and so was the service. I had the mushroom risotto with scallops, which was awesome. I had a burger and greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
      rating: 5,
      img: '/person1.png',
    },
    {
      name: 'Dianne Russell',
      review:
        'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
      rating: 4,
      img: '/person2.png',
    },
    {
      name: 'Devon Lane',
      review:
        'Normally, wings are wings, but theirs are lean, meaty and tender, and that glaze is to die for. Our server was fabulous and made us feel very special.',
      rating: 5,
      img: '/person3.png',
    },
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mt-4 lg:overflow-y-auto lg:h-[23rem] scrollbar-custom">
      <h3 className="font-semibold mb-4">Customer's Feedback</h3>
      <div className="space-y-4">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="border-t border-gray-700 pt-4">
            <div className="flex gap-3 items-center">
              <img className="h-5 w-5 rounded-full" src={feedback.img} alt={feedback.name} />
              <h4 className="font-semibold">{feedback.name}</h4>
            </div>
            <p className="text-gray-400">{feedback.review}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
               
                  <FaStar key={i} className={i < feedback.rating ? 'fill-yellow-300' : 'fill-white'} />
                
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;

