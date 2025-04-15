import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as i}from"./IllustratedMessage-flWRIncw.js";import"./index-CtQTiInQ.js";import{H as c}from"./Heading-C5oNFXhr.js";import{T as m}from"./Text-VF_oP7nB.js";import{B as p}from"./Button-BN0PFexJ.js";import{b as A,v as C}from"./IconWarning-QXks_Kv-.js";import{a as T,s as w}from"./storyBackgrounds-GFSAi-dI.js";import{A as H}from"./ActionGroup-btqjAAND.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./Heading-BzdgKMPb.js";import"./RSPContexts-8O1fXkhd.js";import"./utils-D0CTRpvX.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-oMr6ueMZ.js";import"./LoadingSpinner-Bpd2bwIk.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./Button-BEBevqbU.js";import"./ProgressBar-DPPT7aTs.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEYeyB88.js";import"./useFocus-HZduNndM.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-OAZ-j8kn.js";import"./useStatic-6gmUMcuL.js";const hr={title:"Content/Illustrated Message",component:i,render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsx(p,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},e={},t={render:o=>r.jsxs(i,{...o,color:"danger",children:[r.jsx(C,{}),r.jsx(c,{children:"No access"}),r.jsx(m,{children:"You do not have the required permissions to access this page."}),r.jsx(p,{children:"Go back"})]})},s={args:{color:"dark"},parameters:{backgrounds:T}},a={args:{color:"light"},parameters:{backgrounds:w}},n={render:o=>r.jsxs(i,{...o,children:[r.jsx(A,{}),r.jsx(c,{children:"No apps installed"}),r.jsx(m,{children:"Create your first app to start working on your website."}),r.jsxs(H,{children:[r.jsx(p,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(p,{children:"Create app"})]})]})};var d,l,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(j=s.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var y,b,B;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(B=(b=a.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var I,D,G;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(G=(D=n.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const xr=["Default","Danger","Dark","Light","WithActionGroup"];export{t as Danger,s as Dark,e as Default,a as Light,n as WithActionGroup,xr as __namedExportsOrder,hr as default};
