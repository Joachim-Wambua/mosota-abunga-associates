const ValueProp = () => {
  return (
    <>
      <section className="flex justify-wrap items-center max-xl:flex-col gap-10 max-container my-12">
        <div className="flex flex-1 flex-col text-justify items-start mx-10 sm:mx-20 md:mx-10 leading-7">
          <h2 className="text-4xl text-[#ac2333] inline-block mt-3 capitalize font-bold lg:max-w-lg">
            Our Difference
          </h2>
          <p className="mt-4 lg:max-w-lg">
            AVA Law, LLP is driven by the desire to
            achieve the best possible outcomes for its clients by, for example:
          </p>
          <ul className="about-list">
            <li>
              Offering effective, efficient and commercial legal and practical
              solutions;
            </li>
            <li>
              Understanding the financial circumstances of the client (and
              offering flexible and fixed fee arrangements whenever possible);
            </li>
            <li>Ensuring that the client speaks to a lawyer each time; and</li>
            <li>
              Conducting itself with integrity, transparency and
              professionalism.
            </li>
          </ul>
          <p className="mt-6 lg:max-w-lg">
            We are friendly, accessible and passionate about what we do
          </p>

          <p className="mt-8 lg:max-w-lg">
            Contact us today on <span className="font-bold">+254721101101</span>{" "}
            to see how we can assist you
          </p>
          <div className="mt-11 flex flex-wrap gap-4"></div>
        </div>

        <div className="about-image flex-1 sm:ml-12">
          <img
            src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705951750/about-img_gwvke9.png"
            alt="Who We Are Image"
            width={450}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default ValueProp;
