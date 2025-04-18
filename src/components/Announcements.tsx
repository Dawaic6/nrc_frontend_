import React from 'react';

type Announcement = {
  imageUrl?: string;
  title: string;
  description: string;
  pdfUrl?: string;
  link?: string;
};

type Opportunity = {
  imageUrl?: string;
  title: string;
  description: string;
  link?: string;
};

type Props = {
  announcements?: Announcement[];
  opportunities?: Opportunity[];
};

const AnnouncementsTab: React.FC<Props> = ({
  announcements = [],
  opportunities = [],
}) => {
  return (
    <div className="p-6 space-y-10 max-w-4xl mx-auto">
      {/* Announcements */}
      <h2 className="text-2xl font-bold">📢 Announcements</h2>
      <div className="space-y-6">
        {announcements.length === 0 && <p>No announcements available.</p>}
        {announcements.map((a, i) => (
          <div key={i} className="border p-4 rounded shadow-sm space-y-2">
            <h3 className="text-xl font-semibold">{a.title}</h3>
            <p>{a.description}</p>
            {a.imageUrl && (
              <img
                src={a.imageUrl}
                alt="announcement"
                className="mt-2 max-w-xs rounded"
              />
            )}
            {a.pdfUrl && (
              <a
                href={a.pdfUrl}
                download
                className="text-blue-500 underline block"
              >
                Download PDF
              </a>
            )}
            {a.link && (
              <a
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline block"
              >
                View Link
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Divider */}
      <hr className="my-10 border-t-2" />

      {/* Opportunities */}
      <h2 className="text-2xl font-bold">🎯 Opportunities</h2>
      <div className="space-y-6">
        {opportunities.length === 0 && <p>No opportunities available.</p>}
        {opportunities.map((o, i) => (
          <div key={i} className="border p-4 rounded shadow-sm space-y-2">
            <h3 className="text-xl font-semibold">{o.title}</h3>
            <p>{o.description}</p>
            {o.imageUrl && (
              <img
                src={o.imageUrl}
                alt="opportunity"
                className="mt-2 max-w-xs rounded"
              />
            )}
            {o.link && (
              <a
                href={o.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline block"
              >
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
