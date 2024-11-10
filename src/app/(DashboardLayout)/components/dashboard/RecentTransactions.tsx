import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { Link, Typography } from '@mui/material';

const RecentTransactions = () => {
  return (
    <DashboardCard title="Recent Global Environmental Initiatives">
      <Timeline
        className="theme-timeline"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        sx={{
          p: 0,
          mb: '-40px',
          '& .MuiTimelineConnector-root': {
            width: '1px',
            backgroundColor: '#efefef'
          },
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.5,
            paddingLeft: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent>09:30 am (Kenya)</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Payment received from local recycling initiative, $385.90 for plastic bottles collected
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 am (Brazil)</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="secondary" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography fontWeight="600">New tree planting campaign launched</Typography>{' '}
            <Link href="/" underline="none">
              #BP-2024
            </Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>12:00 am (India)</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Payment of $64.95 received for the sale of collected plastic bags</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>09:30 am (Australia)</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="warning" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography fontWeight="600">New plastic recycling center established</Typography>{' '}
            <Link href="/" underline="none">
              #AU-1234
            </Link>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>09:30 am (USA)</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="error" variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography fontWeight="600">New waste collection initiative started</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>12:00 am (Germany)</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="success" variant="outlined" />
          </TimelineSeparator>
          <TimelineContent>Payment received for recycled materials</TimelineContent>
        </TimelineItem>
      </Timeline>
    </DashboardCard>
  );
};

export default RecentTransactions;
