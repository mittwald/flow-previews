import{j as e,r as v}from"./iframe-DXKyl4qq.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-SPfrEBJU.js";import{L as i}from"./Label-DJy_0fcC.js";import{B as x}from"./Button-0acoIVQZ.js";import{S as k}from"./Section-B8nblZQJ.js";import{A as O}from"./ActionGroup-CDY92rej.js";import{s as d}from"./Action-eA8jYG3_.js";import{C as n}from"./CheckboxGroup-BNnm1Fmt.js";import{C as r}from"./Checkbox-C_jXwd8E.js";import{F as b}from"./FieldDescription-BLR7NcCI.js";import{F}from"./FieldError-hPaNUVVF.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CaArDE2O.js";import"./flowComponent-CGVR20ME.js";import"./index-CGttF0w9.js";import"./clsx-B-dksMZM.js";import"./index-CK0x1Z6h.js";import"./useLocalizedStringFormatter-DsWoRU9M.js";import"./context-C5-138xc.js";import"./useRef-CVzViYXT.js";import"./utils-Cgx1j8_A.js";import"./ButtonView-vjQ-21-e.js";import"./browser-Q1FjFR8E.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dkou43m_.js";import"./Hidden-CaezFR51.js";import"./IconWarning-BTtxekbk.js";import"./remote-5V97MXBJ.js";import"./Text-DlQihciA.js";import"./EmulatedBoldText-Bw3TIL22.js";import"./Text-Dy69l_TS.js";import"./LoadingSpinner-NKyffFLh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-O8jlFCas.js";import"./ProgressBar-C7LcFD3o.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CXFTMfS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-MFF54RNh.js";import"./useFocus-BAjbVDBz.js";import"./useFocusRing-DoixN5z_.js";import"./useFocusable-DAwaDAhU.js";import"./ContextMenuSection-BIRP1Ixf.js";import"./Dialog-B1psX4sF.js";import"./RSPContexts-DBmlKLt8.js";import"./OverlayArrow-BvQnSdeu.js";import"./useControlledState-DW1EgN0_.js";import"./Collection-9k1PtGDv.js";import"./CollectionBuilder-Ur5Id6rg.js";import"./SelectionIndicator-BncnqGmj.js";import"./Separator-CtwDwrgV.js";import"./SelectionManager-Dx4eaKjX.js";import"./useEvent-B4GDMgLt.js";import"./useCollator-D4u7p9z_.js";import"./FocusScope-CeuTnAxx.js";import"./VisuallyHidden-XnRwWdWi.js";import"./getActionGroupSlot-CBJ6_xHE.js";import"./useStatic-CdHxY_ZS.js";import"./context-9N5Shw7P.js";import"./ColumnLayout-B6knVDhR.js";import"./useMakeFocusable-l6suc7Fp.js";import"./useFieldComponent-DrLbNusb.js";import"./FieldError-CXwp2WFY.js";import"./Form-VygiigBM.js";import"./useFormValidation-1Ohd4Vow.js";import"./useToggleState-uqciZ7Ue.js";import"./useFormReset-Cw-gwOYV.js";import"./AlertText-BbpMfzbs.js";import"./AlertIcon-BU8g3GYG.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
