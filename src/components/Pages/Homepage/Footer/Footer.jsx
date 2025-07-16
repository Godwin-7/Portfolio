import './Footer.css'
import reactIcon from './svg/react-icon.svg'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const currentDateTime = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://vinayaksingh.in" className="logo">
          <span>www.Godwin</span>
          <span>A.in</span>
        </a>
        <div className="made-with">
          <p>
            This Website was made with <img src={reactIcon} alt="React" />
          </p>
        </div>
        <div className="copyright-info">
          <p className="copyright">&copy; {currentYear} Godwin A. All rights reserved.</p>
          <p className="datetime">{currentDateTime}</p>
        </div>
      </div>
    </footer>
  )
}