import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as o}from"./Default.stories-CgPPihKe.js";import"./index-Bv7a-2e2.js";import"./index-Bei-u9ze.js";import{S as n}from"./Section-Dg1sXpJf.js";import{T as r}from"./Text-9aVSwLyk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3iYbsVA.js";import"./index-7Bm5Bt6L.js";import"./index-BOkhicXD.js";import"./index-DzX70DOD.js";import"./index-DxHWpCWl.js";import"./useFocusable-BGYghl-O.js";import"./utils-CHnd_qWz.js";import"./usePress-C4eoOWOJ.js";import"./FocusScope-BAgquhRo.js";import"./useEvent-BxbBFNFa.js";import"./Dialog-CmqFKjmg.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-DMphC9df.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Cwaj61aR.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabels-7II0TQXO.js";import"./VisuallyHidden-DMUsmByH.js";import"./Collection-DUP4IVi4.js";import"./Popover-DBFx0NG8.js";import"./Separator-BEXQHetg.js";import"./Text-QhWkLhD7.js";import"./IconApp-CwGZLNCA.js";import"./IconWarning-DABzRPnq.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./useSingleSelectListState-CeQssJal.js";import"./index-D0HYlWWA.js";import"./Button-DZIkkxYk.js";import"./LoadingSpinner-Dlmb3D8K.js";import"./Button-D-FvJARW.js";import"./index-DmQj09BX.js";import"./Heading-Brugf5ci.js";import"./index-B4uSg-oW.js";import"./index-Dcup7wB4.js";import"./FormField.module-s1_K2-y0.js";import"./Form-DC_Jaq0Q.js";import"./useLabel-CRisioBB.js";import"./Input-DZsvBgax.js";import"./useFormReset-Co0XpM0Q.js";import"./Label-D2L52JVz.js";import"./index-Cmz1vSES.js";import"./Label-BSqTcUZR.js";import"./LabeledValue-mVBNLuKU.js";import"./index-BrH9oWir.js";import"./useToggleState-BH37kVIL.js";import"./index-CtU6hAD9.js";import"./Header-CN40ku03.js";import"./index-CXs-fvmo.js";import"./StatusIcon-DT3gzH0c.js";import"./index-DBUGr6AP.js";import"./index-DePfloUh.js";const De={title:"Navigation/Tabs/Edge Cases",...E},i={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:a=>e.createElement(T,{...a},e.createElement(m,{id:"a"},e.createElement(o,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(o,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...a,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(o,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(o,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const He=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,He as __namedExportsOrder,De as default};
