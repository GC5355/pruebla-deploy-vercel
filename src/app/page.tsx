"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Home() {
  const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3"
  //       );
  //       const audioBlob = await response.blob();
  //       console.log(audioBlob);
        
  //       // Aquí puedes hacer lo que desees con el archivo de audio,
  //       // como reproducirlo en un reproductor de audio en tu aplicación.
    
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  const [pdfUrl, setPdfUrl] = useState("");

  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await fetch(
          "https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Presupuesto.pdf"
        );
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setPdfUrl(url);
        console.log(url);
        
  //       // Aquí puedes hacer lo que desees con el archivo de audio,
  //       // como reproducirlo en un reproductor de audio en tu aplicación.
    
         setLoading(false);
       } catch (error) {
         console.error("Error fetching data:", error);
        setLoading(false);
     }
    };

    fetchPdf();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
   <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>hola</div>
      <div>
        {pdfUrl && (
          <iframe
            src={pdfUrl}
            title="PDF Viewer"
            width="100%"
            height="500px"
          />
        )}
      </div>
      {/* <div>
        <ReactAudioPlayer
          src="https://pub-11d873aa0eb4407dad2effa87772616b.r2.dev/Zita.mp3"
          autoPlay
          controls
        />
      </div> */}
    </main>
  );
}
