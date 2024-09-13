import{M as x}from"./ModalTrigger-Dgx9CjQ-.js";import{R as e}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-DB5iJVv6.js";import S from"./Default.stories-CckVSNfO.js";import{C as E}from"./Content-DvZNirq_.js";import{S as o}from"./Section-CNDFkzVP.js";import{T as n}from"./Text-FmX6mEPQ.js";import{A as T}from"./ActionGroup--fhDUuGm.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-XhzxXQZe.js";import{A as f}from"./Action-RON2sik7.js";import{u as y}from"./OverlayTrigger-sCJZn0Op.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-DAlTzncN.js";import"./index-BU4L-DQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-CgpzwoFP.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-B9aGSeR2.js";import"./useFocusable-DdFCD-YN.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./Header-DBKsZyg3.js";import"./IconApp-0HsaHm1x.js";import"./IconWarning-CJmku_bU.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-D9dE_Tes.js";import"./Button-B_pBO4HW.js";import"./Hidden-BsXGu--s.js";import"./usePress-C9_maMb0.js";import"./TextField-CtpgT7V4.js";import"./TextFieldBase-BYom3XKp.js";import"./FormField.module-CH8Ahxxo.js";import"./Form-DAtDAkn6.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Text-BgIWd_-0.js";import"./FieldDescription-D5COEwQW.js";import"./Input-BPUwJsxH.js";import"./Label-BRZ8BO2K.js";import"./useTextField-8-06sg4o.js";import"./useFormReset-DlrFI1sj.js";import"./Label-BVlI96CM.js";import"./lib-BVx2_P01.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./Form-jqWDDYje.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Activity-CPnWONG0.js";import"./Heading-2-efPYe9.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-jwB0dEBj.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-Bx6BLr_2.js";import"./context-D3tAgjB_.js";import"./useSelector-v5fuIMVv.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./Header-8TqMsGve.js";const De={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>e.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>e.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,s,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const Le=["LongContent","LongContentOffCanvas"];export{r as LongContent,l as LongContentOffCanvas,Le as __namedExportsOrder,De as default};
