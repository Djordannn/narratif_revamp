import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div>
      <div>
        <a href="https://api.whatsapp.com/send?phone=6285712705266">
          <FaWhatsapp className="bg-green-400 text-6xl md:text-7xl fixed z-40 py-4 right-8 bottom-8 rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default WhatsApp;
