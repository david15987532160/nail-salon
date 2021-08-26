import { BookingIcon, CheckinIcon } from '.';

export const Button = ({ href, type }: { href: string, type: 'Booking' | 'Checkin' }) => {
    return <a
        href={ href }
        target="_blank"
        className="flex items-center px-3 py-1 mx-3 sm:mx-3 relative text-xs text-red-600 border-2 border-red-600 rounded-2xl bg-white"
    >
        { type === 'Booking' ? <BookingIcon/> : <CheckinIcon/> }

        <span>{ type }</span>
    </a>
}
