import Link from "next/link";
import Button from "../(Navbar)/Button";

const Job = () => {
  return (
    <div className="flex flex-col w-full bg-black justify-center items-center text-center" id="job">
      <h1 className="p-3 lg:p-6 lg:text-[3rem] text-[#e7e7e7] text-[1.8rem] font-unbounded font-bold capitalize">
        Work for Us
      </h1>
      <p className="lg:w-[60%] w-[70%] lg:text-[16px] text-[#e7e7e7] text-[14px] lg:mb-8 mb-4">
        We would love to have you join our team! Fill out the form below and we
        will be in touch.
      </p>
      <Link href="/JobPage" className="lg:mb-6 mb-10">
        <Button
          style="lg:px-8 lg:py-3 px-5 py-1 bg-[#e7e7e7] text-black lg:text-lg text-md border-2 border-amber-200 hover:bg-black hover:text-[#e7e7e7] duration-300"
          buttName="Apply"
        ></Button>
      </Link>
    </div>
  );
};

export default Job;
