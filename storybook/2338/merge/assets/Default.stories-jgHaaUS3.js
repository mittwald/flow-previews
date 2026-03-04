import{j as r}from"./iframe-CEWg6_IX.js";import{I as a}from"./IllustratedMessage-eW9B0Yp3.js";import{H as i}from"./Heading-BWEcB93I.js";import{T as n}from"./Text-Bw_cIJde.js";import{B as p}from"./Button-CA6AkUR_.js";import{b as l,I as c}from"./IconWarning-D3143lfN.js";import{A as d}from"./ActionGroup-2A27ggL_.js";import{P as u}from"./ProgressBar-C7GcDZIE.js";import{L as g}from"./Label-BaJSnICs.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{S as x}from"./StoryBackground-CwixjfvR.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./Heading-Nh2qIPHf.js";import"./RSPContexts-ulpMISZ-.js";import"./utils-VWmQzJjV.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./remote-BClk6GLL.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./dynamic-JOnDgprM.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./useStatic-B6Ppl0UQ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BM5OHIhd.js";import"./Label.module-CUYTf9Jc.js";const ir={title:"Content/Illustrated Message",component:a,render:o=>r.jsx(x,{color:o.color,children:r.jsxs(a,{...o,children:[r.jsx(c,{}),r.jsx(i,{children:m.short}),r.jsx(n,{children:m.medium})]})}),argTypes:{color:{control:"inline-radio",options:["default","danger","unavailable","light","dark"]}},args:{color:"default"}},t={},e={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"No apps installed"}),r.jsx(n,{children:"Create your first app to start working on your website."}),r.jsxs(d,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})},s={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"App is installing"}),r.jsx(n,{children:"This can take a couple of minutes."}),r.jsx(u,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(g,{children:"Storage"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
