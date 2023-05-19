export default function Logo() {
  return (
    <LogoConstructor
      logo_part_one="<"
      logo_part_two="MM"
      logo_part_three="/>"
    />
  );
}

const LogoConstructor = ({
  logo_part_one,
  logo_part_two,
  logo_part_three,
}: {
  logo_part_one: string;
  logo_part_two: string;
  logo_part_three: string;
}) => {
  return (
    <div className="font-sans text-4xl font-thin text-[#323130] dark:text-slate-300">
      <span className="font-calibre font-bold text-4xl text-cyan-700">
        {logo_part_one}
      </span>
      {logo_part_two}
      <span className="font-calibre font-bold text-4xl text-cyan-700">
        {logo_part_three}
      </span>
    </div>
  );
};
