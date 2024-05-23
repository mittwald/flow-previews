import{R as e}from"./index-uCp2LrAq.js";import{d as t}from"./dummyText-CX_I_Wpl.js";import{m as E,T,a as m,b as a}from"./Default.stories-CU0OATR-.js";import{S as n}from"./Section-E_iin6FZ.js";import{T as r}from"./Text-CUixX_oz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-vzWTOrGV.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./MenuItem-B5uBs1AL.js";import"./Popover-DC7vl5YR.js";import"./Dialog-BFmJ2ppq.js";import"./utils-DZgOXw50.js";import"./RSPContexts-CJnKmcd7.js";import"./OverlayArrow-v1vY8OUu.js";import"./useFocusable-DIAzcF9v.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DL4LW3M_.js";import"./FocusScope-CNJ-ZnPk.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-xpUhodH8.js";import"./IconApp-DtUWP9rs.js";import"./IconWarning-YjEBVGoW.js";import"./deepFindOfType-CMLjW25q.js";import"./react-children-utilities-BZCIIV1H.js";import"./Wrap-DQq6jo70.js";import"./Collection-DR0QT0d2.js";import"./Header-BlggLZdS.js";import"./useEvent-BUAZZNDw.js";import"./Separator-bFMjWqbW.js";import"./Text-D6Zjnbf0.js";import"./useSingleSelectListState-CYtb0jyp.js";import"./Button-BNbuaVOw.js";import"./LoadingSpinner-BMjyzcge.js";import"./Button-B3LWHon2.js";import"./Heading-DxyHKHHa.js";import"./TextField-ClNWHM7H.js";import"./TextFieldBase-BTkDIkm9.js";import"./FormField.module-BV5OHIpz.js";import"./Form-DZXnnIG4.js";import"./useLabel-D9TuMkUI.js";import"./Input-DX5EHvrS.js";import"./useFormReset-Bt7ImmB-.js";import"./Label-BQk6lJ-q.js";import"./Label-BvATcGL2.js";import"./LabeledValue-CETvLM5P.js";import"./Switch-Dxb9vZEJ.js";import"./useToggleState-iFxDBwox.js";import"./Header-D6kqYlJq.js";import"./StatusIcon-DDk7UOTs.js";import"./Activity-Ck-RMSDT.js";import"./EmulatedBoldText-DzNCZpDp.js";const ge={title:"Navigation/Tabs/Edge Cases",...E},i={render:o=>e.createElement(T,{...o},e.createElement(m,{id:"a"},e.createElement(a,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.long))),e.createElement(m,{id:"b"},e.createElement(a,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long)),e.createElement(n,null,e.createElement(r,null,t.long))))},l={render:o=>e.createElement(T,{...o},e.createElement(m,{id:"a"},e.createElement(a,null,"Tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"b"},e.createElement(a,null,"Tab B"),e.createElement(n,null,e.createElement(r,null,t.short),e.createElement(T,{...o,disabledKeys:["spam"]},e.createElement(m,{id:"subA"},e.createElement(a,null,"Sub tab A"),e.createElement(n,null,e.createElement(r,null,t.short))),e.createElement(m,{id:"subB"},e.createElement(a,null,"Sub tab B"),e.createElement(n,null,e.createElement(r,null,t.short)))))))};var p,c,s;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ye=["DifferentHeight","Nested"];export{i as DifferentHeight,l as Nested,ye as __namedExportsOrder,ge as default};
