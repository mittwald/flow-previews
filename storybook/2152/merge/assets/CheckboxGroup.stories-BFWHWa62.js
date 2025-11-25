import{j as e,r as f}from"./iframe-CwbJq3r1.js";import{c as p,u,F as h,t as O}from"./Form-C9I1kaA2.js";import{L as i}from"./Label-hfc8gnGk.js";import{R as j,S as v}from"./ResetButton-Cg_lrBPM.js";import{B as x}from"./Button-CDiKsYfE.js";import{S as k,s as d}from"./Section-BfEoCltm.js";import{A as C}from"./ActionGroup-DSsfeKXt.js";import{y as n,v as r,x as b,F}from"./Modal-UmnffMZn.js";import"./index-nuYtCEEu.js";import"./dynamic-IznNfavT.js";import"./flowComponent-DXmJ7qTr.js";import"./index-DOh9HP8s.js";import"./clsx-B-dksMZM.js";import"./index-BteSo1JG.js";import"./useLocalizedStringFormatter-B4yqbLzs.js";import"./context-BZjsOLmp.js";import"./browser-kBiuzLEF.js";import"./utils-CPaMkJSd.js";import"./ProgressBar-D7w8upNS.js";import"./Hidden-kKtmtVK1.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning--_iZ6FJr.js";import"./Text-CrE3MVm4.js";import"./EmulatedBoldText-BqYq2ptk.js";import"./LoadingSpinner-mT4GMrz2.js";import"./Button-Bhd7ARuI.js";import"./useFocusRing-BPZjqIep.js";import"./useFocusable-Bezx6XMf.js";import"./context-B56GsAs1.js";import"./RSPContexts-y_L0XZPW.js";import"./Collection-BPSIvTLJ.js";import"./CollectionBuilder-Dfx3RB_n.js";import"./SelectionIndicator-D2MfWhCg.js";import"./Separator-BubC8oQ4.js";import"./useStatic-D3JCqzcf.js";import"./FileCardList-CFXH-qjX.js";import"./Avatar-C4sAvZAr.js";import"./AlertIcon-D4SK6nAz.js";import"./Image-Bmadiq8c.js";import"./Link-BAl7QXrG.js";import"./ControlledNotification-Deb0rzCB.js";import"./Flex-DUcNemwf.js";import"./Accordion-BQnPG_jT.js";import"./Alert-x-P_ExCm.js";import"./AlertBadge-DzKW-VdF.js";import"./Align-DDaFErA1.js";import"./AvatarStack-DTk1p07I.js";import"./BigNumber-CBUp9ofh.js";import"./Breadcrumb-CmDjMlTt.js";import"./Heading-FVvo5o9O.js";import"./Legend-D05yZHp2.js";import"./Color-DfZVycWq.js";import"./TableFooterRow-DQtCx6U6.js";import"./SkeletonText-C0pUD_bb.js";import"./Content-C5Mjar79.js";import"./CounterBadge-Dgds6XQc.js";import"./DonutChart-Bll2GL_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CSYNvEVP.js";import"./Header-DUtH1frW.js";import"./Initials-DbAAmjP_.js";import"./InlineCode-CA30spDN.js";import"./LayoutCard-BEWgIH8M.js";import"./Separator-ucvqUY6a.js";import"./MessageSeparator-BVYCvU4X.js";import"./NavigationGroup-CmJE1VHy.js";import"./Notification-Cfojyaki.js";import"./NotificationProvider-x4r_49LO.js";import"./ProgressBar-DSuKBqER.js";import"./Rating-e_Mh9Lse.js";import"./Skeleton-DkzLlt2Q.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Te={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const He=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,He as __namedExportsOrder,Te as default};
