import{M as x}from"./ModalTrigger-B0pK5Met.js";import{R as e}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-Bq7y9BIZ.js";import S from"./Default.stories-C59mKDuW.js";import{C as E}from"./Content-SctQ_6lp.js";import{S as o}from"./Section-BIykth8T.js";import{T as n}from"./Text-DZmFXo-e.js";import{A as T}from"./ActionGroup-BFxZDqF9.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-i4QpT3vc.js";import{A as f}from"./Action-DQr6rgUQ.js";import{u as y}from"./OverlayTrigger-CuDFj76r.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./flowComponent-Bg40pdZw.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-GKDLJ2vO.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-HdKIwz3h.js";import"./useFocusRing-Cx5sZpw_.js";import"./ProgressBar-CpzbYRLN.js";import"./Label-qcDNDzhS.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./Header-dj3Po25X.js";import"./IconApp-CKfGrMYq.js";import"./IconWarning-DoqSRZU1.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-9k8jsvZY.js";import"./Button-CB57Q0FS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BZB42ELj.js";import"./usePress-IYK5Xs6I.js";import"./TextField-BoKTUj3a.js";import"./TextFieldBase-D8slg9uC.js";import"./FormField.module-CjJo_njJ.js";import"./Form-VOSHarlK.js";import"./Text-DP1y2Dk0.js";import"./FieldDescription-DFuVvWqw.js";import"./Input-Bgn03Bkw.js";import"./useTextField-CXFORGy2.js";import"./useFormReset-BmVKDtZT.js";import"./Label-3TwhOvTI.js";import"./lib-c8cKyaq5.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Form-C8EVfVf8.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Heading-Ys7-2L7-.js";import"./RSPContexts-BseA8goh.js";import"./PressResponder-Bhz1UQIJ.js";import"./FocusScope-Dq1DdGw4.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-sPIK_yL0.js";import"./context-BnMUo41h.js";import"./useSelector-DiJHxpbu.js";import"./getActionGroupSlot-DLuT6VQZ.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-BWLNclCp.js";const _e={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>e.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>e.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
