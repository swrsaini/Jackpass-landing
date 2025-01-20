

export function Container({className, children}){
    return <div className={`${className} m-2 border-2 rounded-3xl bg-gray-111 shadow-sm`}>
        {children}
    </div>
}

export function Slider() {
  const sliderInfo = [
    {
      title: "Build A Community",
      description: "Connect offline, bring people together.",
    },
    {
      title: "Join A Community",
      description: "Find your people, hang out, date, and level up.",
    },
    {
      title: "Monetize Your Passion",
      description: "Turn your community into a business.",
    },
  ];
  return (
    <>
      <div className="my-2">
        <div className="flex overflow-x-hidden w-full">
          <div className="flex animate-infinite-scroll">
            {sliderInfo.map((e, index) => {
              return (
                <div key={index}>
                  <Container className={"flex-col justify-center h-32 w-72 px-4 py-6"}>
                    <p className="text-md font-semibold">{e.title}</p>
                    <p className="text-sm">{e.description}</p>
                  </Container>
                </div>
              );
            })}
          </div>
          <div className="flex animate-infinite-scroll">
            {sliderInfo.map((e, index) => {
              return (
                <div key={index}>
                  <Container
                    className={"flex-col justify-center h-32 w-72 px-4 py-6"}
                  >
                    <p className="text-md font-semibold">{e.title}</p>
                    <p className="text-sm">{e.description}</p>
                  </Container>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
