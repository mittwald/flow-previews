import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-DNWJbfaT.js";import"./index-HE4WC7-2.js";import"./index-C0kgWbNG.js";import{S as n}from"./Section-Cb6ItItg.js";import{T as r}from"./Text-B0HvyfcO.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B3-LTTWn.js";import"./index-B8XB3FuZ.js";import"./index-CseK0um6.js";import"./index-DDlP1Cgs.js";import"./useFocusable-Ddi47NB9.js";import"./utils-D7InqjV7.js";import"./usePress-BZaguEpt.js";import"./FocusScope-4iKrC6rw.js";import"./useEvent-BkyXxHlT.js";import"./Dialog-CeEUt42U.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-BBzZ3ne4.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BaJnhnaM.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DFbr5jK-.js";import"./VisuallyHidden-DV81ojJ5.js";import"./Collection-D_WRBQDn.js";import"./Popover-C71TfZyc.js";import"./Text-nCCH5eH7.js";import"./IconApp-D-kcT16p.js";import"./IconWarning-Cw7drCLR.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-BIx3rBzx.js";import"./index-DzE_Eh0U.js";import"./Button-D7-eBhv0.js";import"./LoadingSpinner-D3fzZb_z.js";import"./Button-tv1ba3Dw.js";import"./index-7pHJL0pz.js";import"./Heading-DsFi8idn.js";import"./index-Cdv_M-W6.js";import"./index-q3aafY8d.js";import"./FormField.module-CUA8W2mV.js";import"./Form-BGMe3SSh.js";import"./useLabel-lOoP3iJB.js";import"./Input-D6Py-UK9.js";import"./useFormReset-C6n9I88d.js";import"./Label-Ce3BVkqc.js";import"./index-CNAQugcr.js";import"./Label-d-PIMz94.js";import"./LabeledValue-ODvG0nM5.js";import"./index-C-D86Oek.js";import"./useToggleState-DHMkdW7y.js";import"./index-CesHxgiI.js";import"./Header-DabNyMz_.js";import"./index-D0sUrcfV.js";import"./StatusIcon-DDnG46_b.js";import"./index-dhKWstfL.js";const Ae={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
