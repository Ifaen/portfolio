import toeicPdf from "./TOEIC-Bridge.pdf"

export default function ToeicCertificate() {
  return (
    <div className="w-full h-screen">
      <h1>TOEIC Bridge Certificate</h1>
      <iframe
        src={toeicPdf}
        className="w-full h-full"
        title="TOEIC Bridge Certificate"
      />
    </div>
  );
}
