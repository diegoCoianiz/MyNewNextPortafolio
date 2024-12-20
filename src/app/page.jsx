'use client'

import { useState } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import LinksSection from '@/components/sections/linksSection';
import PostsSection from '@/components/sections/postsSection';
import ResumeSection from '@/components/sections/resumeSection';

import { posts, links, resume, header } from '@/data/diegoCoianiz'

const user = {
  header: header,
  posts: posts,
  links: links,
  resume: resume
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('Links');

  const renderSection = () => {
    switch (activeSection) {
      case 'Res':
        return <ResumeSection data={user.resume} />;
      case 'Post':
        return <PostsSection data={user.posts} />;
      case 'Links':
        return <LinksSection data={user.links} />;
      // default:
      // return <LinksSection data={user.links} />;
    }
  };

  return (
    <div>
      <Header data={user.header} />
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}
