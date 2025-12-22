import BackgroundDecor from "@/app/Components/BackgroundDecor/BackgroundDecor";

type Props = {
  children: React.ReactNode;
};
export default async function RootLayout({ children }: Props) {
  return (
    <>
      <BackgroundDecor />
      {children}
    </>
  );
}
