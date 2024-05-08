import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-CznWxE7-.js";import"./index-DCJG5P8M.js";import"./index-C54xbiei.js";import{S as n}from"./Section-Dm1V3EgV.js";import{T as r}from"./Text-CJTQbeNn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B9DLSnGg.js";import"./index-B8XB3FuZ.js";import"./index-DbrZWI7Y.js";import"./index-DybNggUs.js";import"./useFocusable-MoxYh-uU.js";import"./utils-CFgm1FN7.js";import"./usePress-MPJq79ab.js";import"./FocusScope-rBNftQuu.js";import"./useEvent-bUe--On6.js";import"./Dialog-DzxZJdi6.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-B4XMciY_.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-DihPW0Td.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-B4xl8Q9B.js";import"./VisuallyHidden-nkBW5OaY.js";import"./Collection-DC4Wq3pw.js";import"./Popover-C-oWjOfV.js";import"./Text-lHr3U40N.js";import"./IconApp-JyWhxCMW.js";import"./IconWarning-C_kJLkLV.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-DNdCp8yq.js";import"./index-CkqFYb2z.js";import"./Button-Cq_ZV_AH.js";import"./LoadingSpinner-CMA-K2VV.js";import"./Button-BK2AeOPB.js";import"./index-CsIF0d8P.js";import"./Heading-DI5I2A91.js";import"./index-CD6TZjmE.js";import"./index-DczMKnb-.js";import"./FormField.module-CYRw8qgA.js";import"./Form-CmcgVqgW.js";import"./useLabel-CWK-s9y2.js";import"./Input-DIJXBTmN.js";import"./useFormReset-C1GDru7d.js";import"./Label-CvjXK79E.js";import"./index-CFfOdAw2.js";import"./Label-S-uniype.js";import"./LabeledValue-go9zLFWQ.js";import"./index-CdbbHLM_.js";import"./useToggleState-CQdQ-TFQ.js";import"./index-DrivKhNT.js";import"./Header-B1_xCbbH.js";import"./index-BHjpzTpB.js";import"./StatusIcon-CiVs6QHs.js";import"./index-dhKWstfL.js";const Ae={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Be=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,Be as __namedExportsOrder,Ae as default};
