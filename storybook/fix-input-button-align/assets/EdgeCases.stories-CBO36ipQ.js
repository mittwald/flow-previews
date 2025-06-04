import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-_qiOvfuA.js";import"./index-BdpSHsi2.js";import{B as m}from"./Button-CeqI3bgc.js";import y from"./Default.stories-BlLOfJBW.js";import{C as h}from"./Content-CDTA46rC.js";import{S as r}from"./Section-WTpsKPPo.js";import{T as n}from"./Text-OAusJr9Q.js";import{A as j}from"./ActionGroup-D_0bzDh5.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-DbRL7h-o.js";import{A as g}from"./Action-CJrBG4Je.js";import{u as f}from"./DialogTriggerView-Cnwe_ibH.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D7AXJBUb.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-Bx1WUIfF.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Overlay-CjEAlIPa.js";import"./utils-q_Aud5Js.js";import"./Dialog-CLdEiJe6.js";import"./Button-BV9jeieD.js";import"./ProgressBar-DbWwTk60.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-fUY3Kb5L.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./Text-DtGJyZhh.js";import"./SelectionManager-DweNvqjD.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-DWYYoDxV.js";import"./FocusScope-D_x47-q0.js";import"./VisuallyHidden-BtcTDQEe.js";import"./IconWarning-DNYDzj3a.js";import"./Header-BSVwyW2s.js";import"./ButtonView-DfysGwFO.js";import"./index-BAMY2Nnw.js";import"./LoadingSpinner-UISilApq.js";import"./TextField-BCbnmWgi.js";import"./TextFieldBase-BxKgwxzH.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-z9L4efHN.js";import"./FieldError-D2eBwE7I.js";import"./FieldDescription-C52mOFc4.js";import"./TextField-BqNO7Lq4.js";import"./Form-CSvT4C5Q.js";import"./Input-Dom3MqAg.js";import"./useTextField-xVyqyefx.js";import"./useFormReset-B9LhY6oC.js";import"./useFormValidation-BP6joqgG.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";import"./Label-BOuDXbch.js";import"./lib-Ch-U1eXv.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-BD_i2ijk.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-Chwm3Kvi.js";import"./ColumnLayout-CsISV-0c.js";import"./AccentBox-B0SYkN84.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Heading-PKR8zMP8.js";import"./context-CnM90xIm.js";import"./useStatic-nWelgKhH.js";import"./getActionGroupSlot-fGEBenuf.js";import"./ContextMenuSection-eGTr6jDx.js";const Wo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
