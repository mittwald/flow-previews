import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as i}from"./IllustratedMessage-MDd3vQQt.js";import"./index-BZISi7jw.js";import{H as c}from"./Heading-CnJT-hhq.js";import{T as m}from"./Text-DKc2hFom.js";import{B as p}from"./Button-CF4ZysTX.js";import{I as A}from"./IconApp-W8-S6AAB.js";import{q as C}from"./IconWarning-BUA863Ku.js";import{a as T,s as w}from"./storyBackgrounds-GFSAi-dI.js";import{A as H}from"./ActionGroup-BYf0wJDm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPJHi05H.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-DmntCNXg.js";import"./Heading-Cc6WIW0_.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-B8p6n-_S.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-CUmgXOYU.js";import"./LoadingSpinner-Cpk2RUSc.js";import"./useLocalizedStringFormatter-z2l0_8m0.js";import"./Button-DlOLKXkK.js";import"./ProgressBar-CMGFgh_N.js";import"./Label-CRtDyyLG.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DjubqfyV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_abas1X.js";import"./useFocus-0lzzAyJ_.js";import"./useFocusRing-C08ZnYSv.js";import"./useFocusable-dJayk3b7.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CX7tjRC3.js";import"./useStatic-Boalhu8h.js";const kr={title:"Content/Illustrated Message",component:i,render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(p,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},e={},t={render:o=>r.jsxs(i,{...o,color:"danger",children:[r.jsx(C,{}),r.jsx(c,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(p,{children:"Go back"})]})},s={args:{color:"dark"},parameters:{backgrounds:T}},a={args:{color:"light"},parameters:{backgrounds:w}},n={render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(H,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})};var d,l,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
