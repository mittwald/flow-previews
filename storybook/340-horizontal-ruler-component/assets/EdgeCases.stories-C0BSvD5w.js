import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-BkAwfen7.js";import"./index-bse4AL1V.js";import"./index-BYj0i9xS.js";import{S as n}from"./Section-CYTWzavO.js";import{T as r}from"./Text-CitxMihe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Bzcp-389.js";import"./index-X5uBQEpu.js";import"./index-B8XB3FuZ.js";import"./index-C99FM3s7.js";import"./index-C4_RQZLY.js";import"./useFocusable-LawXdULP.js";import"./utils-B2_e5HNY.js";import"./usePress-D9jB10HI.js";import"./FocusScope-jcUMjgZJ.js";import"./useEvent-BKNv45VH.js";import"./Dialog-Bjj1S_RZ.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-D_7EpnQ2.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-IXxfzPeK.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-C0fIA4N3.js";import"./VisuallyHidden-X5SqJT1V.js";import"./Collection-B8yNjfsY.js";import"./Popover-D9nPnnAb.js";import"./Separator-YZPjw3E6.js";import"./Text-BgNBscSb.js";import"./IconApp-Bb0sM1mV.js";import"./IconWarning-CLj4DHmJ.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-BRfLqcm3.js";import"./index-CeXKRVdR.js";import"./Button-C-7AlVVr.js";import"./LoadingSpinner-CJYm9ODm.js";import"./Button-CmF3agSr.js";import"./index-BrB6CA44.js";import"./Heading-uHidQQTA.js";import"./index-BMO0Nt4U.js";import"./index-BgjmZZNM.js";import"./FormField.module-BqUTl5iu.js";import"./Form-MXGUzDjW.js";import"./useLabel-BeKP7_XB.js";import"./Input-DV7ZKJVj.js";import"./useFormReset-C0zRxOhr.js";import"./Label-DFB5ayN_.js";import"./index-BfxlIjbh.js";import"./Label-C8DEhvL-.js";import"./LabeledValue-CMEe-fUP.js";import"./index-BO8UNPG4.js";import"./useToggleState-BiJaP4jx.js";import"./index-CLOOnWIG.js";import"./Header-DoGA_aWV.js";import"./index-DVAIL5TL.js";import"./StatusIcon-D42LZUL6.js";import"./index-dhKWstfL.js";const Ne={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(s=(c=i.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var b,u,d;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const De=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,De as __namedExportsOrder,Ne as default};
