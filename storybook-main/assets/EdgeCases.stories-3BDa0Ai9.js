import{R as e}from"./index-Cs7sjTYM.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T as p,a as m,b as o}from"./Default.stories-COghAaH3.js";import{S as r}from"./Section-DZJgSsCl.js";import{T as n}from"./Text-DFobm8NI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGcDuTyg.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./index-BU4L-DQy.js";import"./ContextMenuTrigger-yJAGDpqS.js";import"./ContextMenu.module-68N5lvfm.js";import"./PopoverTrigger-Cm4IWgvr.js";import"./OverlayTrigger-DWa7Dc1Q.js";import"./utils-CgpzwoFP.js";import"./RSPContexts-BseA8goh.js";import"./OverlayArrow-DV_Q4mkz.js";import"./useFocusable-BkYgQ3nW.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./useControlledState-B7K2eYzO.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-e9a-mRh7.js";import"./FocusScope-BciiliGi.js";import"./Hidden-BsXGu--s.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-DH_5EOkC.js";import"./context-CjGucmbk.js";import"./useSelector-ChW29QCL.js";import"./Action-Ce_zpnQR.js";import"./dynamic-DKDa4OpU.js";import"./IconApp-DlGeanLT.js";import"./IconWarning-CroX9W4g.js";import"./deepFindOfType-BylCc5Xi.js";import"./react-children-utilities-CdZndyK3.js";import"./Wrap-DQq6jo70.js";import"./Collection-D5YsYnk7.js";import"./CollectionBuilder-bH4u-dJi.js";import"./Header-8TqMsGve.js";import"./Separator-BGQky6UT.js";import"./Text-BgIWd_-0.js";import"./useMenuTrigger-BzxRV7R7.js";import"./SelectionManager-CMHB_EVK.js";import"./useEvent-Be9f7BQw.js";import"./Button-fU4Pt4Kk.js";import"./LoadingSpinner-Co_zSuhJ.js";import"./Button-inQNMO4w.js";import"./useHasTabbableChild-Dov1LbVK.js";import"./useSingleSelectListState-PmR0Kswu.js";import"./useListState-CFHQlgei.js";import"./Heading-InJy3tvI.js";import"./TextField-z0bNX1jq.js";import"./TextFieldBase-B9hmdm_B.js";import"./FormField.module--VZj-B2c.js";import"./Form-DbuIRMOS.js";import"./useLabel-D8UVq-XF.js";import"./FieldDescription-dcSxnKn6.js";import"./Input-Cw3QD1cL.js";import"./useFormReset-DlrFI1sj.js";import"./Label-BRZ8BO2K.js";import"./Label-yWN_zBcG.js";import"./LabeledValue-CFTVEBbQ.js";import"./Switch-CiNxYS2A.js";import"./useToggleState-BHHU0G0W.js";import"./Header-VAFa0f0d.js";import"./StatusIcon-3N4xPsk6.js";import"./Activity-CPnWONG0.js";import"./EmulatedBoldText-Dmze-Iwg.js";const Oe={title:"Navigation/Tabs/Edge Cases",...E},a={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long)),e.createElement(r,null,e.createElement(n,null,t.long))))},l={render:i=>e.createElement(p,{...i},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(r,null,e.createElement(n,null,t.short),e.createElement(p,{...i,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(r,null,e.createElement(n,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(r,null,e.createElement(n,null,t.short)))))))};var T,c,s;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
