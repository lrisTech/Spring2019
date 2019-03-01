import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={"App"}>
        <h1>PCT Tech Team Spring 2019 Website</h1>
          <h4>Resources</h4>
          <ul>
              <li><a href={'https://github.com/ChiragAswani/PCT-Tech-Team-Spring-2019'}>Team Resources</a></li>
              <li><a href={'https://drive.google.com/drive/u/0/folders/0AN-dML6F20W8Uk9PVA'}>Google Drive</a></li>
              <li><a href={'https://github.com/ChiragAswani/WeatherWear'}>Project Repository</a></li>
          </ul>
          <h4>Interview Prep</h4>
          <ul>
              <li><a href={'https://www.icloud.com/iclouddrive/0_Vu4YtAcL5h2or_I1wfGH6LQ#Technical_Interview_Prep'}><strong>Download this</strong></a></li>
              <li><a href={'https://docs.google.com/spreadsheets/d/1qXRpoyjYsu7vRAEcyuFDql0GLh8DcCCQyZP83AF4a9M/edit?usp=drive_web&ouid=117691964584408091937'}>Chirag Company Contacts</a></li>
              <li><a href={'https://www.algoexpert.io/questions'}>Pre-paid Algorithm Practice</a></li>
              <ul>
                  <li>Username: <strong>pctzetatechteam@gmail.com</strong></li>
                  <li>Password (hashed): <strong>7ade741cf8d3d58d18142bd6938f87db</strong></li>
                  <ul>
                      <li>
                          Riddle find the hashing algorithm: <strong>I am a doctor who loves hashbrowns and high-fives</strong>
                      </li>
                  </ul>
              </ul>
          </ul>

          <h4>Team</h4>
          <ul>
              <li>Chirag Aswani</li>
              <li>Jason Cho</li>
              <li>Tyler Donati</li>
              <li>Jin-Young Bang</li>
              <li>Ji Weiqi</li>
              <li>Jennifer Roh</li>
              <li>Randy Richardson</li>
              <li>Justin Ching</li>
          </ul>
          <h4>Trello Board</h4>
          <blockquote className="trello-board-compact">
              <a href="https://trello.com/b/OojRjvjP/pct-tech-team-spring-2019">Trello Board</a>
          </blockquote>
          <h4>Upcoming Events</h4>
          <div className="fb-page" data-href="https://www.facebook.com/computersciencevents/" data-tabs="timeline"
               data-small-header="true" data-adapt-container-width="true" data-hide-cover="true"
               data-show-facepile="true">
              <blockquote cite="https://www.facebook.com/computersciencevents/" className="fb-xfbml-parse-ignore"><a
                  href="https://www.facebook.com/computersciencevents/">Computer Science Events</a></blockquote>
          </div>
          <h2>The Fun Stuff!</h2>
          <table>
              <tr bgcolor="#0000ff" className="White">
                  <td width="3%" bgcolor="#0066FF">
                      <div align="center"><strong>Meeting Agenda </strong></div>
                  </td>
                  <td width="7%" bgcolor="#0066FF">
                      <div align="center"><b>Homework Due</b></div>
                  </td>
              </tr>
              <tr>
                  <td>
                      <h4>Meeting #1</h4>
                      <ul>
                          <li>Introduction to GitHub</li>
                          <li>Project Proposals</li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>
                      <h4>Meeting #2 @8:00pm CAS</h4>
                      <ul>
                          <li>Decide on what project to build</li>
                      </ul>
                  </td>
                  <td>
                      <h4>Identify problems that need to be solved!</h4>
                      <p>Examples</p>
                      <ul>
                          <li>Why does it take me 8 alarms to wake up?</li>
                          <li>Why is the BU shuttle never accurate</li>
                          <li>Ugh! I can't find the right song to play</li>
                          <li>etc...</li>
                      </ul>
                      <p>How to go about this process</p>
                      <ul>
                          <li>My recommendation is to write down everything that frustrates you</li>
                          <li><a href={'https://www.youtube.com/watch?v=9ArIwn4yImY'}>How do you find a problem worth solving?</a></li>
                          <li><a href={'https://www.youtube.com/watch?v=xXMQGBhaync'}>How to Identify and Solve Problems</a></li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>
                      <h4>Meeting #3 @TBD</h4>
                      <ul>
                          <li>Discussing Features</li>
                      </ul>
                      <img
                          src={"https://github.com/ChiragAswani/PCT-Tech-Team-Spring-2019/blob/master/team-website/src/images/02-05-19_meeting_notes.jpeg?raw=true"}
                          height={"200px"}
                      />
                  </td>
                  <td>
                      <h3>Endorse each other on LinkedIn</h3>
                      <ul>
                          <li>Make sure you list your top 3 skills!</li>
                          <li><a href={'https://docs.google.com/spreadsheets/d/1X9DPN7wy8BF5EiRIBQU3_6nnaNbWTbzg_LmtF_RMeTg/edit#gid=0'}>Spreadsheet</a></li>
                      </ul>
                  </td>
              </tr>
              <tr>
                  <td>
                      <h4>Meeting #4 @Tuesday Feb 12, 2019</h4>
                      <ul>
                          <li>Learning Flask</li>
                          <li>Learning Python Virtual Enviornments</li>
                          <li>Learning what an API is (it maps a URL to a function)</li>
                          <li>Learning GitHub</li>
                      </ul>
                  </td>
                  <td>
                      <h3>Endorse each other on LinkedIn</h3>
                      <ul>
                          <li>Make sure you list your top 3 skills!</li>
                          <li><a href={'https://docs.google.com/spreadsheets/d/1X9DPN7wy8BF5EiRIBQU3_6nnaNbWTbzg_LmtF_RMeTg/edit#gid=0'}>Spreadsheet</a></li>
                      </ul>
                      <h3>Finish Tasks Listed as "In Progress" in Trello</h3>
                      <ul>
                          <li>In the Trello Board, click "Show Menu" -> click "Filter Cards" -> Scroll Down -> click your name</li>
                          <li>You will see all the tasks or "cards" assigned to you</li>
                      </ul>
                      <h3>Install these...</h3>
                      <ul>
                          <li><a href={'https://www.youtube.com/watch?v=DX15WbKidXY&vl=en'}>1. Install MongoDB</a></li>
                          <li>2. On terminal, run `mongod` (no `)</li>
                          <li><a href={'https://www.mongodb.com/products/compass'}>3. Install MongoDB Compass and press connect</a></li>
                          <li><a href={'https://www.getpostman.com/downloads/'}>Postman</a></li>
                          <li>Python</li>
                          <li><a href={'https://www.jetbrains.com/student/'}>Pycharm - Student Edition</a></li>
                          <li><a href={'https://git-scm.com/book/en/v2/Getting-Started-Installing-Git'}>Git Command Tools</a></li>
                      </ul>
                  </td>
              </tr>
          </table>
      </div>
    );
  }
}

export default App;
