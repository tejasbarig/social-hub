import { useState } from "react";
import { PostCard } from "./PostCard";
import { CreatePost } from "./CreatePost";

interface Post {
  id: string;
  user: {
    name: string;
    username: string;
    avatar?: string;
  };
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: number;
}

const samplePosts: Post[] = [
  {
    id: "1",
    user: {
      name: "Sarah Johnson",
      username: "sarahj_design",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    content: "Just launched my new design portfolio! Really excited to share my latest work with everyone. What do you think? 🎨✨",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    timestamp: "2h",
    likes: 42,
    comments: 8
  },
  {
    id: "2",
    user: {
      name: "Alex Chen",
      username: "alexchen_dev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    content: "Working on a new React component library. The developer experience is going to be amazing! Can't wait to open source it soon 🚀",
    timestamp: "4h",
    likes: 73,
    comments: 15
  },
  {
    id: "3",
    user: {
      name: "Maria Garcia",
      username: "maria_travels",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    content: "The sunrise view from my hotel room in Santorini is absolutely breathtaking! Sometimes you just have to stop and appreciate the beauty around us 🌅",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=500&h=300&fit=crop",
    timestamp: "6h",
    likes: 128,
    comments: 23
  }
];

interface FeedProps {
  userName: string;
}

export const Feed = ({ userName }: FeedProps) => {
  const [posts, setPosts] = useState<Post[]>(samplePosts);

  const handleNewPost = (content: string) => {
    const newPost: Post = {
      id: Date.now().toString(),
      user: {
        name: userName,
        username: userName.toLowerCase().replace(/\s+/g, '')
      },
      content,
      timestamp: "now",
      likes: 0,
      comments: 0
    };
    
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-8">
      <CreatePost onPost={handleNewPost} userName={userName} />
      
      <div className="space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};