import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-Dw48WxDw.js";import{S as n}from"./Section-BX_QgEBU.js";import{T as r}from"./Text-CkBcFDZm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-wUaQYyEI.js";import"./PropsContextProvider-Bes6Wf8F.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./ContextMenuTrigger-C4l5bo88.js";import"./PopoverTrigger-CJjKvP3U.js";import"./Action-Benk5eLT.js";import"./OverlayTrigger-CZl3hatG.js";import"./utils-CblGkSXh.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DFzBEdBA.js";import"./useFocusable-SxMTR87z.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CELuk77o.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BPPmAJfG.js";import"./FocusScope-Be1QW02A.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CQbC_8pq.js";import"./IconApp-Cxjf7gPB.js";import"./IconWarning-2GqJK2gc.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-B_ssJImm.js";import"./Header-BW0XyIS8.js";import"./SelectionManager-Ca2csQpH.js";import"./useEvent-BUAZZNDw.js";import"./useCollator-fUoTTx-r.js";import"./Separator-DNy1xdqg.js";import"./Text-PvbfzXMy.js";import"./Button-ulZ4Jbdu.js";import"./LoadingSpinner-CTgdLL_K.js";import"./Button-EGpG9HXG.js";import"./useSingleSelectListState-hzPqJTtO.js";import"./useHasTabbableChild-BUdg4gG6.js";import"./Heading-D9yqhEYw.js";import"./Heading-BTa2x8cK.js";import"./TextField-CdWbuRq3.js";import"./TextFieldBase-CScNTBbU.js";import"./FormField.module-CpCFPza4.js";import"./Form-B3U8TWeK.js";import"./useLabel-D9TuMkUI.js";import"./Input-Ca4BfW5i.js";import"./Label-Dyr5o6sY.js";import"./useTextField-Co4FN_Q7.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-XTfJKiv1.js";import"./LabeledValue-D5C8R1nT.js";import"./Switch-Cpjms9i9.js";import"./useToggleState-Cc7bnfWE.js";import"./Header-ChDIOXtm.js";import"./StatusIcon-BXLWxkLS.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const He={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Ke=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,Ke as __namedExportsOrder,He as default};
