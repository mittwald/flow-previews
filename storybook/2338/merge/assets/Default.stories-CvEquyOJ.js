import{j as r}from"./iframe-BFddea_x.js";import{I as a}from"./IllustratedMessage-DYJyevP0.js";import{H as i}from"./Heading-C7vi7fKP.js";import{T as n}from"./Text-B70YymId.js";import{B as p}from"./Button-DmFob37h.js";import{b as l,I as c}from"./IconWarning-Cwahpn-Q.js";import{A as d}from"./ActionGroup-B4CMqS7f.js";import{P as u}from"./ProgressBar-CQLXCn0P.js";import{L as g}from"./Label-Cyz25dCh.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{S as x}from"./StoryBackground-tUdtaYjQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./Heading-CkECWlTX.js";import"./RSPContexts-DrvlE6Qo.js";import"./utils-D-aZUMcZ.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./LoadingSpinner-BTSUDAP0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./remote-DmjGOFpp.js";import"./Button-uqpwtIjO.js";import"./ProgressBar-GJhSB3Xp.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C__elmJN.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DZQSLH7U.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocusable-D-17EkqH.js";import"./dynamic-C85Jl_PG.js";import"./getActionGroupSlot-B-F0wjn3.js";import"./useStatic-4M_8h910.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-6UMDYnpZ.js";import"./Label.module-CUYTf9Jc.js";const nr={title:"Content/Illustrated Message",component:a,render:o=>r.jsx(x,{color:o.color,children:r.jsxs(a,{...o,children:[r.jsx(c,{}),r.jsx(i,{children:m.short}),r.jsx(n,{children:m.medium})]})}),argTypes:{color:{control:"inline-radio",options:["default","danger","unavailable","light","dark"]}},args:{color:"default"}},t={},e={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"No apps installed"}),r.jsx(n,{children:"Create your first app to start working on your website."}),r.jsxs(d,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})},s={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"App is installing"}),r.jsx(n,{children:"This can take a couple of minutes."}),r.jsx(u,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(g,{children:"Storage"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
