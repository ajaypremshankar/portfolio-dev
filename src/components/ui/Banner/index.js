import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import SocialMediaButtons from 'react-social-media-buttons';

import * as Styled from './styles';
import Button from '../Button';

const Banner = ({ title, subtitle, content, linkTo, linkText }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>
        Hello Visitor,<br />
    I'm passionate engineering professional with strong developer ethics. <br />
Apart from engineering, my passion is to help students and early stage professionals grow in their career. My expertise lies in:<br /><br />
        <Styled.ListContent>
          <ul style={{ listStyleType: "square" }}>
            <li>Helping you identify your potential at work</li>
            <li>Brainstorming your career growth and trajectory</li>
            <li>Help you plan consistent growth without creating imbalance.</li>
            <li>Prepare and and help navigate you in day-to-day work.</li>
            <li>Help you see what you can become next.</li>
          </ul></Styled.ListContent>
      </Styled.Content>
      <Link to='/calendly'>
        <Button>Book my calendar</Button>
        </Link>

      <SocialMediaButtons
        links={[
          'https://www.linkedin.com/in/ajaypremshankar/',
          'https://github.com/ajaypremshankar',
          'https://www.instagram.com/aj.prem/']}
        buttonStyle={{ margin: '0px 10px', backgroundColor: '#ffffff', borderRadius: '50%', border: '1px groove #3c366b' }}
        iconStyle={{ color: '#ed64a6' }}
        openNewTab={true} />

    </Container>
  </Styled.Banner>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default Banner;
