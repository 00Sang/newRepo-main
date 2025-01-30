import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LayersControl } from "react-leaflet";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
});

const Footer = () => {
  const collegePosition = [24.34400627501657, 93.69522370393007]; // Replace with your college's coordinates

  return (
    <footer className="bg-gray-900 text-gray-50 py-12">
      <div className="container mx-auto px-6 space-y-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Map Section */}
          <div className="rounded-lg shadow-sm overflow-hidden z-10">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Our Location</h3>
            <div className="h-64">
            

<MapContainer
  center={collegePosition}
  zoom={15}
  scrollWheelZoom={true}
  className="w-full h-full"
>
  <LayersControl position="topright">
    <LayersControl.BaseLayer checked name="Street View">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </LayersControl.BaseLayer>
    <LayersControl.BaseLayer name="Satellite View">
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        attribution='&copy; <a href="https://www.esri.com">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
      />
    </LayersControl.BaseLayer>
  </LayersControl>
  <Marker position={collegePosition} icon={customIcon}>
    <Popup>
      <strong>Churachandpur College</strong>
      <br />
      Churachandpur, Manipur, India
    </Popup>
  </Marker>
</MapContainer>

            </div>
          </div>

          {/* Cells/Committees Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Cells / Committees</h3>
            <ul className="space-y-4 text-gray-100">
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » Anti-Ragging Cell
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » Grievance Cell
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » Women's Cell
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » ST/SC/OBC Cell
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » Academic Committee
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » Welfare Cell
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-100">
              <span className="block">📍 Churachandpur College</span>
              <span className="block">Churachandpur, Manipur - India</span>
              <span className="block">📧 contact@churachandpurcollege.edu.in</span>
              <span className="block">📧 churachandpurcollege@gmail.com</span>
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Clubs & Voluntary Services</h3>
            <ul className="space-y-4 text-gray-100">
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » NSS
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » NCC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-500 transition-colors duration-300">
                  » Red Ribbon
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-400 mt-8 pt-6 text-center text-sm">
          <p className="text-gray-200">
            &copy; {new Date().getFullYear()} This is the official Website of
            Autonomous Churachandpur College, Churachandpur, Manipur
          </p>
          <p className="mt-2 text-gray-100">
            Design by -{" "}
            <a
              href="https://www.frameimpacts.com/"
              className="text-teal-200 hover:underline transition-colors duration-300"
            >
              FIT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
