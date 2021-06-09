import React, { useState } from 'react'
import LanguageSelect from './LanguageSelect'
import logo from '../assets/logo2.png'
import CustomButton from './custom/CustomButton'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'

const LandingHeader = ({ inverted }) => {
  const [open, setOpen] = useState(false)
  const isSmall = useMediaQuery('(max-width:620px)')

  return (
    <div
      data-cy='header'
      className={inverted ? 'questionnaire-header' : 'landing-page-header'}>
      <img src={logo} alt='logo' className='logo' data-cy='flex-coast' />
      {isSmall ? (
        <div className='dropdown-menu'>
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon fontSize='large' />
          </IconButton>
          <Drawer
            className='dropdown-container'
            anchor='top'
            open={open}
            onClose={() => setOpen(false)}>
            <>
              <CustomButton dataCy='phone-number'>
                <a href='tel:+46812345678'>08-123 456 78</a>
              </CustomButton>
              <LanguageSelect />
            </>
          </Drawer>
        </div>
      ) : (
        <div className='menu-wrapper'>
          <CustomButton dataCy='phone-number'>
            <a href='tel:+46812345678'>08-123 456 78</a>
          </CustomButton>
          <LanguageSelect />
        </div>
      )}
    </div>
  )
}

export default LandingHeader
