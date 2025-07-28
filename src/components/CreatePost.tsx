import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Image, Smile, MapPin, Calendar } from "lucide-react";

interface CreatePostProps {
  onPost: (content: string) => void;
  userAvatar?: string;
  userName: string;
}

export const CreatePost = ({ onPost, userAvatar, userName }: CreatePostProps) => {
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (content.trim()) {
      onPost(content);
      setContent("");
    }
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 space-y-3">
            <Textarea
              placeholder="What's happening?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[100px] border-none resize-none bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-0"
            />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                  <Image className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                  <MapPin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                  <Calendar className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                onClick={handlePost}
                disabled={!content.trim()}
                variant="post"
                size="sm"
                className="px-6"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};