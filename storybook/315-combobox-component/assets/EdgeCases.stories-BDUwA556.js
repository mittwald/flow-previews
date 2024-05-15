import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-TQ6EUQ-W.js";import"./index-Cb02gwrs.js";import"./index-B_ou1i4R.js";import{S as n}from"./Section-BQe7walp.js";import{T as r}from"./Text-Dp5UV4Su.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CvmVviyC.js";import"./index-BOkhicXD.js";import"./index-BJtYgMLW.js";import"./index-CWjdaQek.js";import"./useFocusable-Ci2wVYze.js";import"./utils-BGsKKjDw.js";import"./usePress-CP78YWrE.js";import"./FocusScope-CRWuoD-1.js";import"./useEvent-CTaGr_kn.js";import"./Dialog-BTcu6PHq.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CBf0Hfqk.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CsLYpn7N.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-COLBOOlB.js";import"./VisuallyHidden-DG5wj4QR.js";import"./Collection-D8kckE6P.js";import"./Popover-Bhbei27J.js";import"./Text-Daiml_5e.js";import"./IconApp-FFx7s__U.js";import"./IconWarning-CZBb_lzG.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-CaZgjiSf.js";import"./index-B9XJpLw1.js";import"./Button-aU2Eeeyj.js";import"./LoadingSpinner-Cqz6fh5v.js";import"./Button-C6109VW8.js";import"./index-KxW2TRL5.js";import"./Heading-4tYTrSDh.js";import"./index-CLJk_5g7.js";import"./index-Cgt-y8q0.js";import"./FormField.module-Co8ldtVA.js";import"./Form-BZ0PxO7a.js";import"./useLabel-Cohmypox.js";import"./Input-zmw4YJce.js";import"./useFormReset-B-YRps-i.js";import"./Label-tIxD_xLh.js";import"./index-B__7BxyL.js";import"./Label-hD4PBlz8.js";import"./LabeledValue-DOxg1diC.js";import"./index-_mCYWKrD.js";import"./useToggleState-DGH-n9P8.js";import"./index-1_TjwffV.js";import"./Header-DtVy4Wqt.js";import"./index-hy2JOLlu.js";import"./StatusIcon-BNTYcmFD.js";import"./index-IVpWfQyc.js";const Ae={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
