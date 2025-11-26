import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  Users,
  UserPlus,
  Pill,
  FlaskConical,
  Bed,
  CreditCard,
  LineChart,
  Stethoscope,
  Settings, // Added Settings for Admin Configs
} from "lucide-react";

// Helper component for consistent module linking cards
const ModuleCard: React.FC<{
  title: string;
  icon: React.ElementType;
  description: string;
  path: string;
  color: string;
}> = ({ title, icon: Icon, description, path, color }) => (
  <Link
    to={path}
    // Using custom colors based on your tailwind.config.js for professional look
    className={`flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-lg border border-gray-200 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:ring-2 hover:ring-[#1a4b7a]`}
  >
    <div className={`p-4 rounded-full mb-4 bg-${color}-100`}>
      <Icon className={`w-8 h-8 text-${color}-600`} />
    </div>
    <h3 className="text-xl font-bold text-[#0B2D4D] mb-2 text-center">
      {title}
    </h3>
    <p className="text-lg text-gray-500 text-center">{description}</p>
  </Link>
);

const AdminDashboard: React.FC = () => {
  // We use the application's core color palette where possible
  const modules = [
    {
      title: "Patient Registration",
      icon: UserPlus,
      description: "Manage new patient intake, demographics, and packages.",
      path: "/registration",
      color: "green", // Use green for registration/start
    },
    {
      title: "OPD/Nurse Intake Queue",
      icon: Users,
      description: "Track the Outpatient queue and pre-visit vitals/history.",
      path: "/pre-opd",
      color: "blue",
    },
    {
      title: "Doctor Console",
      icon: Stethoscope,
      description: "Access doctor's consultation, diagnosis, and prescriptions.",
      path: "/doctor-module",
      color: "red", // Use red as it leads to high-stakes decision
    },
    {
      title: "In-Patient (IPD) Queue",
      icon: Bed,
      description: "Monitor currently admitted patients and their location.",
      path: "/ipd-queue",
      color: "purple",
    },
    {
      title: "Lab Requests & Results",
      icon: FlaskConical,
      description: "Oversee lab test processing and result uploading.",
      path: "/lab-requests",
      color: "indigo",
    },
    {
      title: "Pharmacy & Inventory",
      icon: Pill,
      description: "Manage drug stock, fulfillment, and sales.",
      path: "/pharmacy",
      color: "orange",
    },
    {
      title: "System Analytics",
      icon: LineChart,
      description: "View high-level performance, revenue, and trends.",
      path: "/dashboard",
      color: "teal",
    },
    {
      title: "Billing & Finance",
      icon: CreditCard,
      description: "Review all financial transactions and payment records.",
      path: "/billing",
      color: "yellow",
    },
    {
      title: "Admin Configuration",
      icon: Settings,
      description: "Configure system settings, fields, and user permissions.",
      path: "/admin-config",
      color: "gray",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0B2D4D] mb-8 flex items-center space-x-3">
          <Layers className="w-8 h-8 text-[#012e58]" />
          <span>Admin Module Overview</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;