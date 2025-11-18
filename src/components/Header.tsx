const Header = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground py-8 px-4 shadow-lg">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="w-16 h-16 bg-primary-foreground/10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-primary-foreground/20">
            <span className="text-2xl font-bold">BR</span>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              BARANGAY WEST REMBO
            </h1>
            <p className="text-sm md:text-base text-primary-foreground/90 mt-1">
              Republic of the Philippines
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-primary-foreground/20">
          <h2 className="text-xl md:text-2xl font-semibold">
            Reservation of Barangay Facilities & Equipment
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
