import React from 'react'
import {Github , Linkedin} from 'lucide-react'

const Footer = () => {
  return (
<footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 place-items-center">
  
  <aside>
    <p>
      Navpaon nanakorn
    </p>
  </aside>
  <p>notnavapon.nnk@gmail.com</p>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <Github />
      </a>
      <a>
        <Linkedin />
      </a>
    </div>
  </nav>
</footer>
  )
}

export default Footer