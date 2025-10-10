'use client'

interface ScreenshotGridProps {
  id: string
  screenshots: { image_url: string; title: string }[]
}

export const ScreenshotGrid = ({ id, screenshots }: ScreenshotGridProps) => {
  return (
    <div className="space-y-8 p-4 py-6 sm:p-6 md:p-8 @lg:max-w-5xl">
      <div className="grid grid-cols-1 gap-2 max-sm:gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
        {screenshots.map(({ image_url, title }) => (
          <div
            key={title}
            title={title}
            className="group flex flex-col items-center transition hover:shadow-lg"
          >
            <img
              src={`/services/screens/${id}/${image_url}`}
              alt={title}
              className="group-hover:bg-brand mb-3 h-32 w-full rounded-lg object-cover p-1 transition-colors"
            />
            <span className="text-primary group-hover:text-brand mt-2 text-center text-base font-medium">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
