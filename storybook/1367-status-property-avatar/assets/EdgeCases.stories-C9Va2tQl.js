import{j as t}from"./jsx-runtime-D_zvdyIk.js";import"./index-CtQTiInQ.js";import{d as i}from"./dummyText-CX_I_Wpl.js";import h from"./Default.stories-DoyHRVpd.js";import{T as a,a as e,b as n}from"./Tab-tgUJ2xWM.js";import{S as r}from"./Section-C2M3YcEF.js";import{T as o}from"./Text-VF_oP7nB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Heading-C5oNFXhr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./index-Cdp0xV4M.js";import"./Heading-BzdgKMPb.js";import"./RSPContexts-8O1fXkhd.js";import"./utils-D0CTRpvX.js";import"./TextField-BYQKV9VP.js";import"./TextFieldBase-DYOOBnjZ.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CXuJOxH0.js";import"./IconApp-ZwiVKkvj.js";import"./IconWarning-DwN0_tyk.js";import"./FieldError-DHw7a52T.js";import"./Text-oMr6ueMZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./FieldDescription-DV5kfhzf.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./Form-DrDCrztH.js";import"./useLabel-BhTOAlCQ.js";import"./Input-DIVKzZcg.js";import"./Hidden-Dd0lSYNZ.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocus-HZduNndM.js";import"./Label-BZrcB42p.js";import"./useTextField-CGlHkggm.js";import"./useFormReset-Dt6BcYvw.js";import"./useControlledState-BKUqB07S.js";import"./useFocusable-43R3EC9q.js";import"./useFormValidation-CI5EZsou.js";import"./Label-C3GsNgl3.js";import"./LabeledValue-4eL2FKyW.js";import"./Switch-Dvq64gqN.js";import"./useToggleState-GjA-q7MY.js";import"./usePress-CEYeyB88.js";import"./VisuallyHidden-p5Z0Rn92.js";import"./Header-Czinm9Tb.js";import"./AlertIcon-B6EJnlWg.js";import"./ContextMenuContent-BvY3YW3l.js";import"./Action-BzpotNjO.js";import"./context-CTL7IXlD.js";import"./useStatic-6gmUMcuL.js";import"./browser-BJKb5O22.js";import"./getActionGroupSlot-OAZ-j8kn.js";import"./dynamic-DKDa4OpU.js";import"./ContextMenuSection-CazUyE0l.js";import"./Dialog-D2bUbTtQ.js";import"./Button-BEBevqbU.js";import"./ProgressBar-DPPT7aTs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./OverlayArrow-Cidi8nN7.js";import"./Collection-mdal2UB1.js";import"./CollectionBuilder-Bzd5BBwK.js";import"./Separator-CJeFikfz.js";import"./useOverlayTriggerState-BZ_Sugy1.js";import"./SelectionManager-BAB-BMSj.js";import"./useEvent-BQK_0uZ_.js";import"./useCollator-B4aWBoUu.js";import"./FocusScope-Cx-5Cw_n.js";import"./Popover-LCccCEfa.js";import"./OverlayTrigger-C2ciT0Db.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-D98NT4gk.js";import"./Button-CkVi4rXV.js";import"./LoadingSpinner-CuFSnwXw.js";import"./Activity-DISdJcjv.js";import"./useHasTabbableChild-Bp_uq4i1.js";import"./useSingleSelectListState-DAyLqNg5.js";import"./useListState-CP8pyMvg.js";import"./EmulatedBoldText-D1jUzRoU.js";const Lt={title:"Navigation/Tabs/Edge Cases",...h},s={render:m=>t.jsxs(a,{...m,children:[t.jsxs(e,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.long})})]}),t.jsxs(e,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})}),t.jsx(r,{children:t.jsx(o,{children:i.long})})]})]})},p={render:m=>t.jsxs(a,{...m,children:[t.jsxs(e,{id:"a",children:[t.jsx(n,{children:"Tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]}),t.jsxs(e,{id:"b",children:[t.jsx(n,{children:"Tab B"}),t.jsxs(r,{children:[t.jsx(o,{children:i.short}),t.jsxs(a,{...m,disabledKeys:["spam"],children:[t.jsxs(e,{id:"subA",children:[t.jsx(n,{children:"Sub tab A"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]}),t.jsxs(e,{id:"subB",children:[t.jsx(n,{children:"Sub tab B"}),t.jsx(r,{children:t.jsx(o,{children:i.short})})]})]})]})]})]})};var T,d,c;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var x,l,b;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(l=p.parameters)==null?void 0:l.docs)==null?void 0:b.source}}};const Mt=["DifferentHeight","Nested"];export{s as DifferentHeight,p as Nested,Mt as __namedExportsOrder,Lt as default};
