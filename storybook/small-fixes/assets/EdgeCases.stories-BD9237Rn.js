import{R as e}from"./index-Cs7sjTYM.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-BNtQJQrJ.js";import{S as r}from"./Section-C2Z6e2-1.js";import{T as n}from"./Text-CKRVNL4F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmFvo3FE.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./index-BMdlDBjA.js";import"./ContextMenuTrigger-BK5ysdxn.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-ogW-oUPn.js";import"./OverlayTrigger-CQB85vT6.js";import"./utils-Ca6JWPXc.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-DEf4p40l.js";import"./useFocusable-CMUHH7RC.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BgSaJexe.js";import"./FocusScope-CYj0PTxA.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-DOEjDcNd.js";import"./context-BnTmsIr7.js";import"./useSelector-57VmxYcA.js";import"./Action-3wslkoqS.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-Cq2nF_H2.js";import"./IconWarning-CT4MKmtH.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Wrap-DQq6jo70.js";import"./Collection-BEvGW34q.js";import"./Header-Dl17m4NE.js";import"./Separator-BcuXU_Ka.js";import"./Text-Bu-3W4UG.js";import"./useMenuTrigger-B3aSWIfS.js";import"./SelectionManager-UiwhxUR3.js";import"./useEvent-Be9f7BQw.js";import"./Button-HXKu8JZI.js";import"./LoadingSpinner-DmXq9kUh.js";import"./Button-ImYwklq8.js";import"./useHasTabbableChild-DN047IhA.js";import"./useSingleSelectListState-DeBw41Qb.js";import"./useListState-BZ1WJ603.js";import"./Heading-Cs03TZSA.js";import"./TextField-RDLX3yu2.js";import"./TextFieldBase-Dny-85r0.js";import"./FormField.module-B2X-N4DF.js";import"./Form-CAaH4S7w.js";import"./useLabel-D8UVq-XF.js";import"./FieldDescription-bxWB_3l6.js";import"./Input-CDvJXsrx.js";import"./useFormReset-DlrFI1sj.js";import"./Label-D7wSVlkX.js";import"./Label-CYWf0UOp.js";import"./LabeledValue-C0N0ZDYr.js";import"./Switch-DhQ66vMQ.js";import"./useToggleState-CsSZIfYY.js";import"./Header-DxopgWd6.js";import"./StatusIcon-CWHySg3U.js";import"./Activity-CPnWONG0.js";import"./EmulatedBoldText-Dmze-Iwg.js";const ve={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
