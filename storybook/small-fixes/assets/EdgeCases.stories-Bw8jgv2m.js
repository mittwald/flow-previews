import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-CXlbyq1x.js";import"./index-F2Fta7eo.js";import{B as m}from"./Button--1WLxUl1.js";import y from"./Default.stories-BzbHxmtL.js";import{C as h}from"./Content-Bs0P3V9_.js";import{S as r}from"./Section-hr9VFpcr.js";import{T as n}from"./Text-C9-UAqt7.js";import{A as j}from"./ActionGroup-Ctzl3N1i.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-HpIft6AR.js";import{A as g}from"./Action-CXU1vJUm.js";import{u as f}from"./OverlayTrigger-GuqkqyKk.js";import"./DialogTriggerView--8hLSldg.js";import"./PropsContextProvider-CGP4rIIM.js";import"./mergeRefs-12BfVTtv.js";import"./clsx-B-dksMZM.js";import"./index-GHXRqlzO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FKzx4Va7.js";import"./Overlay-Bf_95c7E.js";import"./utils-D0arg4qg.js";import"./Dialog-BBdTn5Uc.js";import"./Button-DCaCfXLp.js";import"./ProgressBar-bhmU_ZvQ.js";import"./Label-wLZ3I4V9.js";import"./Hidden-aaDrlwOM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DB0A2tZF.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-Tcmfb9SA.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-ULot_6Ir.js";import"./Collection-CutN93xp.js";import"./CollectionBuilder-D5vZPvsR.js";import"./Separator-YWiDMMN1.js";import"./Text-AN1gvCNp.js";import"./useOverlayTriggerState-Bt-3O924.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./IconWarning-JHNVKD2U.js";import"./Header-W-UveeEH.js";import"./ButtonView-DkydkyON.js";import"./LoadingSpinner-IrCiETzR.js";import"./TextField-Dh3hCh6z.js";import"./TextFieldBase-Dy8h9Xb9.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-0BX6MfJt.js";import"./FieldError-Cy41ow6l.js";import"./FieldDescription-B98Zun0D.js";import"./Form-YK_aY0K2.js";import"./Input-BJzWkL0O.js";import"./useTextField-lWgcofAo.js";import"./useFormReset-hDk0Ijlo.js";import"./useFormValidation-C9irvmUd.js";import"./Label-D4btQWmC.js";import"./lib-DuAZb8A3.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-CbN0B06m.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-4KKDce-u.js";import"./ColumnLayout-I8_MRzzX.js";import"./AccentBox-BVvY7BbO.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Heading-AP9WPpJD.js";import"./context-Df4xkzhD.js";import"./useStatic-CeLwg7Tb.js";import"./getActionGroupSlot-Cwkd5BAj.js";import"./ContextMenuSection-Bbxa0KP_.js";const Uo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Vo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Vo as __namedExportsOrder,Uo as default};
