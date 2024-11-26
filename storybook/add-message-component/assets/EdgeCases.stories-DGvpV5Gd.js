import{M as x}from"./ModalTrigger-I1MNOtiV.js";import{R as t}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-z_q_KHNa.js";import S from"./Default.stories-D8whsurz.js";import{C as E}from"./Content-BCau_4Mc.js";import{S as o}from"./Section-CEFQscAP.js";import{T as n}from"./Text-BIl4TEP_.js";import{A as T}from"./ActionGroup-IEHQ7c31.js";import{d as e}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-CgLifY-I.js";import{A as f}from"./Action-JQ-egFwe.js";import{u as y}from"./OverlayTrigger-z2LviGdZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./flowComponent-CbUmZLC8.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Overlay-B8CLxq1Z.js";import"./utils-Cd8r7pc9.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-BrbzJDKz.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./Header-D5s75Y2R.js";import"./IconApp-CASOqNDc.js";import"./IconWarning-DwqDUFht.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-Bz_DBkUU.js";import"./Button-DKDQv6qd.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CKybZYMg.js";import"./usePress-Dcn7RY69.js";import"./TextField-dRp-jI7q.js";import"./TextFieldBase-C0xGNzGM.js";import"./FormField.module-qk1qTI9p.js";import"./FieldError-C27s8X8S.js";import"./Text-Bnjm0IRl.js";import"./FieldDescription-DrPhoTyg.js";import"./Form-CN49erGr.js";import"./Input-DQOx7cuX.js";import"./useTextField-C7hRpfYI.js";import"./useFormReset-BmVKDtZT.js";import"./Label-DRRyDYFG.js";import"./lib-Dx8g9h0i.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Form-BlniGzbq.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-DKO1s6Kq.js";import"./useSelector-BkJAchTy.js";import"./getActionGroupSlot-CN29HkWI.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";const $t={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>t.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},t.createElement(g,null,e.short),t.createElement(E,null,t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long))),t.createElement(T,null,t.createElement(f,{closeOverlay:"Modal"},t.createElement(m,{color:"accent"},"Create customer"),t.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>t.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},t.createElement(g,null,e.short),t.createElement(E,null,t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long))),t.createElement(T,null,t.createElement(f,{closeOverlay:"Modal"},t.createElement(m,{color:"accent"},"Create customer"),t.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const jt=["LongContent","LongContentOffCanvas"];export{r as LongContent,l as LongContentOffCanvas,jt as __namedExportsOrder,$t as default};
