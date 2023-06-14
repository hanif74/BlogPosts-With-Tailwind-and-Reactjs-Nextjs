import { useState, useEffect } from 'react';
import { BlogPost } from '../types/blogPostTypes';
import { fetchBlogPosts } from '../Pages/api/posts';


const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the index range of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogPosts.slice(indexOfFirstItem, indexOfLastItem);

 
  useEffect(() => {
    const getBlogPosts = async () => {
        const posts = await fetchBlogPosts();
        setBlogPosts(posts);
    };

    getBlogPosts();
  }, []);

  const handlePostClick = (postId: number) => {
    // Find the selected post based on the clicked row's ID
    const post = currentItems.find((post) => post.id === postId);
    setSelectedPost(post || null);
  };

   // Function to handle page navigation
   const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle reset
  const handleResetTable = () => {
    setSelectedPost(null);
    setCurrentPage(1);
  };

  return { blogPosts, itemsPerPage, currentPage, selectedPost, currentItems, handlePostClick, handlePageChange, handleResetTable };
};

export default useBlogPosts;