import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <meta name='theme-color' content='#18181B' />
      <div>{children}</div>
    </>
  );
};

export default Layout;
