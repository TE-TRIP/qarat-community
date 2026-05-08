import { Member } from "@/lib/data";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Member Image */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Member Info */}
      <div className="p-5">
        {/* Name & Title */}
        <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-sm font-medium text-orange-600 mb-3">
          {member.title}
        </p>

        {/* Bio */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {member.bio}
        </p>

        {/* Specialties */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {member.specialties.slice(0, 2).map((specialty, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
            {member.specialties.length > 2 && (
              <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                +{member.specialties.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 pt-3 border-t border-gray-200">
          {member.social.instagram && (
            <a
              href={member.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition-colors"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
              </svg>
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition-colors"
              title="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M21 20.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
              </svg>
            </a>
          )}
          {member.social.website && (
            <a
              href={member.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-600 transition-colors"
              title="Website"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
