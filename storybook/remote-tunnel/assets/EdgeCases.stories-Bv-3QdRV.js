import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-Clk9DmDt.js";import"./index-F2Fta7eo.js";import{B as m}from"./Button-BnTBwkEg.js";import y from"./Default.stories-C9m6CQ1U.js";import{C as h}from"./Content-BWe_yW8H.js";import{S as r}from"./Section-Dg-5V3o8.js";import{T as n}from"./Text-7Ea1pSem.js";import{A as j}from"./ActionGroup-CySzKKeu.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-DPOiM4DU.js";import{A as g}from"./Action-D_txT674.js";import{u as f}from"./OverlayTrigger-DuRzIszt.js";import"./DialogTriggerView-YxZ_3xYQ.js";import"./PropsContextProvider-D3rsNiIo.js";import"./mergeRefs-12BfVTtv.js";import"./clsx-B-dksMZM.js";import"./index-GHXRqlzO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-FKzx4Va7.js";import"./Overlay-DSFHBiwG.js";import"./utils-D0arg4qg.js";import"./Dialog-BBdTn5Uc.js";import"./Button-DCaCfXLp.js";import"./ProgressBar-bhmU_ZvQ.js";import"./Label-wLZ3I4V9.js";import"./Hidden-aaDrlwOM.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DB0A2tZF.js";import"./useLocalizedStringFormatter-QhihLYa3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-heCNvahi.js";import"./useFocus-CPhYqd-d.js";import"./useFocusRing-4oM8aI2c.js";import"./useFocusable-Tcmfb9SA.js";import"./RSPContexts-DhZDYkwS.js";import"./OverlayArrow-ULot_6Ir.js";import"./Collection-CutN93xp.js";import"./CollectionBuilder-D5vZPvsR.js";import"./Separator-YWiDMMN1.js";import"./Text-AN1gvCNp.js";import"./useOverlayTriggerState-Bt-3O924.js";import"./useControlledState-15AFXVxl.js";import"./SelectionManager-1l7b-eWb.js";import"./useEvent-BL4Dc6Ef.js";import"./useCollator-4BrhQKp8.js";import"./FocusScope-BlLq5c4F.js";import"./VisuallyHidden-LoYkyM-T.js";import"./IconWarning-nCcfNxWu.js";import"./Header-txkhJtGP.js";import"./ButtonView-Dckt0NDD.js";import"./LoadingSpinner-B0pJuQ0o.js";import"./TextField-DZskqZlR.js";import"./TextFieldBase-Dfinb1OZ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DoeaQ2sS.js";import"./FieldError-Cy41ow6l.js";import"./FieldDescription-Drbq037s.js";import"./Form-YK_aY0K2.js";import"./Input-BJzWkL0O.js";import"./useTextField-lWgcofAo.js";import"./useFormReset-hDk0Ijlo.js";import"./useFormValidation-C9irvmUd.js";import"./Label-C5I0_5k-.js";import"./lib-CuKzYaLM.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-Dj9Dal_U.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-COEUvY78.js";import"./ColumnLayout-CGB39YPP.js";import"./AccentBox-h-ZgT_DB.js";import"./EmulatedBoldText-DovK0xj5.js";import"./Heading-AP9WPpJD.js";import"./context-B9KHFPHr.js";import"./useStatic-Dtn5bOBE.js";import"./getActionGroupSlot-CJb65JRM.js";import"./ContextMenuSection-yfeiCdSS.js";const Uo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
