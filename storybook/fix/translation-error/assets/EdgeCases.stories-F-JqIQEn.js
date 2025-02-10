import{M as x}from"./ModalTrigger-DvR0BErJ.js";import{R as t}from"./index-B-o1Wr-g.js";import{B as m}from"./Button-BdwkYmUJ.js";import S from"./Default.stories-C9axwx3L.js";import{C as E}from"./Content-Cg8Hfq9T.js";import{S as o}from"./Section-BmlPpaYP.js";import{T as n}from"./Text-9mML8Z29.js";import{A as T}from"./ActionGroup-DJwZ8gTJ.js";import{d as e}from"./dummyText-CX_I_Wpl.js";import{H as g}from"./Heading-BDRONVjZ.js";import{A as f}from"./Action-v-b0G_7k.js";import{u as y}from"./OverlayTrigger-K_SGs4A-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./flowComponent-Bz6Io0hO.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Overlay-DsdyFMGh.js";import"./utils-7gTBvjqH.js";import"./Dialog-c-LuvZOJ.js";import"./Button-fHRiK0T5.js";import"./ProgressBar--OmPGqUT.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./LocalizedStringFormatter-CmF9aEqk.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-BOhYx5Zc.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./Text-R-rrVGxo.js";import"./SelectionManager-DqnCEupG.js";import"./FocusScope-DvafcTTH.js";import"./useEvent-CmPtILZD.js";import"./useCollator-4-Cqn2dG.js";import"./useLocalizedStringFormatter-CnnmkqmM.js";import"./VisuallyHidden-lWpahT0S.js";import"./Header-C7AUAiBL.js";import"./IconApp-3W3XzCjg.js";import"./IconWarning-DPCXsjOp.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DrWRflEB.js";import"./useLocalizedStringFormatter-D9stqqmU.js";import"./TextField-CTuNgUpf.js";import"./TextFieldBase-Cwx2xOTL.js";import"./FieldError-Cn7Cn3Rk.js";import"./FieldError-Dc7wTCBj.js";import"./FieldDescription-DL_UboA3.js";import"./Form-CS2x0aS5.js";import"./Input-In3k7nSs.js";import"./useTextField-BGTL6xBV.js";import"./useFormReset-DMREOE0P.js";import"./Label-YqoRtSRe.js";import"./lib-BY3K-Wn3.js";import"./chunk-D5ZWXAHU-CGElDDNX.js";import"./v4-CQkTLCs1.js";import"./Form-WWZH6LOu.js";import"./dynamic-DKDa4OpU.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Heading-CrY40Q5a.js";import"./context-CtwQP4Yz.js";import"./useSelector-Cb4sc2b-.js";import"./getActionGroupSlot-DVGp_tC1.js";import"./ContextMenuSection-DgaHCvky.js";const Ft={...S,title:"Overlays/Modal/Edge Cases"},r={render:a=>t.createElement(x,{...a,controller:y("Modal",{isDefaultOpen:!0})},t.createElement(g,null,e.short),t.createElement(E,null,t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long))),t.createElement(T,null,t.createElement(f,{closeOverlay:"Modal"},t.createElement(m,{color:"accent"},"Create customer"),t.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))},l={render:a=>t.createElement(x,{offCanvas:!0,...a,controller:y("Modal",{isDefaultOpen:!0})},t.createElement(g,null,e.short),t.createElement(E,null,t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long)),t.createElement(o,null,t.createElement(n,null,e.long))),t.createElement(T,null,t.createElement(f,{closeOverlay:"Modal"},t.createElement(m,{color:"accent"},"Create customer"),t.createElement(m,{variant:"soft",color:"secondary"},"Abort"))))};var i,c,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
