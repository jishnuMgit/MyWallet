import "../../../global.css"
import { ScrollView, View } from "react-native";
import Header from "../../../components/DashboardHome/Header";
import SummaryGrid from "../../../components/DashboardHome/SummaryGrid";
import SpendingChart from "../../../components/DashboardHome/SpendingChart";
import RecentTransactions from "../../../components/DashboardHome/RecentTransactions";
import Assets from "../../../components/DashboardHome/assets";
export default function Home() {
  return (
    <ScrollView style={{ "height":"100%","backgroundColor":"#F8F8F8" }} className="pb-28" >
      <Header />
      <SummaryGrid/>
      <SpendingChart/>
      <RecentTransactions/>
      <Assets/>
    </ScrollView>
  );
}