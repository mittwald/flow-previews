import{M as x}from"./ModalTrigger-Gss0MoxM.js";import{R as t}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-N_hBXId1.js";import S from"./Default.stories-BimtH8jg.js";import{C as E}from"./Content-CiuY8azI.js";import{S as o}from"./Section-BYUl0gHB.js";import{T as n}from"./Text-CcFqEq5L.js";import{A as T}from"./ActionGroup-CqaE-Qvx.js";import{d as e}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-CMLTAaNQ.js";import{A as f}from"./Action-DgzMjhtB.js";import{u as y}from"./OverlayTrigger-CS8JLNke.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-BPUkT_mI.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Overlay-B3K6v1_I.js";import"./utils-BFFU14Eb.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-DfSRANAL.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-DKheN8nI.js";import"./Label-6hm79Lf2.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./Header-Cs43BHp_.js";import"./IconApp-CHbYnbLr.js";import"./IconWarning-DXJUFqJH.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-VvlSDj-i.js";import"./Button-qrG_K1uY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-Dv7TsfPg.js";import"./usePress-Dcn7RY69.js";import"./TextField-BriBKqqs.js";import"./TextFieldBase-DKK7zhvA.js";import"./FormField.module-BjavWBnU.js";import"./FieldError-esCwSIkI.js";import"./Text-CpSy2HXY.js";import"./FieldDescription-CJVHFboI.js";import"./TextField-DjsZtRNW.js";import"./Form-zKDPw3tU.js";import"./Input-DNKlg4fK.js";import"./useTextField-D9tZfykM.js";import"./useFormReset-BmVKDtZT.js";import"./Label-Dj8kwTwi.js";import"./lib-bXgA8kgl.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Form-D0rfbUCD.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Heading-BTLVh75U.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-B3WeE0v4.js";import"./useSelector-B7WwLw1m.js";import"./getActionGroupSlot-Bj26VJcY.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-FsUjFut0.js";const jt={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>t.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},t.createElement(g,null,e.short),t.createElement(E,null,t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long))),t.createElement(T,null,t.createElement(f,{closeOverlay:"Modal"},t.createElement(m,{color:"accent"},"Create customer"),t.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>t.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},t.createElement(g,null,e.short),t.createElement(E,null,t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long))),t.createElement(T,null,t.createElement(f,{closeOverlay:"Modal"},t.createElement(m,{color:"accent"},"Create customer"),t.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,s,d;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const kt=["LongContent","LongContentOffCanvas"];export{r as LongContent,l as LongContentOffCanvas,kt as __namedExportsOrder,jt as default};
