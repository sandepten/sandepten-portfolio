import type { NextComponentType, NextPageContext } from "next";

interface Props {}

const Address: NextComponentType<NextPageContext, {}, Props> = (
  props: Props
) => {
  return (
    <div>
      <div className="mt-32 bg-black p-4 text-sm text-white lg:mt-0 lg:py-8">
        <div className="text-center">
          <h3>Sandeep Kumar</h3>
          <p>Kamla Nagar, New Delhi, Delhi</p>
          <p>PIN: 110007</p>
          <p>
            <span className="text-purple-400">@: </span>sandepten@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Address;
