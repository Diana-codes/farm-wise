// material-ui
import Grid from '@mui/material/Grid';

// project-imports

// ==============================|| FORMS WIZARD ||============================== //

export default function FormsWizardPage() {
  return (
    <Grid container spacing={2.5} justifyContent="center">
      <Grid item xs={12} md={6} lg={7}>
        <BasicWizard />
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <ValidationWizard />
      </Grid>
    </Grid>
  );
}
