import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as i}from"./IllustratedMessage-DBaz9RiV.js";import"./index-BKyFwriW.js";import{H as c}from"./Heading-tfuBRgBf.js";import{T as m}from"./Text-BoP-iRG5.js";import{B as p}from"./Button-y_xQsClG.js";import{I as A}from"./IconApp-DtTJ2r0A.js";import{t as C}from"./IconWarning-BwSZGWRf.js";import{a as T,s as w}from"./storyBackgrounds-GFSAi-dI.js";import{A as H}from"./ActionGroup-CNOdpYTp.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmJbWEDO.js";import"./index-C6uLyQP3.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DQw2Bw4b.js";import"./index-C5hMr7Vs.js";import"./Heading-BGdWAVxG.js";import"./RSPContexts-BTRAHvSh.js";import"./utils-DDUQIigj.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-By-RYQJw.js";import"./Wrap-DQq6jo70.js";import"./Text-yNWxiVQR.js";import"./LoadingSpinner-DbRP1bJP.js";import"./useLocalizedStringFormatter-B9DCAH-T.js";import"./Button-DL5r24IA.js";import"./ProgressBar-C4A5wsjg.js";import"./Label-i7acEou4.js";import"./Hidden-6cPdUftz.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DAPKuvGY.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CK926LJU.js";import"./useFocus-DNP1_3BC.js";import"./useFocusRing-BfJpuzZz.js";import"./useFocusable-DFPniEHk.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DrfnkDvY.js";import"./useStatic--5L2q-n6.js";const kr={title:"Content/Illustrated Message",component:i,render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(p,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},e={},t={render:o=>r.jsxs(i,{...o,color:"danger",children:[r.jsx(C,{}),r.jsx(c,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(p,{children:"Go back"})]})},s={args:{color:"dark"},parameters:{backgrounds:T}},a={args:{color:"light"},parameters:{backgrounds:w}},n={render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(H,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})};var d,l,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,j,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var y,B,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(I=(B=a.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var b,D,G;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(G=(D=n.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const jr=["Default","Danger","Dark","Light","WithActionGroup"];export{t as Danger,s as Dark,e as Default,a as Light,n as WithActionGroup,jr as __namedExportsOrder,kr as default};
