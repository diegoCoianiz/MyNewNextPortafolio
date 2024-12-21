'use client'

import { useState } from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import LinksSection from '@/components/sections/linksSection';
import PostsSection from '@/components/sections/postsSection';
import ResumeSection from '@/components/sections/resumeSection';


import { posts, links, resume, header, postStories, navBarStorySlider } from '@/data/diegoCoianiz'
import StorySlider from '@/components/utilTools/storySilder';

const user = {
  header: header,
  navBarStorySlider: navBarStorySlider,
  links: links,
  resume: resume,
  posts: posts,
  postStories: postStories,
}

export default function Home() {
  const [activeSection, setActiveSection] = useState('Links');

  const renderSection = () => {
    switch (activeSection) {
      case 'Res':
        return <ResumeSection data={user.resume} />;
      case 'Post':
        return <PostsSection data={user.posts} stories={user.postStories} />;
      case 'Links':
        return <LinksSection data={user.links} />;
      default:
      return <LinksSection data={user.links} />;
    }
  };

  return (
    <div>
      <Header data={user.header} />
      <StorySlider stories={user.navBarStorySlider} mode="diapositivas" />  
      {/*  */}
      <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}
