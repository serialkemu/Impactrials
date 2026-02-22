import { useState } from 'react';
import { X, Upload, Image as ImageIcon } from 'lucide-react';

interface BlogSubmissionProps {
  onClose: () => void;
}

export function BlogSubmission({ onClose }: BlogSubmissionProps) {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    authorName: '',
    authorBio: '',
    authorEmail: '',
  });

  const categories = [
    'Volunteer Stories',
    'Travel Guides',
    'Impact Stories',
    'Adventure',
    'Culture',
    'Sustainable Travel',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submission
    alert('Thank you for your submission! We\'ll review it and get back to you within 3-5 business days.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full my-8">
        <div className="sticky top-0 bg-white border-b border-[#8B5A3C]/10 px-6 py-4 flex items-center justify-between rounded-t-lg">
          <h2 className="text-2xl text-[#2C2417]">Share Your Story</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F5EFE7] rounded-md"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Intro */}
          <div className="bg-[#F5EFE7] rounded-lg p-4 text-sm text-[#6B5D4F]">
            <p>
              We'd love to hear about your experience! Share your story, insights, or travel tips with the Impact Trails community. All submissions are reviewed before publishing.
            </p>
          </div>

          {/* Article Details */}
          <div>
            <label className="block text-sm mb-2 text-[#2C2417]">Article Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
              placeholder="Give your story a compelling title"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-[#2C2417]">Category *</label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2 text-[#2C2417]">Content *</label>
            <textarea
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={12}
              className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
              placeholder="Write your story... (minimum 500 words recommended)"
            ></textarea>
            <p className="text-xs text-[#6B5D4F] mt-2">
              Current word count: {formData.content.split(/\s+/).filter(Boolean).length}
            </p>
          </div>

          {/* Featured Image Upload */}
          <div>
            <label className="block text-sm mb-2 text-[#2C2417]">Featured Image</label>
            <div className="border-2 border-dashed border-[#8B5A3C]/20 rounded-lg p-8 text-center hover:bg-[#F5EFE7] transition-colors cursor-pointer">
              <ImageIcon className="w-12 h-12 text-[#8B5A3C] mx-auto mb-3" />
              <p className="text-sm text-[#6B5D4F] mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-[#6B5D4F]">
                PNG, JPG up to 5MB
              </p>
              <input type="file" accept="image/*" className="hidden" />
            </div>
          </div>

          {/* Author Information */}
          <div className="border-t border-[#8B5A3C]/10 pt-6">
            <h3 className="text-lg text-[#2C2417] mb-4">Author Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-2 text-[#2C2417]">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formData.authorName}
                  onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                  className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  placeholder="How should we credit you?"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#2C2417]">Your Email *</label>
                <input
                  type="email"
                  required
                  value={formData.authorEmail}
                  onChange={(e) => setFormData({ ...formData, authorEmail: e.target.value })}
                  className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                  placeholder="For communication only"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-2 text-[#2C2417]">Short Bio (Optional)</label>
              <textarea
                value={formData.authorBio}
                onChange={(e) => setFormData({ ...formData, authorBio: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
                placeholder="Tell readers a bit about yourself (2-3 sentences)"
              ></textarea>
            </div>
          </div>

          {/* Guidelines */}
          <div className="bg-[#F5EFE7] rounded-lg p-4 text-sm">
            <h4 className="text-[#2C2417] mb-2">Submission Guidelines:</h4>
            <ul className="space-y-1 text-[#6B5D4F]">
              <li>• Articles should be original and not published elsewhere</li>
              <li>• We prioritize authentic, first-person experiences</li>
              <li>• Include specific details and personal insights</li>
              <li>• Respect cultural sensitivity and community privacy</li>
              <li>• Review typically takes 3-5 business days</li>
            </ul>
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-white border border-[#8B5A3C]/20 text-[#2C2417] rounded-md hover:bg-[#F5EFE7] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors flex items-center justify-center gap-2"
            >
              <Upload className="w-5 h-5" />
              Submit for Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
