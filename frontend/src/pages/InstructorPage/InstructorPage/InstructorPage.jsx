import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { ModeToggle } from "@/pages/DarkMode/ModeToggle";
import { TabsContent } from "@radix-ui/react-tabs";
import React from "react";

function InstructorPage({ menuItems, activeTab, setActiveTab, handleLogout }) {
  return (
    <div className="flex h-full min-h-screen ">
      <aside className="w-64 shadow-md hidden md:block border-r-2 border-gray-400 dark:border-white">
        <div className="p-4">
          <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-4">Instructor</h2>
          <ModeToggle />
          </div>
        </div>
        <nav>
          {menuItems.map((item) => (
            <Button
              className="w-full justify-start mb-2"
              key={item.value}
              variant={activeTab === item.value ? "secondary" : "ghost"}
              onClick={
                item.value === "logout"
                  ? handleLogout
                  : () => {
                      setActiveTab(item.value);
                    }
              }
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className=" max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">DashBoard</h1>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            {menuItems.map((item) => (
              <TabsContent value={item.value}>
                {item.component != null ? item.component : null}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
}

export default InstructorPage;
