import React from 'react'

export default function navbar() {
    return (
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
                
              <div className="text-white font-bold">Traffic Congetion Prediction</div>
              <div>
                <ul className="flex">
                  <li className="mr-4">
                    <a href="#" className="text-white">Home</a>
                  </li>
                  <li className="mr-4">
                    <a href="#" className="text-white">Train a model</a>
                  </li>
                  <li className="mr-4">
                    <a href="#" className="text-white">Predict</a>
                  </li>
                  <li>
                    <a href="#" className="text-white">About us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      );
}
