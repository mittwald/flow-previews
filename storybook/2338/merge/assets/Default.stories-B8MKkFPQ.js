import{j as r}from"./iframe-CBpAxFwW.js";import{I as a}from"./IllustratedMessage-jaSu0in8.js";import{H as i}from"./Heading-MOWZhQDK.js";import{T as n}from"./Text-DmIlada7.js";import{B as p}from"./Button-DJILh_tx.js";import{b as l,I as c}from"./IconWarning-gYJb7yiz.js";import{A as d}from"./ActionGroup-CIZlagD5.js";import{P as u}from"./ProgressBar-BD_8mkrl.js";import{L as g}from"./Label-D9Ki8i5H.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{S as x}from"./StoryBackground-k6rCwjWp.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./Heading-CaCePfIe.js";import"./RSPContexts-C97_Ku7o.js";import"./utils-DlBHsIHw.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Text-CVgfjhJb.js";import"./LoadingSpinner-kKg7jHcI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./remote-Bqh6MTep.js";import"./Button-B6LJ-bNf.js";import"./ProgressBar-82eG7dwm.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-VON6CJHg.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-IARhWfJB.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useFocusable-YEU6YEqR.js";import"./dynamic-CE4App5Z.js";import"./getActionGroupSlot-Cb4cETWb.js";import"./useStatic-CDkGs2jt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-OgBwEVZx.js";import"./Label.module-CUYTf9Jc.js";const ir={title:"Content/Illustrated Message",component:a,render:o=>r.jsx(x,{color:o.color,children:r.jsxs(a,{...o,children:[r.jsx(c,{}),r.jsx(i,{children:m.short}),r.jsx(n,{children:m.medium})]})}),argTypes:{color:{control:"inline-radio",options:["default","danger","unavailable","light","dark"]}},args:{color:"default"}},t={},e={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"No apps installed"}),r.jsx(n,{children:"Create your first app to start working on your website."}),r.jsxs(d,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})},s={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"App is installing"}),r.jsx(n,{children:"This can take a couple of minutes."}),r.jsx(u,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(g,{children:"Storage"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const nr=["Default","WithActionGroup","WithProgressBar"];export{t as Default,e as WithActionGroup,s as WithProgressBar,nr as __namedExportsOrder,ir as default};
