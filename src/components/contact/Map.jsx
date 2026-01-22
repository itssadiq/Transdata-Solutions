const Map = () => {
  return (
    <section className="map-wrapper w-full h-125 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border-t border-b border-gray-200">
      <div className="map-container w-full h-full">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=Mohammed%20Ahmed%20Al%20Wajdi%20Building%2C%20Khalid%20Bin%20Waleed%20Street%2C%20Dubai%2C%20UAE&t=&z=15&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
