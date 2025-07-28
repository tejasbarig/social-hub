import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Home, Search, Bell, Mail, Bookmark, User, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
  userName: string;
  userAvatar?: string;
}

export const Navigation = ({ activeTab = "home", onTabChange, userName, userAvatar }: NavigationProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "explore", label: "Explore", icon: Search },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "messages", label: "Messages", icon: Mail },
    { id: "bookmarks", label: "Bookmarks", icon: Bookmark },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="w-64 h-screen bg-card border-r border-border p-4 fixed left-0 top-0">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            SocialHub
          </h1>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start text-left h-12 px-4",
                activeTab === item.id && "bg-primary/10 text-primary font-medium"
              )}
              onClick={() => onTabChange?.(item.id)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </Button>
          ))}
        </div>

        {/* Post Button */}
        <Button variant="social" className="w-full mb-4 h-12 text-base font-semibold">
          Post
        </Button>

        {/* User Profile */}
        <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
          <Avatar className="w-10 h-10">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {userName.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm text-foreground truncate">{userName}</p>
            <p className="text-xs text-muted-foreground truncate">@{userName.toLowerCase().replace(/\s+/g, '')}</p>
          </div>
          <Settings className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </nav>
  );
};