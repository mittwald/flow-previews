import{R as e}from"./index-Cs7sjTYM.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-dLewUo-w.js";import{S as r}from"./Section-D0rNhwJY.js";import{T as n}from"./Text-LHdvXnr0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BePwBSVK.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./index-BMdlDBjA.js";import"./ContextMenuTrigger-YubsAOP0.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-BiL7SFFQ.js";import"./OverlayTrigger-CwMTi2gX.js";import"./utils-Ca6JWPXc.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-qwcow8p4.js";import"./useFocusable-OJvPCLGe.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DiyYDbeg.js";import"./FocusScope-DZAGVQVL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-BF1ug10U.js";import"./context-bVfXLi_S.js";import"./useSelector-U15DiHqH.js";import"./Action-BfZ149VX.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-4m04zbQ2.js";import"./IconWarning-CTWky_Q0.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Wrap-DQq6jo70.js";import"./Collection-BEvGW34q.js";import"./Header-Dl17m4NE.js";import"./Separator-BcuXU_Ka.js";import"./Text-Bu-3W4UG.js";import"./useMenuTrigger-BvBxGpyF.js";import"./SelectionManager-CDhpFlBD.js";import"./useEvent-Be9f7BQw.js";import"./Button-CiKnYIGF.js";import"./LoadingSpinner-BHLzaSO_.js";import"./Button-DB69cHYY.js";import"./useHasTabbableChild-D1U-B9cv.js";import"./useSingleSelectListState-DIFwGnIY.js";import"./useListState-WF9kU_9r.js";import"./Heading-BCPLx9jC.js";import"./TextField-C7zlwXSW.js";import"./TextFieldBase-Dl913wKQ.js";import"./FormField.module-BSGa-iGQ.js";import"./Form-CIOW7CQK.js";import"./useLabel-D8UVq-XF.js";import"./FieldDescription-B1U3A-eH.js";import"./Input-Bzotem6v.js";import"./useFormReset-DlrFI1sj.js";import"./Label-D7wSVlkX.js";import"./Label-CHMSQGHW.js";import"./LabeledValue-C0N0ZDYr.js";import"./Switch-yfrnWcyG.js";import"./useToggleState-aoqtyG8F.js";import"./Header-DwbpkEPW.js";import"./StatusIcon-CRYhxqii.js";import"./Activity-CPnWONG0.js";import"./EmulatedBoldText-Dmze-Iwg.js";const ve={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
