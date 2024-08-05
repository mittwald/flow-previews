import{R as e}from"./index-Cs7sjTYM.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-rUBL-osE.js";import{S as r}from"./Section-BWmhBa-4.js";import{T as n}from"./Text-CKzq6DJ7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pqjPq5AK.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./index-BU4L-DQy.js";import"./ContextMenuTrigger-fXlXMRN9.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-rK8LsZjG.js";import"./OverlayTrigger-DxcxJYqB.js";import"./utils-CgpzwoFP.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-DV_Q4mkz.js";import"./useFocusable-BkYgQ3nW.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-e9a-mRh7.js";import"./FocusScope-BciiliGi.js";import"./Hidden-BsXGu--s.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-DH_5EOkC.js";import"./context-CTUxmD2F.js";import"./useSelector-TDHv-ONZ.js";import"./Action-B-gIcL7D.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-41mJvSgJ.js";import"./IconWarning-DEIPTq84.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Wrap-DQq6jo70.js";import"./Collection-Ds0ZPgJZ.js";import"./CollectionBuilder-DEbmrEtK.js";import"./Header-BpzwameQ.js";import"./Separator-yosXA4ie.js";import"./Text-BgIWd_-0.js";import"./useMenuTrigger-DmKnFmZh.js";import"./SelectionManager-CMHB_EVK.js";import"./useEvent-Be9f7BQw.js";import"./Button-DTCfsN_H.js";import"./LoadingSpinner-wM1jsfLK.js";import"./Button-inQNMO4w.js";import"./useHasTabbableChild-Dov1LbVK.js";import"./useSingleSelectListState-PmR0Kswu.js";import"./useListState-CFHQlgei.js";import"./Heading-BmWAPbKa.js";import"./TextField-Dm1XxpQO.js";import"./TextFieldBase-ClE_Q2HK.js";import"./FormField.module-BrZ1GDUg.js";import"./Form-DbuIRMOS.js";import"./useLabel-D8UVq-XF.js";import"./FieldDescription-D3N-O2pe.js";import"./Input-Cw3QD1cL.js";import"./useFormReset-DlrFI1sj.js";import"./Label-BRZ8BO2K.js";import"./Label-Dqbeaq-B.js";import"./LabeledValue-CFTVEBbQ.js";import"./Switch-DzE-_PA8.js";import"./useToggleState-BHHU0G0W.js";import"./Header-C4FgG5lE.js";import"./StatusIcon-cGO3K_fD.js";import"./Activity-CPnWONG0.js";import"./EmulatedBoldText-Dmze-Iwg.js";const Oe={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const $e=["DifferentHeight","Nested"];export{a as DifferentHeight,l as Nested,$e as __namedExportsOrder,Oe as default};
