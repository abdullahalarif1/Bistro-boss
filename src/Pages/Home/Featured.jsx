import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="bg-fixed"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      <div className="bg-slate-500 bg-opacity-40 pt-10">
        {" "}
        <SectionTitle
          heading="Check it out"
          headingTitle="Featured Item"
        ></SectionTitle>
      </div>

      <div className="md:flex items-center gap-10 justify-center py-20 px-20 text-white bg-slate-500 bg-opacity-40">
        <div className="">
          <img src={featuredImg} alt="" />
        </div>
        <div className="pt-4 md:py-0">
          <p>Aug 20, 2029</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            sunt eveniet totam nam distinctio repellat assumenda, quia, saepe
            alias blanditiis a accusantium reiciendis in exercitationem labore
            at cupiditate, consectetur libero nulla. Enim ipsa sit tempora,
            eveniet eaque repellendus nulla ullam, doloribus voluptatibus ipsum
            voluptatum consequuntur quasi eos, sed in. Nulla.
          </p>
          <button className="btn btn-outline  text-white border-0 border-b-4 mt-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
