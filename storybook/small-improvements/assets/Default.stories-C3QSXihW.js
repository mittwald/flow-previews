import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as i}from"./IllustratedMessage-ZzMCVLxv.js";import"./index-BZISi7jw.js";import{H as c}from"./Heading-BkqfOpTv.js";import{T as m}from"./Text-BwURBFsG.js";import{B as p}from"./Button-BJXlxerY.js";import{I as A}from"./IconApp-Do9-6_HN.js";import{t as C}from"./IconWarning-Dahq1OkV.js";import{a as T,s as w}from"./storyBackgrounds-GFSAi-dI.js";import{A as H}from"./ActionGroup-B_-ythaz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CB_r5UQ3.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./Heading-DmITIAYD.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-BAtcVSHo.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-CxIdO6ok.js";import"./LoadingSpinner-BWATc-O8.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./Button-Bd7GnYjT.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-AhNAqARA.js";import"./useFocus-CGq_xkJe.js";import"./useFocusRing-D6MLu59I.js";import"./useFocusable-D8BATkaF.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CDFIfnsV.js";import"./useStatic-D-e10mVk.js";const kr={title:"Content/Illustrated Message",component:i,render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(p,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},e={},t={render:o=>r.jsxs(i,{...o,color:"danger",children:[r.jsx(C,{}),r.jsx(c,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(p,{children:"Go back"})]})},s={args:{color:"dark"},parameters:{backgrounds:T}},a={args:{color:"light"},parameters:{backgrounds:w}},n={render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(H,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})};var d,l,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
