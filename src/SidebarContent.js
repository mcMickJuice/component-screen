import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ComponentHistory from './ComponentHistory'

const SidebarContent = () => {
  return (
    <Switch>
      <Route path="/:route">
        {() => {
          return (
            <div
              style={{
                border: '1px solid black',
                width: '100%'
              }}
            >
              <Switch>
                <Route path="/edit">{() => <div>Edit Screen</div>}</Route>
                <Route path="/history" component={ComponentHistory} />
                <Route path="/feedback">
                  {() => <div>Feedback Screen</div>}
                </Route>
                <Route path="/people">{() => <div>Peopl Screen</div>}</Route>
              </Switch>
            </div>
          )
        }}
      </Route>
    </Switch>
  )
}

export default SidebarContent
