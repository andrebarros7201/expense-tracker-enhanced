export const Footer = () => {
  return (
    <footer className={"w-full flex items-center justify-center p-4"}>
      <div className={"flex g-4"}>
        <p>Made by André Barros © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};
