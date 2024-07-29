import{R as e}from"./index-Cs7sjTYM.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-BwuMkweH.js";import{S as r}from"./Section-C5Edz-Xg.js";import{T as n}from"./Text-DrKyKMJq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BqZrLudx.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./index-BMdlDBjA.js";import"./ContextMenuTrigger-ClDi3PZ1.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-CPc_PWRs.js";import"./OverlayTrigger-05SHITif.js";import"./utils-Ca6JWPXc.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BxlO7pa5.js";import"./useFocusable-OJvPCLGe.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-QuGsJjbc.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DiyYDbeg.js";import"./FocusScope-DZAGVQVL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-BF1ug10U.js";import"./context-D6OB3BUw.js";import"./useSelector-D7b7Gg7N.js";import"./Action-CQarenSX.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-COwJ0ZRR.js";import"./IconWarning-CBdDJmJC.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Wrap-DQq6jo70.js";import"./Collection-BEvGW34q.js";import"./Header-Dl17m4NE.js";import"./Separator-BcuXU_Ka.js";import"./Text-DkFxhH4d.js";import"./useMenuTrigger-Cyu8UOWg.js";import"./SelectionManager-CTPoXmGv.js";import"./useEvent-Be9f7BQw.js";import"./Button-ETWxWgqR.js";import"./LoadingSpinner-BB5hHLYh.js";import"./Button-DB69cHYY.js";import"./useHasTabbableChild-D1U-B9cv.js";import"./useSingleSelectListState-dzA5TIZd.js";import"./useListState-BCXMCUR2.js";import"./Heading-BOKzrxeE.js";import"./TextField-BpP84nct.js";import"./TextFieldBase-DVhxZiZ4.js";import"./FormField.module-DHQpNdM-.js";import"./Form-yihfkm38.js";import"./useLabel-D8UVq-XF.js";import"./FieldDescription-CGzCV37F.js";import"./TextField-DlniDS2c.js";import"./Input-DrqkB9m8.js";import"./useFormReset-DlrFI1sj.js";import"./Label-D27JuWFB.js";import"./Label-C-aczTYm.js";import"./LabeledValue-C0N0ZDYr.js";import"./Switch-sw62UyT7.js";import"./useToggleState-aoqtyG8F.js";import"./Header-ClGk2rJ_.js";import"./StatusIcon-CkgrZvvx.js";import"./Activity-CPnWONG0.js";import"./EmulatedBoldText-Dmze-Iwg.js";const Ce={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
