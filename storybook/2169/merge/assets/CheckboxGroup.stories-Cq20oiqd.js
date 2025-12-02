import{j as e,r as f}from"./iframe-D7uC-7V_.js";import{b as p,u,F as h,t as k}from"./Form-CCYrfuDn.js";import{L as i}from"./Label-y1KlwDdZ.js";import{R as j,S as v}from"./ResetButton-DVnH5EXp.js";import{B as x}from"./Button-DiCPbDhS.js";import{S as C,s as d}from"./Section-CzjrUr3W.js";import{A as O}from"./ActionGroup-BnlrcjLF.js";import{w as n,s as r,v as b,g as F}from"./TimeField-ChKcnSkk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-osoyJDTl.js";import"./PropsContextProvider-D6ETz4eO.js";import"./mergeRefs-B2M5WDOC.js";import"./index-Bd9v0Vhf.js";import"./clsx-B-dksMZM.js";import"./useLocalizedStringFormatter-CCpeSzbu.js";import"./context-77px_zVw.js";import"./browser-BKGMjSP-.js";import"./utils-DGPkAfM6.js";import"./ProgressBar-BjaQZGPw.js";import"./Hidden-B7ytCKiH.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-BCNTNt6q.js";import"./Text-BiV92KiG.js";import"./EmulatedBoldText-Dg54gE_i.js";import"./LoadingSpinner-VIxuY4J8.js";import"./Button-Djt7NA3M.js";import"./useFocusRing-DNcE5kU2.js";import"./useFocusable-0BAeD1Xf.js";import"./context-DmsiyyTB.js";import"./RSPContexts-DX_a6o14.js";import"./Collection-DSbN1ly0.js";import"./CollectionBuilder-B1mZ5m8d.js";import"./SelectionIndicator-BfrUmlWT.js";import"./Separator-CvniWKxN.js";import"./useStatic-Bxi8RVTv.js";import"./Accordion-Bnn1T4u6.js";import"./Alert-YZV9z460.js";import"./AlertIcon-BcCRWTe9.js";import"./AlertBadge-BebrPRF6.js";import"./Align-C8k1XZam.js";import"./Popover-Dwlz0jk0.js";import"./OverlayTrigger-H7UlFHIL.js";import"./TableFooterRow-CJIkUPOT.js";import"./SkeletonText-WMJJ6TP-.js";import"./Avatar-BotNt0IR.js";import"./AvatarStack-kQt2Mvuu.js";import"./Badge-CY7C5Oi3.js";import"./BigNumber-DM5XNeaC.js";import"./Breadcrumb-LvGcUQcP.js";import"./Link-jcFfsHJW.js";import"./Heading-f_QLDsgR.js";import"./Legend-D_JnQBhX.js";import"./FileCardList-zUXBvT8Y.js";import"./Image-C-Vme5-k.js";import"./Color-B6fplESU.js";import"./Content-B1NGoO5F.js";import"./ContextualHelpTrigger-CXOGuB9Y.js";import"./CounterBadge-XdhpMb79.js";import"./DonutChart-D8VWCFcu.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-r5k0CWyC.js";import"./Header-KGEBRUvg.js";import"./Initials-CcLnKcuF.js";import"./InlineCode-ZcnGdcwH.js";import"./PopoverTrigger-CjKyKtrA.js";import"./Separator-BtJYxtfR.js";import"./Message-BWOh6QKG.js";import"./MessageSeparator-D2bkHsuQ.js";import"./NavigationGroup-C4DQiXAl.js";import"./Notification-wte0OMcO.js";import"./NotificationProvider-BJj6x8o-.js";import"./ProgressBar-B2IIvRjr.js";import"./Rating-CT5Wuzie.js";import"./Skeleton-CMKH9Nqe.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ne={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=k();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(C,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return f.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(v,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Ue=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,Ue as __namedExportsOrder,Ne as default};
