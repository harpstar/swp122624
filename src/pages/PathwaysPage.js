import React from 'react';
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";
import Carousel from '../components/Carousel';
import {Card, CardBody, CardFooter, CardHeader, CardImg, CardTitle, Button} from "reactstrap";
import {Link} from 'react-router-dom';
const PathwaysPage = () => {
  return (
    <>
      <ExamplesNavbar coloredNav />
      {/*<div className="pathways-page__carousel-container">*/}
      {/*  <Carousel />*/}
      {/*</div>*/}

      <h1 className='title' style={{textAlign:"center", marginTop: '8rem', marginBottom: '5rem'}}>Sustainable Career Pathways</h1>

      <div className='pathways-page__cards-container'>
        <Card className='pathways-page__card'>
          <CardImg center width="80%" src={require('../assets/img/pathways/environmental-engineering/1.png')} alt="Environmental Engineering pathway" className="pathways-page__img" />
          <CardBody className='pathways-page__card--body'>
            <CardTitle>
              <h4>Environmental Engineering</h4>
            </CardTitle>
            <Button color="info" className="pathways-page__card--button" to="/pathway/environmental-engineering" tag={Link}>Learn More</Button>
          </CardBody>
        </Card>

        <Card className='pathways-page__card'>
          <CardImg center src={require('../assets/img/pathways/clean-water/1.jpeg')} alt="clean water pathway" className="pathways-page__img" />
          <CardBody className='pathways-page__card--body'>
            <CardTitle>
              <h4>Clean Water</h4>
            </CardTitle>
            <Button color="info" className="pathways-page__card--button" to="/pathway/clean-water" tag={Link}>Learn More</Button>
          </CardBody>
        </Card>

        <Card className='pathways-page__card'>
          <CardImg center width="80%" src={require('../assets/img/pathways/green-building/1.jpeg')} alt="Green Building pathway" className="pathways-page__img" />
          <CardBody className='pathways-page__card--body'>
            <CardTitle>
              <h4>Green Building</h4>
            </CardTitle>
            <Button color="info" className="pathways-page__card--button" to="/pathway/green-building" tag={Link}>Learn More</Button>
          </CardBody>
        </Card>

        <Card className='pathways-page__card'>
          <CardImg center width="80%" src={require('../assets/img/pathways/marine-biology/3.jpeg')} alt="Marine Biology pathway" className="pathways-page__img" />
          <CardBody className='pathways-page__card--body'>
            <CardTitle>
              <h4>Marine Biology</h4>
            </CardTitle>
            <Button color="info" className="pathways-page__card--button" to="/pathway/marine-biology" tag={Link}>Learn More</Button>
          </CardBody>
        </Card>

        <Card className='pathways-page__card'>
          {/*<CardImg center width="80%" src={require('../assets/img/pathways/clean-water/1.jpeg')} alt="other pathway" />*/}
          <CardBody className='pathways-page__card--body'>
            <CardTitle>
              <h4>Other Pathways</h4>
            </CardTitle>
            <Button color="info" className="pathways-page__card--button" href="https://sustainwdn.com/wp-content/uploads/2023/05/sustainable-career-pathways-green-entrepeneurs.pdf">Learn More</Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default PathwaysPage;
