import axios from 'axios';
import { BlogPost } from '../../types/blogPostTypes';

export const fetchBlogPosts = async () => {
  try {
    const response = await axios.get<BlogPost[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
};