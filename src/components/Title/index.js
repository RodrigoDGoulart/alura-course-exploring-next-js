export default function Title({ children, as }) {
  const Tag = as || 'h1';
  return (
    <>
      <Tag>{children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: red;
        }
      `}</style>
    </>
  );
}
