import React from 'react';

import styles from './Article.module.scss';

const Article: React.FC = ({children}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-4">
      <main className={styles.main + " md:col-span-6 lg:col-start-2 lg:col-span-4 mt-8"}>
        {children instanceof Array ? [...children] : children}
      </main>
    </div>
  );
}
export default Article;
