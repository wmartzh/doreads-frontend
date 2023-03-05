import '../styles/sidebarLinks.css';
import './SideBar.jsx';
import Link from '@mui/material/Link';
import { Avatar } from '@mui/material';

function SidebarLink({ text, img1, href }) {
  return (
    <div className="link">
      <Avatar className="icon1" variant="square" src={img1} />
      <h1>
        <Link className="link" underline="none" color="#394C73" href={href}>
          {text}
        </Link>
      </h1>
    </div>
  );
}

export default SidebarLink;
