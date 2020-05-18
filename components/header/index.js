import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { useAuth } from '../../context/auth-context';

const HeaderContainer = styled.header`
  border-bottom: 1px solid grey;
`;

const useStyles = makeStyles(() => ({
  toolbarTitle: {
    flex: 1,
  },
}));

const SignIn = ({ signIn }) => (
  <div>
    <Button variant="outlined" size="small" onClick={signIn}>
      Sign in
    </Button>
  </div>
)

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const UserInfo = ({ name, iconSrc, signOut }) => {
  const [anchor, setAnchor] = React.useState(null);

  const showUserMenu = (e) => {
    setAnchor(e.currentTarget);
  }

  const onSignOut = () => {
    signOut();
  }

  return (
    <>
      <UserInfoContainer aria-controls="simple-menu" aria-haspopup="true" onClick={showUserMenu}>
          <Avatar alt={name} src={iconSrc} />&nbsp;{name}
      </UserInfoContainer>

      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
      >
        <MenuItem onClick={signOut}>Sign out</MenuItem>
      </Menu>
    </>
  );
}

const Header = () => {
  const { authState, signIn, signOut } = useAuth();

  return (
    <HeaderContainer>
      <Container>
        <Toolbar>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
          >
            Medici
          </Typography>
          {authState.authenticated
            ? <UserInfo name={authState.data.userData.name} iconSrc='borked.png' signOut={signOut} />
            : <SignIn signIn={signIn} />
          }
        </Toolbar>
      </Container>
    </HeaderContainer>
  );

}

export default Header