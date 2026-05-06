import { useState } from 'react';

export default function App() {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !jobDescription) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobDescription', jobDescription);

    try {
      const res = await fetch('/api/score', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      setScore(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">ATS Resume Scorer</h1>
        <p className="text-gray-600 mb-6">
          Upload a resume PDF and paste a job description. Get an ATS compatibility score with rewrite suggestions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Resume (PDF)</label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              className="block w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Job Description</label>
            <textarea
              rows={6}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="block w-full border rounded p-2"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Scoring…' : 'Score Resume'}
          </button>
        </form>

        {score && (
          <div className="mt-6 p-4 bg-blue-50 rounded">
            <h2 className="font-semibold">Score</h2>
            <pre className="mt-2 text-sm">{JSON.stringify(score, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
