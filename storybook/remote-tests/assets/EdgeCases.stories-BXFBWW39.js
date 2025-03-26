import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{M as u}from"./Modal-D0te77Zo.js";import"./index-CXcpQZ5J.js";import{B as m}from"./Button-DoxNqpU5.js";import y from"./Default.stories-BRcJ1o_T.js";import{C as h}from"./Content-D6QOl4b7.js";import{S as r}from"./Section-DsNdiMUn.js";import{T as n}from"./Text-Dr5MNJ9m.js";import{A as j}from"./ActionGroup-Dqbs5KVE.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as T}from"./Heading-JTZ2bzsA.js";import{A as g}from"./Action-BEVxohwb.js";import{u as f}from"./OverlayTrigger-Dv9azQvo.js";import"./DialogTriggerView-gOfyQuAV.js";import"./flowComponent-CxhHHjOl.js";import"./index-_FZDHFZo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DJQWtO6Q.js";import"./index-sbGzhXso.js";import"./clsx-B-dksMZM.js";import"./Overlay-DjlPbzgy.js";import"./utils-D_n-6U4k.js";import"./Dialog-D9rW5YgD.js";import"./Button-BcgzNVYq.js";import"./ProgressBar-8nsGDrqI.js";import"./Label-D7zTyyav.js";import"./Hidden-DtYLaSTT.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BoT2JKOr.js";import"./useLocalizedStringFormatter-BQtswni5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKvzVrwU.js";import"./useFocus-DPMzGzIF.js";import"./useFocusRing-C5Ht9MUl.js";import"./useFocusable-C54KMRcY.js";import"./RSPContexts-C2SW_8A9.js";import"./OverlayArrow-CB6H_PzN.js";import"./Collection-D2C_lGLj.js";import"./CollectionBuilder-B3MPjffQ.js";import"./Separator-MF6Pdxex.js";import"./Text-BUuVncJZ.js";import"./useOverlayTriggerState-EP699KjE.js";import"./useControlledState-CHe-wEx1.js";import"./SelectionManager-DLUrYsh7.js";import"./useEvent-9NPw0H85.js";import"./useCollator-BSqHj9jo.js";import"./FocusScope-ienAdI6u.js";import"./VisuallyHidden-nUs_Pnf6.js";import"./IconApp-C5KCAdlI.js";import"./IconWarning-C6q-vt44.js";import"./Header-CUv3SiwW.js";import"./ButtonView-CTc6QzmY.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-C8RokD4H.js";import"./TextField-u_Z7hqsc.js";import"./TextFieldBase-CTQL2sCv.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B3rmrlTw.js";import"./FieldError-BGs8e4N-.js";import"./FieldDescription-DwkiDR0F.js";import"./Form-czy9A9fl.js";import"./Input-B3uAq9ei.js";import"./useTextField-Di-fd6ps.js";import"./useFormReset-C7M_aUQL.js";import"./useFormValidation-xTAo0ZUA.js";import"./Label-BlFJqu_U.js";import"./lib-CabEhyKe.js";import"./index-B-lxVbXh.js";import"./v4-CtRu48qb.js";import"./Form-CyrToC7B.js";import"./dynamic-DKDa4OpU.js";import"./browser-BJKb5O22.js";import"./Align-DXvvxKkU.js";import"./ColumnLayout-BhUO9y8z.js";import"./AccentBox-k7zOg0zC.js";import"./EmulatedBoldText-BPJW4PHD.js";import"./Heading-ChI_1Pt6.js";import"./context-DaPO0HZf.js";import"./useStatic-RnO7WcrC.js";import"./getActionGroupSlot-BilYt8La.js";import"./ContextMenuSection-BGfGuiMH.js";const Wo={...y,title:"Overlays/Modal/Edge Cases"},e={render:s=>o.jsxs(u,{...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})},i={render:s=>o.jsxs(u,{offCanvas:!0,...s,controller:f("Modal",{isDefaultOpen:!0}),children:[o.jsx(T,{children:t.short}),o.jsxs(h,{children:[o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})}),o.jsx(r,{children:o.jsx(n,{children:t.long})})]}),o.jsx(j,{children:o.jsxs(g,{closeOverlay:"Modal",children:[o.jsx(m,{color:"accent",children:"Create customer"}),o.jsx(m,{variant:"soft",color:"secondary",children:"Abort"})]})})]})};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
