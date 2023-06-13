import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Slide } from "react-awesome-reveal";
import ModalImage from 'react-modal-image';
import LazyLoadWrapper from '../components/LazyLoadWrapper';
import SO1 from '../assets/images/searchOnce.png';
import SO1_small from '../assets/images/searchOnce_small.png';
import VG1 from '../assets/images/vanGogh.png';
import VG1_small from '../assets/images/vanGogh_small.png';

export default function Projects() {
    return (
      <>
      <section id="projects" className="two">
        <div className="container">

          <header>
            <Slide delay={1000} duration={2000} triggerOnce={true}>
            <h2>Projects</h2>
            </Slide>
          </header>

          <p>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
          egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
          Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
          fusce hendrerit lacus ridiculus.</p>

          <Tabs isFitted variant='unstyled' align='center'>
            <TabList>
              <Tab _selected={{ color: 'white', bg: 'purple.300' }} color='gray.500' as='span' _hover={{color: 'gray.900', cursor: 'pointer'}}>SearchOnce</Tab>
              <Tab _selected={{ color: 'white', bg: 'purple.300' }} color='gray.500' as='span' _hover={{color: 'gray.900', cursor: 'pointer'}}>Van Gogh's Gallery</Tab>
              <Tab _selected={{ color: 'white', bg: 'purple.300' }} color='gray.500' as='span' _hover={{color: 'gray.900', cursor: 'pointer'}}>Portfolio website</Tab>
            </TabList>

            <TabPanels>

              <TabPanel>
                <p>Search<span style={{color: 'darkorange'}}>O</span>nce is a group project that uses APIs of 3 dictionaries to gather word definitions in one place.</p>
                <LazyLoadWrapper>
                <ModalImage
                  small={SO1_small}
                  large={SO1}
                  alt="SearchOnce allows users to search for word definitions in 3 dictionaries."
                  hideDownload={true}
                  hideZoom={true}
                />
                </LazyLoadWrapper>
                <p>Used: HTML, CSS, JavaScript, Bootstrap, Merriam-Webster Dictionary API, Wiktionary API, Urban Dictionary API</p>
                <p>Deployed at <a href='https://nlp-ug-2021-22.github.io/KreatywniInaczej-Project/'>GitHub</a>.</p>
              </TabPanel>

              <TabPanel>
                <p>VanGogh's Gallery is a website dedicated to the famous Dutch painter - Vincent Van Gogh.</p>
                <LazyLoadWrapper>
                <ModalImage
                  small={VG1_small}
                  large={VG1}
                  alt="VanGogh's Gallery presents the life and work of the famous Dutch painter Vincent Van Gogh."
                  hideDownload={true}
                  hideZoom={true}
                />
                </LazyLoadWrapper>
                <p>Used: HTML, CSS, JavaScript</p>
                <p>Deployed at <a href='https://majagrys.github.io/Web-Development-Project/'>GitHub</a>.</p>
              </TabPanel>

              <TabPanel>
                <p>three!</p>
              </TabPanel>

            </TabPanels>
          </Tabs>
        </div>
      </section>
      </>

            
    )
}