import { ThemeProvider } from "@/components/theme-provider"
import { getEvents, OdinEvents } from '@/logic/Odin';
import { useState, useEffect } from 'react';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { OdinEventsTable } from "./components/OdinEventsTable";
import './App.css'
function App() {
  const [events, setEvents] = useState<OdinEvents | null>(null);

  useEffect(() => {
    getEvents().then((events: OdinEvents) => {
      setEvents(events);
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<div className="bg-gradient-to-tr from-[#441D9B] via-[#CD0D46] backdrop-blur-xl">
  <Header/>
  <div className=" bg-slate-900 shadow-2xl rounded-xl mr-5 ml-5 mb-8 lg:mr-64 lg:ml-64">
    <OdinEventsTable events={events} />
  </div>
  <Footer/>
</div>
    </ThemeProvider>
  );
}

export default App;