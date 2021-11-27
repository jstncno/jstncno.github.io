import React from 'react';

import styles from './Article.module.scss';

const Article: React.FC = ({children}) => {
  return (
    <div className="grid grid-cols-article-layout p-4">
      <main className={styles.main + " col-start-2 col-span-1 mt-8"}>
        {children instanceof Array ? [...children] : children}
      </main>
    </div>
  );
}
export default Article;
