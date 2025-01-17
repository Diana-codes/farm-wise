import PropTypes from 'prop-types';
// material-ui
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// project-imports
import MainCard from 'components/MainCard';
import ComponentHeader from 'components/cards/ComponentHeader';
import ComponentWrapper from 'sections/components-overview/ComponentWrapper';

function ColorBox({ bgcolor, title, data, dark, main }) {
  return (
    <Card sx={{ '&.MuiPaper-root': { borderRadius: '0px' } }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2.5,
          bgcolor,
          color: dark ? 'secondary.700' : '#ffffff',
          border: main ? '1px dashed' : '1px solid transparent'
        }}
      >
        {title && (
          <Grid container justifyContent="space-around" alignItems="center">
            <Grid item>
              {data && (
                <Stack spacing={0.75} alignItems="center">
                  <Typography variant="subtitle2">{data.label}</Typography>
                  <Typography variant="subtitle1">{data.color}</Typography>
                </Stack>
              )}
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" color="inherit">
                {title}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Box>
    </Card>
  );
}

// ===============================|| COMPONENTS - COLOR ||=============================== //

export default function ComponentColor() {
  return (
    <>
      <ComponentHeader
        title="Color"
        caption="Convey meaning through color. Out of the box you get access to all colors in the Material Design guidelines."
        directory="src/pages/components-overview/color"
      />
      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <MainCard title="Primary Color">
              <Stack>
                <ColorBox bgcolor="primary.lighter" data={{ label: 'Blue-1', color: 'primary.lighter' }} title="primary.lighter" dark />
                <ColorBox bgcolor="primary.100" data={{ label: 'Blue-2', color: 'primary.100' }} title="primary[100]" dark />
                <ColorBox bgcolor="primary.200" data={{ label: 'Blue-3', color: 'primary.200' }} title="primary[200]" dark />
                <ColorBox bgcolor="primary.light" data={{ label: 'Blue-4', color: 'primary.light' }} title="primary.light" dark />
                <ColorBox bgcolor="primary.400" data={{ label: 'Blue-5', color: 'primary.400' }} title="primary[400]" />
                <ColorBox bgcolor="primary.main" data={{ label: 'Blue-6', color: 'primary.main' }} title="primary.main" main />
                <ColorBox bgcolor="primary.dark" data={{ label: 'Blue-7', color: 'primary.dark' }} title="primary.dark" />
                <ColorBox bgcolor="primary.700" data={{ label: 'Blue-8', color: 'primary.700' }} title="primary[700]" />
                <ColorBox bgcolor="primary.darker" data={{ label: 'Blue-9', color: 'primary.darker' }} title="primary.darker" />
                <ColorBox bgcolor="primary.900" data={{ label: 'Blue-10', color: 'primary.900' }} title="primary.900" />
              </Stack>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MainCard title="Secondary Color">
              <Stack>
                <ColorBox
                  bgcolor="secondary.lighter"
                  data={{ label: 'Grey-1', color: 'secondary.lighter' }}
                  title="secondary.lighter"
                  dark
                />
                <ColorBox bgcolor="secondary.100" data={{ label: 'Grey-2', color: 'secondary.100' }} title="secondary[100]" dark />
                <ColorBox bgcolor="secondary.200" data={{ label: 'Grey-3', color: 'secondary.200' }} title="secondary[200]" dark />
                <ColorBox bgcolor="secondary.light" data={{ label: 'Grey-4', color: 'secondary.light' }} title="secondary.light" dark />
                <ColorBox bgcolor="secondary.400" data={{ label: 'Grey-5', color: 'secondary.400' }} title="secondary[400]" />
                <ColorBox bgcolor="secondary.500" data={{ label: 'Grey-6', color: 'secondary.500' }} title="secondary.500" main />
                <ColorBox bgcolor="secondary.main" data={{ label: 'Grey-7', color: 'secondary.main' }} title="secondary.main" />
                <ColorBox bgcolor="secondary.dark" data={{ label: 'Grey-8', color: 'secondary.dark' }} title="secondary.dark" />
                <ColorBox bgcolor="secondary.800" data={{ label: 'Grey-9', color: 'secondary.800' }} title="secondary.800" />
                <ColorBox bgcolor="secondary.darker" data={{ label: 'Grey-10', color: 'secondary.darker' }} title="secondary.darker" />
              </Stack>
            </MainCard>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <MainCard title="Success Color">
              <Stack>
                <ColorBox bgcolor="success.lighter" data={{ label: 'Green-1', color: 'success.lighter' }} title="success.lighter" dark />
                <ColorBox bgcolor="success.light" data={{ label: 'Green-4', color: 'success.light' }} title="success.light" dark />
                <ColorBox bgcolor="success.main" data={{ label: 'Green-6', color: 'success.main' }} title="success.main" main />
                <ColorBox bgcolor="success.dark" data={{ label: 'Green-8', color: 'success.dark' }} title="success.dark" />
                <ColorBox bgcolor="success.darker" data={{ label: 'Green-10', color: 'success.darker' }} title="success.darker" />
              </Stack>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MainCard title="Error Color">
              <Stack>
                <ColorBox bgcolor="error.lighter" data={{ label: 'Red-1', color: 'error.lighter' }} title="error.lighter" dark />
                <ColorBox bgcolor="error.light" data={{ label: 'Red-4', color: 'error.light' }} title="error.light" dark />
                <ColorBox bgcolor="error.main" data={{ label: 'Red-6', color: 'error.main' }} title="error.main" main />
                <ColorBox bgcolor="error.dark" data={{ label: 'Red-8', color: 'error.dark' }} title="error.dark" />
                <ColorBox bgcolor="error.darker" data={{ label: 'Red-10', color: 'error.darker' }} title="error.darker" />
              </Stack>
            </MainCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <MainCard title="Warning Color">
              <Stack>
                <ColorBox bgcolor="warning.lighter" data={{ label: 'Gold-1', color: 'warning.lighter' }} title="warning.lighter" dark />
                <ColorBox bgcolor="warning.light" data={{ label: 'Gold-4', color: 'warning.light' }} title="warning.light" dark />
                <ColorBox bgcolor="warning.main" data={{ label: 'Gold-6', color: 'warning.main' }} title="warning.main" main />
                <ColorBox bgcolor="warning.dark" data={{ label: 'Gold-8', color: 'warning.dark' }} title="warning.dark" />
                <ColorBox bgcolor="warning.darker" data={{ label: 'Gold-10', color: 'warning.darker' }} title="warning.darker" />
              </Stack>
            </MainCard>
          </Grid>
        </Grid>
      </ComponentWrapper>
    </>
  );
}

ColorBox.propTypes = {
  bgcolor: PropTypes.string,
  title: PropTypes.string,
  data: PropTypes.object,
  dark: PropTypes.bool,
  main: PropTypes.bool
};
