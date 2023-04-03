'use client'
import React from 'react'
import Image from 'next/image'

const ProfileImg = () => {
  return (
    <Image src={"https://avatars.githubusercontent.com/u/95014620?v=4"} width={230} height={230} alt="profile image"></Image>
  )
}

export default ProfileImg