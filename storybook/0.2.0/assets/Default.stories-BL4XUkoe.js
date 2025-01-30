import{j as r}from"./jsx-runtime-CLpGMVip.js";import{I as i}from"./IllustratedMessage-Cuxt9MpV.js";import"./index-Cf9XvIV_.js";import{H as c}from"./Heading-rI9d-VUT.js";import{T as m}from"./Text-CaginIuu.js";import{B as p}from"./Button-5K6As1fH.js";import{I as A}from"./IconApp-DYEF1khQ.js";import{g as C}from"./IconWarning-DAGL0qzm.js";import{a as T,s as w}from"./storyBackgrounds-GFSAi-dI.js";import{A as H}from"./ActionGroup-CAFCdjJV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./flowComponent-DxoeBNET.js";import"./index-CFEY-m6m.js";import"./index-ByctJgwf.js";import"./Heading-DOuNAX0R.js";import"./RSPContexts-BG_vMng8.js";import"./utils-DjOXyFua.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./Wrap-DQq6jo70.js";import"./Text-BK3pbL47.js";import"./LoadingSpinner-C2VB9MCl.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Button-D76OI_vo.js";import"./ProgressBar-ZJQghT0g.js";import"./Label-B3UarT55.js";import"./Hidden-Cfl4ctnK.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CNLx9CCl.js";import"./useFocusRing-CvMz7Q_e.js";import"./usePress-lNW0gZrs.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BUNV9fjp.js";import"./useSelector-C73ywo-I.js";const kr={title:"Content/Illustrated Message",component:i,render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(p,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},e={},t={render:o=>r.jsxs(i,{...o,color:"danger",children:[r.jsx(C,{}),r.jsx(c,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(p,{children:"Go back"})]})},s={args:{color:"dark"},parameters:{backgrounds:T}},a={args:{color:"light"},parameters:{backgrounds:w}},n={render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(H,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})};var d,l,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
