import React from "react";

const MapOfLocation: React.FC = () => {
  return (
    <section className="mapOfLocationContainer">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.068377525162!2d21.449998875380707!3d41.998808057849025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415986f9f2cd7%3A0x61669f4d3a9aa58c!2sHotel%20Continental!5e0!3m2!1sen!2smk!4v1726410158859!5m2!1sen!2smk"
        width="900"
        height="500"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default MapOfLocation;
