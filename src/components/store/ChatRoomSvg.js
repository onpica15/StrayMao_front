import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "../../styles/store/chatRoom.scss"
import GoogleLogin from "react-google-login";

function ChatRoomSvg(props){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
  };

    const [whichSVG, setWhichSVG] = useState(1)

    const changeToSvg1 = ()=>{
        setWhichSVG(1)
    }

    const changeToSvg2 = ()=>{
        setWhichSVG(2)
    }

    const changeToSvg3 = ()=>{
        setWhichSVG(3)
    }

    const [svg1, setSvg1] = useState(<svg onMouseEnter={changeToSvg2} onMouseLeave={changeToSvg1}  className="ChatRoomSvg1" xmlns="http://www.w3.org/2000/svg"  width="83.2" height="80" viewBox="0 0 96.641 92">
    <defs>
      <filter id="Path_1874" x="0" y="0" width="96.641" height="92" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Component_101_1" data-name="Component 101 – 1" transform="translate(9 6)">
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_1874)">
        <g id="Path_1874-2" data-name="Path 1874" transform="translate(9 6)" fill="#ed8f8f">
          <path d="M 36.56133270263672 73.5 C 31.69361114501953 73.5 26.97170066833496 72.53530120849609 22.52676773071289 70.63269805908203 C 18.23282241821289 68.79472351074219 14.37626647949219 66.16329193115234 11.06422233581543 62.8115119934082 C 7.751766681671143 59.45932388305664 5.151111125946045 55.55575561523438 3.334500312805176 51.20925521850586 C 1.453666925430298 46.70911026000977 0.5000002384185791 41.92842102050781 0.5000002384185791 37 C 0.5000002384185791 32.07157897949219 1.453666925430298 27.29088973999023 3.334500312805176 22.79074478149414 C 5.151111125946045 18.44424438476563 7.751766681671143 14.54067802429199 11.06422233581543 11.18848896026611 C 14.37626647949219 7.836710929870605 18.23282241821289 5.205277919769287 22.52676773071289 3.367300033569336 C 26.97170066833496 1.464699983596802 31.69361114501953 0.5 36.56133270263672 0.5 C 41.42905426025391 0.5 46.15096664428711 1.464699983596802 50.59590148925781 3.367300033569336 C 54.88984298706055 5.205277919769287 58.74639892578125 7.836710929870605 62.05844497680664 11.18848896026611 C 65.37090301513672 14.54067802429199 67.9715576171875 18.44424438476563 69.78816986083984 22.79074478149414 C 71.66899871826172 27.29088973999023 72.62266540527344 32.07157897949219 72.62266540527344 37 C 72.62266540527344 38.92597961425781 72.0279541015625 41.545166015625 71.39833068847656 44.31813430786133 C 70.25586700439453 49.34975433349609 68.96096801757813 55.0527229309082 70.26803588867188 59.77870178222656 C 71.32898712158203 63.61375427246094 74.43508148193359 64.79274749755859 76.49043273925781 65.57291412353516 C 77.16551971435547 65.82915496826172 78.09008026123047 66.18009185791016 78.13883209228516 66.42974090576172 C 78.14424133300781 66.45746612548828 78.16942596435547 66.72121429443359 77.39717864990234 67.43852233886719 C 75.98789215087891 68.74796295166016 73.44713592529297 69.87049865722656 69.84542083740234 70.77500915527344 C 66.76580047607422 71.54840087890625 62.87984466552734 72.16764068603516 58.29547882080078 72.61555480957031 C 52.2041130065918 73.21070098876953 45.09481048583984 73.5 36.56133270263672 73.5 Z" stroke="none"/>
          <path d="M 36.56133270263672 1 C 31.76163482666016 1 27.10591125488281 1.951133728027344 22.7235221862793 3.82696533203125 C 18.48933410644531 5.639366149902344 14.68623352050781 8.234375 11.41987609863281 11.53992080688477 C 8.152702331542969 14.84629821777344 5.587600708007813 18.69648742675781 3.795822143554688 22.98355484008789 C 1.940658569335938 27.42230987548828 1 32.13812255859375 1 37 C 1 41.86187744140625 1.940658569335938 46.57769012451172 3.795822143554688 51.01644515991211 C 5.587600708007813 55.30351257324219 8.152702331542969 59.15370178222656 11.41987609863281 62.46007919311523 C 14.68623352050781 65.765625 18.48933410644531 68.36063385009766 22.7235221862793 70.17303466796875 C 27.10591125488281 72.04886627197266 31.76163482666016 73 36.56133270263672 73 C 45.07841110229492 73 52.17181396484375 72.71146392822266 58.24685668945313 72.117919921875 C 62.80663299560547 71.67242431640625 66.66797637939453 71.05744171142578 69.7236328125 70.29006958007813 C 73.24272155761719 69.40631103515625 75.70995330810547 68.32369232177734 77.05689239501953 67.07218933105469 C 77.31008148193359 66.83700561523438 77.45652770996094 66.66830444335938 77.54042053222656 66.55628204345703 C 77.25535583496094 66.39804077148438 76.72480773925781 66.19666290283203 76.31300354003906 66.04035949707031 C 74.2939453125 65.27397918701172 70.91465759277344 63.99127960205078 69.78612518310547 59.9119873046875 C 68.44551086425781 55.06472015380859 69.75521850585938 49.29656600952148 70.91074371337891 44.20742034912109 C 71.53398895263672 41.46256637573242 72.12266540527344 38.86993408203125 72.12266540527344 37 C 72.12266540527344 32.13812255859375 71.18201446533203 27.42230987548828 69.32684326171875 22.98355484008789 C 67.53506469726563 18.69648742675781 64.969970703125 14.84629821777344 61.70278930664063 11.53992080688477 C 58.43643188476563 8.234375 54.63333129882813 5.639366149902344 50.39914703369141 3.82696533203125 C 46.01675415039063 1.951133728027344 41.36103439331055 1 36.56133270263672 1 M 36.56133270263672 0 C 56.75360107421875 0 73.12266540527344 16.56546783447266 73.12266540527344 37 C 73.12266540527344 42.40550231933594 68.73909759521484 52.37480163574219 70.74994659423828 59.64542388916016 C 72.63104248046875 66.44505310058594 81.45164489746094 64.35482025146484 77.73746490478516 67.80487060546875 C 71.392578125 73.70020294189453 46.09207916259766 74 36.56133270263672 74 C 16.36906433105469 74 0 57.43453216552734 0 37 C 0 16.56546783447266 16.36906433105469 0 36.56133270263672 0 Z" stroke="none" fill="#ed8f8f"/>
        </g>
      </g>
      <circle id="Ellipse_86" data-name="Ellipse 86" cx="7" cy="7" r="7" transform="translate(10 29)" fill="#fff"/>
      <circle id="Ellipse_87" data-name="Ellipse 87" cx="7" cy="7" r="7" transform="translate(29 29)" fill="#fff"/>
      <circle id="Ellipse_88" data-name="Ellipse 88" cx="7" cy="7" r="7" transform="translate(49 29)" fill="#fff"/>
    </g>
  </svg>) 

    const [svg2, setSvg2] = useState(<svg onMouseEnter={changeToSvg2} onMouseLeave={changeToSvg1} onClick={changeToSvg3} xmlns="http://www.w3.org/2000/svg"  width="83.2" height="80" viewBox="0 0 96.641 92">
    <defs>
      <filter id="Path_1874" x="0" y="0" width="96.641" height="92" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Component_101_1" data-name="Component 101 – 1" transform="translate(9 6)">
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_1874)">
        <g id="Path_1874-2" data-name="Path 1874" transform="translate(9 6)" fill="#ed8f8f">
          <path d="M 36.56133270263672 73.5 C 31.69361114501953 73.5 26.97170066833496 72.53530120849609 22.52676773071289 70.63269805908203 C 18.23282241821289 68.79472351074219 14.37626647949219 66.16329193115234 11.06422233581543 62.8115119934082 C 7.751766681671143 59.45932388305664 5.151111125946045 55.55575561523438 3.334500312805176 51.20925521850586 C 1.453666925430298 46.70911026000977 0.5000002384185791 41.92842102050781 0.5000002384185791 37 C 0.5000002384185791 32.07157897949219 1.453666925430298 27.29088973999023 3.334500312805176 22.79074478149414 C 5.151111125946045 18.44424438476563 7.751766681671143 14.54067802429199 11.06422233581543 11.18848896026611 C 14.37626647949219 7.836710929870605 18.23282241821289 5.205277919769287 22.52676773071289 3.367300033569336 C 26.97170066833496 1.464699983596802 31.69361114501953 0.5 36.56133270263672 0.5 C 41.42905426025391 0.5 46.15096664428711 1.464699983596802 50.59590148925781 3.367300033569336 C 54.88984298706055 5.205277919769287 58.74639892578125 7.836710929870605 62.05844497680664 11.18848896026611 C 65.37090301513672 14.54067802429199 67.9715576171875 18.44424438476563 69.78816986083984 22.79074478149414 C 71.66899871826172 27.29088973999023 72.62266540527344 32.07157897949219 72.62266540527344 37 C 72.62266540527344 38.92597961425781 72.0279541015625 41.545166015625 71.39833068847656 44.31813430786133 C 70.25586700439453 49.34975433349609 68.96096801757813 55.0527229309082 70.26803588867188 59.77870178222656 C 71.32898712158203 63.61375427246094 74.43508148193359 64.79274749755859 76.49043273925781 65.57291412353516 C 77.16551971435547 65.82915496826172 78.09008026123047 66.18009185791016 78.13883209228516 66.42974090576172 C 78.14424133300781 66.45746612548828 78.16942596435547 66.72121429443359 77.39717864990234 67.43852233886719 C 75.98789215087891 68.74796295166016 73.44713592529297 69.87049865722656 69.84542083740234 70.77500915527344 C 66.76580047607422 71.54840087890625 62.87984466552734 72.16764068603516 58.29547882080078 72.61555480957031 C 52.2041130065918 73.21070098876953 45.09481048583984 73.5 36.56133270263672 73.5 Z" stroke="none"/>
          <path d="M 36.56133270263672 1 C 31.76163482666016 1 27.10591125488281 1.951133728027344 22.7235221862793 3.82696533203125 C 18.48933410644531 5.639366149902344 14.68623352050781 8.234375 11.41987609863281 11.53992080688477 C 8.152702331542969 14.84629821777344 5.587600708007813 18.69648742675781 3.795822143554688 22.98355484008789 C 1.940658569335938 27.42230987548828 1 32.13812255859375 1 37 C 1 41.86187744140625 1.940658569335938 46.57769012451172 3.795822143554688 51.01644515991211 C 5.587600708007813 55.30351257324219 8.152702331542969 59.15370178222656 11.41987609863281 62.46007919311523 C 14.68623352050781 65.765625 18.48933410644531 68.36063385009766 22.7235221862793 70.17303466796875 C 27.10591125488281 72.04886627197266 31.76163482666016 73 36.56133270263672 73 C 45.07841110229492 73 52.17181396484375 72.71146392822266 58.24685668945313 72.117919921875 C 62.80663299560547 71.67242431640625 66.66797637939453 71.05744171142578 69.7236328125 70.29006958007813 C 73.24272155761719 69.40631103515625 75.70995330810547 68.32369232177734 77.05689239501953 67.07218933105469 C 77.31008148193359 66.83700561523438 77.45652770996094 66.66830444335938 77.54042053222656 66.55628204345703 C 77.25535583496094 66.39804077148438 76.72480773925781 66.19666290283203 76.31300354003906 66.04035949707031 C 74.2939453125 65.27397918701172 70.91465759277344 63.99127960205078 69.78612518310547 59.9119873046875 C 68.44551086425781 55.06472015380859 69.75521850585938 49.29656600952148 70.91074371337891 44.20742034912109 C 71.53398895263672 41.46256637573242 72.12266540527344 38.86993408203125 72.12266540527344 37 C 72.12266540527344 32.13812255859375 71.18201446533203 27.42230987548828 69.32684326171875 22.98355484008789 C 67.53506469726563 18.69648742675781 64.969970703125 14.84629821777344 61.70278930664063 11.53992080688477 C 58.43643188476563 8.234375 54.63333129882813 5.639366149902344 50.39914703369141 3.82696533203125 C 46.01675415039063 1.951133728027344 41.36103439331055 1 36.56133270263672 1 M 36.56133270263672 0 C 56.75360107421875 0 73.12266540527344 16.56546783447266 73.12266540527344 37 C 73.12266540527344 42.40550231933594 68.73909759521484 52.37480163574219 70.74994659423828 59.64542388916016 C 72.63104248046875 66.44505310058594 81.45164489746094 64.35482025146484 77.73746490478516 67.80487060546875 C 71.392578125 73.70020294189453 46.09207916259766 74 36.56133270263672 74 C 16.36906433105469 74 0 57.43453216552734 0 37 C 0 16.56546783447266 16.36906433105469 0 36.56133270263672 0 Z" stroke="none" fill="#ed8f8f"/>
        </g>
      </g>
      <circle id="Ellipse_86" data-name="Ellipse 86" cx="7" cy="7" r="7" transform="translate(18 22)" fill="#fff"/>
      <circle id="Ellipse_88" data-name="Ellipse 88" cx="7" cy="7" r="7" transform="translate(44 22)" fill="#fff"/>
      <g id="Polygon_8" data-name="Polygon 8" transform="translate(41.364 47.95) rotate(180)" fill="#fff">
        <path d="M 7.29015064239502 7.499998092651367 L 1.709850430488586 7.499998092651367 C 1.450990438461304 7.499998092651367 1.321780443191528 7.326858043670654 1.278240442276001 7.25242805480957 C 1.234710454940796 7.177988052368164 1.14715051651001 6.980487823486328 1.274060487747192 6.754868030548096 L 4.064210414886475 1.794597864151001 C 4.193600654602051 1.564567923545837 4.41208028793335 1.539727926254272 4.500000476837158 1.539727926254272 C 4.587920665740967 1.539727926254272 4.806390285491943 1.564567923545837 4.93578052520752 1.794597864151001 L 7.725940704345703 6.754868030548096 C 7.852850437164307 6.980487823486328 7.765290260314941 7.177988052368164 7.721760272979736 7.25242805480957 C 7.678220272064209 7.326858043670654 7.549010276794434 7.499998092651367 7.29015064239502 7.499998092651367 Z" stroke="none"/>
        <path d="M 4.499990463256836 2.039718151092529 L 4.500000476837158 2.039727687835693 L 1.709850311279297 6.999998092651367 L 7.29015064239502 6.999998092651367 C 7.290151596069336 6.999998092651367 7.290152549743652 6.999998092651367 7.290153503417969 6.999998092651367 C 7.290154933929443 6.999996185302734 7.29015588760376 6.999993801116943 7.290160179138184 6.999998092651367 L 4.499990463256836 2.039718151092529 M 4.499999046325684 1.039730548858643 C 4.840210437774658 1.039730548858643 5.180420398712158 1.209642887115479 5.371570587158203 1.549468040466309 L 8.161730766296387 6.509737968444824 C 8.536690711975098 7.176338195800781 8.054980278015137 7.999998092651367 7.29015064239502 7.999998092651367 L 1.709850311279297 7.999998092651367 C 0.9450206756591797 7.999998092651367 0.4633102416992188 7.176338195800781 0.8382701873779297 6.509737968444824 L 3.628420352935791 1.549468040466309 C 3.819575309753418 1.209642887115479 4.159788131713867 1.039730548858643 4.499999046325684 1.039730548858643 Z" stroke="none" fill="#fff"/>
      </g>
      <path id="Path_1875" data-name="Path 1875" d="M44.5,52.08a10.426,10.426,0,0,1-4.044,8.01c-3.943,2.712-10.309-1.958-10.309-1.958" transform="translate(-6.008 -10.036)" fill="none" stroke="#fff" stroke-width="1"/>
      <path id="Path_1876" data-name="Path 1876" d="M30.146,52.08a10.426,10.426,0,0,0,4.044,8.01C38.134,62.8,44.5,58.131,44.5,58.131" transform="translate(5.202 -10.036)" fill="none" stroke="#fff" stroke-width="1"/>
    </g>
  </svg>
  )
    
    const [svg3, setSvg3] = useState(  <svg onClick={changeToSvg1} xmlns="http://www.w3.org/2000/svg"  width="83.2" height="80" viewBox="0 0 96.641 92">
    <defs>
      <filter id="Path_1874" x="0" y="0" width="96.641" height="92" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Component_101_1" data-name="Component 101 – 1" transform="translate(9 6)">
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_1874)">
        <g id="Path_1874-2" data-name="Path 1874" transform="translate(9 6)" fill="#ed8f8f">
          <path d="M 36.56133270263672 73.5 C 31.69361114501953 73.5 26.97170066833496 72.53530120849609 22.52676773071289 70.63269805908203 C 18.23282241821289 68.79472351074219 14.37626647949219 66.16329193115234 11.06422233581543 62.8115119934082 C 7.751766681671143 59.45932388305664 5.151111125946045 55.55575561523438 3.334500312805176 51.20925521850586 C 1.453666925430298 46.70911026000977 0.5000002384185791 41.92842102050781 0.5000002384185791 37 C 0.5000002384185791 32.07157897949219 1.453666925430298 27.29088973999023 3.334500312805176 22.79074478149414 C 5.151111125946045 18.44424438476563 7.751766681671143 14.54067802429199 11.06422233581543 11.18848896026611 C 14.37626647949219 7.836710929870605 18.23282241821289 5.205277919769287 22.52676773071289 3.367300033569336 C 26.97170066833496 1.464699983596802 31.69361114501953 0.5 36.56133270263672 0.5 C 41.42905426025391 0.5 46.15096664428711 1.464699983596802 50.59590148925781 3.367300033569336 C 54.88984298706055 5.205277919769287 58.74639892578125 7.836710929870605 62.05844497680664 11.18848896026611 C 65.37090301513672 14.54067802429199 67.9715576171875 18.44424438476563 69.78816986083984 22.79074478149414 C 71.66899871826172 27.29088973999023 72.62266540527344 32.07157897949219 72.62266540527344 37 C 72.62266540527344 38.92597961425781 72.0279541015625 41.545166015625 71.39833068847656 44.31813430786133 C 70.25586700439453 49.34975433349609 68.96096801757813 55.0527229309082 70.26803588867188 59.77870178222656 C 71.32898712158203 63.61375427246094 74.43508148193359 64.79274749755859 76.49043273925781 65.57291412353516 C 77.16551971435547 65.82915496826172 78.09008026123047 66.18009185791016 78.13883209228516 66.42974090576172 C 78.14424133300781 66.45746612548828 78.16942596435547 66.72121429443359 77.39717864990234 67.43852233886719 C 75.98789215087891 68.74796295166016 73.44713592529297 69.87049865722656 69.84542083740234 70.77500915527344 C 66.76580047607422 71.54840087890625 62.87984466552734 72.16764068603516 58.29547882080078 72.61555480957031 C 52.2041130065918 73.21070098876953 45.09481048583984 73.5 36.56133270263672 73.5 Z" stroke="none"/>
          <path d="M 36.56133270263672 1 C 31.76163482666016 1 27.10591125488281 1.951133728027344 22.7235221862793 3.82696533203125 C 18.48933410644531 5.639366149902344 14.68623352050781 8.234375 11.41987609863281 11.53992080688477 C 8.152702331542969 14.84629821777344 5.587600708007813 18.69648742675781 3.795822143554688 22.98355484008789 C 1.940658569335938 27.42230987548828 1 32.13812255859375 1 37 C 1 41.86187744140625 1.940658569335938 46.57769012451172 3.795822143554688 51.01644515991211 C 5.587600708007813 55.30351257324219 8.152702331542969 59.15370178222656 11.41987609863281 62.46007919311523 C 14.68623352050781 65.765625 18.48933410644531 68.36063385009766 22.7235221862793 70.17303466796875 C 27.10591125488281 72.04886627197266 31.76163482666016 73 36.56133270263672 73 C 45.07841110229492 73 52.17181396484375 72.71146392822266 58.24685668945313 72.117919921875 C 62.80663299560547 71.67242431640625 66.66797637939453 71.05744171142578 69.7236328125 70.29006958007813 C 73.24272155761719 69.40631103515625 75.70995330810547 68.32369232177734 77.05689239501953 67.07218933105469 C 77.31008148193359 66.83700561523438 77.45652770996094 66.66830444335938 77.54042053222656 66.55628204345703 C 77.25535583496094 66.39804077148438 76.72480773925781 66.19666290283203 76.31300354003906 66.04035949707031 C 74.2939453125 65.27397918701172 70.91465759277344 63.99127960205078 69.78612518310547 59.9119873046875 C 68.44551086425781 55.06472015380859 69.75521850585938 49.29656600952148 70.91074371337891 44.20742034912109 C 71.53398895263672 41.46256637573242 72.12266540527344 38.86993408203125 72.12266540527344 37 C 72.12266540527344 32.13812255859375 71.18201446533203 27.42230987548828 69.32684326171875 22.98355484008789 C 67.53506469726563 18.69648742675781 64.969970703125 14.84629821777344 61.70278930664063 11.53992080688477 C 58.43643188476563 8.234375 54.63333129882813 5.639366149902344 50.39914703369141 3.82696533203125 C 46.01675415039063 1.951133728027344 41.36103439331055 1 36.56133270263672 1 M 36.56133270263672 0 C 56.75360107421875 0 73.12266540527344 16.56546783447266 73.12266540527344 37 C 73.12266540527344 42.40550231933594 68.73909759521484 52.37480163574219 70.74994659423828 59.64542388916016 C 72.63104248046875 66.44505310058594 81.45164489746094 64.35482025146484 77.73746490478516 67.80487060546875 C 71.392578125 73.70020294189453 46.09207916259766 74 36.56133270263672 74 C 16.36906433105469 74 0 57.43453216552734 0 37 C 0 16.56546783447266 16.36906433105469 0 36.56133270263672 0 Z" stroke="none" fill="#ed8f8f"/>
        </g>
      </g>
      <circle id="Ellipse_86" data-name="Ellipse 86" cx="7" cy="7" r="7" transform="translate(13 14)" fill="#fff"/>
      <circle id="Ellipse_88" data-name="Ellipse 88" cx="7" cy="7" r="7" transform="translate(34 23)" fill="#fff"/>
      <g id="Polygon_8" data-name="Polygon 8" transform="matrix(-0.966, -0.259, 0.259, -0.966, 26.862, 44.286)" fill="#fff">
        <path d="M 7.29015064239502 7.499998092651367 L 1.709850430488586 7.499998092651367 C 1.450990438461304 7.499998092651367 1.321780443191528 7.326858043670654 1.278240442276001 7.25242805480957 C 1.234710454940796 7.177988052368164 1.14715051651001 6.980487823486328 1.274060487747192 6.754868030548096 L 4.064210414886475 1.794597864151001 C 4.193600654602051 1.564567923545837 4.41208028793335 1.539727926254272 4.500000476837158 1.539727926254272 C 4.587920665740967 1.539727926254272 4.806390285491943 1.564567923545837 4.93578052520752 1.794597864151001 L 7.725940704345703 6.754868030548096 C 7.852850437164307 6.980487823486328 7.765290260314941 7.177988052368164 7.721760272979736 7.25242805480957 C 7.678220272064209 7.326858043670654 7.549010276794434 7.499998092651367 7.29015064239502 7.499998092651367 Z" stroke="none"/>
        <path d="M 4.499990463256836 2.039718151092529 L 4.500000476837158 2.039727687835693 L 1.709850311279297 6.999998092651367 L 7.29015064239502 6.999998092651367 C 7.290151596069336 6.999998092651367 7.290152549743652 6.999998092651367 7.290153503417969 6.999998092651367 C 7.290154933929443 6.999996185302734 7.29015588760376 6.999993801116943 7.290160179138184 6.999998092651367 L 4.499990463256836 2.039718151092529 M 4.499999046325684 1.039730548858643 C 4.840210437774658 1.039730548858643 5.180420398712158 1.209642887115479 5.371570587158203 1.549468040466309 L 8.161730766296387 6.509737968444824 C 8.536690711975098 7.176338195800781 8.054980278015137 7.999998092651367 7.29015064239502 7.999998092651367 L 1.709850311279297 7.999998092651367 C 0.9450206756591797 7.999998092651367 0.4633102416992188 7.176338195800781 0.8382701873779297 6.509737968444824 L 3.628420352935791 1.549468040466309 C 3.819575309753418 1.209642887115479 4.159788131713867 1.039730548858643 4.499999046325684 1.039730548858643 Z" stroke="none" fill="#fff"/>
      </g>
      <path id="Path_1875" data-name="Path 1875" d="M14.354,0a10.426,10.426,0,0,1-4.044,8.01C6.366,10.722,0,6.051,0,6.051" transform="matrix(0.966, 0.259, -0.259, 0.966, 12.503, 32.993)" fill="none" stroke="#fff" stroke-width="1"/>
      <path id="Path_1876" data-name="Path 1876" d="M0,0A10.426,10.426,0,0,0,4.044,8.01c3.943,2.712,10.309-1.958,10.309-1.958" transform="matrix(0.966, 0.259, -0.259, 0.966, 23.27, 35.946)" fill="none" stroke="#fff" stroke-width="1"/>
    </g>
  </svg>
  )

    return(
    <>
{/* {(whichSVG === 1)?svg1:''}
{(whichSVG === 2)?svg2:''}
{(whichSVG === 3)?svg3:''} */}

<div className="chatCircle">

<div className="circle">
{(whichSVG === 1)?svg1:''}
{(whichSVG === 2)?svg2:''}
{(whichSVG === 3)?svg3:''}
    <form action="" method="">
    <div className="chat">
      <div className="chatBorder">
        <div className="chatTop">ヽ(✿ﾟ▽ﾟ)ノ StrayMao ヽ(✿ﾟ▽ﾟ)ノ</div>
        <div className="chatContant">
             
          <div className="chatName">
            <label for="exampleFormControlInput1">姓名: <br /></label>
            <div className="chatName2">
            <div className="chatImg">
              <img src={url==""?"/image/store/1584615665394.jpg":url} alt="" />
            </div>   
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="您的名稱"
              value={name==""?null:name}
              required
            />
            </div>
          </div>

          <div className="google">或登入  
          {/* <GoogleLogin
        clientId="948674925767-o40p7pthnhkp2quco9nvon70lfcu8624.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      /> */}
          </div>

          <div className="chatEmail">
            <label for="exampleFormControlInput1">e-mail: <br /></label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="請輸入您的e-mail"
              value={email==""?null:email}
              required
            />
          </div>

          <div className="chatInput">
            <label for="exampleFormControlInput1">訊息: <br /></label>
            <div></div>
            <textarea rows="4" cols="35" placeholder="請輸入您的訊息"></textarea>
          </div>

          <input type="submit"  className="chatBtn" ></input>
        </div>
      </div>
    </div>
  </form>
</div>
</div>
    </>
    )
}

const mapStateToProps = (store) => {
    return {}
  }
  const mapDispatchToProps = null
  
  export default connect(mapStateToProps, {})(ChatRoomSvg);