
import React from 'react';
import Layout from '@/components/Layout';
import UploadForm from '@/components/UploadForm';

const Upload = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-theme-orange to-theme-purple text-white p-8 md:p-12">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Upload Content</h1>
          <p className="text-lg max-w-2xl">
            Share your travel photos or useful code snippets with me.
            I'll review and add your contributions to the collection.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <UploadForm />
      </div>
    </Layout>
  );
};

export default Upload;
