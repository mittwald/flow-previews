import{R as e}from"./index-Cs7sjTYM.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-CoRCvvZ6.js";import{S as r}from"./Section-hsBef4Kf.js";import{T as n}from"./Text-BM3moMBE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BttIposY.js";import"./PropsContextProvider-C-7PaZ52.js";import"./index-Dy0c0dcE.js";import"./index-BMdlDBjA.js";import"./ContextMenuTrigger-D7sChA0H.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-tlRjFQDU.js";import"./OverlayTrigger-BxJNM7zm.js";import"./utils-Cy-A-nlV.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-BBlidXZz.js";import"./useFocusable-OFlS-6qe.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./PressResponder-COi_Rbo6.js";import"./usePress-CTrgc7uI.js";import"./FocusScope-67rE8EpU.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-n83dATVM.js";import"./VisuallyHidden-D76woJCP.js";import"./context-ByqglxCN.js";import"./useSelector-e9voYkxv.js";import"./Action-C93l4HVN.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-CyHi4WPz.js";import"./IconWarning-DZJaqlYL.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Wrap-DQq6jo70.js";import"./Collection-DR5xXegF.js";import"./Header-CXhviMrv.js";import"./Separator-CWkByXs_.js";import"./Text-Dh5WnJTs.js";import"./useMenuTrigger-BlNU1FKo.js";import"./SelectionManager-Dy9tah2i.js";import"./useEvent-CpHTlQWK.js";import"./useDescription-BDysBDpW.js";import"./Button-m5USM9JU.js";import"./LoadingSpinner-T2v-ofXf.js";import"./Button-DrQgql3X.js";import"./useHasTabbableChild-CRBJCVmO.js";import"./useSingleSelectListState-BpO7BPB3.js";import"./useListState-2SjGmdPJ.js";import"./Heading-B14qmMr9.js";import"./TextField-BplhZ0NA.js";import"./TextFieldBase-rqc4NlBq.js";import"./FormField.module-Wg7kvnEu.js";import"./Form-BsdqCRI5.js";import"./useLabel-B-9ggeSA.js";import"./FieldDescription-DGU-9Dmk.js";import"./Input-B2XFbQTW.js";import"./Label-8PgMpAzA.js";import"./useTextField-CKAAhVIN.js";import"./useFormReset-DRCqKyTt.js";import"./Label-BpnA_KhO.js";import"./LabeledValue-BMZtnonS.js";import"./Switch-B05ulSJn.js";import"./useToggleState-CsqVtbqc.js";import"./Header-BI0EsPmy.js";import"./StatusIcon-CQCgex6B.js";import"./Activity-Bj6QwKZx.js";import"./EmulatedBoldText-Dmze-Iwg.js";const $e={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const je=["DifferentHeight","Nested"];export{a as DifferentHeight,l as Nested,je as __namedExportsOrder,$e as default};
