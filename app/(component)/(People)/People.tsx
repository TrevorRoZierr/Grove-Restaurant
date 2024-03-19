interface InfoProps {
  role: string;
  name: string;
}

const People = () => {
  return (
    <div className="bg-[#e7e7e7] p-8 lg:p-16 w-full flex flex-col justify-center items-center">
      <h1 className="lg:text-[3.2rem] text-center uppercase tracking-wide font-bold font-unbounded text-[2rem]">
        Owners
      </h1>
      <Info role="President" name="Sayyed Saad" />
      <Info role="Co-Worker" name="Shoaib Nadaf" />
      <Info role="Co-Worker" name="Pathan Maqbool" />
      <Info role="Co-Worker" name="Sarvar Ali" />
      {/* <Info role="Vice-President" name="Sayed Ayman" />
      <Info role="CEO" name="Pathan Faraz" />
      <Info role="Enforcer" name="Shaikh Amaan" />
      <Info role="Enforcer" name="Sayyed Hamid" />
      <Info role="Enforcer" name="Shaikh Affaan" /> */}
    </div>
  );
};

const Info = ({ role, name }: InfoProps) => {
  return (
    <>
      <h1
        className="lg:text-2xl mt-8 lg:mt-14 text-xl font-semibold"
        id="members"
      >
        {role} of <span className="uppercase text-green-700">Grove</span>
      </h1>
      <p className="border-[1px] border-b-black rounded-lg text-md font-semibold font-unbounded uppercase lg:text-lg">
        {name}
      </p>
    </>
  );
};

export default People;
