const StatCards = ({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: number;
  subtitle: string;
}) => {
  return (
    <>
      <article>
        <div className="max-w-md ">
          <div className="border-2 border-card2 bg-card p-2 rounded-lg space-y-2">
            <h2 className="uppercase text-text text-sm">{title}</h2>
            <p className=" font-syne text-white font-bold text-xl">{value}</p>
            <p>{subtitle}</p>
          </div>
        </div>
      </article>
    </>
  );
};
export default StatCards;
