import { PDFDownloadLink } from '@react-pdf/renderer';

const PdfGenerator = () => {
    return (
      <div>
        <PDFDownloadLink document={<PdfDocument />} fileName="generated.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </div>
    );
  };

  export default PdfGenerator;
