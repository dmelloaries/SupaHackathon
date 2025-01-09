"use client"
import Image from "next/image";
import logo from "../../public/logo.jpg";
import {
  BarChart3,
  Users2,
  Zap,
  FileText,
  LayoutDashboard,
  MessageCircle,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onChatbotToggle: () => void; // Add this prop
}

export function Sidebar({ onChatbotToggle }: SidebarProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={cn("pb-12 min-h-screen w-60 bg-gray-900")}>
      <div className="space-y-4 py-4">
        <div className="px-4 py-2">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="" className="w-7 h-auto rounded-lg" />
            <h2 className="text-lg font-semibold text-white tracking-tight">
              SocialStats
            </h2>
          </div>
        </div>
        <div className="px-3">
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:bg-gray-800"
              onClick={() => handleScroll("overview")}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={() => handleScroll("engagement")}
            >
              <Zap className="mr-2 h-4 w-4" />
              Engagement
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={() => handleScroll("demographics")}
            >
              <Users2 className="mr-2 h-4 w-4" />
              Demographics
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={() => handleScroll("performance")}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Performance
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={() => handleScroll("posts")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Posts
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start text-gray-400 hover:bg-gray-800 hover:text-white"
              onClick={onChatbotToggle} // Call the handler
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat with AI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}