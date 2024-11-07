const WhoWeAre = () => {
  return (
    <>
      <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container my-12">
        <div className="about-image flex-1 ml-24 sm:ml-12">
          <img
            src="https://res.cloudinary.com/dfdn7sxwi/image/upload/v1705951750/about-img_gwvke9.png"
            alt="Who We Are Image"
            width={450}
            className="object-contain"
          />
        </div>
        <div className="flex flex-1 flex-col text-justify mx-10 sm:mx-20 md:mx-10 leading-7">
          <h2 className="text-4xl text-[#ac2333] inline-block mt-3 capitalize font-bold lg:max-w-lg">
            Who We Are
          </h2>
          <p className="mt-4 lg:max-w-lg">
            AVA Law, LLP is a boutique law firm specializing in commercial,
            property and dispute resolution law, including other areas of law
            outlined in our Areas of Practice. Our team is comprised of highly
            qualified and experienced lawyers, whose focus is to deliver high
            quality, risk conscious and cost effective legal services.
          </p>

          <p className="mt-6 lg:max-w-lg">Whether you need:</p>
          <ul className="about-list">
            <li>Legal advice about your rights, duties or liabilities;</li>
            <li>Preparation or review of legal documents; or</li>
            <li>Representation in a dispute.</li>
          </ul>
          <p className="mt-6 lg:max-w-lg">
            In relation to any matter mentioned in our Areas of Practice, AVA
            Law, LLP has the expertise, experience and resources to deliver a
            highly professional and competent legal service.
          </p>
          <div className="mt-11 flex flex-wrap gap-4"></div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
