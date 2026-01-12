import{j as r}from"./iframe-DpNCYkDX.js";import{I as o}from"./IllustratedMessage-VNxbWNZz.js";import{H as t}from"./Heading-CdQ6Kdnh.js";import{T as s}from"./Text-Bp6u83O8.js";import{B as d}from"./Button-CB8TQqfw.js";import{b as u,m as g}from"./IconWarning-CcmUiij-.js";import{A as x}from"./ActionGroup-DQeeqJWq.js";import{P as h}from"./ProgressBar-y1dqZ65K.js";import{L as j}from"./Label-DxyEdRqz.js";import{S as f}from"./Section-Xx985Qwf.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./index-lXFaKghW.js";import"./Heading-Cba33pi1.js";import"./RSPContexts-_XCAh6rU.js";import"./utils-YaT_C2bO.js";import"./browser-BfCz5g6M.js";import"./EmulatedBoldText-DU1S0mM2.js";import"./Text-B4MgbG6f.js";import"./LoadingSpinner-mT2tjpr6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./context-Df7wrknH.js";import"./remote-FHZXAXl3.js";import"./Button-DAbgtjDL.js";import"./ProgressBar-BiLC8jqV.js";import"./Label-DRXP2wjN.js";import"./Hidden-AzE2Q4X1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtioSroH.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-OMCV4DY8.js";import"./useFocus-CLy8_GQ0.js";import"./useFocusRing-DWz_LOyJ.js";import"./useFocusable-BsZoANuz.js";import"./dynamic-DOXkjdco.js";import"./getActionGroupSlot-Uc-3WiS8.js";import"./useStatic-C-pVfuV7.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-C1WZF0xL.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BWIiCJCm.js";import"./Action-CnYZaomm.js";import"./context-CUs0iBzd.js";import"./Dialog-DtZU9YT9.js";import"./OverlayArrow-DaAbsuct.js";import"./useControlledState-CFzFCELG.js";import"./Collection-B0Nu23OM.js";import"./CollectionBuilder-XTUTawTi.js";import"./SelectionIndicator-qbtLTFTY.js";import"./Separator-DkK11TMO.js";import"./SelectionManager-u_c2A7HJ.js";import"./useEvent-D64C7zgK.js";import"./useCollator-BChcYNiy.js";import"./FocusScope-DPz7ONOW.js";import"./VisuallyHidden-BhiVW_d3.js";const Sr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:e=>r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(j,{children:"Storage"})})]})},l={render:e=>r.jsx(f,{children:r.jsxs(o,{...e,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <Section>
      <IllustratedMessage {...props}>
        <IconApp />
        <Heading>No apps installed</Heading>
        <Text>Create your first app to start working on your website.</Text>
      </IllustratedMessage>
    </Section>
}`,...l.parameters?.docs?.source}}};const Br=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,l as InSection,p as Light,c as WithActionGroup,m as WithProgressBar,Br as __namedExportsOrder,Sr as default};
