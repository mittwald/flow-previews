import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./index-BZISi7jw.js";import{H as a}from"./Heading-CmQGQTPk.js";import{T as c}from"./Text-BPAvSiAh.js";import{L as m}from"./Link-DpPNeacB.js";import{A as e}from"./AccentBox-C9mATMHj.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{S as d}from"./Section-BvLtFQXY.js";import{F as l}from"./Flex-CO6xmqZO.js";import"./IconApp-DZf0STiH.js";import{I as y}from"./IconWarning-BqX4qer7.js";import{L as A}from"./LayoutCard-DpUInEG-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./Heading-DmITIAYD.js";import"./RSPContexts-BEYwq1Zw.js";import"./utils-BAtcVSHo.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./Wrap-DQq6jo70.js";import"./Text-CxIdO6ok.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-ChNHSMR7.js";import"./useFocus-B7LXpZ-i.js";import"./useFocusRing-CYqHz5Aw.js";import"./useFocusable-XxrpiuTs.js";import"./ContextMenuSection-vnKZrTgn.js";import"./Action-DdkAMDFz.js";import"./context-BWt75kQX.js";import"./useStatic-CZ_o1reA.js";import"./getActionGroupSlot-CeuQjEkT.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-BXcqMr2E.js";import"./Button-DAivm4ks.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./useLabel-Bh1EGhcd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./OverlayArrow-PYb9PIt4.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-BNxR9rC7.js";import"./CollectionBuilder-BlZkV0U0.js";import"./Separator-xQlHCyu8.js";import"./SelectionManager-B6hW899S.js";import"./useEvent-0eO3yNkM.js";import"./useCollator-CDl7pGf-.js";import"./FocusScope-BXsjqcwe.js";import"./VisuallyHidden-CfzjMNmM.js";const Ir={title:"Structure/AccentBox",component:e,args:{color:"blue"},render:o=>r.jsx(e,{...o,children:r.jsxs(d,{children:[r.jsx(a,{children:"Heading"}),r.jsx(c,{children:p.medium}),r.jsx(m,{children:"Link"})]})})},n={},t={args:{color:"gradient"},render:o=>r.jsx(e,{...o,children:r.jsxs(l,{align:"center",children:[r.jsxs(l,{direction:"column",grow:!0,children:[r.jsx(a,{size:"l",children:"Heading"}),r.jsx(c,{color:"dark",children:r.jsx("b",{children:p.short})})]}),r.jsx(m,{target:"_blank",href:"#",color:"dark",children:"Link"})]})})},i={args:{color:"blue"},render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{}),r.jsxs(d,{children:[r.jsx(a,{children:"Heading"}),r.jsx(c,{children:p.long}),r.jsx(m,{children:"Link"})]})]})},s={args:{color:"blue"},render:o=>r.jsx(A,{children:r.jsxs(e,{...o,children:[r.jsx(y,{}),r.jsxs(d,{children:[r.jsx(a,{children:"Heading"}),r.jsx(c,{children:p.long}),r.jsx(m,{children:"Link"})]})]})})};var x,g,u;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,j,L;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: "gradient"
  },
  render: props => <AccentBox {...props}>
      <Flex align="center">
        <Flex direction="column" grow>
          <Heading size="l">Heading</Heading>
          <Text color="dark">
            <b>{dummyText.short}</b>
          </Text>
        </Flex>
        <Link target="_blank" href="#" color="dark">
          Link
        </Link>
      </Flex>
    </AccentBox>
}`,...(L=(j=t.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var k,f,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: "blue"
  },
  render: props => <AccentBox {...props}>
      <IconStar />
      <Section>
        <Heading>Heading</Heading>
        <Text>{dummyText.long}</Text>
        <Link>Link</Link>
      </Section>
    </AccentBox>
}`,...(H=(f=i.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var S,T,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: "blue"
  },
  render: props => <LayoutCard>
      <AccentBox {...props}>
        <IconStar />
        <Section>
          <Heading>Heading</Heading>
          <Text>{dummyText.long}</Text>
          <Link>Link</Link>
        </Section>
      </AccentBox>
    </LayoutCard>
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const Fr=["Default","Gradient","WithIcon","InLayoutCard"];export{n as Default,t as Gradient,s as InLayoutCard,i as WithIcon,Fr as __namedExportsOrder,Ir as default};
