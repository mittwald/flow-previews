import{R as e}from"./index-B-o1Wr-g.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-Zb_qu0Yx.js";import{S as r}from"./Section-CT9dD0YZ.js";import{T as n}from"./Text-9mML8Z29.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bz6Io0hO.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./ContextMenuTrigger-wosNPsm8.js";import"./ContextMenuSection-B0aP5-y_.js";import"./Action-v-b0G_7k.js";import"./context-CtwQP4Yz.js";import"./useSelector-Cb4sc2b-.js";import"./browser-B3hGj0u-.js";import"./getActionGroupSlot-DVGp_tC1.js";import"./dynamic-DKDa4OpU.js";import"./Dialog-CbvlC6bd.js";import"./Button-CPCoFgob.js";import"./utils-7gTBvjqH.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-CuXMKzfT.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-C4vObYq_.js";import"./Text-R-rrVGxo.js";import"./SelectionManager-ubMUrr_P.js";import"./FocusScope-DvafcTTH.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./Popover-sRC00zfV.js";import"./OverlayTrigger-K_SGs4A-.js";import"./IconApp-3W3XzCjg.js";import"./IconWarning-BoAQPcSM.js";import"./Switch-CdI-Z2Vd.js";import"./Label-D1gQZv67.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./Button-CAPBBAH6.js";import"./Wrap-DQq6jo70.js";import"./LoadingSpinner-DNhPsDbg.js";import"./useHasTabbableChild-B8VLEUtQ.js";import"./useSingleSelectListState-4j6-PDFV.js";import"./useListState-g-qjOc9K.js";import"./Activity-BWfzpBOU.js";import"./Heading-BDRONVjZ.js";import"./Heading-CrY40Q5a.js";import"./TextField-dUEbLjWr.js";import"./TextFieldBase-D2gguQdb.js";import"./FieldError-zIiVOJJb.js";import"./FieldError-Dc7wTCBj.js";import"./FieldDescription-DL_UboA3.js";import"./Form-CS2x0aS5.js";import"./Input-In3k7nSs.js";import"./useTextField-BGTL6xBV.js";import"./LabeledValue-Ab1r6U20.js";import"./Header-C7AUAiBL.js";import"./AlertIcon-nPq7a9IA.js";import"./EmulatedBoldText-1x_0FOGF.js";const qe={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <Tabs {...props}>
      <Tab id="a">
        <TabTitle>Tab A</TabTitle>
        <Section>
          <Text>{dummyText.long}</Text>
        </Section>
      </Tab>
      <Tab id="b">
        <TabTitle>Tab B</TabTitle>
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
      </Tab>
    </Tabs>
}`,...(s=(c=a.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var b,u,d;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <Tabs {...props}>
      <Tab id="a">
        <TabTitle>Tab A</TabTitle>
        <Section>
          <Text>{dummyText.short}</Text>
        </Section>
      </Tab>
      <Tab id="b">
        <TabTitle>Tab B</TabTitle>
        <Section>
          <Text>{dummyText.short}</Text>
          <Tabs {...props} disabledKeys={["spam"]}>
            <Tab id="subA">
              <TabTitle>Sub tab A</TabTitle>
              <Section>
                <Text>{dummyText.short}</Text>
              </Section>
            </Tab>
            <Tab id="subB">
              <TabTitle>Sub tab B</TabTitle>
              <Section>
                <Text>{dummyText.short}</Text>
              </Section>
            </Tab>
          </Tabs>
        </Section>
      </Tab>
    </Tabs>
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const we=["DifferentHeight","Nested"];export{a as DifferentHeight,l as Nested,we as __namedExportsOrder,qe as default};
