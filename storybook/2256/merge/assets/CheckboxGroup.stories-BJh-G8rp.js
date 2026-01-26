import{j as e,r as v}from"./iframe-ICCBaEZ0.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-DHM0HwV0.js";import{L as i}from"./Label-CdS4JTo9.js";import{B as x}from"./Button-BPUjkcWl.js";import{S as k}from"./Section-f7ELsjIS.js";import{A as O}from"./ActionGroup-Cyu4G9Rw.js";import{s as d}from"./Action-BI-eqtgf.js";import{C as n}from"./CheckboxGroup-Cj9muL7R.js";import{C as r}from"./Checkbox-BMrumPje.js";import{F as b}from"./FieldDescription-CTX2Nbt4.js";import{F}from"./FieldError-CXiPiawI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D4nz3o_q.js";import"./flowComponent-BP2zunxu.js";import"./index-Bz_4mo81.js";import"./clsx-B-dksMZM.js";import"./index-Dbcsq1pl.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./context-BA_6GkxW.js";import"./useRef-CiWut0dQ.js";import"./utils-Bdyed02U.js";import"./ButtonView-BszEJvVk.js";import"./browser-BXZux_wF.js";import"./Label.module-CUYTf9Jc.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./Text-wotACWdr.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./Text-6VRpzXYD.js";import"./LoadingSpinner-DZTaEi_R.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CEB885Bq.js";import"./ProgressBar-DNR75UAD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./ContextMenuSection-CUOZwZ8m.js";import"./Dialog-YdLNLYvV.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./VisuallyHidden-CIUq3upT.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./useStatic-EBffme0U.js";import"./context-CFn3lEGQ.js";import"./ColumnLayout-B-kEP-Bk.js";import"./useMakeFocusable-1nTHUZwR.js";import"./useFieldComponent-C2gLyH5u.js";import"./FieldError-Uso8nKHu.js";import"./Form-Dqb0_Mn-.js";import"./useFormValidation-BK0HiA-u.js";import"./useToggleState-CF685k98.js";import"./useFormReset-mc9YwuWr.js";import"./AlertText-CQRiaMTC.js";import"./AlertIcon-DVbl3jDT.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
