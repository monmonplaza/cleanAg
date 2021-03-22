import React from 'react'

const Map = ({showMap, setShowMap}) => {
    return (
        <>
          <div className={showMap ? 'map show' : 'map'}>
              <div className="map__wrapper">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.3723392304123!2d121.34581651509643!3d14.055176993976962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5cd2d6006569%3A0x9075b8a72b9d5fb0!2sFrontline%20Business%20Solutions%2C%20Inc.!5e0!3m2!1sen!2sph!4v1616381830830!5m2!1sen!2sph" ></iframe>
              <button onClick={()=> setShowMap(!showMap)}>Close</button>
              </div>
          </div>
        </>
    )
}

export default Map
