import AboutTheProjectPage from "../ui/about_the_project_page";
import Footer from "../ui/footer";
import TourEntry from "../ui/tour_entry";

export default function AboutTheProject() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50 dark:bg-slate-900">
      <AboutTheProjectPage />
      <Footer />
      <TourEntry page={0} />
    </main>
  );
}
