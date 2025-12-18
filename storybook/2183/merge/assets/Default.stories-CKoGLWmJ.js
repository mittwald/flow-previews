import{j as r}from"./iframe-BTx5vfX7.js";import{I as e}from"./IllustratedMessage-C_8pykKh.js";import{H as t}from"./Heading-_rP_UYQu.js";import{T as s}from"./Text-DtYTBG7c.js";import{B as d}from"./Button-D0j5fRAE.js";import{I as u}from"./IconChevronDown-Bn-1yhHQ.js";import{I as g}from"./IconDanger-C580gt5j.js";import{A as x}from"./ActionGroup-BRc6QQmr.js";import{P as h}from"./ProgressBar-DjReZfjm.js";import{L as j}from"./Label-D_U9lVoj.js";import{S as f}from"./Section-Cwd5koeW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQbG36RI.js";import"./index-CD1bc2Uf.js";import"./index-Cy86CRop.js";import"./Heading-BDRq_a2q.js";import"./RSPContexts-BtkGYzrU.js";import"./utils-Rd_MYUg3.js";import"./browser-D9-bvGMx.js";import"./EmulatedBoldText-B89XKop2.js";import"./Text-LwG1QgpY.js";import"./IconX-DrrrdYIY.js";import"./IconCheck-C5Vwpnc3.js";import"./LoadingSpinner-Dr6BVqO2.js";import"./ariaLive-BGIgGOOV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BiBfXFe3.js";import"./context-B8-2fWdM.js";import"./remote-CDkUNGK4.js";import"./Button-D8R90X95.js";import"./ProgressBar-DnkhtDlt.js";import"./Label-nt-Mf4T_.js";import"./Hidden-B6Npv2sL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CAHdnPVW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g9jBnoDE.js";import"./useFocus-DM7IXQDx.js";import"./useFocusRing-DjSlkPuN.js";import"./useFocusable-_zqulMQl.js";import"./dynamic-D8ImZldj.js";import"./getActionGroupSlot-D_UK-737.js";import"./useStatic-BtxQ9m_K.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-BQsVZlYh.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-QYYvFEyc.js";import"./lib-90ocxLs-.js";import"./Action-CSkp_lnv.js";import"./context-q9yNmKLz.js";import"./Dialog-CQOoDKQ_.js";import"./OverlayArrow-eT6vjoGK.js";import"./useControlledState-DNSedTkS.js";import"./Collection-Bq23K6rA.js";import"./CollectionBuilder-BJtlCmWC.js";import"./SelectionIndicator-BGe0ubEQ.js";import"./Separator-hpMdbhNe.js";import"./SelectionManager-ix7t88Nr.js";import"./useEvent-B9LXMUdK.js";import"./useCollator-BFlHC0Dr.js";import"./FocusScope-ConnSCr6.js";import"./VisuallyHidden-xosq-5v9.js";const Hr={title:"Content/Illustrated Message",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:o=>r.jsxs(e,{...o,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(j,{children:"Storage"})})]})},l={render:o=>r.jsx(f,{children:r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
