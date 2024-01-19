const ServiceCard = ({ title, img, description }) => {
  return (
    <>
      <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
        <div className="w-20 h-20 flex justify-center items-center icon-container rounded-full">
          <img src={img} alt={title} width={45} height={45} />
        </div>
        <h3 className="service-title mt-5 leading-normal">{title}</h3>
        <p className="service-text mt-3 break-words leading-normal">{description}</p>
      </div>
    </>
  );
};

export default ServiceCard;
