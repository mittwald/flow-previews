import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-DL3wh3aD.js";import"./index-BdpSHsi2.js";import{B as m}from"./Button-DCJGIne7.js";import y from"./Default.stories-BJa1YHNp.js";import{C as h}from"./Content-DmczonI2.js";import{S as r}from"./Section-B1rjZv41.js";import{T as n}from"./Text-B_vh-qpw.js";import{A as j}from"./ActionGroup-xQn9MFwA.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-BmKamEmV.js";import{A as g}from"./Action-CVyVOqVd.js";import{u as f}from"./DialogTriggerView-o1yjrucS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWbeLAQa.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-DVtgXtAx.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Overlay-Casebfhc.js";import"./utils-q_Aud5Js.js";import"./Dialog-CLdEiJe6.js";import"./Button-BV9jeieD.js";import"./ProgressBar-DbWwTk60.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-fUY3Kb5L.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./Text-DtGJyZhh.js";import"./SelectionManager-DweNvqjD.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-DWYYoDxV.js";import"./FocusScope-D_x47-q0.js";import"./VisuallyHidden-BtcTDQEe.js";import"./IconWarning-bovUZPoz.js";import"./Header-DCosKroR.js";import"./ButtonView-Dh5anBW-.js";import"./index-BAMY2Nnw.js";import"./LoadingSpinner-xw9dIdYu.js";import"./TextField-9c2wKUU-.js";import"./TextFieldBase-Ct4-ypHH.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-D_MVdp37.js";import"./FieldError-D2eBwE7I.js";import"./FieldDescription-BOM3aj5s.js";import"./TextField-BqNO7Lq4.js";import"./Form-CSvT4C5Q.js";import"./Input-Dom3MqAg.js";import"./useTextField-xVyqyefx.js";import"./useFormReset-B9LhY6oC.js";import"./useFormValidation-BP6joqgG.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";import"./Label-BIUzoK_i.js";import"./lib-ByZTddEE.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-DNKhJzWK.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-BXKYw0NX.js";import"./ColumnLayout-ClQYFj2P.js";import"./AccentBox-BPHsDqvj.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Heading-PKR8zMP8.js";import"./context-CtwYBstP.js";import"./useStatic-ByjJnZlZ.js";import"./getActionGroupSlot-CflA_tFY.js";import"./ContextMenuSection-Bl08V6Zg.js";const Wo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
