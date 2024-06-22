import Image from "next/image";

export const BentoGrid = () => {
  return (
    <section className="inset-0 flex w-full flex-col items-center justify-center border-2 border-black bg-main bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px] p-24">
      <div className="relative z-20 gap-3 space-y-4 sm:grid sm:grid-cols-[0.8fr_1fr_1fr] sm:grid-rows-2 sm:space-y-0">
        <div className="relative rounded-base border-2 border-black bg-white pb-3 shadow sm:row-span-2">
          <div className="absolute left-0 top-0 h-[300px] w-full bg-no-repeat"></div>
          <div className="isolate px-5 py-6 text-center">
            <Image
              width={100}
              height={100}
              src="/"
              alt=""
              className="isolate mx-auto"
            ></Image>
            <h3 className="font-display py-3 text-2xl font-bold uppercase">
              Bento 1
            </h3>
            <p className="mx-auto max-w-[300px] text-sm font-medium text-black sm:text-base">
              Description 1
            </p>
            <p className="mx-auto max-w-[300px] pt-2 text-sm font-medium text-black sm:pt-4 sm:text-base">
              Description 2
            </p>
          </div>
        </div>
        <div className="relative isolate sm:col-start-2">
          <div className="overflow-hiddenrounded-base relative flex h-full items-center justify-between border-2 border-black bg-white px-5 py-3 pb-3 shadow">
            <div className="absolute right-0 top-0 h-full w-full bg-no-repeat"></div>
            <div className="isolate">
              <h3 className="font-display pb-2 pt-3 text-xl font-bold uppercase">
                Bento 2
              </h3>
              <p className="max-w-[190px] font-medium text-black">
                Description 1
              </p>
            </div>
            <Image
              width={100}
              height={100}
              src="/"
              alt=""
              className="isolate"
            ></Image>
          </div>
        </div>
        <div className="relative isolate col-start-3">
          <div className="relative flex h-full items-center justify-between overflow-hidden rounded-base border-2 border-black bg-white px-5 py-3 pb-3 shadow">
            <div className="absolute right-0 top-0 h-full w-full bg-no-repeat"></div>
            <div className="isolate">
              <h3 className="font-display pb-2 pt-3 text-xl font-bold uppercase">
                Bento 3
              </h3>
              <p className="mx-auto max-w-[280px] font-medium text-black">
                Description 1
              </p>
            </div>
            <Image
              width={100}
              height={100}
              src="/"
              alt=""
              className="isolate"
            ></Image>
          </div>
        </div>
        <div className="col-span-2">
          <div className="relative h-full items-center justify-between space-y-5 overflow-hidden rounded-base border-2 border-black bg-white px-5 py-3 pb-3 shadow sm:flex sm:space-y-0">
            <div className="absolute right-0 top-0 h-full w-full bg-no-repeat"></div>
            <div className="isolate max-w-lg">
              <h3 className="font-display pb-2 pt-3 text-xl font-bold uppercase">
                Bento 4
              </h3>
              <p className="mx-auto font-medium text-black">Description 1</p>
            </div>
            <Image
              width={100}
              height={100}
              src="/"
              alt=""
              className="isolate"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};
