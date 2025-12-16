import{j as r}from"./iframe-D7SrQHv2.js";import{I as e}from"./IllustratedMessage-BWE59EjC.js";import{H as t}from"./Heading-Bt8iyrDh.js";import{T as s}from"./Text-DGpwmxCB.js";import{B as d}from"./Button-BDlkh_ZH.js";import{I as u}from"./IconChevronDown-CXRERNRA.js";import{I as g}from"./IconDanger-Bz8n8vBB.js";import{A as x}from"./ActionGroup-B6ZvpuSe.js";import{L as h}from"./Label-77ddNxr9.js";import{S as j}from"./Section-8dl5sO8X.js";import{P as f}from"./ProgressBar-Bi08bFxH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CdkQ0XB3.js";import"./index-CCC8SqCu.js";import"./index-CJAJ5du0.js";import"./Heading-CAzYiv_H.js";import"./RSPContexts-BbVjh3iw.js";import"./utils-CiuuAwJm.js";import"./browser-DrK2T41E.js";import"./EmulatedBoldText-ChURRL1S.js";import"./Text-BPF9cVJc.js";import"./IconX-YfbAbyEb.js";import"./IconCheck-COidvS8_.js";import"./LoadingSpinner-DamTO0x3.js";import"./ariaLive-Q32cUtZw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CSuZD65V.js";import"./context-B_BzGt6a.js";import"./remote-DGKmlYcY.js";import"./Button-CGLL8cMT.js";import"./ProgressBar-BmurXtXH.js";import"./Label-mdRoqDLO.js";import"./Hidden-4rkKn0h6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1Ghq-Vq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DfsmQJPe.js";import"./useFocus-BORqc-Rv.js";import"./useFocusRing-DLDXyuvP.js";import"./useFocusable-7SxWl0Ga.js";import"./dynamic-CUG3tgkH.js";import"./getActionGroupSlot-CTkBqXfr.js";import"./useStatic-D8BNL5i4.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-C543Zwy4.js";import"./lib-90ocxLs-.js";import"./Action-DB8rk5cM.js";import"./context-CVbxfW-6.js";import"./Dialog-CW3mhUGv.js";import"./OverlayArrow-BXm03fKW.js";import"./useControlledState-Cadz1yCZ.js";import"./Collection-CZosAz-h.js";import"./CollectionBuilder-_0MC8FEk.js";import"./SelectionIndicator-CCNZqYbX.js";import"./Separator-BakLcgEu.js";import"./SelectionManager-CL7Yq_XD.js";import"./useEvent-B0YrkZQx.js";import"./useCollator-CdHH68uY.js";import"./FocusScope-rpDCGS-B.js";import"./VisuallyHidden-BTFx-uOK.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./Legend-DQhZOjz7.js";const Hr={title:"Content/Illustrated Message",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsx(d,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},a={},n={render:o=>r.jsxs(e,{...o,color:"danger",children:[r.jsx(g,{}),r.jsx(t,{children:"No access"}),r.jsx(s,{children:"You do not have the required permissions to access this page."}),r.jsx(d,{children:"Go back"})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},p={args:{color:"light"},globals:{backgrounds:"dark"}},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."}),r.jsxs(x,{children:[r.jsx(d,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(d,{children:"Create app"})]})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"App is installing"}),r.jsx(s,{children:"This can take a couple of minutes."}),r.jsx(f,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...o,children:r.jsx(h,{children:"Storage"})})]})},l={render:o=>r.jsx(j,{children:r.jsxs(e,{...o,children:[r.jsx(u,{}),r.jsx(t,{children:"No apps installed"}),r.jsx(s,{children:"Create your first app to start working on your website."})]})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
