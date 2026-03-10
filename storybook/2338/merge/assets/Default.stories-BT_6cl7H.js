import{j as r}from"./iframe-Bge_iwzq.js";import{I as a}from"./IllustratedMessage-BLLUtKZ3.js";import{H as i}from"./Heading-JLPBp959.js";import{T as n}from"./Text-Bo3CKbUr.js";import{B as p}from"./Button-DYq5oiR6.js";import{b as l,I as c}from"./IconWarning-CnGwh2Y2.js";import{A as d}from"./ActionGroup-Cm9WLYvL.js";import{P as u}from"./ProgressBar-Bj-0RZrE.js";import{L as g}from"./Label-DsCIDP_n.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{S as x}from"./StoryBackground-Bt6nVvMb.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./utils-rhPAe061.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./remote-CO23tKXG.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./dynamic-C3MU2GF_.js";import"./getActionGroupSlot-DLRBpctv.js";import"./useStatic-CNeEScnJ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-TVSGPckL.js";import"./Label.module-CUYTf9Jc.js";const ir={title:"Content/Illustrated Message",component:a,render:o=>r.jsx(x,{color:o.color,children:r.jsxs(a,{...o,children:[r.jsx(c,{}),r.jsx(i,{children:m.short}),r.jsx(n,{children:m.medium})]})}),argTypes:{color:{control:"inline-radio",options:["default","danger","unavailable","light","dark"]}},args:{color:"default"}},t={},e={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"No apps installed"}),r.jsx(n,{children:"Create your first app to start working on your website."}),r.jsxs(d,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})},s={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"App is installing"}),r.jsx(n,{children:"This can take a couple of minutes."}),r.jsx(u,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(g,{children:"Storage"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
