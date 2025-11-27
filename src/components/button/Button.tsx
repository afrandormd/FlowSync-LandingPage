import "../../app/globals.css";

interface ButtonProps {
  label: string;
  variant: "solid" | "outline" | "text";
}

const Button = ({ label, variant }: ButtonProps) => {
  const variantStyling = () => {
    switch (variant) {
      case "solid":
        return "bg-primary text-white hover:bg-primary-hover cursor-pointer transition-colors duration-300";
      case "outline":
        return "bg-transparent text-primary border border-primary cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300";
      case "text":
        return "bg-transparent text-primary cursor-pointer hover:text-primary-hover transition-colors duration-300";
      default:
        return "";
    }
  };

  return (
    <div>
      <button
        className={`px-[30px] py-[9px] rounded-xl font-normal text-2xl ${variantStyling()}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
