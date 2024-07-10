import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-D1ZCN5PI.js";import{S as r}from"./Section-BVsEEh4-.js";import{T as n}from"./Text-Bxhza4fE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbDEtdyo.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./index-B8XB3FuZ.js";import"./useRef-Bn46b7Fk.js";import"./ContextMenuTrigger-CEq1c6cH.js";import"./ContextMenu.module-CAjBRoKS.js";import"./PopoverTrigger-BXqZhBbM.js";import"./OverlayTrigger-DBKZn7pn.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-74RQSP_w.js";import"./useFocusable-CKMlalor.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-YR3pmEr9.js";import"./FocusScope-DW-lXgh3.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BSWHffzG.js";import"./context-Bn5j6nR1.js";import"./useSelector-J4AjFox4.js";import"./Action-2q0-LgdR.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-BCpbdHgg.js";import"./IconWarning-zYrPFMer.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./Separator-CGt9BNMq.js";import"./Text-C_suByGF.js";import"./useMenuTrigger-RmtceGNU.js";import"./SelectionManager-BD-OU06l.js";import"./useEvent-m5sATXdH.js";import"./Button-BTNOdvWu.js";import"./LoadingSpinner-CdrecLs9.js";import"./Button-BTMfZQLF.js";import"./useHasTabbableChild-CzV91we_.js";import"./useSingleSelectListState-BxkSo5KR.js";import"./Heading-rdQzPY0C.js";import"./TextField-DiwXcCmz.js";import"./TextFieldBase-CVCJVDqa.js";import"./FormField.module-B3UvHS1K.js";import"./Form-Dmkgi1d-.js";import"./useLabel-BaXqGmeE.js";import"./FieldDescription-DyYHFM_e.js";import"./Input-DNo_oYh5.js";import"./useFormReset-CfqvoD0r.js";import"./Label-DwL17Jrp.js";import"./Label-nQ0y4l8x.js";import"./LabeledValue-0KMxo1mB.js";import"./Switch-DqRsJkzW.js";import"./useToggleState-BohumPZ6.js";import"./Header-Cc2mE6-7.js";import"./StatusIcon-BRn0vxtA.js";import"./Activity-Cov3f-FH.js";import"./EmulatedBoldText-B1t6hs5E.js";const ve={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Ce=["DifferentHeight","Nested"];export{a as DifferentHeight,l as Nested,Ce as __namedExportsOrder,ve as default};
