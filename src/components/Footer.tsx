const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="text-gradient font-semibold">Core Tech Solutions</span>
          . جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
