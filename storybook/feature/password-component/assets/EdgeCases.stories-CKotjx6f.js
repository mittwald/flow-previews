import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-Db4MOhZF.js";import{S as r}from"./Section-Rvmxs17J.js";import{T as n}from"./Text-9sk1yuEP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-arII6e68.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./index-B8XB3FuZ.js";import"./useRef-Bn46b7Fk.js";import"./ContextMenuTrigger-CwUX6ugD.js";import"./ContextMenu.module-CAjBRoKS.js";import"./PopoverTrigger-DJ-VldBS.js";import"./OverlayTrigger-Kx2AxGL_.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CQIUSZWS.js";import"./useFocusable-CtcwBWSa.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C1ab-RBW.js";import"./FocusScope-Bimv_uf0.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-ZyvE9T3T.js";import"./context-CzxCD9gm.js";import"./useSelector-5Wd8CZ0x.js";import"./Action-DWWIxyP-.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-DBpcl0fC.js";import"./IconWarning-BftDN5EW.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./Separator-CGt9BNMq.js";import"./Text-BuIyiEeX.js";import"./useMenuTrigger-C1rWppsa.js";import"./SelectionManager-CkLw65uU.js";import"./useEvent-m5sATXdH.js";import"./Button-D6AAkLLn.js";import"./LoadingSpinner-flulPeUb.js";import"./Button-C6BAnfYv.js";import"./useHasTabbableChild-uH9hzZpb.js";import"./useSingleSelectListState-CfiXLjT5.js";import"./Heading-CWJy5QRX.js";import"./TextField-Ds7yctqK.js";import"./TextFieldBase-17NoigTW.js";import"./FormField.module-DR_kdvFm.js";import"./Form-CL2fRmNo.js";import"./useLabel-BaXqGmeE.js";import"./FieldDescription-C6NwozVR.js";import"./TextField-BNwOvocl.js";import"./Input-DSzdqNHR.js";import"./useFormReset-CfqvoD0r.js";import"./Label-BdwIGkgY.js";import"./Label-19OEyuih.js";import"./LabeledValue-0KMxo1mB.js";import"./Switch-C0mZ2l2i.js";import"./useToggleState-DHp5tDAt.js";import"./Header-0ZrJLFST.js";import"./StatusIcon-ER_a_72l.js";import"./Activity-Cov3f-FH.js";import"./EmulatedBoldText-B1t6hs5E.js";const Ce={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
