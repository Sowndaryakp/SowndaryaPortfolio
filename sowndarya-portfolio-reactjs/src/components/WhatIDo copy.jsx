// WhatIDo.jsx
import React from 'react';

const WhatIDo = () => {
  const skills = [
    { name: 'Web Design'},
    { name: 'Mobile Design'},
    { name: 'Development' },
    { name: 'SEO' }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg">
      <h2 className="text-3xl font-bold mb-4">What I Do?</h2>
      <p className="text-gray-700 mb-8">
        Duis mollis est commodo luctus nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        Nullam quis risus eget urna mollis ornare vel. Nulla vitae elit libero, a pharetra augue.
        Praesent commodo cursus magna, vel scelerisque nisl.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <i className="fas fa-laptop-code text-4xl text-gray-700"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Web Design</h3>
          <p className="text-gray-600">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
            Cras justo cum sociis natoque magnis.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <i className="fas fa-mobile-alt text-4xl text-gray-700"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Mobile Design</h3>
          <p className="text-gray-600">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
            Cras justo cum sociis natoque magnis.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <i className="fas fa-cogs text-4xl text-gray-700"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">Development</h3>
          <p className="text-gray-600">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
            Cras justo cum sociis natoque magnis.
          </p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <i className="fas fa-search text-4xl text-gray-700"></i>
          </div>
          <h3 className="text-xl font-semibold mb-2">SEO</h3>
          <p className="text-gray-600">
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
            Cras justo cum sociis natoque magnis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
