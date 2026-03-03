import{j as r}from"./iframe-BZ1p44Xs.js";import{I as a}from"./IllustratedMessage-DBcKx2v6.js";import{H as i}from"./Heading-DAuGI7Cj.js";import{T as n}from"./Text-CplKG2wk.js";import{B as p}from"./Button-BXzJaHaH.js";import{b as l,I as c}from"./IconWarning-BeCXg6tW.js";import{A as d}from"./ActionGroup-D6AJDGA7.js";import{P as u}from"./ProgressBar-CPz1Fa1Y.js";import{L as g}from"./Label-HK0aVnMe.js";import{d as m}from"./dummyText-CX_I_Wpl.js";import{S as x}from"./StoryBackground-B31Ag3zs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./Heading-acaQddxn.js";import"./RSPContexts-C2tYRgOg.js";import"./utils-Cc2PUaBi.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./Text-DOPFHCGV.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./remote-BEHhGsYi.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./dynamic-BvoZFGdS.js";import"./getActionGroupSlot-D6uph6L1.js";import"./useStatic-BVYP0IGX.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-D2czoISv.js";import"./Label.module-CUYTf9Jc.js";const ir={title:"Content/Illustrated Message",component:a,render:o=>r.jsx(x,{color:o.color,children:r.jsxs(a,{...o,children:[r.jsx(c,{}),r.jsx(i,{children:m.short}),r.jsx(n,{children:m.medium})]})}),argTypes:{color:{control:"inline-radio",options:["default","danger","unavailable","light","dark"]}},args:{color:"default"}},t={},e={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"No apps installed"}),r.jsx(n,{children:"Create your first app to start working on your website."}),r.jsxs(d,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})},s={render:o=>r.jsxs(a,{...o,children:[r.jsx(l,{}),r.jsx(i,{children:"App is installing"}),r.jsx(n,{children:"This can take a couple of minutes."}),r.jsx(u,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(g,{children:"Storage"})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
