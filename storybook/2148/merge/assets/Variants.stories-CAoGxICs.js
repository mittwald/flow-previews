import{j as r}from"./iframe-C2UJ9G9V.js";import{H as a}from"./Heading-97bPXynU.js";import p from"./Default.stories-D_PYz8ed.js";import{N as n}from"./Notification-CJ42Iq6R.js";import{T as c}from"./Text-BmY25DFr.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BtVUgkFH.js";import"./index-CG7Nx2SL.js";import"./index-CuKGAAd3.js";import"./RSPContexts-Hx65IcT5.js";import"./utils-ZVY4AxNZ.js";import"./AlertIcon-BbdcFEUV.js";import"./IconWarning-DZ2M7osE.js";import"./useLocalizedStringFormatter-Cj5LaI8a.js";import"./context-2O4QHQV-.js";import"./Button-yv3wqtk5.js";import"./LoadingSpinner-bmxeb1W_.js";import"./Button-ubiq7Xl0.js";import"./ProgressBar-ClZTUzWw.js";import"./Hidden-3aP1klpL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Di5E6gYC.js";import"./useFocusable-xso9xERq.js";import"./Link-Ly3EXSZu.js";import"./dynamic-CtYtQruH.js";import"./browser-CXIjdJ2N.js";import"./EmulatedBoldText-T6xRvrrg.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const R=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,i as Success,t as Warning,R as __namedExportsOrder,O as default};
