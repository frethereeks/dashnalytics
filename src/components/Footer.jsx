import React from 'react'

export default function Footer() {
    return (
        <footer className='py-2 px-4 bg-white fixed bottom-0 right-0 w-full z-10'>
            <small className="text-dark text-right text-xs md:text-sm flex justify-end">
                &copy;{new Date().getFullYear()} Dashnalytics. All rights reserved.
            </small>
        </footer>
    )
}
