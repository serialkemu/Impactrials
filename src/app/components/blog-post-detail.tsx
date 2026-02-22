import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
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

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export function BlogPostDetail({ post, onBack }: BlogPostDetailProps) {
  const relatedPosts: BlogPost[] = [
    {
      id: 7,
      title: 'Masai Mara in the Wet Season: What to Expect',
      excerpt: 'Planning a safari during the rainy season? Here\'s what makes it special.',
      author: 'Linda Njeri',
      date: '2026-03-12',
      category: 'Travel Guides',
      image: 'https://images.unsplash.com/photo-1740929255530-f72c2f9c1766?w=400',
      readTime: '5 min read',
    },
    {
      id: 8,
      title: 'Community-Led Conservation in Kenya',
      excerpt: 'How local communities are leading wildlife conservation efforts.',
      author: 'Peter Wambua',
      date: '2026-03-08',
      category: 'Impact Stories',
      image: 'https://images.unsplash.com/photo-1623951581058-58138db08519?w=400',
      readTime: '7 min read',
    },
  ];

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="bg-[#F5EFE7] border-b border-[#8B5A3C]/10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#8B5A3C] hover:text-[#6B4A2C] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="h-96 overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <span className="inline-block px-4 py-2 bg-[#F5EFE7] text-[#8B5A3C] rounded-full text-sm mb-6">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl text-[#2C2417] mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-[#6B5D4F] mb-8 pb-8 border-b border-[#8B5A3C]/10">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <span>{post.readTime}</span>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-[#2C2417] mb-6 leading-relaxed">
            When I first arrived in Machakos, I expected to "help." What I didn't expect was how much I would learn.
          </p>

          <p className="text-[#2C2417] mb-6 leading-relaxed">
            Volunteering in a rural community shifts your perspective. It teaches you patience, humility, and the importance of listening before acting. The real impact doesn't come from arriving with solutions — it comes from partnership.
          </p>

          <p className="text-[#2C2417] mb-6 leading-relaxed">
            During my time supporting a community education initiative, I saw firsthand how locally led programs create sustainable change. Teachers weren't waiting for outsiders. They were already building systems. We were there to support, not replace.
          </p>

          <h2 className="text-2xl text-[#2C2417] mt-8 mb-4">Learning Through Doing</h2>

          <p className="text-[#2C2417] mb-6 leading-relaxed">
            The classroom became a place of mutual exchange. While I assisted with homework support and reading programs, I learned about resourcefulness, creativity with limited materials, and the deep commitment teachers have to their students' success.
          </p>

          <p className="text-[#2C2417] mb-6 leading-relaxed">
            Beyond the classroom, cultural exchange became the most powerful part of the experience. Shared meals. Storytelling. Learning to cook traditional dishes. These moments built connection far beyond structured activities.
          </p>

          <h2 className="text-2xl text-[#2C2417] mt-8 mb-4">The Power of Partnership</h2>

          <p className="text-[#2C2417] mb-6 leading-relaxed">
            Community-led development means recognizing that local people are the experts. They know what works, what doesn't, and what their priorities are. As volunteers, our role is to listen, learn, and support — not to lead.
          </p>

          <p className="text-[#2C2417] mb-6 leading-relaxed">
            This approach transforms volunteering from a transactional experience into a genuine partnership. It builds relationships that last beyond the placement period and creates impact that's sustainable because it's rooted in community ownership.
          </p>

          <h2 className="text-2xl text-[#2C2417] mt-8 mb-4">Traveling with Intention</h2>

          <p className="text-[#2C2417] mb-6 leading-relaxed">
            Traveling with intention transforms both the visitor and the host. And that's what Impact Trails Africa is about — connection, contribution, and conscious exploration.
          </p>

          <p className="text-[#2C2417] mb-6 leading-relaxed">
            Whether you're volunteering for weeks or traveling for days, approaching each experience with respect, curiosity, and a willingness to learn makes all the difference. It's not about what you can do for a community — it's about what you can do together.
          </p>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-[#8B5A3C]/10">
          <div className="flex items-center gap-4">
            <span className="text-[#6B5D4F]">Share this article:</span>
            <button className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors">
              <Facebook className="w-5 h-5 text-[#8B5A3C]" />
            </button>
            <button className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors">
              <Twitter className="w-5 h-5 text-[#8B5A3C]" />
            </button>
            <button className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors">
              <Linkedin className="w-5 h-5 text-[#8B5A3C]" />
            </button>
            <button className="p-2 hover:bg-[#F5EFE7] rounded-md transition-colors">
              <Share2 className="w-5 h-5 text-[#8B5A3C]" />
            </button>
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-[#F5EFE7] rounded-lg p-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-[#8B5A3C] flex items-center justify-center text-white text-xl flex-shrink-0">
              {post.author.charAt(0)}
            </div>
            <div>
              <h3 className="text-lg text-[#2C2417] mb-2">About {post.author}</h3>
              <p className="text-sm text-[#6B5D4F] leading-relaxed">
                A passionate advocate for ethical travel and community-based development, sharing stories from volunteering and travel experiences across Kenya and East Africa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-[#F5EFE7] py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-[#2C2417] mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white rounded-lg overflow-hidden border border-[#8B5A3C]/10 hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <div className="h-48 overflow-hidden">
                  <ImageWithFallback
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#F5EFE7] text-[#8B5A3C] rounded-full text-xs mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-xl text-[#2C2417] mb-3 group-hover:text-[#8B5A3C] transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-[#6B5D4F] mb-4 leading-relaxed">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#6B5D4F]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{relatedPost.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
