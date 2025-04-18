import React, { useState, useRef, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface NewsCardProps {
  Image: string;
  title: string;
  description: string;
  longDescription: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  Image,
  title,
  description,
  longDescription,
  link,
}) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [imageBase64, setImageBase64] = useState("");

  // Convert image to Base64 if it's not already
  const convertImageToBase64 = async (url: string): Promise<string> => {
    const response = await fetch(url, { mode: "cors" });
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  };

  useEffect(() => {
    // Only convert if not already a data URI
    if (!Image.startsWith("data:")) {
      convertImageToBase64(Image).then(setImageBase64);
    } else {
      setImageBase64(Image);
    }
  }, [Image]);

  const handleDownloadPDF = async () => {
    if (modalRef.current) {
      const canvas = await html2canvas(modalRef.current, {
        useCORS: true, // Important for external images
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${title}.pdf`);
    }
  };

  return (
    <>
      <div className="w-full max-w-xs text-center">
        <img
          src={imageBase64 || Image}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="mt-2 font-bold text-sm">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <button
          onClick={() => setShowModal(true)}
          className="text-blue-700 font-semibold hover:underline mt-1 inline-block"
        >
          Read more &nbsp; &gt;
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-xl overflow-y-auto max-h-[90vh]"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <img
              src={imageBase64 || Image}
              alt={title}
              className="w-full h-56 object-cover rounded"
            />
            <h2 className="text-xl font-bold mt-4">{title}</h2>
            <p className="text-gray-700 mt-2">{longDescription}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-4 block underline"
            >
              Visit original link
            </a>
            <button
              onClick={handleDownloadPDF}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download as PDF
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewsCard;
