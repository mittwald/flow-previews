import{j as e,r as f}from"./iframe-C60aMdie.js";import{c as p,u,F as h,t as O}from"./Form-B7ahjlLL.js";import{L as i}from"./Label-CzVOnNLd.js";import{R as j,S as v}from"./ResetButton-1riTIdIi.js";import{B as x}from"./Button-jX--b59C.js";import{S as k,s as d}from"./Section-BTXSJ-5X.js";import{A as C}from"./ActionGroup-pA_bsRMT.js";import{y as n,v as r,x as b,F}from"./Modal-BRLjWmcI.js";import"./index-nuYtCEEu.js";import"./dynamic-CVq1BkmJ.js";import"./flowComponent-jCG2SJhp.js";import"./index-my9L9zM2.js";import"./clsx-B-dksMZM.js";import"./index-CLR1PkMI.js";import"./useLocalizedStringFormatter-CwhdRj3j.js";import"./context-CbOMBxRf.js";import"./browser-CNA-G9XW.js";import"./utils-BQFwVYY5.js";import"./ProgressBar-B_mDm1JC.js";import"./Hidden-BZIUhw-w.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-B5fkZC-l.js";import"./Text-SUPQTMUT.js";import"./EmulatedBoldText-gDNBGAzw.js";import"./LoadingSpinner-EerxDvmb.js";import"./Button-CvbHAn2i.js";import"./useFocusRing-DC3IjPh5.js";import"./useFocusable-Dew49z7P.js";import"./context-DSrUG3BE.js";import"./RSPContexts-DTGtZjZs.js";import"./Collection-BnGKbvLc.js";import"./CollectionBuilder-CwoEUOyQ.js";import"./SelectionIndicator-DueQdBHH.js";import"./Separator-y5zzyFFC.js";import"./useStatic-vNm-dgAB.js";import"./getActionGroupSlot-CdLyQOZc.js";import"./FileCardList-CCCPEiGj.js";import"./Avatar-B7kisHtJ.js";import"./AlertIcon-C7zTMkoz.js";import"./Image-CXRwncHw.js";import"./Link-lNOdoot_.js";import"./ControlledNotification-DflLvVYg.js";import"./LayoutCard-BHGne7SD.js";import"./Accordion-CKOAUBtf.js";import"./Alert-BJKw0QeS.js";import"./AlertBadge-CnHLq6IR.js";import"./Align-BpStHQnP.js";import"./AvatarStack-TfH6cSvv.js";import"./BigNumber-CCd4dY5q.js";import"./Breadcrumb-DsZIUq31.js";import"./Heading-DAaBZvd2.js";import"./Legend-C-QoQfEn.js";import"./Color-DYvyagNb.js";import"./TableFooterRow-Byf_2RJW.js";import"./SkeletonText-DqQ9EdbR.js";import"./Content-CEAhgMHe.js";import"./CounterBadge-BSi8dS51.js";import"./DonutChart-DE-zhDub.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BTGMNUbe.js";import"./Header-CACiotaV.js";import"./Initials-CCakY2tg.js";import"./InlineCode-Cct-b4qD.js";import"./Separator-BSnGWgyT.js";import"./MessageSeparator-BdlWKUzt.js";import"./NavigationGroup-Bvrr1zmO.js";import"./Notification-CjMVwQai.js";import"./NotificationProvider-xKOj-JZj.js";import"./ProgressBar-BQfUYYSR.js";import"./Rating-CqYV9FLO.js";import"./Skeleton-CYpMvI04.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Te={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
