import { InputField } from "@Components/Common";
import { search } from "@public/assets/icon";

export const SearchBox = () => {
  const handleOnChange = () => {};
  return (
    <div>
      <InputField handleOnChange={handleOnChange} icon={search} />
    </div>
  );
};
