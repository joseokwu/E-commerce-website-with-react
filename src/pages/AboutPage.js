import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='desk' />
        <article>
          <div className='title'>
            <h2>Our Story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            placeat expedita ullam voluptatibus. Magni ipsa error deleniti.
            Assumenda porro nisi necessitatibus soluta deserunt quae ea, enim
            minus labore adipisci, excepturi beatae aperiam, animi magnam ipsum.
            Repellendus reprehenderit placeat quaerat aspernatur officia? Cum
            corrupti laudantium deleniti libero laboriosam rem mollitia
            necessitatibus illo possimus, delectus ipsum aperiam impedit eum
            recusandae! Voluptates, atque non. Quaerat, distinctio harum. In
            blanditiis veniam voluptas harum consectetur excepturi placeat sed
            odit adipisci repellat alias ab necessitatibus molestias dolore
            aperiam quis voluptatem quia id sequi, consequuntur obcaecati! Amet
            fugit ducimus omnis ipsam eaque cumque facere, esse illum
            doloremque?
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
