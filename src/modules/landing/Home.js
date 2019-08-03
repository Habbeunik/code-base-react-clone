import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react';
import CoinValueTable from '../../components/table/coin-value';
import ServiceList from '../../components/list/services';
import PropTypes from 'prop-types';
import ReasonList from '../../components/list/reasons';
import StartProcessList from '../../components/list/get-started';
import GetStaredForm from '../../components/Form/get-started';
import Footer from '../../components/footer';

const dashboardImage = require('../../assets/images/coinbase-dashboard.jpg');

function SegmentHead(props) {
  const { subheading, heading, textColor, headingStyle } = props;
  return (
    <div>
      <Header
        as='h1'
        style={{ textAlign: 'center', color: textColor, ...headingStyle }}
      >
        {heading}
      </Header>
      <p
        style={{
          textAlign: 'center',
          margin: '20px 0px',
          color: textColor,
          opacity: 0.6,
          fontSize: '17px'
        }}
      >
        {subheading}
      </p>
    </div>
  );
}

SegmentHead.propTypes = {
  subheading: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  headingStyle: PropTypes.object
};

SegmentHead.defaultProps = {
  textColor: '#333',
  headingStyle: {}
};

function GetStartedSegment() {
  const textProps = {
    className: 'white-text',
    style: { fontSize: '40px !important', margin: '0px', lineHeight: '50px' }
  };
  return (
    <div className='getStarted-segment'>
      <Container>
        <Grid>
          <Grid.Column width={9}>
            <Header as='h1' {...textProps}>
              Ready to buy bitcoin?
            </Header>
            <Header as='p' {...textProps}>
              Get started with NGN 50 or less.
            </Header>
          </Grid.Column>
          <Grid.Column width={7}>
            <GetStaredForm />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

function Home() {
  return (
    <div>
      <div
        className='primary-background'
        style={{ paddingTop: '40px', paddingBottom: '200px' }}
      >
        <Container text>
          <Grid columns={1} stackable>
            <Grid.Column>
              <SegmentHead
                heading='Buy and sell cryptocurrency'
                subheading='Coinbase is the easiest place to buy, sell, and manage your
                cryptocurrency portfolio.'
                textColor='white'
                headingStyle={{ fontSize: '3.3rem !important' }}
              />
            </Grid.Column>
          </Grid>
          <Grid centered>
            <Grid.Column width={11}>
              <GetStaredForm />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
      <div style={{ borderBottom: '1px solid #f2f2f2' }}>
        <Container className='segmentContainer' style={{ paddingTop: '0' }}>
          <Grid columns={1}>
            <Grid.Column style={{ marginTop: '-175px' }}>
              <CoinValueTable />
            </Grid.Column>
          </Grid>
          <Grid.Row style={{ marginTop: '50px' }}>
            <Grid.Column>
              <SegmentHead
                heading='Create your cryptocurrency portfolio today'
                subheading='Coinbase has a variety of features that make it the best place to
              start trading'
                style={{ paddingBottom: '0', paddingTop: '100px' }}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid>
            <Grid.Row style={{ marginTop: '50px' }}>
              <Grid.Column width={6}>
                <ServiceList />
              </Grid.Column>
              <Grid.Column width={10}>
                <img
                  alt='coinbase-dashboard'
                  src={dashboardImage}
                  style={{ width: '100%' }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
      <Container className='segmentContainer'>
        <SegmentHead
          heading='The most trusted cryptocurrency platform'
          subheading='Here are a few reasons why you should choose Coinbase'
        />
        <ReasonList />
      </Container>
      <div className='primary-background' style={{ padding: '50px' }}>
        <Container>
          <Grid columns={3} centered>
            <Grid.Column style={{ textAlign: 'center' }}>
              <h1
                style={{
                  color: '#fff',
                  margin: '0 !important',
                  fontSize: '56px !important',
                  lineHeight: '78px'
                }}
              >
                $150B+
              </h1>
              <p style={{ color: '#fff', opacity: 0.6 }}>
                Cryptocurrency exchanged
              </p>
            </Grid.Column>
            <Grid.Column style={{ textAlign: 'center' }}>
              <h1
                style={{
                  color: '#fff',
                  margin: '0 !important',
                  fontSize: '56px !important',
                  lineHeight: '78px'
                }}
              >
                102
              </h1>
              <p style={{ color: '#fff', opacity: 0.6 }}>Countries supported</p>
            </Grid.Column>
            <Grid.Column style={{ textAlign: 'center' }}>
              <h1
                style={{
                  color: '#fff',
                  margin: '0 !important',
                  fontSize: '56px !important',
                  lineHeight: '78px'
                }}
              >
                30M+
              </h1>
              <p style={{ color: '#fff', opacity: 0.6 }}>Customers served</p>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
      <Container className='segmentContainer'>
        <SegmentHead
          heading='Get started in a few minutes'
          subheading='Coinbase supports a variety of the most popular digital currencies.
'
        />
        <StartProcessList />
      </Container>
      <GetStartedSegment />
      <Footer />
    </div>
  );
}

export default Home;
