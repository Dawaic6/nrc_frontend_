import React, { useState } from 'react';

type Announcement = {
  image?: File;
  title: string;
  description: string;
  pdf?: File;
  link?: string;
};

type Opportunity = {
  image?: File;
  title: string;
  description: string;
  link?: string;
};

const AnnouncementsTab: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  const [announcementInput, setAnnouncementInput] = useState<Announcement>({ title: '', description: '' });
  const [opportunityInput, setOpportunityInput] = useState<Opportunity>({ title: '', description: '' });

  const handleAddAnnouncement = () => {
    setAnnouncements([...announcements, announcementInput]);
    setAnnouncementInput({ title: '', description: '' });
  };

  const handleAddOpportunity = () => {
    setOpportunities([...opportunities, opportunityInput]);
    setOpportunityInput({ title: '', description: '' });
  };

  return (
    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold">📢 Announcements</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Event title"
          value={announcementInput.title}
          onChange={(e) => setAnnouncementInput({ ...announcementInput, title: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Short description"
          value={announcementInput.description}
          onChange={(e) => setAnnouncementInput({ ...announcementInput, description: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAnnouncementInput({ ...announcementInput, image: e.target.files?.[0] })}
        />
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setAnnouncementInput({ ...announcementInput, pdf: e.target.files?.[0] })}
        />
        <input
          type="url"
          placeholder="Link (optional)"
          value={announcementInput.link || ''}
          onChange={(e) => setAnnouncementInput({ ...announcementInput, link: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button onClick={handleAddAnnouncement} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Announcement
        </button>
      </div>

      <div className="space-y-6">
        {announcements.map((a, i) => (
          <div key={i} className="border p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold">{a.title}</h3>
            <p>{a.description}</p>
            {a.image && <img src={URL.createObjectURL(a.image)} alt="announcement" className="mt-2 max-w-xs" />}
            {a.pdf && (
              <a
                href={URL.createObjectURL(a.pdf)}
                download={a.pdf.name}
                className="text-blue-500 underline block mt-2"
              >
                Download PDF
              </a>
            )}
            {a.link && (
              <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline block mt-2">
                View Link
              </a>
            )}
          </div>
        ))}
      </div>

      <hr className="my-10 border-t-2" />

      <h2 className="text-2xl font-bold">🎯 Opportunities</h2>
      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Opportunity title"
          value={opportunityInput.title}
          onChange={(e) => setOpportunityInput({ ...opportunityInput, title: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Short description"
          value={opportunityInput.description}
          onChange={(e) => setOpportunityInput({ ...opportunityInput, description: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setOpportunityInput({ ...opportunityInput, image: e.target.files?.[0] })}
        />
        <input
          type="url"
          placeholder="Link (optional)"
          value={opportunityInput.link || ''}
          onChange={(e) => setOpportunityInput({ ...opportunityInput, link: e.target.value })}
          className="w-full border p-2 rounded"
        />
        <button onClick={handleAddOpportunity} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Opportunity
        </button>
      </div>

      <div className="space-y-6">
        {opportunities.map((o, i) => (
          <div key={i} className="border p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold">{o.title}</h3>
            <p>{o.description}</p>
            {o.image && <img src={URL.createObjectURL(o.image)} alt="opportunity" className="mt-2 max-w-xs" />}
            {o.link && (
              <a href={o.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline block mt-2">
                View Link
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsTab;
