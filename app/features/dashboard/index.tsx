import React, { Fragment } from "react";
import { AnalyticsOverviewContainer } from "./containers/AnalyticsOverviewContainer";
import { SimpleGrid } from "@chakra-ui/react";
import { GaugeChart } from "./components/GaugeChart";
import { MEDIA_POSTS } from "./data/mockData";
import { FollowerGrowthContainer } from "./containers/FollowerGrowthContainer";

const DashboardLayout = () => {
  return (
    <Fragment>
      <AnalyticsOverviewContainer />

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} mt={8}>
        <GaugeChart post={MEDIA_POSTS[0]} />
        <FollowerGrowthContainer />
      </SimpleGrid>
    </Fragment>
  );
};

export default DashboardLayout;
