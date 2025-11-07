import{j as r}from"./iframe-BD-_0iQW.js";import{I as o}from"./IllustratedMessage-BGcFcvk0.js";import{H as s}from"./Heading-CKSpOG-B.js";import{T as t}from"./Text-BiRW2WuP.js";import{B as m}from"./Button-Daqq-bhO.js";import{b as u,v as g}from"./IconWarning-COe6pc-P.js";import{A as x}from"./ActionGroup-L6iCTp2m.js";import{P as h}from"./ProgressBar-B3o_BSDC.js";import{L as j}from"./Label-BHkQ1Mdn.js";import{S as f}from"./Section-Bcwz73Fs.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-AqaE2XDS.js";import"./index-BxlzE1r4.js";import"./index-CwlJevdL.js";import"./RSPContexts-CSfMLF9v.js";import"./utils-DC-uQ7gt.js";import"./browser-CsfwbWLp.js";import"./EmulatedBoldText-C35HxZ7Y.js";import"./LoadingSpinner-BgQGLDYl.js";import"./Button-DxIzcvDZ.js";import"./ProgressBar-DRtXHYQ6.js";import"./Hidden-DekCIok9.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CVtdtufW.js";import"./useFocusRing-ohgATb1P.js";import"./useFocusable-DN1gz0ZC.js";import"./useLocalizedStringFormatter-DhlRMC09.js";import"./dynamic-Bn8R82lj.js";import"./getActionGroupSlot-DF5uOUtt.js";import"./useStatic-7iZUYjuS.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-Dt8JNF07.js";import"./Action-DGkp9jQR.js";import"./context-9lnVgACy.js";import"./Dialog-B7aUPBh_.js";import"./OverlayArrow-Roh2YmoW.js";import"./useControlledState-B9_9qNA0.js";import"./Collection-DmyA85a8.js";import"./CollectionBuilder-BVb55qBm.js";import"./SelectionIndicator-BYFUj2bk.js";import"./Separator-BuFHs16i.js";const ir={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsx(m,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(s,{children:"No access"}),r.jsx(t,{children:"You do not have the required permissions to access this page."}),r.jsx(m,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(m,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(m,{children:"Create app"})]})]})},l={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"App is installing"}),r.jsx(t,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},d={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(s,{children:"No apps installed"}),r.jsx(t,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <Section>
      <IllustratedMessage {...props}>
        <IconApp />
        <Heading>No apps installed</Heading>
        <Text>Create your first app to start working on your website.</Text>
      </IllustratedMessage>
    </Section>
}`,...d.parameters?.docs?.source}}};const pr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,d as InSection,p as Light,c as WithActionGroup,l as WithProgressBar,pr as __namedExportsOrder,ir as default};
