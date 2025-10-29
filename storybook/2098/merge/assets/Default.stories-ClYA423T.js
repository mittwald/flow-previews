import{j as r}from"./iframe-BQyHcTNh.js";import{I as o}from"./IllustratedMessage-CxMahX5H.js";import{H as l}from"./Heading-BZf-WkCq.js";import{T as m}from"./Text-_hc15B6K.js";import{B as c}from"./Button-ieCP1ArV.js";import{b as d,z as u}from"./IconWarning-D8COeLpG.js";import{A as g}from"./ActionGroup-WBeyu3m_.js";import{P as h}from"./ProgressBar-B_DfpHi_.js";import{L as x}from"./Label-JK740Dk1.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./index-D5h5WobT.js";import"./Heading-C-OseSB1.js";import"./RSPContexts-BtdGc8q9.js";import"./utils-CdCPWCHO.js";import"./browser-CktdIn7a.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./LoadingSpinner-CEYsHom-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./Button-C2idEpfM.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./dynamic-V8J33Kah.js";import"./getActionGroupSlot-DtqoduiB.js";import"./useStatic-CIMbf_kn.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend--Y7yvWd7.js";import"./Label.module-CUYTf9Jc.js";const tr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(u,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(g,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(x,{children:"Storage"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ar=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar"];export{t as Danger,a as Dark,s as Default,n as Light,i as WithActionGroup,p as WithProgressBar,ar as __namedExportsOrder,tr as default};
