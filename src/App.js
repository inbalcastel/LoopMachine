import './App.css';
import Board from './components/Board';

function App() {

  const audioNames = [{
    id:0,
    title:  "s3-us1"},
{
    id:1,
    title:   "s3-us2"
},
{
    id:2,
    title:   "src_assets_loops_1-GHS_123_Filo_Kick_Clap"
},
{
    id:3,
    title:   "src_assets_loops_3-GHS_123_Gm_Sun_Synth_Bass"

},
{
  id:4,
  title:   "src_assets_loops_5-hk_gtr125_pickcut_Gm"
},
{
  id:5,
  title:   "src_assets_loops_6-hk_syn125_holdme1_Gm"

},
{
  id:6,
  title:   "src_assets_loops_7-hk_top125_latint"

},
,
{
  id:7,
  title:   "src_assets_loops_8-hk_top125_zulu"

},
,
{
  id:8,
  title:   "src_assets_loops_9-hk_mus125_lovefunk2_Gm"

}
  ]



  return (
    <div className="App">
      <Board audioNames={audioNames}/>
    </div>
  );
}

export default App;
