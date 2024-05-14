import{R as e}from"./index-BwDkhjyp.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-DaYfkzOd.js";import"./index-B9XXai3V.js";import"./index-C0raSsgL.js";import{S as n}from"./Section-CXA3xdMn.js";import{T as r}from"./Text-phIOO8u9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-syVPRVDK.js";import"./index-CoJk2QQB.js";import"./index-B8XB3FuZ.js";import"./index-CLE904PY.js";import"./index-D5RbZ7pD.js";import"./SelectionManager-LFnrF7wv.js";import"./useLocalizedStringFormatter-Cfq_zrt4.js";import"./FocusScope-B_JIBP49.js";import"./useFocusable-C08EbcBh.js";import"./utils-bTb4N6hy.js";import"./usePress-18_TO7Wj.js";import"./useEvent-CxA2gELr.js";import"./getScrollParent-CcmJp979.js";import"./useControlledState-C0C-dzuH.js";import"./Dialog-BDggyyJu.js";import"./RSPContexts-Bc9pl35m.js";import"./OverlayArrow-fvqKTS-v.js";import"./number-nHrFdSb-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-DByniHrJ.js";import"./VisuallyHidden-Jq0fOfeV.js";import"./Collection-DLxRuvCx.js";import"./Popover-C3fkzfCP.js";import"./Text-fvXBaVCt.js";import"./IconApp-RPV2UACM.js";import"./IconWarning-D1gyLIYa.js";import"./deepFindOfType-CmKNZ8si.js";import"./react-children-utilities-CseWD4BL.js";import"./Wrap-DQq6jo70.js";import"./useHasTabbableChild-DBgz3iOB.js";import"./useSingleSelectListState-D1ACGwAI.js";import"./index-ajPlF_if.js";import"./Button-D8pmMIBp.js";import"./LoadingSpinner-JGHWlUAu.js";import"./Button-D5gdTRso.js";import"./index-D3WyxQ4e.js";import"./Heading-BxjLDyJj.js";import"./index-C96EqvCY.js";import"./index-CrF0ssBL.js";import"./FormField.module-DxGAUAvA.js";import"./Form-UOu9ohy-.js";import"./useLabel-CgqvziXr.js";import"./Input-uGmnc6nV.js";import"./useFormReset-BqJg0Uge.js";import"./Label-gkOQ74H0.js";import"./index-Bxd6nhvt.js";import"./Label-wWG0xxvc.js";import"./LabeledValue-DVeRrMLU.js";import"./index-1_igLmJ8.js";import"./useToggleState-BdzbjUDf.js";import"./index-Cqq1_-Ta.js";import"./Header-DflcxEkm.js";import"./index-BEfwv0cx.js";import"./StatusIcon-BBGwTo54.js";import"./index-dhKWstfL.js";const He={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(s=(c=i.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};var b,u,d;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const Ke=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,Ke as __namedExportsOrder,He as default};
