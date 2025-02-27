type TabProps = {
  label: string;
  children: React.ReactNode;
};
export default function Tab({ label, children }: TabProps) {
  return (
    <>
      <em>{label}</em>
      <span>{children}</span>
    </>
  );
};
