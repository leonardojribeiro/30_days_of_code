import { Route, Switch } from "react-router";
import Day01 from "../days/day01";
import Day02 from "../days/day02";
import Day03 from "../days/day03";
import Day04 from "../days/day04";
import Home from "../Pages/home";

export default function Routes(): JSX.Element {
  return (
    <Switch >
      <Route path='/' exact component={Home} />
      <Route path='/day01' component={Day01} />
      <Route path='/day02' component={Day02} />
      <Route path='/day03' component={Day03} />
      <Route path='/day04' component={Day04} />
    </Switch>
  )
}
