import MessageCardContent from "@/app/_components/dashboard/message-card-content";
import StockChart from "@/app/dashboard/[guildId]/my-stats/stock-chart";
import { Card, Col, Grid, Text, Title } from "@tremor/react";
import { type GuildDashboardLayoutProps } from "../types";

export default function MyStats({ params }: GuildDashboardLayoutProps) {
  return (
    <Grid className="gap-4" numItemsMd={3} numItems={1}>
      <Col numColSpanMd={3} numColSpan={1}>
        <Card>
          <Title>Stock Price</Title>
          <StockChart />
        </Card>
      </Col>
      <Col numColSpanMd={1} numColSpan={1}>
        <Card className="h-full">
          <Title className="mb-2">Coming soon...</Title>
          <Text>Coming soon...</Text>
        </Card>
      </Col>
      <Col numColSpanMd={2} numColSpan={1}>
        <Card className="h-full">
          <MessageCardContent
            title={<Title>Top Messages (past week)</Title>}
            own={true}
            guildId={params.guildId}
          />
        </Card>
      </Col>
    </Grid>
  );
}
