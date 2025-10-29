import{j as e,r as j}from"./iframe-BFuSR0CY.js";import{a as u,u as h,F as d,t as f}from"./Form-CHCtd8Yh.js";import{L as i}from"./Label-Bzfu9tdI.js";import{B as p}from"./Button-B8_RMB4T.js";import{S as v}from"./Section-D9YHwW4r.js";import{A as C}from"./ActionGroup-D5-F9zXz.js";import{s as x}from"./Action-BBEtKGm4.js";import{C as n}from"./CheckboxGroup-CemeXEhk.js";import{C as r}from"./Checkbox-C9KBQxd2.js";import{F as b}from"./FieldDescription-DReTe5UI.js";import{F as O}from"./useFieldComponent-DvAk7ROg.js";import"./index-nuYtCEEu.js";import"./flowComponent-Czyught-.js";import"./index-DyDKJP2K.js";import"./clsx-B-dksMZM.js";import"./index-D8dET2XL.js";import"./useLocalizedStringFormatter-CXcIdBbj.js";import"./context-6pf_efel.js";import"./browser-h3r-jBf1.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dl8lfN0K.js";import"./utils-CEuw8CkJ.js";import"./Hidden-BoaT9a_j.js";import"./IconWarning-BDLPxpKm.js";import"./Text-BXhKPUqX.js";import"./EmulatedBoldText-BrOu3vHP.js";import"./Text-CVe1O8QA.js";import"./LoadingSpinner-CF0vj0R_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CV2egPhG.js";import"./ProgressBar-D1Sp6uIf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DzVjSD7h.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYMimxLy.js";import"./useFocus-Dfi_0tQM.js";import"./useFocusRing-CdpePOyD.js";import"./useFocusable-Or0L-1Mb.js";import"./ContextMenuSection-DOizDCjF.js";import"./Dialog-D9CJ_WbB.js";import"./RSPContexts-Df5wrtNL.js";import"./OverlayArrow-wdl515fE.js";import"./useControlledState-Y8_jrThy.js";import"./Collection-C9ImqwdO.js";import"./CollectionBuilder-ZO6bxSPM.js";import"./SelectionIndicator-DEvuKTnp.js";import"./Separator-BLwDKZm_.js";import"./SelectionManager-DrJQTmKT.js";import"./useEvent-D6E-W8z_.js";import"./useCollator-D7Ttiyl_.js";import"./FocusScope-Dzg120-u.js";import"./VisuallyHidden-_YfAavcM.js";import"./dynamic-BFfatATg.js";import"./getActionGroupSlot-C1e95e1F.js";import"./useStatic-BcQq_-tU.js";import"./context-CFFRtyxF.js";import"./ColumnLayout-C8ldVldH.js";import"./useMakeFocusable-Begosg92.js";import"./Form-CopJ-XT2.js";import"./useFormValidation-Dt4bKs4p.js";import"./useToggleState-C0t6kdYo.js";import"./useFormReset-CMQHaKTN.js";import"./react-children-utilities-705z1kI6.js";import"./ClearPropsContext-DVOTNhZJ.js";const{action:k}=__STORYBOOK_MODULE_ACTIONS__,F=k("submit"),qe={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=f();return e.jsx(d,{form:o,onSubmit:s,children:e.jsxs(v,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsx(C,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}},l={},m={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(O,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=h();return e.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(u,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(p,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(p,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(p,{type:"submit",children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const De=["Default","WithFieldError","WithFocus"];export{l as Default,m as WithFieldError,c as WithFocus,De as __namedExportsOrder,qe as default};
