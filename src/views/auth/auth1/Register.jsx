'use client';

// next
import Link from 'next/link';
import Image from 'next/image';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project-imports
import Logo from 'components/logo';
import useUser from 'hooks/useUser';
import AuthSocButton from 'sections/auth/AuthSocButton';
import AuthDivider from 'sections/auth/AuthDivider';
import AuthWrapper from 'sections/auth/AuthWrapper';
import FirebaseRegister from 'sections/auth/auth-forms/AuthRegister';

// assets
const imgFacebook = '/assets/images/auth/facebook.svg';
const imgTwitter = '/assets/images/auth/twitter.svg';
const imgGoogle = '/assets/images/auth/google.svg';

// ================================|| REGISTER ||================================ //

export default function RegisterPage() {
  const user = useUser();

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Logo />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12}>
              <AuthSocButton>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Image src={imgFacebook} alt="Facebook" width={16} height={16} />
                  <Typography>Sign up with Facebook</Typography>
                </Stack>
              </AuthSocButton>
            </Grid>
            <Grid item xs={12}>
              <AuthSocButton>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Image src={imgTwitter} alt="Twitter" width={16} height={16} />
                  <Typography>Sign up with Twitter</Typography>
                </Stack>
              </AuthSocButton>
            </Grid> */}
            <Grid item xs={12}>
              <AuthSocButton>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Image src={imgGoogle} alt="Google" width={16} height={16} />
                  <Typography>Sign up with Google</Typography>
                </Stack>
              </AuthSocButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <AuthDivider>
            <Typography variant="body1">OR</Typography>
          </AuthDivider>
        </Grid>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Sign up</Typography>
            <Typography
              component={Link}
              href={user ? '/auth/login' : '/login'}
              variant="body1"
              sx={{ textDecoration: 'none' }}
              color="primary"
            >
              Already have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <FirebaseRegister />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
}
