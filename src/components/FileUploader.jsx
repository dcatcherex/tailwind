import { useDropzone } from 'react-dropzone';

// npm install react-dropzone

const FileUploader = () => {
    const onDrop = (acceptedFiles) => {
      // Handle the uploaded files here.
      console.log(acceptedFiles);
    };
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      accept: 'application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
  
    return (
      <div {...getRootProps()} style={{ border: '1px solid #ccc', padding: '1rem' }}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the documents here...</p>
        ) : (
          <p>
            Drag and drop documents, or click to select a file (accepted formats: PDF, DOC, DOCX)
          </p>
        )}
      </div>
    );
  };

  export default FileUploader;
