const ImageCard = ({ main_header, first_content, last_content, features }) => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/people/058.jpg"
                className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                alt="image"
              />
            </div>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-nile-600 p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-8 text-3xl font-bold">{main_header}</h2>
                <p className="mb-8 pb-2 lg:pb-0">{first_content}</p>
                {features.map((feature) => {
                  <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="mr-2 h-5 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {feature.title}
                    </p>
                  </div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageCard;
