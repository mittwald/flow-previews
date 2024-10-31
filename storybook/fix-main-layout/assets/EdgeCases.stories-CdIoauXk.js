import{M as x}from"./ModalTrigger-Cs1frCdy.js";import{R as e}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-6As4l_D2.js";import S from"./Default.stories-BXrJY1Om.js";import{C as E}from"./Content-Cv42N3s-.js";import{S as o}from"./Section-Da5IeeDg.js";import{T as n}from"./Text-6AL5nJw_.js";import{A as T}from"./ActionGroup-DAqIg4kM.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-CD8sncEs.js";import{A as f}from"./Action-DephG14G.js";import{u as y}from"./OverlayTrigger-gwEYNro4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-aK1NJH1f.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-Cd8r7pc9.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-BrbzJDKz.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./Header-Ds4_nfHF.js";import"./IconApp-D6xsfpa6.js";import"./IconWarning-CysTUiwL.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-BfSMUzbI.js";import"./Button-DKDQv6qd.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CKybZYMg.js";import"./usePress-Dcn7RY69.js";import"./TextField-DpiMn5Lu.js";import"./TextFieldBase-BrbRQIgV.js";import"./FormField.module-C5gi7dhZ.js";import"./FieldError-C27s8X8S.js";import"./Text-Bnjm0IRl.js";import"./FieldDescription-YtFJf8Gr.js";import"./Form-CN49erGr.js";import"./Input-DQOx7cuX.js";import"./useTextField-C7hRpfYI.js";import"./useFormReset-BmVKDtZT.js";import"./Label-B7WPDHBg.js";import"./lib-Bk3xWsCb.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Form-6RnpDTee.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-BaWiGzwN.js";import"./useSelector-D67vXuM3.js";import"./getActionGroupSlot-CHh0Yuh4.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";const _e={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>e.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>e.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const $e=["LongContent","LongContentOffCanvas"];export{r as LongContent,l as LongContentOffCanvas,$e as __namedExportsOrder,_e as default};
