import Link from "next/link";
import {
  CardContent,
  Typography,
  Grid,
  Rating,
} from "@mui/material";
import { Stack } from "@mui/system";
import BlankCard from "@/app/(DashboardLayout)/components/shared/BlankCard";
import Image from "next/image";

const ecoCard = [
  {
    title: "Tree Planting Initiative",
    subheader: "October 2024 - Kenya",
    photo: '/images/backgrounds/t.jpg',  // Replace with actual image
    description: "Help plant trees to combat deforestation in Kenya.",
    progress: 75,  // percentage progress
    rating: 4,
  },
  {
    title: "Plastic Recycling Drive",
    subheader: "November 2024 - Brazil",
    photo: '/images/backgrounds/r.webp',  // Replace with actual image
    description: "Collecting plastics for recycling and repurposing.",
    progress: 50,  // percentage progress
    rating: 5,
  },
  {
    title: "Ocean Cleanup Mission",
    subheader: "December 2024 - India",
    photo: '/images/backgrounds/w.jpg',  // Replace with actual image
    description: "Join us in cleaning the oceans from plastic waste.",
    progress: 30,  // percentage progress
    rating: 3,
  },
  {
    title: "Recycling Movements",
    subheader: "January 2025 - Australia",
    photo: '/images/backgrounds/re.jpg',  // Replace with actual image
    description: "Support street recycling programs to reduce urban waste and promote recycling.",
    progress: 20,  // percentage progress
    rating: 2,
  }
  
];

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((project, index) => (
        <Grid item xs={12} md={4} lg={3} key={index}>
          <BlankCard>
            <Typography component={Link} href="/">
              <Image
                src={project.photo} 
                alt={project.title}
                layout="responsive"
                width={1000}
                height={750}
                style={{ objectFit: "cover" }}
              />
            </Typography>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                {project.subheader}
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt={1}
              >
                <Typography variant="body2">{project.description}</Typography>
                <Rating
                  name="read-only"
                  size="small"
                  value={project.rating}
                  readOnly
                />
              </Stack>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                <Typography variant="h6">Progress: {project.progress}%</Typography>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
