import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-CbaOoTE3.js";import"./index-BdpSHsi2.js";import{B as m}from"./Button-BtEmFfOY.js";import y from"./Default.stories-CB33I74S.js";import{C as h}from"./Content-D7jxMs7s.js";import{S as r}from"./Section-BtOYUA3v.js";import{T as n}from"./Text-C34KZyPK.js";import{A as j}from"./ActionGroup-CA99TVoO.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-DkrV1Pgg.js";import{A as g}from"./Action-C-s5bYYJ.js";import{u as f}from"./OverlayTrigger-utx7hK1E.js";import"./DialogTriggerView-Ci_jys8n.js";import"./PropsContextProvider-zSZwSRjc.js";import"./mergeRefs-C3hk6Bw5.js";import"./clsx-B-dksMZM.js";import"./iframe-BPphfT07.js";import"./index-d29qW9Ar.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Overlay-OIIxTpj1.js";import"./utils-B2jHvTU8.js";import"./Dialog-6hciMxaP.js";import"./Button-0sHIpBCS.js";import"./ProgressBar-D87xnYtB.js";import"./Label-DULpRqFS.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BTthEqzH.js";import"./useLocalizedStringFormatter-CVg1y45F.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D8pXfMRf.js";import"./useFocus-DtkvuJ2b.js";import"./useFocusRing-CsskK932.js";import"./useFocusable-J3t5Qa20.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BSrl9XNn.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-DiFzyIMP.js";import"./CollectionBuilder-CBZ2qMwz.js";import"./Separator-C9CvzOtQ.js";import"./Text-bCwBREBS.js";import"./SelectionManager-CAHkB1hu.js";import"./useEvent-CVP7MjLG.js";import"./useCollator-B6tK7UUT.js";import"./FocusScope-D-amBDVp.js";import"./VisuallyHidden-DvRlzb5d.js";import"./IconWarning-BrE3dinm.js";import"./Header-oIdwhmZG.js";import"./ButtonView-D1Grhx2l.js";import"./index-BAMY2Nnw.js";import"./LoadingSpinner-B4dsTci8.js";import"./TextField-Dp98Hulf.js";import"./TextFieldBase-RusOu8T9.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DVis9N2h.js";import"./FieldError-DsqxgZkx.js";import"./FieldDescription-oNOhWOoO.js";import"./TextField-4NekkW3z.js";import"./Form-D_RCBvUR.js";import"./Input-Cd7kiHog.js";import"./useTextField-CRJUdjbO.js";import"./useFormReset-dEmc_A_j.js";import"./useFormValidation-BVpaaUUN.js";import"./Label-j_FUI4it.js";import"./lib-CmDDd_0L.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-CxCUQ48b.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-BAh7HOg4.js";import"./ColumnLayout-OKPeYHvw.js";import"./AccentBox-BZek-5WZ.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Heading-FTY3VzEi.js";import"./context-BNkKO8Z0.js";import"./useStatic-B7E18sMA.js";import"./getActionGroupSlot-C0WXI-_A.js";import"./ContextMenuSection-BvDkGmg6.js";const Wo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <Modal {...props} controller={useOverlayController("Modal", {
    isDefaultOpen: true
  })}>
      <Heading>{dummyText.short}</Heading>
      <Content>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Content>
      <ActionGroup>
        <Action closeOverlay="Modal">
          <Button color="accent">Create customer</Button>
          <Button variant="soft" color="secondary">
            Abort
          </Button>
        </Action>
      </ActionGroup>
    </Modal>
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var a,d,x;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: props => <Modal offCanvas {...props} controller={useOverlayController("Modal", {
    isDefaultOpen: true
  })}>
      <Heading>{dummyText.short}</Heading>
      <Content>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Content>
      <ActionGroup>
        <Action closeOverlay="Modal">
          <Button color="accent">Create customer</Button>
          <Button variant="soft" color="secondary">
            Abort
          </Button>
        </Action>
      </ActionGroup>
    </Modal>
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Xo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Xo as __namedExportsOrder,Wo as default};
