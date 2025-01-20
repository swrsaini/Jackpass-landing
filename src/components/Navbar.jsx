import DropdownButton from "./DropDownButton";
import { Button } from "./Button";
export function Navbar() {
  const cities = ["Delhi", "Gurgaon", "Noida"];
  const handleCitySelect = (city) => {
    console.log("Selected City:", city);
  };
  return (
    <div className="flex justify-between">
      <DropdownButton
        cities={cities}
        onSelect={handleCitySelect}
      ></DropdownButton>
      <div className="flex gap-5">
        <Button className={"transition-colors duration-300 hover:bg-blue-700"}>
          Sign In
        </Button>
        <Button className={"transition-colors duration-300 hover:bg-blue-700"}>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
