import { useState } from 'react';
import { Upload, Trash2, Search, Image as ImageIcon } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface MediaItem {
  id: number;
  url: string;
  name: string;
  uploadDate: string;
  usedIn: string;
}

export function MediaLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [media, setMedia] = useState<MediaItem[]>([
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1623951581058-58138db08519?w=300',
      name: 'savannah-sunset.jpg',
      uploadDate: '2026-02-10',
      usedIn: 'Hero Section',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/flagged/photo-1559155359-ad9116adc821?w=300',
      name: 'women-farming.jpg',
      uploadDate: '2026-02-09',
      usedIn: 'Agriculture Project',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1637148659333-aa7f09fc2d13?w=300',
      name: 'classroom-education.jpg',
      uploadDate: '2026-02-08',
      usedIn: 'Education Project',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?w=300',
      name: 'village-traditional.jpg',
      uploadDate: '2026-02-07',
      usedIn: 'About Section',
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1740929255530-f72c2f9c1766?w=300',
      name: 'wildlife-safari.jpg',
      uploadDate: '2026-02-06',
      usedIn: 'Safari Adventures',
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?w=300',
      name: 'beach-coast.jpg',
      uploadDate: '2026-02-05',
      usedIn: 'Coast Experiences',
    },
  ]);

  const filteredMedia = media.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.usedIn.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteMedia = (id: number) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setMedia(media.filter(m => m.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl text-[#2C2417] mb-2">Media Library</h1>
          <p className="text-[#6B5D4F]">Manage images and media assets</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors">
          <Upload className="w-5 h-5" />
          Upload Image
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
        <input
          type="text"
          placeholder="Search media..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
        />
      </div>

      {/* Stats */}
      <div className="bg-white rounded-lg p-4 border border-[#8B5A3C]/10">
        <p className="text-[#6B5D4F] text-sm mb-1">Total Images</p>
        <p className="text-2xl text-[#2C2417]">{media.length}</p>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMedia.map((item) => (
          <div key={item.id} className="bg-white rounded-lg border border-[#8B5A3C]/10 overflow-hidden group">
            <div className="aspect-square bg-[#F5EFE7] relative overflow-hidden">
              <ImageWithFallback
                src={item.url}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <button
                  onClick={() => deleteMedia(item.id)}
                  className="p-3 bg-[#C45A3C] text-white rounded-md hover:bg-[#A4442C] transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-[#2C2417] mb-1 truncate">{item.name}</p>
              <p className="text-xs text-[#6B5D4F] mb-2">Used in: {item.usedIn}</p>
              <p className="text-xs text-[#6B5D4F]">
                Uploaded: {new Date(item.uploadDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filteredMedia.length === 0 && (
        <div className="bg-white rounded-lg p-12 text-center border border-[#8B5A3C]/10">
          <ImageIcon className="w-16 h-16 text-[#6B5D4F] mx-auto mb-4" />
          <p className="text-[#6B5D4F]">No images found.</p>
        </div>
      )}

      {/* Upload Area */}
      <div className="bg-white rounded-lg border-2 border-dashed border-[#8B5A3C]/20 p-12">
        <div className="text-center">
          <Upload className="w-16 h-16 text-[#8B5A3C] mx-auto mb-4" />
          <h3 className="text-xl text-[#2C2417] mb-2">Upload Images</h3>
          <p className="text-[#6B5D4F] mb-6">
            Drag and drop your images here, or click to browse
          </p>
          <button className="px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors">
            Choose Files
          </button>
        </div>
      </div>
    </div>
  );
}
