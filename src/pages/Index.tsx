import Header from "@/components/Header";
import ReservationForm from "@/components/ReservationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-6 text-center">
          <p className="text-muted-foreground">
            Please fill out the form below to reserve barangay facilities and equipment
          </p>
        </div>
        <ReservationForm />
      </main>
      <footer className="bg-card border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Barangay West Rembo. All rights reserved.</p>
          <p className="mt-1">For inquiries, please contact the Barangay Office</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
