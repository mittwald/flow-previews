import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-C5bB7xZR.js";import{S as r}from"./Section-DFdFoe7O.js";import{T as n}from"./Text-xMX89lYJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B5uZ4s1Y.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./index-B8XB3FuZ.js";import"./useRef-Bn46b7Fk.js";import"./ContextMenuTrigger-BtKIOhjD.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-auuHu7tU.js";import"./OverlayTrigger-B-iEVEid.js";import"./utils-CcQIssJO.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BERv84ls.js";import"./useFocusable-BcMbiAJh.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CqD9eiQF.js";import"./FocusScope-BuxQ1peU.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-DA6R-bu4.js";import"./context-DcNveDbd.js";import"./useSelector-Be3r6XND.js";import"./Action-CatRQW-r.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-D5gedeYa.js";import"./IconWarning-DT8hSaQm.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./Collection-wxk3VkXl.js";import"./Header-tof3fAA-.js";import"./Separator-mwJ01TZq.js";import"./Text-22vGTmcn.js";import"./useMenuTrigger-CUKl09yl.js";import"./SelectionManager-7Pq-D15P.js";import"./useEvent-m5sATXdH.js";import"./Button-86gkFkCw.js";import"./LoadingSpinner-5UBwHS6-.js";import"./Button-CJW8IwaF.js";import"./useHasTabbableChild-Bu9H6jdl.js";import"./useSingleSelectListState-CE1HJiGj.js";import"./useListState-D1B_u9so.js";import"./Heading-BMx6bwiN.js";import"./TextField-CxsQxITw.js";import"./TextFieldBase-C8oXy505.js";import"./FormField.module-CWdTNYuH.js";import"./Form-DYn-vm94.js";import"./useLabel-BaXqGmeE.js";import"./FieldDescription-Wv4h-N9O.js";import"./TextField-CIb_y3cC.js";import"./Input-B2pvGP9E.js";import"./useFormReset-CfqvoD0r.js";import"./Label-C622KGdQ.js";import"./Label-Doa_m8lQ.js";import"./LabeledValue-0KMxo1mB.js";import"./Switch-C-JMo1fA.js";import"./useToggleState-DHb0rmRa.js";import"./Header-DVchM5wQ.js";import"./StatusIcon-CpS3c7AY.js";import"./Activity-Cov3f-FH.js";import"./EmulatedBoldText-B1t6hs5E.js";const Oe={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const $e=["DifferentHeight","Nested"];export{a as DifferentHeight,l as Nested,$e as __namedExportsOrder,Oe as default};
