import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-CHfTfJIc.js";import"./index-F2Fta7eo.js";import{B as m}from"./Button-FYdEfAPS.js";import y from"./Default.stories-D_3Foltf.js";import{C as h}from"./Content-DAdrvVNR.js";import{S as r}from"./Section-C-ZC57DR.js";import{T as n}from"./Text-CSTNT9NW.js";import{A as j}from"./ActionGroup-C0UIXB8Y.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-GeYjpnxL.js";import{A as g}from"./Action-BLwy8x-7.js";import{u as f}from"./OverlayTrigger-DIljMj1o.js";import"./DialogTriggerView-BKm6wmXC.js";import"./PropsContextProvider-dnCHcaDZ.js";import"./mergeRefs-12BfVTtv.js";import"./clsx-B-dksMZM.js";import"./index-GHXRqlzO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FKzx4Va7.js";import"./Overlay-BJxU73Zi.js";import"./utils-DsSK6wng.js";import"./Dialog-Btg-CSVS.js";import"./Button-xWdcV2_p.js";import"./ProgressBar-C0yX1I0t.js";import"./Label-DhTxnYZq.js";import"./Hidden-aaDrlwOM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DB0A2tZF.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-S4fA3fDW.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-DrRmwQ1y.js";import"./Collection-CXg7zLcg.js";import"./CollectionBuilder-YMr182AN.js";import"./Separator-9Mo8yYmd.js";import"./Text-D85TVzOv.js";import"./useOverlayTriggerState-DOVnl7Ya.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./IconWarning-BXNHVn6I.js";import"./Header-YUHVgLiM.js";import"./ButtonView-HQlQ0pQD.js";import"./LoadingSpinner-FjZNoaNQ.js";import"./TextField-B48bMVLU.js";import"./TextFieldBase-B3HRuok7.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-vV6cTwrc.js";import"./FieldError-BaSwT8L9.js";import"./FieldDescription-CqiWff4d.js";import"./TextField-DhsJuBzf.js";import"./Form-DGdGrcxA.js";import"./useFormValidation-Cx3HAYEY.js";import"./Input-U0jm-HC5.js";import"./useTextField-DNqZJpGv.js";import"./useFormReset-hDk0Ijlo.js";import"./Label-RNQn_NAE.js";import"./lib-JMptqih1.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-DShYMyrk.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-V-INXxnz.js";import"./ColumnLayout-BlZBMg8V.js";import"./AccentBox-Z8qd4kri.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Heading-ASQfGrEK.js";import"./context-B4icoHkB.js";import"./useStatic-DZIU6iu_.js";import"./getActionGroupSlot-DgOV_5yI.js";import"./ContextMenuSection-CrpLscK9.js";const Vo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Wo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Wo as __namedExportsOrder,Vo as default};
