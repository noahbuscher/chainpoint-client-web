import React, { Component } from 'react'
import classNames from 'classnames'
import SvgInline from 'react-inlinesvg'
import ns from 'utils/ns'

import Button from 'common/Button/Button'
import ButtonIcon from 'common/ButtonIcon/ButtonIcon'
import tickWhite from 'svg/tick-white.svg'
import notVerified from 'svg/not-verified.svg'
import { ProofAppContext } from 'ProofApp'

import './VerifyStatus.less'
import chpIcon from '../../svg/verify.svg'
import createIcon from '../../svg/create.svg'
import close from '../../svg/close.svg'
class VerifyStatus extends Component {
  getSuccessMessage() {
    return (
      <React.Fragment>
        This Chainpoint proof is anchored to the Bitcoin blockchain in{' '}
        <b>block 535700.</b>
      </React.Fragment>
    )
  }
  getErrorMessage() {
    return (
      <React.Fragment>
        <b>Error message:</b> could not find a merkle root with enough power for
        the flux capacitor.
      </React.Fragment>
    )
  }
  render() {
    const {
      visible,
      verifySuccess,
      analysing,
      inputting,
      filename,
      onAddAnotherVerify,
      isMobile
    } = this.props

    const className = classNames('verifyStatus', {
      'verifyStatus--visible': visible,
      'verifyStatus--analysing': analysing,
      'verifyStatus--inputting': inputting,
      'verifyStatus--success': verifySuccess,
      'verifyStatus--fail': !verifySuccess
    })

    return (
      <div className={ns(className)}>
        <div className={ns('verifyStatus-close')}>
          <button onClick={onAddAnotherVerify}>
            <SvgInline src={close} />
          </button>
        </div>
        <header className={ns('verifyStatus-header')}>
          <img
            src={verifySuccess ? chpIcon : close}
            alt="chainpoint icon"
            className={ns('verifyStatus-icon')}
          />
          <div className={ns('verifyStatus-details')}>
            <h3>
              {verifySuccess
                ? 'PROOF IS VERIFIED'
                : 'ERROR - PROOF NOT VERIFIED'}
            </h3>
            {verifySuccess ? (
              <div>
                <span>ID:</span> 5cf0a860-0f52-11e7-947d-7fde4e7ca024
              </div>
            ) : null}
            <p>
              {verifySuccess
                ? this.getSuccessMessage()
                : this.getErrorMessage()}
            </p>
          </div>
        </header>
        {verifySuccess ? (
          <footer className={ns('verifyStatus-footer')}>
            <img
              src={createIcon}
              alt="chainpoint icon"
              className={ns('verifyStatus-icon')}
            />
            <div className={ns('verifyStatus-details')}>
              <h4>
                <span>Original Data Verification </span>
                (Optional)
              </h4>
              <p>Verify your proof against a copy of the original data.</p>
              <p>
                Drag &amp; drop or <a>browse</a> your files.{' '}
              </p>
              <p>
                Your file will not be uploaded, just analyzed in the browser.
              </p>
            </div>
          </footer>
        ) : null}
      </div>
    )
  }
}

export default props => (
  <ProofAppContext.Consumer>
    {({ isMobile }) => <VerifyStatus {...props} isMobile={isMobile} />}
  </ProofAppContext.Consumer>
)
