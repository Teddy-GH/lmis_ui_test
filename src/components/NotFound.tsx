import { Result } from "antd";
export default function NotFound() {
  return (
    <div className="flex dark:bg-gray-700 dark:text-white w-full h-full items-center justify-center">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
    </div>
  );
}