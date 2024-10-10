import{M as x}from"./ModalTrigger-BZWPVd26.js";import{R as e}from"./index-Cs7sjTYM.js";import{B as m}from"./Button-DXVDIrTY.js";import S from"./Default.stories-CvKYBpxA.js";import{C as E}from"./Content-Bd6yOpPl.js";import{S as o}from"./Section-DDZL8g9_.js";import{T as n}from"./Text-U6fXasfV.js";import{A as T}from"./ActionGroup-DcjtyJO5.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-TK7j1OMP.js";import{A as f}from"./Action-BPHLOjQX.js";import{u as y}from"./OverlayTrigger-Bdr7_DCO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./flowComponent-DojWstBP.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./utils-BwYH5X3X.js";import"./filterDOMProps-CeZl_uWj.js";import"./OverlayArrow-DTpAwzOr.js";import"./useFocusRing-if03xCoO.js";import"./ProgressBar-AEPgO8_B.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./useLabel-RWB8_cdz.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./Header-DgsWIsDp.js";import"./IconApp-BvR14QOm.js";import"./IconWarning-CKNdQ7e9.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-VvQ8syNA.js";import"./Button-BebB4Pfr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-VJrkZIcY.js";import"./usePress-1fQJjpyE.js";import"./TextField-BIKJt07H.js";import"./TextFieldBase-B_YRxwVy.js";import"./FormField.module-Dbf8c6i9.js";import"./Form-CqlMkRPm.js";import"./Text-Dd84vsje.js";import"./FieldDescription-Bp9q2b5T.js";import"./Input-8WbdzIVX.js";import"./useTextField-DZljNCaL.js";import"./useFormReset-B-nkSQHj.js";import"./Label-LjpPhEpK.js";import"./lib-CKygYVls.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Form-BYGR5wof.js";import"./dynamic-DKDa4OpU.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Heading-eVsuDLmW.js";import"./RSPContexts-BseA8goh.js";import"./PressResponder-CCvTmYWN.js";import"./FocusScope--STy3lDT.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BWHYRTKp.js";import"./context-D-nUHgHo.js";import"./useSelector-DDdDwEvg.js";import"./ContextMenu.module-68N5lvfm.js";import"./Collection-D9QghTcc.js";import"./CollectionBuilder-DDU0oj1o.js";import"./Header-BtBTxt0E.js";const Re={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>e.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>e.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},e.createElement(g,null,t.short),e.createElement(E,null,e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long)),e.createElement(o,null,e.createElement(n,null,t.long))),e.createElement(T,null,e.createElement(f,{closeOverlay:"Modal"},e.createElement(m,{color:"accent"},"Create customer"),e.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
