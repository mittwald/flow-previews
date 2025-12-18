import{j as r}from"./iframe-C9fRvTrj.js";import{I as e}from"./IllustratedMessage-CpQxAUuG.js";import{H as t}from"./Heading-t9VUyPqr.js";import{T as s}from"./Text-D323xmXD.js";import{B as d}from"./Button-BYUXEkA_.js";import{I as u}from"./IconChevronDown-D_WjmewV.js";import{I as g}from"./IconDanger-Cax3VcTl.js";import{A as x}from"./ActionGroup-D8loN3Ok.js";import{P as h}from"./ProgressBar-CVYcCM6H.js";import{L as j}from"./Label-BRzY6dIy.js";import{S as f}from"./Section-Os3PQZDv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9iKHe4d.js";import"./index-BKw8uTi3.js";import"./index-CLvMUAwA.js";import"./Heading-Ujz6i7vC.js";import"./RSPContexts-CUBdls5w.js";import"./utils-CPkfOZj3.js";import"./browser-CUSAF5aW.js";import"./EmulatedBoldText-CPA2fMYQ.js";import"./Text-BRNikD3K.js";import"./IconX-BNOWC-zb.js";import"./IconCheck-DKwGf3uB.js";import"./LoadingSpinner-CwlmKrOH.js";import"./ariaLive-ZUjptcOn.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-zNln5p4w.js";import"./context-Bv4btMDO.js";import"./remote-BH-MD2MY.js";import"./Button-CwWpYEN0.js";import"./ProgressBar-DI2IDnVu.js";import"./Label-DetJ9FyC.js";import"./Hidden-D46P9k-k.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-KJitgciI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_4yw8jQQ.js";import"./useFocus-bSaDUtch.js";import"./useFocusRing-cRMmIaF9.js";import"./useFocusable-BSBdu-8d.js";import"./dynamic-C1VXiIMv.js";import"./getActionGroupSlot-Dhkl0Gym.js";import"./useStatic-0FUtvL5U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BL5LFdYA.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BxarHMTi.js";import"./lib-90ocxLs-.js";import"./Action-DsOzwT3Y.js";import"./context-CrKYMuPA.js";import"./Dialog-CyDp-GbU.js";import"./OverlayArrow-iEWyRd5r.js";import"./useControlledState-BGzazcEz.js";import"./Collection-b6pGDgVm.js";import"./CollectionBuilder-BloNGw2M.js";import"./SelectionIndicator-Qi7XUyY0.js";import"./Separator-OMU_Us2E.js";import"./SelectionManager-CtYNKPbJ.js";import"./useEvent-CG8oG6I6.js";import"./useCollator-RZF5ztqV.js";import"./FocusScope-CuzzTLeS.js";import"./VisuallyHidden-FzUX7Nba.js";const Hr={title:"Content/Illustrated Message",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:o=>r.jsxs(e,{...o,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(j,{children:"Storage"})})]})},l={render:o=>r.jsx(f,{children:r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
