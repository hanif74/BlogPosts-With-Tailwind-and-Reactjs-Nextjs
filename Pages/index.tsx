import React from 'react';
import '../app/globals.css';
import useBlogPosts from '../hooks/useBlogPosts';
import BlogPostsTable from '../components/BlogPostsTable';

const Home = () => {
    const { blogPosts, itemsPerPage, selectedPost, currentPage, currentItems, handlePostClick, handlePageChange, handleResetTable } = useBlogPosts();

  return (
    <div className="container mx-auto">
      <BlogPostsTable blogPosts={blogPosts} itemsPerPage={itemsPerPage} selectedPost={selectedPost} currentPage={currentPage} currentItems={currentItems} handlePostClick={handlePostClick} handlePageChange={handlePageChange} handleResetTable={handleResetTable} />
    </div>
  );
};

export default Home;