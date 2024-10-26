import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, FileSpreadsheet } from 'lucide-react';

interface ImportResult {
  message: string;
  total: number;
  successful: number;
  failed: number;
  results: Array<{
    success: boolean;
    error?: string;
    lawyer: {
      firstName: string;
      lastName: string;
      email?: string;
    };
  }>;
}

export default function AdminImport() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
        setError('File size exceeds 5MB limit');
        return;
      }
      if (!selectedFile.name.match(/\.(xlsx|xls)$/)) {
        setError('Only Excel files (.xlsx, .xls) are allowed');
        return;
      }
      setFile(selectedFile);
      setError(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/admin/import-lawyers', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload file');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Import Lawyer Data</h1>
          <p className="mt-2 text-gray-300">Upload Excel files to bulk import lawyer profiles</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* File Upload Form */}
          <form onSubmit={handleUpload} className="space-y-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
              <div className="text-center">
                <FileSpreadsheet className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Select Excel File
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept=".xlsx,.xls"
                    onChange={handleFileChange}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  {file ? file.name : 'XLSX or XLS files only (max 5MB)'}
                </p>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 mr-2 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={!file || isUploading}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? (
                <>
                  <Upload className="animate-spin h-5 w-5 mr-2" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-5 w-5 mr-2" />
                  Upload File
                </>
              )}
            </button>
          </form>

          {/* Template Instructions */}
          <div className="mt-8 border-t pt-8">
            <h2 className="text-xl font-bold mb-4">Excel Template Format</h2>
            <p className="text-gray-600 mb-4">
              Your Excel file should include the following columns:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Required Columns:</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li>First Name</li>
                  <li>Last Name</li>
                  <li>Phone</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Optional Columns:</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                  <li>Email</li>
                  <li>Bar Number</li>
                  <li>Profile Photo URL</li>
                  <li>Firm Name</li>
                  <li>Practice Areas (comma-separated)</li>
                  <li>Years of Experience</li>
                  <li>Bio</li>
                  <li>Address</li>
                  <li>City</li>
                  <li>ZIP</li>
                  <li>Website</li>
                  <li>Languages (comma-separated)</li>
                  <li>Education (semicolon-separated entries, format: institution,degree,year)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-8 space-y-6">
              <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <p className="font-semibold">Import completed successfully</p>
                  <p className="text-sm mt-1">
                    Total records: {result.total} | 
                    Successful: {result.successful} | 
                    Failed: {result.failed}
                  </p>
                </div>
              </div>

              {/* Results Table */}
              <div className="border rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {result.results.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.success ? (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Success
                            </span>
                          ) : (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                              Failed
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.lawyer.firstName} {item.lawyer.lastName}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item.lawyer.email || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.error || 'Imported successfully'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}