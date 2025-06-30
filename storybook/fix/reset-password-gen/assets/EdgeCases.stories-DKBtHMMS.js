import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-DtqiYorG.js";import"./index-BdpSHsi2.js";import{B as m}from"./Button-COxCjr4W.js";import y from"./Default.stories-BweQDmMg.js";import{C as h}from"./Content-DdKYd-ny.js";import{S as r}from"./Section-TVP5AfZH.js";import{T as n}from"./Text-USfqZ1-K.js";import{A as j}from"./ActionGroup-DGy73CIC.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-CYArMw00.js";import{A as g}from"./Action-CYABpvN2.js";import{u as f}from"./DialogTriggerView-Cv6PA901.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D7XpJMjl.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-Cr61LjVx.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./Overlay--6ZHgczz.js";import"./utils-q_Aud5Js.js";import"./Dialog-HD9t1mUg.js";import"./Button-BV9jeieD.js";import"./ProgressBar-DbWwTk60.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./useLocalizedStringFormatter-QO03R6A5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mDFtgnbt.js";import"./useFocus-4XTC7e6o.js";import"./useFocusRing-DY5AGIis.js";import"./useFocusable-BXcKiciC.js";import"./RSPContexts-Cbm9ZJUe.js";import"./OverlayArrow-fUY3Kb5L.js";import"./useControlledState-rjpdN6qd.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./Text-DtGJyZhh.js";import"./SelectionManager-DweNvqjD.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-DWYYoDxV.js";import"./FocusScope-D_x47-q0.js";import"./VisuallyHidden-D-Ys6Nju.js";import"./IconWarning-DqZnQ37C.js";import"./Header-Bj0kxBUM.js";import"./ButtonView-BA5XsjP5.js";import"./index-BAMY2Nnw.js";import"./LoadingSpinner-CjyBF-GL.js";import"./TextField-D7vyMsp1.js";import"./TextFieldBase-m8aoivWv.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CwICyLEB.js";import"./FieldError-D2eBwE7I.js";import"./FieldDescription-BfBFjdVt.js";import"./TextField-BqNO7Lq4.js";import"./Form-CSvT4C5Q.js";import"./Input-Dom3MqAg.js";import"./useTextField-xVyqyefx.js";import"./useFormReset-B9LhY6oC.js";import"./useFormValidation-BP6joqgG.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";import"./Label-DmnTb0KL.js";import"./lib-Dzm2FjmS.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-DoCZ3-f2.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-DDnjw4uo.js";import"./ColumnLayout-BTiY9UOD.js";import"./AccentBox-TkI84H2a.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Heading-PKR8zMP8.js";import"./context-GxXlUYOT.js";import"./useStatic-VlFWjJup.js";import"./getActionGroupSlot-BY7yNHLS.js";import"./ContextMenuSection-Cdw0cgUi.js";const Wo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
