import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'

const Media = () => {
    const isPhone = useMediaQuery({ maxWidth:600 })
    const isDesktop = useMediaQuery({ minWidth:601 })

    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
    const isTabletOrMobile = useMediaQuery({ minWidth: 1000, maxWidth: 1224 })
    const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isRetina = useMediaQuery({ minResolution: '2dppx' })

   
    return (
      <div>
        {isPhone &&
        <div style={{ backgroundColor:"red"}}>
          <p style={{ backgroundColor:"red"}}>
            폰입니다.
          </p>
        </div>
        }
        {isDesktop &&
        <div style={{ backgroundColor:"white"}}>
          <p style={{ backgroundColor:"white"}}>
            컴입니다.
          </p>
        </div>
        }
      </div>
    )
  }

export default Media;
