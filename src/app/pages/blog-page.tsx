import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { BlogListing } from '../components/blog-listing';
import { BlogPostDetail } from '../components/blog-post-detail';
import { BlogSubmission } from '../components/blog-submission';

export function BlogPage() {
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);
  const [showBlogSubmission, setShowBlogSubmission] = useState(false);

  const scrollToBlog = () => {
    const blogSection = document.getElementById('blog-content');
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (selectedBlogPost) {
    return (
      <>
        <BlogPostDetail
          post={selectedBlogPost}
          onBack={() => setSelectedBlogPost(null)}
        />
        {showBlogSubmission && (
          <BlogSubmission onClose={() => setShowBlogSubmission(false)} />
        )}
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] min-h-[350px] flex items-center justify-center mt-16 sm:mt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1605302596032-15e67c3cf66a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZW55YSUyMHN0b3J5dGVsbGluZyUyMGNvbW11bml0eSUyMGN1bHR1cmFsJTIwbW9tZW50fGVufDF8fHx8MTc3MTMyMjgwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Community storytelling moment in Kenya"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-6">
            Stories From the Field
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto">
            Real journeys. Real impact. Real Africa.
          </p>
          <button
            onClick={() => setShowBlogSubmission(true)}
            className="px-8 py-4 bg-[#086770] text-white rounded-md hover:bg-[#065660] transition-colors text-lg"
          >
            Share Your Story
          </button>
        </div>
      </section>

      {/* Blog Content */}
      <div id="blog-content">
        <BlogListing
          onViewPost={(post) => setSelectedBlogPost(post)}
          onSubmitBlog={() => setShowBlogSubmission(true)}
        />
      </div>

      {showBlogSubmission && (
        <BlogSubmission onClose={() => setShowBlogSubmission(false)} />
      )}
    </>
  );
}