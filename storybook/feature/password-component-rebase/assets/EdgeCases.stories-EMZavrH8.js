import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-Dfqb1myk.js";import"./index-BdpSHsi2.js";import{B as m}from"./Button-B-TblKXe.js";import y from"./Default.stories-uBSWjzD6.js";import{C as h}from"./Content-C-DPMeY8.js";import{S as r}from"./Section-DwCl4E8c.js";import{T as n}from"./Text-Bn2eeMBb.js";import{A as j}from"./ActionGroup-D2JV9Oxq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-DD5mSqD9.js";import{A as g}from"./Action-B-557lRU.js";import{u as f}from"./OverlayTrigger-D55EuV1V.js";import"./DialogTriggerView-DmaQb9YF.js";import"./PropsContextProvider-CYdBAOp_.js";import"./mergeRefs-DCHnGnoY.js";import"./clsx-B-dksMZM.js";import"./iframe-D-8C-fMu.js";import"./index-d29qW9Ar.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Overlay-Blqg8o_V.js";import"./utils-CGBbld1I.js";import"./Dialog-DR27fcja.js";import"./Button-QGm5fJ3f.js";import"./ProgressBar-DVHZMV_Y.js";import"./Label-C3wuJWVC.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-2PTTjRTo.js";import"./useLocalizedStringFormatter-CQZe-1oI.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-KHE_7Dyp.js";import"./useFocus-CrOIx9qr.js";import"./useFocusRing-voAwBIMi.js";import"./useFocusable-CeEllLln.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-BDH2is-P.js";import"./useControlledState-B-V-WRDl.js";import"./Collection-CfN95BI8.js";import"./CollectionBuilder-DWO952CO.js";import"./Separator-CuUYeIPG.js";import"./Text-cxnoU24n.js";import"./SelectionManager-DA0mbM8D.js";import"./useEvent-BleeV9lU.js";import"./useCollator-DIkGalmP.js";import"./FocusScope-CVefUuHc.js";import"./VisuallyHidden-BgU4cU5T.js";import"./IconWarning-Ch13raMy.js";import"./Header-BylNoGKE.js";import"./ButtonView-DfQzvRd9.js";import"./index-BAMY2Nnw.js";import"./LoadingSpinner-DT28EgXh.js";import"./TextField-BHUBtXTq.js";import"./TextFieldBase-lVwFVG-6.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CIFxrWkm.js";import"./FieldError-CaLbDVO5.js";import"./FieldDescription-DLYIjQ8S.js";import"./TextField-C_y54g74.js";import"./Form-8Dlepkcn.js";import"./Input-Y1A_Nvih.js";import"./useTextField-yOa8OnLq.js";import"./useFormReset-DAKGIyMh.js";import"./useFormValidation-CV1_HBS_.js";import"./ReactAriaControlledValueFix-ODLc6jpk.js";import"./Label-Y57imSE6.js";import"./lib-JhBLDDYl.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-D9yn5HXZ.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-DaEIzQ4G.js";import"./ColumnLayout-DfhWJ2QU.js";import"./AccentBox-DTJrNblO.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Heading-DCNnB3YY.js";import"./context-D_rNTmqp.js";import"./useStatic-Cjc_Yc8w.js";import"./getActionGroupSlot-CGLhzlFp.js";import"./ContextMenuSection-BiV8DuHn.js";const Xo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,p,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var a,d,x;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(x=(d=i.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Yo=["LongContent","LongContentOffCanvas"];export{e as LongContent,i as LongContentOffCanvas,Yo as __namedExportsOrder,Xo as default};
