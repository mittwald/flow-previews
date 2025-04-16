import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-DFk31cEc.js";import"./index-n-xcLTj3.js";import{B as m}from"./Button-Dhpj9FRh.js";import y from"./Default.stories-Dk_Jc32X.js";import{C as h}from"./Content-CDRz-CEG.js";import{S as r}from"./Section-YW-6nUkS.js";import{T as n}from"./Text-CvWN1dQn.js";import{A as j}from"./ActionGroup-CSzbvW_E.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-BMuol6x4.js";import{A as g}from"./Action-VjMgs9Db.js";import{u as f}from"./OverlayTrigger-CPKfF4Tt.js";import"./DialogTriggerView-BNuGuwjN.js";import"./PropsContextProvider-xVdmcuMS.js";import"./mergeProps-JAG8EIhT.js";import"./clsx-B-dksMZM.js";import"./index-jVogklOU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-7o24Rkki.js";import"./Overlay-C_RjYwGb.js";import"./utils-CHEN54dH.js";import"./Dialog-DMm5cJWQ.js";import"./Button-C9_V-Y5S.js";import"./ProgressBar-5MBhZmuX.js";import"./Label-CnZl9U2I.js";import"./Hidden-B-9naaqD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DBnsbNrv.js";import"./useLocalizedStringFormatter-q0ERVXX8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D9kiuk6J.js";import"./useFocus-XoJeJsyS.js";import"./useFocusRing-qDa0kwlS.js";import"./useFocusable-I3Nst49W.js";import"./RSPContexts-DXggXklQ.js";import"./OverlayArrow-pA50mchW.js";import"./Collection-CURWNON1.js";import"./CollectionBuilder-DoslnNQQ.js";import"./Separator-C0eHURoS.js";import"./Text-DatuNbZl.js";import"./useOverlayTriggerState-B1QNhm0O.js";import"./useControlledState-B6lyO5nT.js";import"./SelectionManager-C5jjfSGo.js";import"./useEvent-CaE4O6jv.js";import"./useCollator-DYp7eA3k.js";import"./FocusScope-VprgOmaE.js";import"./VisuallyHidden-DJ8AgGjM.js";import"./IconWarning-BT9Vk3ZR.js";import"./Header-D-FpYDad.js";import"./ButtonView-8YEWeSet.js";import"./LoadingSpinner-V_OKVJm3.js";import"./TextField-uvDX0XvK.js";import"./TextFieldBase-CNaFa31t.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DTHL6QGh.js";import"./FieldError-D-X35EJ8.js";import"./FieldDescription-DuCTkKO2.js";import"./Form-ChuGhSFG.js";import"./Input-CzLAkyht.js";import"./useTextField-CbF7aTVM.js";import"./useFormReset-DmN8pfru.js";import"./useFormValidation-BxWfN6mX.js";import"./Label-DuWaARVY.js";import"./lib-DRzYnGEq.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-DO-9hbU-.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-DDtDBKO1.js";import"./ColumnLayout-C6rBwMDa.js";import"./AccentBox-CIZWrElz.js";import"./EmulatedBoldText-bRyCqTVk.js";import"./Heading-B6IEBoPv.js";import"./context-ah73-6JJ.js";import"./useStatic-bVMyw5l7.js";import"./getActionGroupSlot-huFUK6tI.js";import"./ContextMenuSection-B_OuJeoD.js";const Uo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
