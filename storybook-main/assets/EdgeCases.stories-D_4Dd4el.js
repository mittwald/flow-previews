import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-BD7CdPc_.js";import{S as r}from"./Section-BeFlFaPG.js";import{T as n}from"./Text-5DZcOrRy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DpPOHS38.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./index-B8XB3FuZ.js";import"./useRef-Bn46b7Fk.js";import"./ContextMenuTrigger-BnF6JGiO.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-C-NNp23A.js";import"./OverlayTrigger-C-T-XlBI.js";import"./utils-CcQIssJO.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CscfTk_S.js";import"./useFocusable-C-qOUFhv.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Bw-L1sLn.js";import"./FocusScope-DBQ4F6TM.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BopbO3Wg.js";import"./context-D0eOVtdN.js";import"./useSelector-43iio57k.js";import"./Action-D4UJ51Z2.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-ZB_mDMmk.js";import"./IconWarning-BtAGI7Yn.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./Collection-wxk3VkXl.js";import"./Header-tof3fAA-.js";import"./Separator-mwJ01TZq.js";import"./Text-DqgvIX4k.js";import"./useMenuTrigger-_tXWyjWN.js";import"./SelectionManager-CSYAD4ny.js";import"./useEvent-m5sATXdH.js";import"./Button-DbqhdQOB.js";import"./LoadingSpinner-CsAgL5A_.js";import"./Button-CoDApBTL.js";import"./useHasTabbableChild-DBYL8m3l.js";import"./useSingleSelectListState-OgY9R3mg.js";import"./useListState-DIndkdGn.js";import"./Heading-DVg7wytp.js";import"./TextField-DHcMigna.js";import"./TextFieldBase-C-l-YCDi.js";import"./FormField.module-DQthEUsq.js";import"./Form-CuH0gdtx.js";import"./useLabel-BaXqGmeE.js";import"./FieldDescription-BSEJ-1b-.js";import"./Input-CmsFj7Gh.js";import"./useFormReset-CfqvoD0r.js";import"./Label-J_0igrPF.js";import"./Label-BD5VUJI0.js";import"./LabeledValue-0KMxo1mB.js";import"./Switch-C7pCKYtL.js";import"./useToggleState-ioH5SgDc.js";import"./Header-7p3tVUi5.js";import"./StatusIcon-Bf46Ku1G.js";import"./Activity-Cov3f-FH.js";import"./EmulatedBoldText-B1t6hs5E.js";const Ce={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Oe=["DifferentHeight","Nested"];export{a as DifferentHeight,l as Nested,Oe as __namedExportsOrder,Ce as default};
