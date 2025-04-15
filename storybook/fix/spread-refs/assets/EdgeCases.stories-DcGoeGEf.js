import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-TRWB6vIv.js";import"./index-CXcpQZ5J.js";import{B as m}from"./Button-DwgkhfFv.js";import y from"./Default.stories-DsWdpHub.js";import{C as h}from"./Content-BSOPJRCf.js";import{S as r}from"./Section-Devnga4A.js";import{T as n}from"./Text-ilWQSh2o.js";import{A as j}from"./ActionGroup-BSzUWElk.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-YTPyIOg9.js";import{A as g}from"./Action-BfuzMKoN.js";import{u as f}from"./OverlayTrigger-CxHIuRua.js";import"./DialogTriggerView-6LSgdenh.js";import"./PropsContextProvider-BhVCUVKf.js";import"./mergeRefs-B22Il0iz.js";import"./clsx-B-dksMZM.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./Overlay-Bo4PqVMl.js";import"./utils-Df1au6pS.js";import"./Dialog-DGCaVP1m.js";import"./Button-CAwd2L_u.js";import"./ProgressBar-DfZ38-9l.js";import"./Label-DfZa7xTI.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrVJGper.js";import"./useLocalizedStringFormatter-PBUSZsmh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-v55RTCzR.js";import"./useFocus-Beyq6_MT.js";import"./useFocusRing-Dy9tY2VR.js";import"./useFocusable-C5BPrGjf.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-Cyo91zw-.js";import"./Collection-gb5i7bex.js";import"./CollectionBuilder-DJ8GEp2F.js";import"./Separator-rUEtuaIL.js";import"./Text-WoclspSc.js";import"./useOverlayTriggerState-Bcoz_tbR.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DrFVCucR.js";import"./useEvent-D5X-zOrV.js";import"./useCollator-gRp1mHBo.js";import"./FocusScope-DN1fuaqe.js";import"./VisuallyHidden-D7VTLdOh.js";import"./IconWarning-B9HL9CFH.js";import"./Header-L6_i9YEX.js";import"./ButtonView-CFSsOiRA.js";import"./LoadingSpinner-GJE4fldi.js";import"./TextField-nauLyfQY.js";import"./TextFieldBase-Dz5vW8_0.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Egs4LnTH.js";import"./FieldError-Cz4aM9kS.js";import"./FieldDescription-h80YvCXc.js";import"./Form-BxoNbjqJ.js";import"./Input-Bw24jdWy.js";import"./useTextField-Dw0gyLlm.js";import"./useFormReset-McAVcQ-S.js";import"./useFormValidation-CX89bhxE.js";import"./Label-Ccht5eDB.js";import"./lib-n2lxMyme.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-DSNXfIMG.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-Ck5XF4T7.js";import"./ColumnLayout-Cd0SXGvS.js";import"./AccentBox-oFbdxp56.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Heading-DBX-SCuC.js";import"./context-BJd9A0SI.js";import"./useStatic-CZNshcmv.js";import"./getActionGroupSlot-UfL_FZTW.js";import"./ContextMenuSection-CuRIPxil.js";const Uo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
