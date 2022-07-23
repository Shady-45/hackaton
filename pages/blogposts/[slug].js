import React from "react";
import { useRouter } from "next/router";
//find the file corresponding to the slug
// populate them inside the page
const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1> Title of the page is {slug}</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
        totam voluptas perferendis saepe. Eaque numquam sunt corporis
        consectetur? Quasi voluptas tenetur reiciendis aliquam.
      </p>
    </div>
  );
};

export default Slug;
