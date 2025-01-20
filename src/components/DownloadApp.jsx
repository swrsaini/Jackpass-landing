export function DownloadApp(){
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-800 to-blue-600 py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-blue-400/30 rounded-full text-blue-100 text-sm font-medium mb-4">
              Available Now
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-white">
              Connect with Your Community
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Download the Jackpass app and discover events, join communities, and meet people who share your interests.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-8 md:mb-12">
              <a href="#" className="group inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-3  transition-all">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                  className="h-8 sm:h-10"
                />
              </a>
              <a href="#" className="group inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-3  transition-all">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-8 sm:h-10"
                />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 md:gap-8 text-blue-200/60">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">1M+</div>
                <div className="text-xs md:text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">50K+</div>
                <div className="text-xs md:text-sm">Communities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">100K+</div>
                <div className="text-xs md:text-sm">Events</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}