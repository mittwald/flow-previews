import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as o}from"./IllustratedMessage-CWpi5W9y.js";import"./index-BdpSHsi2.js";import{H as m}from"./Heading-D1frdGeE.js";import{T as d}from"./Text-CkXrZbA6.js";import{B as c}from"./Button-B6q4F9OQ.js";import{c as l,w as S}from"./IconWarning-DFoLg5n2.js";import{a as w,s as C}from"./storyBackgrounds-GFSAi-dI.js";import{A as v}from"./ActionGroup-p7poY8r5.js";import{P}from"./ProgressBar-BM45E8MB.js";import{L as N}from"./Label-Bf5Mx8QJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-9qCNROlN.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-C7iDEH5n.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./index-BAMY2Nnw.js";import"./Heading-PKR8zMP8.js";import"./RSPContexts-Cbm9ZJUe.js";import"./utils-q_Aud5Js.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";import"./LoadingSpinner-BAYf23di.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./Button-BV9jeieD.js";import"./ProgressBar-DbWwTk60.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-B8fgmrQy.js";import"./useStatic-CUvuFqEi.js";import"./Legend-DTNEVLir.js";const Dr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{}),r.jsx(m,{children:"No apps installed"}),r.jsx(d,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(S,{}),r.jsx(m,{children:"No access"}),r.jsx(d,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},parameters:{backgrounds:w}},n={args:{color:"light"},parameters:{backgrounds:C}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{}),r.jsx(m,{children:"No apps installed"}),r.jsx(d,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{}),r.jsx(m,{children:"App is installing"}),r.jsx(d,{children:"This can take a couple of minutes."}),r.jsx(P,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(N,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: props => <IllustratedMessage {...props} color="danger">
      <IconDanger />
      <Heading>No access</Heading>
      <Text>You do not have the required permissions to access this page.</Text>
      <Button>Go back</Button>
    </IllustratedMessage>
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var f,y,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  parameters: {
    backgrounds: storyBackgroundLight
  }
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var b,I,A;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  parameters: {
    backgrounds: storyBackgroundDark
  }
}`,...(A=(I=n.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var T,D,G;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(G=(D=i.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var H,L,M;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(M=(L=p.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const Gr=["Default","Danger","Dark","Light","WithActionGroup","WithProgressBar"];export{t as Danger,a as Dark,s as Default,n as Light,i as WithActionGroup,p as WithProgressBar,Gr as __namedExportsOrder,Dr as default};
