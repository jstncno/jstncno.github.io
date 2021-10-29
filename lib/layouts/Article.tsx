import styles from './Article.module.scss';

export default function Article({children}: {children?: JSX.Element | JSX.Element[]}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
      <main className={styles.main + " md:col-span-6 lg:col-start-2 lg:col-span-3 mt-8"}>
        {children instanceof Array ? [...children] : children}
      </main>
    </div>
  );
}
