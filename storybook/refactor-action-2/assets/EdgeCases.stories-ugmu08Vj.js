import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as a}from"./Default.stories-bfvjOdnh.js";import{S as n}from"./Section-BluXrZkz.js";import{T as r}from"./Text-CP7cAcet.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CYso3G7U.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./MenuItem-DsUjL4g2.js";import"./Popover-lr99vIjs.js";import"./Dialog-C_GihYWd.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-B5rNo2Ho.js";import"./useFocusable-DIAzcF9v.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DL4LW3M_.js";import"./FocusScope-CNJ-ZnPk.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-xpUhodH8.js";import"./IconApp-DnBcJRcL.js";import"./IconWarning-D-8E7MU6.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-DR0QT0d2.js";import"./Header-BwGXp1hM.js";import"./useEvent-BUAZZNDw.js";import"./Separator-bFMjWqbW.js";import"./Text-D6Zjnbf0.js";import"./useSingleSelectListState-DD2n2z-V.js";import"./Button-CN9-9vQl.js";import"./LoadingSpinner-vR-kYhCZ.js";import"./Button-B3LWHon2.js";import"./Heading-BckMXqid.js";import"./TextField-CbZ6JTJN.js";import"./TextFieldBase-xT94PShZ.js";import"./FormField.module-DevjUrOP.js";import"./Form-DZXnnIG4.js";import"./useLabel-D9TuMkUI.js";import"./Input-DX5EHvrS.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BQk6lJ-q.js";import"./Label-B0kCAS4o.js";import"./LabeledValue-50H4_vXp.js";import"./Switch-BTl3FnAG.js";import"./useToggleState-iFxDBwox.js";import"./Header-B66fUAZ6.js";import"./StatusIcon-DIFns1XE.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const ge={title:"Navigation/Tabs/Edge Cases",...E},i={render:o=>e.createElement(T,{...o},e.createElement(m,{id:"a"},e.createElement(a,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(a,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:o=>e.createElement(T,{...o},e.createElement(m,{id:"a"},e.createElement(a,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(a,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...o,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(a,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(a,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ye=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,ye as __namedExportsOrder,ge as default};
