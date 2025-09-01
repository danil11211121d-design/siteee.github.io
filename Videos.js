function Videos({ language }) {
  try {
    const [activeVideo, setActiveVideo] = React.useState(0);

    const videos = [
      {
        titleKey: 'videos.tutorial1.title',
        descKey: 'videos.tutorial1.description',
        thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
        duration: '5:32',
        category: 'basic'
      },
      {
        titleKey: 'videos.tutorial2.title',
        descKey: 'videos.tutorial2.description',
        thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
        duration: '8:15',
        category: 'advanced'
      },
      {
        titleKey: 'videos.tutorial3.title',
        descKey: 'videos.tutorial3.description',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
        duration: '6:47',
        category: 'security'
      },
      {
        titleKey: 'videos.tutorial4.title',
        descKey: 'videos.tutorial4.description',
        thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
        duration: '4:23',
        category: 'tips'
      }
    ];

    return (
      <section 
        id="videos" 
        className="py-20 px-4"
        data-name="videos" 
        data-file="components/Videos.js"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">
              {getText(language, 'videos.title')}
            </h2>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              {getText(language, 'videos.subtitle')}
            </p>
          </div>

          {/* Main Video Player */}
          <div className="mb-12">
            <div className="card max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] flex items-center justify-center group cursor-pointer">
                <img 
                  src={videos[activeVideo].thumbnail}
                  alt={getText(language, videos[activeVideo].titleKey)}
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="relative z-10 w-20 h-20 rounded-full bg-white bg-opacity-90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="icon-play text-3xl text-[var(--primary-color)] ml-1"></div>
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black bg-opacity-70 text-white text-sm rounded">
                  {videos[activeVideo].duration}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">
                {getText(language, videos[activeVideo].titleKey)}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {getText(language, videos[activeVideo].descKey)}
              </p>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`card cursor-pointer transition-all duration-300 ${
                  activeVideo === index 
                    ? 'ring-2 ring-[var(--primary-color)] transform scale-105' 
                    : 'hover:shadow-xl hover:-translate-y-1'
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden mb-4 group">
                  <img 
                    src={video.thumbnail}
                    alt={getText(language, video.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black bg-opacity-70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                      <div className="icon-play text-xl text-[var(--primary-color)] ml-1"></div>
                    </div>
                  </div>
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                  video.category === 'basic' ? 'bg-green-100 text-green-700' :
                  video.category === 'advanced' ? 'bg-blue-100 text-blue-700' :
                  video.category === 'security' ? 'bg-red-100 text-red-700' :
                  'bg-purple-100 text-purple-700'
                }`}>
                  {getText(language, `videos.category.${video.category}`)}
                </div>
                
                <h4 className="font-bold text-sm mb-2 line-clamp-2">
                  {getText(language, video.titleKey)}
                </h4>
                
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed line-clamp-3">
                  {getText(language, video.descKey)}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              {getText(language, 'videos.cta')}
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Videos component error:', error);
    return null;
  }
}