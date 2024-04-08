import { IconAlertTriangle } from "@tabler/icons-react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
      <p className="mb-4 text-lg text-gray-600">
        Oops! Looks like you're lost.
      </p>
      <div className="animate-bounce">
        <IconAlertTriangle
          className="mx-auto h-16 w-16 text-red-500"
          stroke={2}
        />
      </div>
      <p className="mt-4 text-gray-600">
        Let's get you back{" "}
        <a href="/" className="text-blue-500">
          home
        </a>
        .
      </p>
    </div>
  );
};

export default PageNotFound;
