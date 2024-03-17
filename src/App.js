
import './assert/style/wait-room.css'
import WaitRoomTop from './components/wait-room/wait-room-top';
import WaitRoomCenter from './components/wait-room/wait-room-center';
import WaitRoomBottom from './components/wait-room/wait-room-bottom';

function App() {
  return (
    <div className="container">
      <WaitRoomTop/>
      <WaitRoomCenter/>
      <WaitRoomBottom/>
    </div>
  );
}

export default App;
