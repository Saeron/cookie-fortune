type MessageProps = {
  message?: string;
  loading?: boolean;
};

export function Message(props: MessageProps) {
  return (
    <output class="bg-white p-4 mt-6 rounded-md min-w-[300px] min-h-[50px] text-center max-w-[500px] mx-4">
      {props.loading
        ? "Craking cookie ..."
        : props.message != "" && props.message != null
        ? props.message
        : "Crack a cookie!"}
    </output>
  );
}
