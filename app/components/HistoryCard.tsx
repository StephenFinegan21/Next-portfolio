type PositionProps = {
  position: {
    id: number;
    title: string;
    description: string;
    years: string;
  };
};

export default function HistoryCard(props: PositionProps) {
  const { title, description, years } = props.position;

  return (
    <>
      <div className="flex flex-col justify-center mt-6 md:text-center">
        <h3 className=" text-lg md:text-2xl font-semibold  text-zinc-100">
          {title}
        </h3>
        <p className="text-sm md:text-lg text-zinc-400">{description}</p>
        <p className="text-sm md:text-lg text-zinc-400">{years}</p>
      </div>
    </>
  );
}
