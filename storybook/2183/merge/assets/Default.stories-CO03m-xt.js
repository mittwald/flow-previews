import{j as r}from"./iframe-Eg8-wFCR.js";import{I as e}from"./IllustratedMessage-C1gtSO11.js";import{H as t}from"./Heading-B3sOltah.js";import{T as s}from"./Text-cFe2oWr9.js";import{B as d}from"./Button-bx6caw1c.js";import{I as u}from"./IconChevronDown-CB7etEhV.js";import{I as g}from"./IconDanger-Djal8A6_.js";import{A as x}from"./ActionGroup-Bgv1jUgx.js";import{P as h}from"./ProgressBar-CfTnbcVr.js";import{L as j}from"./Label-1lc8IvKU.js";import{S as f}from"./Section-CDeeOWJg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-8KVNBPc4.js";import"./index-BbsXAeQz.js";import"./index-7P9p2RDg.js";import"./Heading-BYMbJv2p.js";import"./RSPContexts-ajqDrbBU.js";import"./utils-DpUmHG9o.js";import"./browser-CGaD3WbY.js";import"./EmulatedBoldText-BvL31EIC.js";import"./Text-CVQZ1Ff_.js";import"./IconX-chnQqdsu.js";import"./IconCheck-CfWObqtZ.js";import"./LoadingSpinner-l0sJlHn4.js";import"./ariaLive-JHqpu2fU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DPRCgyho.js";import"./context-D30M243T.js";import"./remote-DyWsWGYm.js";import"./Button-DrB4xT8J.js";import"./ProgressBar-BDU9deru.js";import"./Label-ayphvmky.js";import"./Hidden-CPM5AGUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiQu3Cp5.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eXiMCUEC.js";import"./useFocus-BombNWQr.js";import"./useFocusRing-DXLUoCe1.js";import"./useFocusable-CMi9d24v.js";import"./dynamic-DS6EBQ3r.js";import"./getActionGroupSlot-Dz1zi_Ez.js";import"./useStatic-BFryEnnL.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-DfZ7P7y6.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DlfXeTZ7.js";import"./lib-90ocxLs-.js";import"./Action-DV4LdD_S.js";import"./context-W5o617c2.js";import"./Dialog-BIruH5Sw.js";import"./OverlayArrow-CDko6Bkl.js";import"./useControlledState-B4vwiKN6.js";import"./Collection-DZl0ZzX8.js";import"./CollectionBuilder-B_QcNnrf.js";import"./SelectionIndicator-LygQ_MIk.js";import"./Separator-DQMCvS0x.js";import"./SelectionManager-CFu8e8go.js";import"./useEvent-Cv81pFWJ.js";import"./useCollator-C-69fnSd.js";import"./FocusScope-BFrkZdE_.js";import"./VisuallyHidden-B_EYeIgM.js";const Hr={title:"Content/Illustrated Message",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:o=>r.jsxs(e,{...o,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(j,{children:"Storage"})})]})},l={render:o=>r.jsx(f,{children:r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Mr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar","InSection"];export{n as Danger,i as Dark,a as Default,l as InSection,p as Light,c as WithActionGroup,m as WithProgressBar,Mr as __namedExportsOrder,Hr as default};
