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
      <div className="flex flex-col justify-center mt-6">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
          {title}
        </h3>
        <p className=" text-base text-zinc-400">{description}</p>
        <p className=" text-base text-zinc-400">{years}</p>
      </div>
    </>
  );
}
