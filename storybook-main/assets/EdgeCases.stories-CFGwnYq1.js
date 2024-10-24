import{M as x}from"./ModalTrigger-Bztuk0fl.js";import{R as e}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-P6k_BIBP.js";import S from"./Default.stories-pN3seGnJ.js";import{C as E}from"./Content-SctQ_6lp.js";import{S as o}from"./Section-DsrNCVfI.js";import{T as n}from"./Text-DbnY-2dT.js";import{A as T}from"./ActionGroup-BFxZDqF9.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-CuXfARmX.js";import{A as f}from"./Action-D4n2WPP_.js";import{u as y}from"./OverlayTrigger-bWOm86mb.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./flowComponent-Bg40pdZw.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-Cd8r7pc9.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-Bm5GlnqX.js";import"./useFocusRing-DdBFev_0.js";import"./ProgressBar-K2upHjuk.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./Header-dj3Po25X.js";import"./IconApp-CKfGrMYq.js";import"./IconWarning-DoqSRZU1.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-9k8jsvZY.js";import"./Button-CROQF3YN.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-GQF4xS8_.js";import"./usePress-BiUpVy3m.js";import"./TextField-9YUZ50D-.js";import"./TextFieldBase-CANxoHIE.js";import"./FormField.module-BQ0wLCGA.js";import"./Form-CDVAwZBo.js";import"./Text-Bnjm0IRl.js";import"./FieldDescription-D5E2i6qp.js";import"./Input-zQ88cEWx.js";import"./useTextField-BFt9_4PS.js";import"./useFormReset-BmVKDtZT.js";import"./Label-Ce3Da7vQ.js";import"./lib-Bz8qumQH.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Form-BwxdXLdA.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Heading-CG14-WVD.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-DMuRQrVO.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BVqa5uLw.js";import"./context-BnMUo41h.js";import"./useSelector-DiJHxpbu.js";import"./getActionGroupSlot-DLuT6VQZ.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-BdcdgcY_.js";import"./CollectionBuilder-B4BE-ZOx.js";import"./Header-3zDVqz72.js";const Re={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>e.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>e.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const _e=["LongContent","LongContentOffCanvas"];export{r as LongContent,l as LongContentOffCanvas,_e as __namedExportsOrder,Re as default};
