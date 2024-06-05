import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-Dc2pe7D5.js";import{S as n}from"./Section-Ab5x8ZlW.js";import{T as r}from"./Text-45YGqDyb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cgwf_8Pz.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./ContextMenuTrigger-CIcfoFu4.js";import"./PopoverTrigger-DfcoxKbn.js";import"./Action-BZHYLJuU.js";import"./OverlayTrigger-Bw1ONM8y.js";import"./utils-VMHz66w6.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-CzGgKwTX.js";import"./useFocusable-BnMUMntI.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BwUp6-ib.js";import"./FocusScope-CWd9kKtL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-C35j07Di.js";import"./IconApp-Bvp8_lYy.js";import"./IconWarning-B_x1GzbP.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-RpYJwiSj.js";import"./Header-CyVwCXR-.js";import"./SelectionManager-1UU5Js-l.js";import"./useEvent-BUAZZNDw.js";import"./Separator-BfUCqNhO.js";import"./Text-CV99Jc8q.js";import"./Button-C83TB_Br.js";import"./LoadingSpinner-Bqf3v_Ad.js";import"./Button-DEqt5BuM.js";import"./useSingleSelectListState-Cl5wlzc0.js";import"./useHasTabbableChild-CHDbjjl0.js";import"./Heading-BOKnc2y2.js";import"./TextField-D4MMbTNU.js";import"./TextFieldBase-B-vvf2GW.js";import"./FormField.module-zpuapejh.js";import"./Form-CiidE__u.js";import"./useLabel-D9TuMkUI.js";import"./Input-udh8AIzL.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-ByvKXg4M.js";import"./Label-BbIZPVxU.js";import"./LabeledValue-D5C8R1nT.js";import"./Switch-BhVTD9Q8.js";import"./useToggleState-BF6BKm9R.js";import"./Header-COuWokR9.js";import"./StatusIcon-Bpt0cWLQ.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const Be={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Ne=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,Ne as __namedExportsOrder,Be as default};
