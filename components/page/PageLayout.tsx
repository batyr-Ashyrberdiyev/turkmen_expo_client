import { Pathnames } from './Pathnames';

interface Props {
  children: React.ReactNode;
  title: string;
  path: string;
}

export const PageLayout = ({ children, path, title }: Props) => {
  return (
    <div className="flex flex-col gap-y-[24px] mb-[100px]">
      <div className="">
        <Pathnames sort={path} />
        <h2 className="text-extra font-semibold leading-[100%]">{title}</h2>
      </div>
      {children}
    </div>
  );
};
