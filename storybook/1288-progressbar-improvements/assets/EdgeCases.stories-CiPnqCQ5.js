import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-fDxMIx7q.js";import"./index-CtQTiInQ.js";import{B as m}from"./Button-DMN4Nt7h.js";import y from"./Default.stories-DGMp5QcA.js";import{C as h}from"./Content-hpcy-Uta.js";import{S as r}from"./Section-B3bS0dJT.js";import{T as n}from"./Text-VF_oP7nB.js";import{A as j}from"./ActionGroup-btqjAAND.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-DkfS3F_u.js";import{A as g}from"./Action-BzpotNjO.js";import{u as f}from"./OverlayTrigger-CeSY8tTU.js";import"./DialogTriggerView--BsqquDh.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./clsx-B-dksMZM.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./Overlay-8eWm40ps.js";import"./utils-D0CTRpvX.js";import"./Dialog-Ds9EASAq.js";import"./Button-BGa7Lue7.js";import"./ProgressBar-TBeTHm5P.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEYeyB88.js";import"./useFocus-HZduNndM.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Cidi8nN7.js";import"./Collection-mdal2UB1.js";import"./CollectionBuilder-Bzd5BBwK.js";import"./Separator-CJeFikfz.js";import"./Text-oMr6ueMZ.js";import"./useOverlayTriggerState-Zz3oHLvd.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-BAB-BMSj.js";import"./useEvent-BQK_0uZ_.js";import"./useCollator-B4aWBoUu.js";import"./FocusScope-Cx-5Cw_n.js";import"./VisuallyHidden-p5Z0Rn92.js";import"./IconApp-ZwiVKkvj.js";import"./IconWarning-DwN0_tyk.js";import"./Header-Czinm9Tb.js";import"./ButtonView-DS1nRTHc.js";import"./LoadingSpinner-CuFSnwXw.js";import"./TextField-BYQKV9VP.js";import"./TextFieldBase-DYOOBnjZ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CXuJOxH0.js";import"./FieldError-DHw7a52T.js";import"./FieldDescription-DV5kfhzf.js";import"./Form-DrDCrztH.js";import"./Input-DIVKzZcg.js";import"./useTextField-CGlHkggm.js";import"./useFormReset-Dt6BcYvw.js";import"./useFormValidation-CI5EZsou.js";import"./Label-C3GsNgl3.js";import"./lib-Chu2SWF6.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-D7dW-bm7.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-C1nUgiIf.js";import"./ColumnLayout-V6_UbH1_.js";import"./AccentBox-mRCof9DO.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Heading-BzdgKMPb.js";import"./context-CTL7IXlD.js";import"./useStatic-6gmUMcuL.js";import"./getActionGroupSlot-OAZ-j8kn.js";import"./ContextMenuSection-CKwYExBR.js";const Vo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
