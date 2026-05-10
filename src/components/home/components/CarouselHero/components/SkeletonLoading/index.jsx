import ContentLoader from 'react-content-loader'

export function CarouselHeroSkeleton() {
  return (
    <section className="relative flex h-138.75 w-full items-center bg-[#121212] px-6 md:h-100 lg:h-153.75 xl:h-118.75">
      <div className="container mx-auto">
        <ContentLoader
          speed={2}
          width={600}
          height={200}
          viewBox="0 0 600 200"
          backgroundColor="#202020"
          foregroundColor="#333333"
        >
          <rect x="0" y="20" rx="4" ry="4" width="450" height="32" />
          <rect x="0" y="65" rx="4" ry="4" width="300" height="32" />

          <rect x="0" y="130" rx="20" ry="20" width="160" height="40" />
        </ContentLoader>
      </div>
    </section>
  )
}
