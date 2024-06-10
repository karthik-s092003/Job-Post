import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const JobDescriptionEditor = () => {
  const [jobDescription, setJobDescription] = useState('');

  const handleChange = (value) => {
    setJobDescription(value);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4">Job Description</h2>
      <ReactQuill
        value={jobDescription}
        onChange={handleChange}
        modules={JobDescriptionEditor.modules}
        formats={JobDescriptionEditor.formats}
        placeholder="Write the job description here..."
      />
    </div>
  );
};

JobDescriptionEditor.modules = {
  toolbar: [
    [{ 'header': '1'}, { 'header': '2'}, { 'font': [] }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'align': [] }],
    [{ 'color': [] }, { 'background': [] }],
    ['clean']
  ]
};

JobDescriptionEditor.formats = [
  'header', 'font', 'list', 'bullet',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'align', 'color', 'background'
];

export default JobDescriptionEditor;
