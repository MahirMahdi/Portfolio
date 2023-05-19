interface stack {
  icon: any;
  name: string;
}

type ComponentProps = {
  stack: stack;
};

export default function StackCard({ stack }: ComponentProps) {
  const { icon, name } = stack;
  return (
    <div className="bg-cyan-700 text-white font-sans text-[18px] flex items-center gap-x-2 px-3 py-2 rounded-[5px]">
      {icon}
      <p className="text-[14px]">{name}</p>
    </div>
  );
}

export class Stack {
  icon: any;
  name: string;
  constructor(icon: any, name: string) {
    this.icon = icon;
    this.name = name;
  }
}
