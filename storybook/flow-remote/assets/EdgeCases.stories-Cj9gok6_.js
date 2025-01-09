import{M as x}from"./ModalTrigger-Bzgp12W6.js";import{R as t}from"./index-BbMBc-iG.js";import{B as m}from"./Button-1rw05oyV.js";import S from"./Default.stories-DGZTz-sb.js";import{C as E}from"./Content-BbJKCc-f.js";import{S as o}from"./Section-BDrutyMv.js";import{T as n}from"./Text-D6naXSDy.js";import{A as T}from"./ActionGroup-h4TxZ6ye.js";import{d as e}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-CHAikoJ1.js";import{A as f}from"./Action-CReouxgX.js";import{u as y}from"./OverlayTrigger-CO8vF-4q.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./index-CPTjWdH1.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Overlay-CfRcz_ow.js";import"./utils-D4Vol65q.js";import"./Dialog-BQ_biHhV.js";import"./Button-8ZRRpxMH.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";import"./RSPContexts-CBHfX6hb.js";import"./OverlayArrow-CrZGdHWF.js";import"./useControlledState-CMnoB41k.js";import"./Collection-BUbbDiz9.js";import"./CollectionBuilder-DOwRmyqO.js";import"./Separator-CpmRlxds.js";import"./Text-oWh285ma.js";import"./SelectionManager-DnQnei6w.js";import"./FocusScope-TaiHum7E.js";import"./useEvent-D1lr70i2.js";import"./useCollator-CzQekWjs.js";import"./VisuallyHidden-CAwLSgYE.js";import"./Header-3DYqUgou.js";import"./IconApp-B_zPpa1A.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-y4xqeSCe.js";import"./TextField-CMfD99fQ.js";import"./TextFieldBase-BqAxxEUS.js";import"./FieldError-Bxt0_Hqg.js";import"./FieldError-0S5lF-We.js";import"./FieldDescription-Ca5JFBy-.js";import"./Form-4lWAVKAg.js";import"./Input-CLGBDd3-.js";import"./useTextField-CI6MibmE.js";import"./useFormReset-BIr5_auz.js";import"./Label-D6uleru1.js";import"./lib-DQFOeLSt.js";import"./chunk-D5ZWXAHU-DlerbUHg.js";import"./v4-CtRu48qb.js";import"./Form-MMscqbiO.js";import"./dynamic-DKDa4OpU.js";import"./useViewComponents-DfxsYA-o.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Heading-B6bd_0m7.js";import"./context-PpKQHRcf.js";import"./useSelector-CI2pTLXu.js";import"./getActionGroupSlot-CHxkKRmy.js";import"./ContextMenuSection-DFUgacLZ.js";const Ft={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>t.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},t.createElement(g,null,e.short),t.createElement(E,null,t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long))),t.createElement(T,null,t.createElement(f,{closeOverlay:"Modal"},t.createElement(m,{color:"accent"},"Create customer"),t.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>t.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},t.createElement(g,null,e.short),t.createElement(E,null,t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long))),t.createElement(T,null,t.createElement(f,{closeOverlay:"Modal"},t.createElement(m,{color:"accent"},"Create customer"),t.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const It=["LongContent","LongContentOffCanvas"];export{r as LongContent,l as LongContentOffCanvas,It as __namedExportsOrder,Ft as default};
