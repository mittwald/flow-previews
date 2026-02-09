import{j as e,r as v}from"./iframe-CJFOFCad.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-BkgcDrX7.js";import{L as i}from"./Label-DpG9gbVN.js";import{B as x}from"./Button-D5kumnA4.js";import{S as k}from"./Section-CCwmV9uG.js";import{A as O}from"./ActionGroup-B-ixDo6k.js";import{s as d}from"./Action-Vq-tbHvg.js";import{C as n}from"./CheckboxGroup-C22uGmja.js";import{C as r}from"./Checkbox-BcI9J94R.js";import{F as b}from"./FieldDescription-8OICn3TI.js";import{F}from"./FieldError-Dc2Z54jn.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CfulQ7wG.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./clsx-B-dksMZM.js";import"./index-Cu9s0VFH.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./context-CMyux8LD.js";import"./useRef-B-LbwbXp.js";import"./utils-CsQ8IQtm.js";import"./ButtonView-BS0xOJCI.js";import"./browser-C8kWAWSZ.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./IconWarning-1TKJLzWG.js";import"./remote-BxHvJS68.js";import"./Text-CI7VZqhd.js";import"./EmulatedBoldText-BF5DLBnT.js";import"./Text-8vym_gVd.js";import"./LoadingSpinner-CM8bIOhN.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BaNQUerH.js";import"./ProgressBar-D1JMQZ2r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cb3KoAb3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NyliDXf7.js";import"./useFocus-Cgy8euA9.js";import"./useFocusRing-wbIo7ugc.js";import"./useFocusable-13L7602I.js";import"./ContextMenuSection-C56vs4OS.js";import"./Dialog-YkcYiA7q.js";import"./RSPContexts-CNS2UWja.js";import"./OverlayArrow-DEHMSq9h.js";import"./useControlledState-DvHOpAD3.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./SelectionManager-DYEiw_sj.js";import"./useEvent-Bx7Hxhw9.js";import"./useCollator-DYyzym3S.js";import"./FocusScope-BYRCsx--.js";import"./VisuallyHidden-CZLhXAB_.js";import"./getActionGroupSlot-MsF1cFZX.js";import"./useStatic-C0hf5llT.js";import"./context-DTASnmZz.js";import"./ColumnLayout-BxBPXm11.js";import"./useMakeFocusable-gLc_Rp5H.js";import"./useFieldComponent-CVIwC-Yy.js";import"./FieldError-B3-rgjm7.js";import"./Form-B3lCmY-S.js";import"./useFormValidation-DcThlYcg.js";import"./useToggleState-DFzC1yi5.js";import"./useFormReset-DXleDB5s.js";import"./AlertText-BB2MdEuH.js";import"./AlertIcon-BfQxSvrI.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Me=["Default","WithFieldError","WithFocus"];export{l as Default,m as WithFieldError,c as WithFocus,Me as __namedExportsOrder,We as default};
