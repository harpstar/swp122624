import React from 'react';
import {Button} from "reactstrap";

const PathwaysSection = () => {
  return (
    <>
      <div style={{textAlign: 'center', marginTop: '50px'}}><h2 id="pathways2">Career Pathways go here, work in progress!</h2></div>
      <main style={{display: 'flex', justifyContent: 'space-around', width: '50%', margin: '0 auto'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 1
          </Button>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            tag='button'
            block
            // onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 2
          </Button>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 3
          </Button>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 4
          </Button>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 1
          </Button>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 2
          </Button>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 3
          </Button>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 1
          </Button>
          <Button
            // className="btn-neutral btn-round"
            color="info"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
            size="lg"
            outline={false}
          >
            Pathway 2
          </Button>
        </div>
      </main>
    </>
  )
}

export default PathwaysSection;
