import Image from 'next/image'
import type { Author } from '@/lib/authors'

interface AuthorBioProps {
  author: Author
}

export default function AuthorBio({ author }: AuthorBioProps) {
  return (
    <div className="mt-16 pt-8 border-t border-gray-200 max-w-3xl">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            width={56}
            height={56}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div>
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">About the author</p>
          <h3 className="text-base font-semibold mb-1">
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition-colors"
            >
              {author.name}
            </a>
          </h3>
          <p className="text-sm text-gray-500 mb-2">{author.role}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{author.bio}</p>
        </div>
      </div>
    </div>
  )
}
