import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Calendar, Video, FileText, Users, Clock, ClipboardList } from "lucide-react";
import React, { useState, useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  // State for holding stats data, eventually from a database
  const [stats, setStats] = useState([
    { label: "Doctors Available", value: "150+", icon: Users },
    { label: "Avg Response Time", value: "< 5 min", icon: Clock },
    { label: "Consultations", value: "1,200+", icon: ClipboardList }
  ]);

  useEffect(() => {
    // TODO: Replace this with a real API call to your database
    const fetchStats = async () => {
      // For example: const response = await fetch("/api/stats");
      // const data = await response.json();
      // setStats(data);
    };

    fetchStats();
  }, []);


  const services = [
    {
      icon: MessageSquare,
      title: "AI Health Check",
      description: "Instant symptom analysis.",
      action: () => navigate("/triage"),
      color: "text-blue-500 bg-blue-50"
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Connect with doctors via video.",
      action: () => navigate("/video"),
      color: "text-green-500 bg-green-50"
    },
    {
      icon: Calendar,
      title: "Book Appointment",
      description: "Schedule a visit with a specialist.",
      action: () => navigate("/appointments"),
      color: "text-purple-500 bg-purple-50"
    },
    {
      icon: FileText,
      title: "Medical Records",
      description: "Access your health history.",
      action: () => navigate("/records"),
      color: "text-red-500 bg-red-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900">
          Healthcare At Your Fingertips
        </h1>
        <p className="text-md md:text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          Connect with qualified Nigerian doctors instantly. Get diagnosis, prescriptions, and expert medical advice from home.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Button size="md" onClick={() => navigate("/triage")} className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-md">
            <MessageSquare className="h-5 w-5" />
            Start Health Check
          </Button>
          <Button size="md" variant="outline" onClick={() => navigate("/login")} className="border-gray-300 hover:bg-gray-100">
            Doctor Login
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 pb-12">
        <h2 className="text-2xl font-bold text-left mb-6 text-gray-900">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-left mb-6 text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                  <Card
                      key={service.title}
                      className="cursor-pointer h-full shadow-md hover:shadow-xl transition-shadow duration-300 border-gray-200 rounded-lg"
                      onClick={service.action}
                  >
                      <CardContent className="p-4 flex flex-col items-start text-left gap-3">
                          <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center flex-shrink-0`}>
                              <service.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-grow">
                              <CardTitle className="text-lg font-semibold text-gray-900">{service.title}</CardTitle>
                              <CardDescription className="text-sm text-gray-600 mt-1">{service.description}</CardDescription>
                          </div>
                      </CardContent>
                  </Card>
              ))}
          </div>
        </div>
    </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-left mb-6 text-gray-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-start text-left p-4 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold text-white mb-3">
              1
            </div>
            <h3 className="font-semibold mb-1 text-lg">Describe Your Symptoms</h3>
            <p className="text-sm text-gray-600">Tell us what's bothering you.</p>
          </div>
          <div className="flex flex-col items-start text-left p-4 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold text-white mb-3">
              2
            </div>
            <h3 className="font-semibold mb-1 text-lg">Connect with a Doctor</h3>
            <p className="text-sm text-gray-600">Get matched with specialists.</p>
          </div>
          <div className="flex flex-col items-start text-left p-4 bg-white rounded-lg shadow-md">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold text-white mb-3">
              3
            </div>
            <h3 className="font-semibold mb-1 text-lg">Receive Treatment Plan</h3>
            <p className="text-sm text-gray-600">Get diagnosis and care.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
