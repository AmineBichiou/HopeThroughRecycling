'use client'
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';
import YearlyBreakup from '@/app/(DashboardLayout)/components/dashboard/YearlyBreakup';
import RecentTransactions from '@/app/(DashboardLayout)/components/dashboard/RecentTransactions';
import ProductPerformance from '@/app/(DashboardLayout)/components/dashboard/ProductPerformance';
import Blog from '@/app/(DashboardLayout)/components/dashboard/Blog';
import MonthlyEarnings from '@/app/(DashboardLayout)/components/dashboard/MonthlyEarnings';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box textAlign="center" mt={4}>
        <Typography
          variant="h1"
          sx={{ fontSize: 50, lineHeight: '60px', fontWeight: 500, color: 'rgb(187, 160, 91)' }}
        >
          HopeThroughRecycling
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ fontSize: 30, lineHeight: '45px', fontWeight: 500, mt: 2 }}
        >
          Join us in collecting water bottles to fund tree planting initiatives for a greener future.
        </Typography>
      </Box>

      <Grid container spacing={3} mt={4}>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" sx={{ fontSize: 30, lineHeight: '45px', fontWeight: 500, mt: 2 }}>
      We Believe in a Greener Tomorrow
    </Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      Our mission is to make a real impact on the environment by promoting recycling and sustainability. Join us in making a difference and help us plant more trees to create a healthier planet.
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Image
      src="/images/backgrounds/gg.jpg"  // Replace with actual image URL
      alt="Tree Planting"
      width={600}
      height={400}
      style={{ width: '100%', height: 'auto' }}
    />
  </Grid>
</Grid>

{/* Second Section with Text Right and Image Left */}
<Grid container spacing={3} mt={4}>
  <Grid item xs={12} md={6}>
    <Image
      src="/images/backgrounds/pp.jpg"  // Replace with actual image URL
      alt="Recycling"
      width={600}
      height={400}
      style={{ width: '100%', height: 'auto' }}
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" sx={{ fontSize: 30, lineHeight: '45px', fontWeight: 500, mt: 2 }}>
      Join the Recycling Movement
    </Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      Recycling is one of the most effective ways to preserve our planet&apos;s resources. By working together, we can keep our streets clean and reduce waste, benefiting the environment and future generations.
    </Typography>
  </Grid>
</Grid>

{/* Third Section with Text Left and Image Right */}
<Grid container spacing={3} mt={4}>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" sx={{ fontSize: 30, lineHeight: '45px', fontWeight: 500, mt: 2 }}>
      Raise Awareness
    </Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      Recycling is a critical part of reducing waste and conserving natural resources. By raising awareness about the importance of recycling, we can encourage individuals and communities to take action and make a positive impact on the environment. Let&apos;s work together to create a cleaner, greener world through the power of recycling!
    </Typography>
  </Grid>
  <Grid item xs={12} md={6}>
    <Image
      src="/images/backgrounds/recy.jpg"  // Replace with actual image URL
      alt="Recycling Awareness"
      width={600}
      height={400}
      style={{ width: '100%', height: 'auto' }}
    />
  </Grid>
</Grid>

{/* Fourth Section with Text Right and Image Left */}
<Grid container spacing={3} mt={4}>
  <Grid item xs={12} md={6}>
    <Image
      src="/images/backgrounds/b.jpg"  // Replace with actual image URL
      alt="Ocean Cleanup"
      width={600}
      height={400}
      style={{ width: '100%', height: 'auto' }}
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <Typography variant="h4" sx={{ fontSize: 30, lineHeight: '45px', fontWeight: 500, mt: 2 }}>
      Save Our Oceans
    </Typography>
    <Typography variant="body1" sx={{ mt: 2 }}>
      Our oceans are being polluted at an alarming rate. By supporting ocean cleanup efforts, we can protect marine life and preserve one of the most vital ecosystems on Earth.
    </Typography>
  </Grid>
</Grid>

      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} lg={2}>
          </Grid>
          <Grid item xs={12} lg={8} sx={{ display: 'flex', justifyContent: 'center' }}>
            <RecentTransactions />
          </Grid>

          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default Dashboard;
