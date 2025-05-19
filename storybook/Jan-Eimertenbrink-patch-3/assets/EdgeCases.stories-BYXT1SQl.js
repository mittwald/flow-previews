import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-CEhL91UB.js";import"./index-CgfFrydU.js";import{B as m}from"./Button-C5D3ZbLG.js";import y from"./Default.stories-A0r6fz1X.js";import{C as h}from"./Content-DNNUYdBY.js";import{S as r}from"./Section-B72N-ElC.js";import{T as n}from"./Text-CZf9tped.js";import{A as j}from"./ActionGroup-BX5yaItJ.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-vWhd3mBG.js";import{A as g}from"./Action-BcHXQegi.js";import{u as f}from"./OverlayTrigger-B1WAFURF.js";import"./DialogTriggerView-B7GZOzmp.js";import"./PropsContextProvider-Ijz6GgOq.js";import"./mergeRefs-78-678FT.js";import"./clsx-B-dksMZM.js";import"./index-sY8i7rw0.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./Overlay-Be7lFM1_.js";import"./utils-CEW6KzsL.js";import"./Dialog-CUX3Lpsb.js";import"./Button-DbeMfWvm.js";import"./ProgressBar-BwuCIevz.js";import"./Label-i46snhnj.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bwhd-XGR.js";import"./useLocalizedStringFormatter-P5-5MQWA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CcZGRUOg.js";import"./useFocus-DQVi-kHM.js";import"./useFocusRing-B_JVXUf7.js";import"./useFocusable-D2JRVW0s.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-Di3CJEzN.js";import"./useControlledState-DjePt-lg.js";import"./Collection-1W2nMlzD.js";import"./CollectionBuilder-BA6UKfGt.js";import"./Separator-CS3AZFDu.js";import"./Text-H2FrnJWx.js";import"./SelectionManager-DyB3dcXv.js";import"./useEvent-DKzf63YQ.js";import"./useCollator-Dka9gyz6.js";import"./FocusScope-C3Hgy8Ha.js";import"./VisuallyHidden-Drr3U20F.js";import"./IconWarning-C_dXgkkz.js";import"./Header-BoT9UaKS.js";import"./ButtonView-DDadKIF4.js";import"./LoadingSpinner-BoRooXD5.js";import"./TextField-Da4S393r.js";import"./TextFieldBase-D5ddhlAG.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BcUarTjp.js";import"./FieldError-CSoyHznZ.js";import"./FieldDescription-CgVPFufB.js";import"./Form-Ce06eXuO.js";import"./Input-CDnAdcih.js";import"./useTextField-DOdnF9jK.js";import"./useFormReset-Cri5RZCQ.js";import"./useFormValidation-Ck8Kc0sM.js";import"./ReactAriaControlledValueFix-DrXiRobm.js";import"./Label-DNGkpAab.js";import"./lib-D-Sv_nut.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-CmNmVYtq.js";import"./dynamic-DKDa4OpU.js";import"./browser-B1A6F7LW.js";import"./Align-D8QutVSH.js";import"./ColumnLayout-BewyFMsZ.js";import"./AccentBox-CxRQ3GB4.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./Heading-BtmHxYgZ.js";import"./context-Ci9m7_Nm.js";import"./useStatic-Dvh5S8aV.js";import"./getActionGroupSlot-DApccOIm.js";import"./ContextMenuSection-DxByWojZ.js";const Uo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
