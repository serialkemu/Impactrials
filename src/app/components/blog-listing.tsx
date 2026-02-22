import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

interface BlogListingProps {
  onViewPost: (post: BlogPost) => void;
  onSubmitBlog: () => void;
}

export function BlogListing({ onViewPost, onSubmitBlog }: BlogListingProps) {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'What Volunteering in Rural Kenya Taught Me About Community',
      excerpt: 'When I first arrived in Machakos, I expected to "help." What I didn\'t expect was how much I would learn about partnership, patience, and the power of locally-led development.',
      author: 'Impact Trails Contributor',
      date: '2026-03-15',
      category: 'Volunteer Stories',
      image: 'https://images.unsplash.com/photo-1601071733462-d0bbb6ee7a02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdmlsbGFnZSUyMHRyYWRpdGlvbmFsJTIwaG9tZXMlMjBLZW55YXxlbnwxfHx8fDE3NzExOTA2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'A Week on the Kenyan Coast: Diani to Lamu',
      excerpt: 'From pristine beaches to historic Swahili architecture, Kenya\'s coastline offers incredible diversity. Here\'s my journey exploring ethical travel along the Indian Ocean.',
      author: 'Sarah Mitchell',
      date: '2026-03-10',
      category: 'Travel Guides',
      image: 'https://images.unsplash.com/photo-1623317977555-5be922ef3f5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEaWFuaSUyMGJlYWNoJTIwS2VueWElMjB0dXJxdW9pc2UlMjB3YXRlcnxlbnwxfHx8fDE3NzExOTA2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Supporting Women Entrepreneurs in Nairobi',
      excerpt: 'Inside the women\'s empowerment project at Faraja Centre, where skills training, mentorship, and community support are transforming lives.',
      author: 'Emma Johnson',
      date: '2026-03-05',
      category: 'Impact Stories',
      image: 'https://images.unsplash.com/photo-1515657241610-a6b33f0f6c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwbWFya2V0JTIwdmVuZG9ycyUyMEtlbnlhfGVufDF8fHx8MTc3MTE5MDYxOXww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'Hiking Mount Kenya: A Beginner\'s Guide',
      excerpt: 'Everything you need to know about trekking Africa\'s second-highest mountain, from fitness preparation to choosing the right route.',
      author: 'James Carter',
      date: '2026-02-28',
      category: 'Adventure',
      image: 'https://images.unsplash.com/photo-1740343328268-0a126bf87c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNb3VudCUyMEtlbnlhJTIwaGlraW5nJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MTE5MDYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '10 min read',
    },
    {
      id: 5,
      title: 'Traditional Kenyan Cuisine: A Cultural Journey',
      excerpt: 'From githeri to nyama choma, explore the rich culinary traditions of Kenya through local markets and cooking experiences.',
      author: 'Maria Ochieng',
      date: '2026-02-20',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1723643343026-b42936dba48e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBZnJpY2FuJTIwdHJhZGl0aW9uYWwlMjBjb29raW5nJTIwZmlyZSUyMHdvbWVufGVufDF8fHx8MTc3MTE5MDYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 min read',
    },
    {
      id: 6,
      title: 'Ethical Safari: What to Look For',
      excerpt: 'How to choose safari experiences that truly support conservation and local communities, not just wildlife tourism.',
      author: 'David Kiprop',
      date: '2026-02-15',
      category: 'Sustainable Travel',
      image: 'https://images.unsplash.com/photo-1740929255530-f72c2f9c1766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHdpbGRsaWZlJTIwc2FmYXJpJTIwbmF0dXJhbHxlbnwxfHx8fDE3NzExOTA2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min read',
    },
  ];

  const categories = ['All', 'Volunteer Stories', 'Travel Guides', 'Impact Stories', 'Adventure', 'Culture', 'Sustainable Travel'];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl text-[#2C2417] mb-4">Blog</h1>
          <p className="text-lg text-[#6B5D4F] max-w-2xl mx-auto mb-8">
            Stories, insights, and guides from our community of volunteers and travelers exploring Africa with intention.
          </p>
          <button
            onClick={onSubmitBlog}
            className="px-6 py-3 bg-[#8B5A3C] text-white rounded-md hover:bg-[#6B4A2C] transition-colors"
          >
            Share Your Story
          </button>
        </div>

        {/* Search and Categories */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#6B5D4F]" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 bg-[#F5EFE7] border border-[#8B5A3C]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5A3C]"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-[#F5EFE7] text-[#2C2417] rounded-full hover:bg-[#8B5A3C] hover:text-white transition-colors text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        <div
          onClick={() => onViewPost(posts[0])}
          className="mb-16 bg-[#F5EFE7] rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="h-64 md:h-full">
              <ImageWithFallback
                src={posts[0].image}
                alt={posts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-[#8B5A3C] text-white rounded-full text-sm mb-4 self-start">
                Featured
              </span>
              <h2 className="text-3xl text-[#2C2417] mb-4">{posts[0].title}</h2>
              <p className="text-[#6B5D4F] mb-6 leading-relaxed">{posts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-[#6B5D4F]">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(posts[0].date).toLocaleDateString()}</span>
                </div>
                <span>{posts[0].readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div>
          <h2 className="text-2xl text-[#2C2417] mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <div
                key={post.id}
                onClick={() => onViewPost(post)}
                className="bg-white rounded-lg overflow-hidden border border-[#8B5A3C]/10 hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#F5EFE7] text-[#8B5A3C] rounded-full text-xs mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-xl text-[#2C2417] mb-3 group-hover:text-[#8B5A3C] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#6B5D4F] mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#6B5D4F]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#F5EFE7] text-[#2C2417] rounded-md hover:bg-[#8B5A3C] hover:text-white transition-colors flex items-center gap-2 mx-auto">
            Load More Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
