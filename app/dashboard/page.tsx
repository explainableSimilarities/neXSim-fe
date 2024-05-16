import DashboardPageContainer from '../ui/dashboard_page_container';
import Footer from '../ui/footer';
import TourEntry from '../ui/tour_entry';
export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50 dark:bg-slate-900">
      <DashboardPageContainer/>
      <Footer/>
      <TourEntry page={1}/>
    </main>
  );
}
