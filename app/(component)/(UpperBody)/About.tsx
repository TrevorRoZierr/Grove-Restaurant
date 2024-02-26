const About = () => {
  const date = new Date();
  const month = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getDate =
    month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-center uppercase lg:text-[18px] text-[12px] font-semibold font-unbounded lg:mx-[520px] mx-10 my-10 lg:my-[60px]">
        WE OFFER DELICIOUS Croissant FOR SALE on MONDAY,
        BEGINNING AT 5:00PM & Thursday BEGINNING AT 12:30PM. AVAILABLE
        WHILE SUPPLIES LAST.
      </h3>
      <h2 className="lg:text-4xl text-xl font-josefin font-semibold text-center uppercase">
        {getDate}
      </h2>
      <p className="text-center lg:text-lg text-sm lg:mt-5 mt-3">
        Reservations available via Instagram,<br></br> and we always welcome
        walk-ins.<br></br> For groups larger than 4 guests,<br></br> please
        reach out to us directly at
        <br></br>
        <span className="font-unbounded font-semibold lg:text-xs text-[8px] underline">
          grovest@saintdenis.com
        </span>
      </p>
    </div>
  );
};

export default About;
