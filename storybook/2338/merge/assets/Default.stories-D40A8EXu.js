import{j as r}from"./iframe-CtEjVB66.js";import{I as a}from"./IllustratedMessage-D17PvWrE.js";import{H as i}from"./Heading-c1W7e3IT.js";import{T as n}from"./Text-QCKh6xRo.js";import{B as p}from"./Button-BbnjmOHy.js";import{b as l,I as c}from"./IconWarning-1CkAUSYF.js";import{A as d}from"./ActionGroup-DvmIDtHK.js";import{P as u}from"./ProgressBar-I-0YQqGD.js";import{L as g}from"./Label-CvAjEv-1.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{S as x}from"./StoryBackground-Da6n33FO.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./Heading-DMz3CQ7g.js";import"./RSPContexts-oGVR4C8S.js";import"./utils-BuEQZICT.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./LoadingSpinner-CJX4ksrz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./remote-4O72-jdB.js";import"./Button-Bk9_EddI.js";import"./ProgressBar-l1h_jwKt.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cn5QMcKF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cre2k4PJ.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useFocusable-CocGrzXD.js";import"./dynamic-BbkFIR2Q.js";import"./getActionGroupSlot-CIbX-1NY.js";import"./useStatic-DVJZwH2g.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BYjs0rPZ.js";import"./Label.module-CUYTf9Jc.js";const nr={title:"Content/Illustrated Message",component:a,render:o=>r.jsx(x,{color:o.color,children:r.jsxs(a,{...o,children:[r.jsx(c,{}),r.jsx(i,{children:m.short}),r.jsx(n,{children:m.medium})]})}),argTypes:{color:{control:"inline-radio",options:["default","danger","unavailable","light","dark"]}},args:{color:"default"}},t={},e={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"No apps installed"}),r.jsx(n,{children:"Create your first app to start working on your website."}),r.jsxs(d,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})},s={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"App is installing"}),r.jsx(n,{children:"This can take a couple of minutes."}),r.jsx(u,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(g,{children:"Storage"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props}>
      <IconApp />
      <Heading>No apps installed</Heading>
      <Text>Create your first app to start working on your website.</Text>
      <ActionGroup>
        <Button variant="soft" color="secondary">
          Go back
        </Button>
        <Button>Create app</Button>
      </ActionGroup>
    </IllustratedMessage>
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props}>
      <IconApp />
      <Heading>App is installing</Heading>
      <Text>This can take a couple of minutes.</Text>
      <ProgressBar value={500} maxValue={1000} minValue={0} formatOptions={{
      style: "unit",
      unit: "gigabyte"
    }} {...props}>
        <Label>Storage</Label>
      </ProgressBar>
    </IllustratedMessage>
}`,...s.parameters?.docs?.source}}};const pr=["Default","WithActionGroup","WithProgressBar"];export{t as Default,e as WithActionGroup,s as WithProgressBar,pr as __namedExportsOrder,nr as default};
