import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons-react';

import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';

const YearlyBreakup = () => {
  // Chart colors
  const theme = useTheme();
  const primary = "#5f6344"; // Updated color for the donut chart
  const primarylight = '#ecf2ff';
  const successlight = theme.palette.success.light;

  // Chart configuration
  const options: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };

  // Estimated values for funds collected and impact achieved
  const estimatedFunds = "18,500 TND"; // Example estimation
  const growthPercentage = "+15%"; // Growth over last year
  const series = [45, 35, 20]; // Example values for 2022, 2023, and projected impact
  
  return (
    <DashboardCard title="Yearly Impact Overview">
      <Grid container spacing={3}>
        {/* Information column */}
        <Grid item xs={7} sm={7}>
          <Typography variant="h3" fontWeight="700">
            {estimatedFunds}
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUpLeft width={20} color="#39B69A" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              {growthPercentage}
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              estimated growth from last year
            </Typography>
          </Stack>
        </Grid>
        
        {/* Chart column */}
        <Grid item xs={5} sm={5}>
          <Chart
            options={options}
            series={series}
            type="donut"
            height={150}
            width="100%"
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};

export default YearlyBreakup;
