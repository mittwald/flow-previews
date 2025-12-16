import{j as e,r as v}from"./iframe-xTeLnFvu.js";import{u as p,F as u}from"./Form-CzGdw75V.js";import{L as i}from"./Label-CVltlbUu.js";import{F as h,t as C}from"./Field-CAkbrvl3.js";import{B as x}from"./Button-BA5_aaZE.js";import{S as k}from"./Section-o_jduYUp.js";import{A as O}from"./ActionGroup-TgHXsP3h.js";import{s as d}from"./Action-GyTbi50D.js";import{F as b}from"./TranslationProvider-Y_3SKiEv.js";import{F}from"./FieldError-oOsFR_NQ.js";import{C as n}from"./CheckboxGroup-CF_j_Y31.js";import{C as r}from"./Checkbox-n2MCTQAb.js";import{R as j}from"./ResetButton-DEvz3aTX.js";import{S as f}from"./SubmitButton-DWFkkN3I.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-RW8IAkpU.js";import"./utils-DAXmWa5w.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./clsx-B-dksMZM.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-lamhxTiw.js";import"./PropsContextProvider-B-9yYF9r.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./context-7tIPXbfR.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-ndn1boAo.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./Text-CX0dnSU4.js";import"./EmulatedBoldText-st1IlPV2.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./ContextMenuSection-NFDNiNZp.js";import"./lib-90ocxLs-.js";import"./context-B3gmiBCA.js";import"./RSPContexts-BbeCs0tS.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";import"./useStatic-DiiqycDM.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./Activity-D0VzS_Xj.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./FieldError-Cxb9ZjML.js";import"./IconDanger-DpVgPae0.js";import"./ColumnLayout-BuO3YUFL.js";import"./useMakeFocusable-o_9RQjJN.js";import"./useFieldComponent-Brjsz3RP.js";import"./IconCheckboxEmpty-7U5xO_Vs.js";import"./Form-CFtpyLOk.js";import"./useFormValidation-CD-qIFlG.js";import"./useToggleState-VQNppDql.js";import"./useFormReset-Co6bkbVB.js";import"./useRef-D_8ZkygH.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),we={title:"Integrations/React Hook Form/CheckboxGroup",component:h,render:()=>{const s=async t=>{await d(1500),E(t)},o=p({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=C();return e.jsx(u,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=p();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(u,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(h,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=p();return e.jsxs(u,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(h,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Ve=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,Ve as __namedExportsOrder,we as default};
