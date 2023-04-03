'use client'
import Link from 'next/link'
import React from 'react'

const FooterBotton = ({href, target, children}) => {
    return (
        <>
            <button>
                <Link href={href} target={target}>
                    {children}
                </Link>
            </button>
        </>
    )
}

export default FooterBotton