type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div className="px-24 py-12 w-full space-y-8 min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold">My Simple Memo</h1>
      <div className="grid grid-cols-3 gap-8 flex-1">
        <main className="space-y-4 col-span-2">{props.children}</main>

        <aside>
          <iframe
            id="pomofocus"
            title="Pomofocus"
            width="100%"
            height="480"
            src="https://pomodor.app/timer"
            className="rounded-3xl"
          ></iframe>
        </aside>
      </div>

      <footer>
        <p className="text-gray-700">
          created by{" "}
          <a
            className="text-emerald-600"
            href="https://github.com/yuki546"
            target="_blank"
            rel="noopener noreferrer"
          >
            @yuki546
          </a>{" "}
          &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Layout;
