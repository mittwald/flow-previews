import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{I as o}from"./IllustratedMessage-CjGRkQyb.js";import"./index-BdpSHsi2.js";import{H as m}from"./Heading-C-1BiQcz.js";import{T as d}from"./Text-Dj6Eukiy.js";import{B as c}from"./Button-Jvc2UyzG.js";import{c as l,w as S}from"./IconWarning-DMVFngCJ.js";import{a as w,s as C}from"./storyBackgrounds-GFSAi-dI.js";import{A as v}from"./ActionGroup-BXEIqHOc.js";import{P}from"./ProgressBar-DqOc3p0u.js";import{L as N}from"./Label-CfWgRJly.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cph-GBwT.js";import"./mergeRefs-DCHnGnoY.js";import"./iframe-Dp9qA-7f.js";import"./index-d29qW9Ar.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./index-BAMY2Nnw.js";import"./Heading-DCNnB3YY.js";import"./RSPContexts-Cbm9ZJUe.js";import"./utils-CGBbld1I.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-cxnoU24n.js";import"./LoadingSpinner-C9S_TFoA.js";import"./useLocalizedStringFormatter-CQZe-1oI.js";import"./Button-QGm5fJ3f.js";import"./ProgressBar-DVHZMV_Y.js";import"./Label-C3wuJWVC.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-2PTTjRTo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-KHE_7Dyp.js";import"./useFocus-CrOIx9qr.js";import"./useFocusRing-voAwBIMi.js";import"./useFocusable-CeEllLln.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-D9gQeyD5.js";import"./useStatic-BQse7r-P.js";import"./Legend-KCTIS77A.js";const Dr={title:"Content/Illustrated Message",component:o,render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{}),r.jsx(m,{children:"No apps installed"}),r.jsx(d,{children:"Create your first app to start working on your website."}),r.jsx(c,{children:"Create app"})]}),argTypes:{color:{control:"inline-radio"}},args:{color:"primary"}},s={},t={render:e=>r.jsxs(o,{...e,color:"danger",children:[r.jsx(S,{}),r.jsx(m,{children:"No access"}),r.jsx(d,{children:"You do not have the required permissions to access this page."}),r.jsx(c,{children:"Go back"})]})},a={args:{color:"dark"},parameters:{backgrounds:w}},n={args:{color:"light"},parameters:{backgrounds:C}},i={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{}),r.jsx(m,{children:"No apps installed"}),r.jsx(d,{children:"Create your first app to start working on your website."}),r.jsxs(v,{children:[r.jsx(c,{variant:"soft",color:"secondary",children:"Go back"}),r.jsx(c,{children:"Create app"})]})]})},p={render:e=>r.jsxs(o,{...e,children:[r.jsx(l,{}),r.jsx(m,{children:"App is installing"}),r.jsx(d,{children:"This can take a couple of minutes."}),r.jsx(P,{value:500,maxValue:1e3,minValue:0,formatOptions:{style:"unit",unit:"gigabyte"},...e,children:r.jsx(N,{children:"Storage"})})]})};var u,g,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,j,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
