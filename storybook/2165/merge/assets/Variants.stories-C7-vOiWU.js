import{j as r}from"./iframe-CkaLytcH.js";import{H as a}from"./Heading-CDNPJ0iR.js";import p from"./Default.stories-Ch_5BXk8.js";import{N as n}from"./Notification-BilvgaaS.js";import{T as c}from"./Text-tzLzAj2U.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B_PBnLNZ.js";import"./mergeRefs-CCvS6fDC.js";import"./index-CUykgx4T.js";import"./RSPContexts-DGlCkRo9.js";import"./utils-Cx1NHB3m.js";import"./AlertIcon-C1KERsp1.js";import"./IconWarning-at2C7kXG.js";import"./useLocalizedStringFormatter-BLs_py7w.js";import"./context-BgsgCuSf.js";import"./Button-CNnlz4DJ.js";import"./LoadingSpinner-B6kRnXp7.js";import"./Button-6wBbL84E.js";import"./ProgressBar-DEywvAoj.js";import"./Hidden-DtaNkSKc.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BYIv-g0Z.js";import"./useFocusable-DNVgDv7W.js";import"./Link-Ch1hHAdK.js";import"./dynamic-CuWqRT77.js";import"./browser-BGuPTbio.js";import"./EmulatedBoldText-ChGTtZfs.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
