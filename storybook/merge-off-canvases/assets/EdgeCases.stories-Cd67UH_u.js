import{M as x}from"./ModalTrigger-CttH5Xow.js";import{R as e}from"./index-uCp2LrAq.js";import{B as m}from"./Button-DIiR5Jtq.js";import S from"./Default.stories-DojAZM6h.js";import{C as E}from"./Content-BHZy1c3e.js";import{S as n}from"./Section-kBouHO6u.js";import{T as o}from"./Text-BYResyqR.js";import{A as T}from"./ActionGroup-1sCu9z2n.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-BEpgNy5p.js";import{A as f}from"./Action-Bw5N3irA.js";import{u as y}from"./OverlayTrigger-B_V56TaE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./flowComponent-VNMV0_Nr.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-DZgOXw50.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-BCqBDIej.js";import"./useFocusable-DpEA8Hsr.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./Header-B6kwU2iU.js";import"./IconApp-wkSNGWZu.js";import"./IconWarning-BTA_RZAe.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Q2dg-Nqf.js";import"./Button-D4VcI4Uu.js";import"./usePress-CaJD4Kpr.js";import"./TextField-BDFBWetS.js";import"./TextFieldBase-Cxyr4axe.js";import"./FormField.module-DmHVWhT7.js";import"./Form-BOwpWbru.js";import"./useLabel-D9TuMkUI.js";import"./useLabels-POLqFEYE.js";import"./Text-D6Zjnbf0.js";import"./FieldDescription-CxZ_-Dcl.js";import"./Input-AN0YuBj3.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BQk6lJ-q.js";import"./Label-Cg9IUVJU.js";import"./lib-BVzhB6z5.js";import"./chunk-MZXVCX43-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Activity-Ck-RMSDT.js";import"./RSPContexts-CJnKmcd7.js";import"./FocusScope-Bpk85l6Y.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-DWE0U9Im.js";import"./context-XO_-jlUP.js";import"./useSelector-CssRecEs.js";import"./dynamic-DKDa4OpU.js";const Ae={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>e.createElement(x,{...a,controller:y("Modal",{defaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(n,null,e.createElement(o,null,t.long)),e.createElement(n,null,e.createElement(o,null,t.long)),e.createElement(n,null,e.createElement(o,null,t.long)),e.createElement(n,null,e.createElement(o,null,t.long)),e.createElement(n,null,e.createElement(o,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>e.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{defaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(n,null,e.createElement(o,null,t.long)),e.createElement(n,null,e.createElement(o,null,t.long)),e.createElement(n,null,e.createElement(o,null,t.long)),e.createElement(n,null,e.createElement(o,null,t.long)),e.createElement(n,null,e.createElement(o,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: props => <Modal {...props} controller={useOverlayController("Modal", {
    defaultOpen: true
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,s,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <Modal offCanvas {...props} controller={useOverlayController("Modal", {
    defaultOpen: true
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
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Me=["LongContent","LongContentOffCanvas"];export{r as LongContent,l as LongContentOffCanvas,Me as __namedExportsOrder,Ae as default};
