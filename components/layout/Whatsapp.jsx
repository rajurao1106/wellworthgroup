import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/916260324413"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  );
}