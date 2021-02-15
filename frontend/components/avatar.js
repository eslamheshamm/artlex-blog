export default function Avatar({ name, picture, bio }) {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-start w-full sm:w-max bg-accent-shd2 break-word py-6  sm:pl-4 sm:pr-16  rounded-3xl">
      <div className="mx-4">
        <img
          src={picture}
          className="w-12 h-12 rounded-full  object-cover"
          alt={name}
        />
      </div>
      <div className=" flex flex-col items-center md:items-start  mt-2">
        <p className="text-white text-2xl sm:text-3xl leading-8 mb-2">{name}</p>
        <p className="text-white text-opacity-40">{bio}</p>
      </div>
    </div>
  );
}
