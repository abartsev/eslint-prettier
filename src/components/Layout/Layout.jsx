export const Layout = ({ header, footer, body }) => {
  return (
    <div>
      <div>{header}</div>
      <div>{body}</div>
      <div>{footer}</div>
    </div>
  );
};
