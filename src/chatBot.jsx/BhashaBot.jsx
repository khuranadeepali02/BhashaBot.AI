import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Menu, Globe, Lightbulb, Mic, Plus, X, LogOut } from "lucide-react";

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  // Logout function
  const handleLogout = () => {
    navigate("/"); // Redirect to home page
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 bg-black border-r border-gray-800 
          transform transition-transform duration-300 ease-in-out w-64
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          flex flex-col h-full
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="font-medium">Sidebar Title</div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-md hover:bg-gray-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col h-full p-4">
          {/* Sidebar Menu Items */}
          <div className="flex-grow">
            <p className="mb-2 text-gray-400">Sidebar Content</p>
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">
                  Item 1
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">
                  Item 2
                </button>
              </li>
              <li>
                <button className="w-full text-left px-3 py-2 hover:bg-gray-800 rounded-md">
                  Item 3
                </button>
              </li>
            </ul>
          </div>

          {/* Logout Button (Fixed at Bottom) */}
          <button
            onClick={handleLogout}
            className="mt-auto flex items-center gap-2 px-3 py-2 bg-black rounded-3xl text-white hover:bg-red-500 transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="flex items-center p-4 border-b border-gray-800">
          <button
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="p-1 rounded-md hover:bg-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            <Menu size={24} />
          </button>
          <h1 className="ml-4 font-semibold text-lg">BhashaBot</h1>
        </header>

        {/* Main Section */}
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <h2 className="text-3xl font-semibold mb-6">What can I help with?</h2>

          {/* Chat Input */}
          <div className="relative w-full max-w-2xl">
            <textarea
              className="w-full bg-gray-900 rounded-xl border border-gray-700 p-4 pr-12 resize-none min-h-[100px] focus:outline-none focus:ring-1 focus:ring-gray-500"
              placeholder="Ask anything"
            />

            <button className="absolute bottom-3 right-3 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600">
              <Mic size={20} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition">
              <Plus size={16} />
              <span>New chat</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition">
              <Globe size={16} />
              <span>Search</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition">
              <Lightbulb size={16} />
              <span>Reason</span>
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-500 p-4">
          BhashaBot can make mistakes. Check important info.
        </footer>
      </div>
    </div>
  );
}
