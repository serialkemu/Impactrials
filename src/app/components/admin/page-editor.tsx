import { useState } from 'react';
import { Save, Eye } from 'lucide-react';

interface PageContent {
  page: string;
  sections: {
    id: string;
    label: string;
    content: string;
  }[];
}

export function PageEditor() {
  const [selectedPage, setSelectedPage] = useState('home');
  
  const pages: PageContent[] = [
    {
      page: 'home',
      sections: [
        {
          id: 'hero-title',
          label: 'Hero Title',
          content: 'Explore Africa with Purpose',
        },
        {
          id: 'hero-subtitle',
          label: 'Hero Subtitle',
          content: 'Volunteer. Travel. Connect.',
        },
        {
          id: 'hero-description',
          label: 'Hero Description',
          content: 'Whether you\'re backpacking across Africa, looking to give back meaningfully, or seeking immersive travel experiences rooted in culture and community — your journey starts here.',
        },
      ],
    },
    {
      page: 'about',
      sections: [
        {
          id: 'about-title',
          label: 'Section Title',
          content: 'About Impact Trails Africa',
        },
        {
          id: 'about-intro',
          label: 'Introduction',
          content: 'Impact Trails Africa is a women-led travel and volunteer platform built for people exploring Africa with intention.',
        },
        {
          id: 'about-description',
          label: 'Description',
          content: 'We offer two pathways: Community-based volunteering shaped by local priorities, and immersive travel experiences rooted in culture, nature, and connection.',
        },
      ],
    },
    {
      page: 'volunteer',
      sections: [
        {
          id: 'volunteer-title',
          label: 'Section Title',
          content: 'Volunteer Projects',
        },
        {
          id: 'volunteer-description',
          label: 'Description',
          content: 'Our projects are community-based and locally led. Volunteers work alongside local facilitators, teachers, and coordinators — never replacing local roles, but supporting existing initiatives.',
        },
      ],
    },
  ];

  const currentPage = pages.find(p => p.page === selectedPage) || pages[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl text-[#2C2417] mb-2">Page Editor</h1>
        <p className="text-[#6B5D4F]">Edit content and text for website pages</p>
      </div>

      {/* Page Selector */}
      <div className="bg-white rounded-lg p-4 border border-[#8B5A3C]/10">
        <label className="block text-sm mb-2 text-[#2C2417]">Select Page</label>
        <select
          value={selectedPage}
          onChange={(e) => setSelectedPage(e.target.value)}
          className="w-full px-4 py-2 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
        >
          <option value="home">Home Page</option>
          <option value="about">About Page</option>
          <option value="volunteer">Volunteer Page</option>
          <option value="travel">Travel Page</option>
          <option value="contact">Contact Page</option>
        </select>
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {currentPage.sections.map((section) => (
          <div key={section.id} className="bg-white rounded-lg p-6 border border-[#8B5A3C]/10">
            <label className="block text-sm mb-3 text-[#2C2417]">{section.label}</label>
            {section.label.toLowerCase().includes('description') ? (
              <textarea
                defaultValue={section.content}
                rows={4}
                className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
              />
            ) : (
              <input
                type="text"
                defaultValue={section.content}
                className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
              />
            )}
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-white border border-[#8B5A3C]/20 text-[#2C2417] rounded-md hover:bg-[#F5EFE7] transition-colors">
          <Eye className="w-5 h-5" />
          Preview
        </button>
        <button className="flex items-center gap-2 px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      {/* Instructions */}
      <div className="bg-[#F5EFE7] rounded-lg p-6">
        <h3 className="text-lg text-[#2C2417] mb-3">Editor Instructions</h3>
        <ul className="space-y-2 text-sm text-[#6B5D4F]">
          <li>• Edit text content directly in the input fields</li>
          <li>• Click "Save Changes" to update the website</li>
          <li>• Use "Preview" to see changes before publishing</li>
          <li>• Changes take effect immediately after saving</li>
        </ul>
      </div>
    </div>
  );
}
