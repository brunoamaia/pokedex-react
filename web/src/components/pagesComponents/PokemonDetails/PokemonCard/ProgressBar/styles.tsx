import styled from 'styled-components'

export const ProgressBarStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;

  .manually {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    position: relative;
  }
  .progress-value {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height: 10px;
  }

  @media screen and (max-width: 400px) {
    width: 140px;
  }
  @media screen and (max-width: 350px) {
    width: 110px;
  }
  @media screen and (max-width: 300px) {
    width: 90px;
  }

  .bug.manually {
    background-color: #ade9ba;
    .progress-value {
      background-color: #3b9950;
    }
  }
  .dark.manually {
    background-color: #818181;
    .progress-value {
      background-color: #242726;
    }
  }
  .dragon.manually {
    background-color: #b0eaf1;
    .progress-value {
      background-color: #448b95;
    }
  }
  .electric.manually {
    background-color: #f3e4a6;
    .progress-value {
      background-color: #deb922;
    }
  }
  .fairy.manually {
    background-color: #f0b3d9;
    .progress-value {
      background-color: #c44e98;
    }
  }
  .fighting.manually {
    background-color: #f0c0b2;
    .progress-value {
      background-color: #994025;
    }
  }
  .fire.manually {
    background-color: #f3b487;
    .progress-value {
      background-color: #fd7d24;
    }
  }
  .flying.manually {
    background-color: #afd0e9;
    .progress-value {
      background-color: #4a677d;
    }
  }
  .ghost.manually {
    background-color: #a6a6df;
    .progress-value {
      background-color: #33336b;
    }
  }
  .grass.manually {
    background-color: #b0df95;
    .progress-value {
      background-color: #69bc3a;
    }
  }
  .ground.manually {
    background-color: #e6c59d;
    .progress-value {
      background-color: #a9702c;
    }
  }
  .ice.manually {
    background-color: #a0d8e9;
    .progress-value {
      background-color: #51c4e7;
    }
  }
  .normal.manually {
    background-color: #dadada;
    .progress-value {
      background-color: #a4acaf;
    }
  }
  .poison.manually {
    background-color: #f1ccfc;
    .progress-value {
      background-color: #b97fc9;
    }
  }
  .psychic.manually {
    background-color: #f8b3db;
    .progress-value {
      background-color: #f366b9;
    }
  }
  .rock.manually {
    background-color: #f5e9b2;
    .progress-value {
      background-color: #a38c21;
    }
  }
  .shadow.manually {
    background-color: #cdb0f3;
    .progress-value {
      background-color: #5113a3;
    }
  }
  .steel.manually {
    background-color: #dadada;
    .progress-value {
      background-color: #5e766d;
    }
  }
  .unknown.manually {
    background-color: #333333;
    .progress-value {
      background-color: #000000;
    }
  }
  .water.manually {
    background-color: #b6daf1;
    .progress-value {
      background-color: #4592c4;
    }
  }
`
