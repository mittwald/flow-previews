import{M as x}from"./ModalTrigger-DhPUNheI.js";import{R as e}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-D0BFuo2o.js";import S from"./Default.stories-DB5Hg2D5.js";import{C as E}from"./Content-jgDaHoYr.js";import{S as o}from"./Section-BjqoPPPA.js";import{T as n}from"./Text-DYnmzK5R.js";import{A as T}from"./ActionGroup-Bwae4Y_1.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-yzkHp1-f.js";import{A as f}from"./Action-s1n0zgTl.js";import{u as y}from"./OverlayTrigger-BvOr0J9V.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./flowComponent-D7ioKQ_2.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-BBsc42SX.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-B8rEgeMV.js";import"./useFocusRing-CRCkdtud.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./Header-DoGnGVE5.js";import"./IconApp-BOae6dD3.js";import"./IconWarning-DMnbQijb.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BLH-7Wh6.js";import"./Button-BknGA9dM.js";import"./Hidden-DMUPAT4b.js";import"./useFocusable-D6sODRzj.js";import"./usePress-Do5SRlXR.js";import"./TextField-BbBBC3bV.js";import"./TextFieldBase-BRwWE7jh.js";import"./FormField.module-B8yqGsc9.js";import"./Form-BJmzrAR9.js";import"./useLabel-D8UVq-XF.js";import"./useLabels-DMhdkBu1.js";import"./Text-C0gOxGaJ.js";import"./FieldDescription-5MbVX17f.js";import"./Input-BRW8j_n9.js";import"./Label-DgAfL5vK.js";import"./useTextField-BfWoRbPu.js";import"./useFormReset-DlrFI1sj.js";import"./Label-Cb_5Fm_J.js";import"./lib-CW7qQ7Z4.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Form-dEWYi0P-.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Heading-D2dIVyzg.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-CGKzeA_Y.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-D4oQIDY4.js";import"./context-Dd6hPQBJ.js";import"./useSelector-0qDIPR45.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BSVICx61.js";import"./CollectionBuilder-C1pJ_vaJ.js";import"./Header-BikxQE8J.js";const De={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>e.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>e.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
