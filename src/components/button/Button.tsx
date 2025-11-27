import "../../app/globals.css";

interface ButtonProps {
  label: string;
  variant: "solid" | "outline";
}

const Button = ({ label, variant }: ButtonProps) => {
  return (
    <div>
      <button
        className={`px-[30px] py-[9px] rounded-xl font-normal text-2xl ${variant === "solid" ? "bg-primary text-white" : "bg-transparent text-primary border border-primary"}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
