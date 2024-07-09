import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-CGzsZdRm.js";import{S as r}from"./Section-C7o9NPg9.js";import{T as n}from"./Text-DSN33OXK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-AS0Hu7py.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./index-B8XB3FuZ.js";import"./useRef-Bn46b7Fk.js";import"./ContextMenuTrigger-BXM2i1bQ.js";import"./ContextMenu.module-CAjBRoKS.js";import"./PopoverTrigger-BqV1qz4C.js";import"./OverlayTrigger-CAl_vZvt.js";import"./utils-B-mS0hjG.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-CQIUSZWS.js";import"./useFocusable-CtcwBWSa.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./useControlledState-C0C-dzuH.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C1ab-RBW.js";import"./FocusScope-Bimv_uf0.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-ZyvE9T3T.js";import"./context-DoCmQP3a.js";import"./useSelector-BZxe7lyr.js";import"./Action-Dz1KgLbV.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-Rpgm6RsJ.js";import"./IconWarning-B2iaes-f.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./Collection-Dx1XK91-.js";import"./Header-TlY9oddI.js";import"./Separator-CGt9BNMq.js";import"./Text-BuIyiEeX.js";import"./useMenuTrigger-1Ql0ZEUi.js";import"./SelectionManager-CkLw65uU.js";import"./useEvent-m5sATXdH.js";import"./Button-35pCrNCZ.js";import"./LoadingSpinner-Dmul2awi.js";import"./Button-C6BAnfYv.js";import"./useHasTabbableChild-uH9hzZpb.js";import"./useSingleSelectListState-CfiXLjT5.js";import"./Heading-BpDAxACS.js";import"./TextField-Dr6392-n.js";import"./TextFieldBase-DKLDQlOT.js";import"./FormField.module-BbVpug7o.js";import"./Form-CL2fRmNo.js";import"./useLabel-BaXqGmeE.js";import"./FieldDescription-DmfHWucp.js";import"./TextField-BNwOvocl.js";import"./Input-DSzdqNHR.js";import"./useFormReset-CfqvoD0r.js";import"./Label-BdwIGkgY.js";import"./Label-1LVMR3ux.js";import"./LabeledValue-0KMxo1mB.js";import"./Switch-D_dfrtrc.js";import"./useToggleState-DHp5tDAt.js";import"./Header-CjdE_nUy.js";import"./StatusIcon-BZTkuITy.js";import"./Activity-Cov3f-FH.js";import"./EmulatedBoldText-B1t6hs5E.js";const Ce={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
