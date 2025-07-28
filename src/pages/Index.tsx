import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Feed } from "@/components/Feed";
import heroImage from "@/assets/hero-social.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const userName = "John Doe";

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Feed userName={userName} />;
      case "explore":
        return (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div 
              className="h-64 bg-cover bg-center rounded-xl mb-8 flex items-center justify-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6">
                <h2 className="text-3xl font-bold text-white mb-2">Explore Amazing Content</h2>
                <p className="text-white/80">Discover trending posts and connect with creators</p>
              </div>
            </div>
            <p className="text-muted-foreground">Explore feature coming soon!</p>
          </div>
        );
      default:
        return (
          <div className="max-w-2xl mx-auto text-center py-16">
            <h2 className="text-2xl font-bold mb-4">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <p className="text-muted-foreground">This feature is coming soon!</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent-light/20">
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        userName={userName}
      />
      
      <main className="ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
