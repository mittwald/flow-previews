import{j as r}from"./iframe-fd4MG1i8.js";import{I as o}from"./IllustratedMessage-ZIX5DkVo.js";import{H as l}from"./Heading-FU4sLZaF.js";import{T as m}from"./Text-Dcd0JdvI.js";import{B as c}from"./Button-VeSKQaWX.js";import{b as d,z as u}from"./IconWarning-9sqw3U7E.js";import{A as g}from"./ActionGroup-CZpdRo9u.js";import{P as h}from"./ProgressBar-Bc9FDOmK.js";import{L as x}from"./Label-DcZaDq0J.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CuscKuFt.js";import"./index-CeLeQ-qQ.js";import"./index-DLSCOdFN.js";import"./Heading--2_wnKY5.js";import"./RSPContexts-GsdtxIJ1.js";import"./utils-Cwcb_ph1.js";import"./browser-Dh_0Zrut.js";import"./EmulatedBoldText-BOq1lZio.js";import"./Text-Ct_tO_6D.js";import"./LoadingSpinner-BL8icCZR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CKY9Jmr8.js";import"./context-Dbob8nST.js";import"./Button-kSnC9Ww4.js";import"./ProgressBar-ClXxD8qd.js";import"./Label-Cas_0aCA.js";import"./Hidden-DL9_D-g9.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DjhpIeNr.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-P37V2JO8.js";import"./useFocus-BWTUKGe5.js";import"./useFocusRing-LifWKPgp.js";import"./useFocusable-9_bYGa78.js";import"./dynamic-BVBQ4rgw.js";import"./getActionGroupSlot-CrxcE-Hj.js";import"./useStatic-Dbv9nI-W.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-DPvVdlV3.js";import"./Label.module-CUYTf9Jc.js";const tr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(u,{}),r.jsx(l,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(g,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(d,{}),r.jsx(l,{children:"App is installing"}),r.jsx(m,{children:"This can take a couple of minutes."}),r.jsx(h,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(x,{children:"Storage"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ar=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar"];export{t as Danger,a as Dark,s as Default,n as Light,i as WithActionGroup,p as WithProgressBar,ar as __namedExportsOrder,tr as default};
