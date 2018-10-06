import React from 'react';
import { FeedToggle, ArticlePreview } from '../molecules';

const FeedList = () => (
  <div>
    <FeedToggle />
    <div>
      <ArticlePreview />
      <ArticlePreview />
      <ArticlePreview />
    </div>
  </div>
);

export default FeedList;
