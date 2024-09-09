import{M as x}from"./ModalTrigger-B8jCur6N.js";import{R as e}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-z9695tjo.js";import S from"./Default.stories-V9AP3rm5.js";import{C as E}from"./Content-BJ8MOjiX.js";import{S as o}from"./Section-E5x3ENZy.js";import{T as n}from"./Text-Dz-BEZzn.js";import{A as T}from"./ActionGroup-Cfs7XrPL.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-DkYiUCbH.js";import{A as f}from"./Action-DYbomSzZ.js";import{u as y}from"./OverlayTrigger-BATTGoEQ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-BU-yEAe5.js";import"./index-BU4L-DQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-CgpzwoFP.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-B9aGSeR2.js";import"./useFocusable-DdFCD-YN.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./Header-CJ_5rQxw.js";import"./IconApp-Cl_Vn8sY.js";import"./IconWarning-_maDtYAi.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-B9P9mUu7.js";import"./Button-B_pBO4HW.js";import"./Hidden-BsXGu--s.js";import"./usePress-C9_maMb0.js";import"./TextField-BtZqoTEg.js";import"./TextFieldBase-CBfch3JM.js";import"./FormField.module-DMGsQIr0.js";import"./Form-DAtDAkn6.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Text-BgIWd_-0.js";import"./FieldDescription-DIeD7154.js";import"./Input-BPUwJsxH.js";import"./Label-BRZ8BO2K.js";import"./useTextField-8-06sg4o.js";import"./useFormReset-DlrFI1sj.js";import"./Label-C5Vz03Qj.js";import"./lib-CKX1WAkl.js";import"./chunk-454WOBUV-CM0pFb8Z.js";import"./v4-CQkTLCs1.js";import"./Form-BTNFi9AW.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Activity-CPnWONG0.js";import"./Heading-2-efPYe9.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-jwB0dEBj.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-Bx6BLr_2.js";import"./context-Dc7Q7JsY.js";import"./useSelector-BaLF0FXy.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./Header-8TqMsGve.js";const De={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>e.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>e.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
