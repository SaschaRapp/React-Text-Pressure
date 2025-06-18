import TextPressure from "./TextPressure";

export default function App() {
  return (
    <div className="h-screen w-screen bg-transparent flex items-center justify-center">
      <TextPressure
        text="Sascha Rapp"
        stroke={false}
        strokeColor="#FF0000"
        textColor="#FFE700"
        flex={false}
      />
    </div>
  );
}
