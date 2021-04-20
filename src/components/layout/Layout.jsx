import s from "./Layout.module.scss";

export function Layout({ title, children }) {
  return (
    <div className={s.layout}>
      <main className={s.layout__main}>
        <header className={s.layout__header}>
          <h1>{title}</h1>
        </header>
        <hr/>
        <div className={s.layout__content}>
          {children}
        </div>
      </main>
    </div>
  );
}