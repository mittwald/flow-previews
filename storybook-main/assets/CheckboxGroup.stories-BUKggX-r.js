import{j as e,r as v}from"./iframe-B-_izELn.js";import{b as p,u,F as h,t as C}from"./Form-Dp0ieSSq.js";import{L as i}from"./Label-xN0BMhRq.js";import{R as j,S as f}from"./ResetButton-BDQEP0wp.js";import{B as x}from"./Button-rB1lHab_.js";import{S as k}from"./Section-BEewp5lM.js";import{A as O}from"./ActionGroup-Cyfs3irQ.js";import{s as d}from"./Action-CmZvSofW.js";import{C as n}from"./CheckboxGroup-Fs24Ksdn.js";import{C as r}from"./Checkbox-Cd2iYacd.js";import{F as b}from"./FieldDescription-Bm61smCN.js";import{F}from"./FieldError-C2OlbqQW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bdsqC1kS.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./clsx-B-dksMZM.js";import"./index-C24wTi9Q.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./context-CP_ivtNk.js";import"./browser-C9rDHpHO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DUJ6ba3Y.js";import"./utils-CTzaLK4l.js";import"./Hidden-Ud3q5koP.js";import"./useRef-Cr1C-aLL.js";import"./IconWarning-DXXSRvhn.js";import"./remote-DY2XWwFP.js";import"./Text-B9UK706u.js";import"./EmulatedBoldText-DO19SLv9.js";import"./Text-Cbq-V_qs.js";import"./LoadingSpinner-BCeR-IPA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RawUYYof.js";import"./ProgressBar-CGHlOl5l.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZiDffWU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDCEcfQ2.js";import"./useFocus-BKzgn786.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocusable-I-aSrCr_.js";import"./ContextMenuSection-Cd3ymo9B.js";import"./Dialog-C6Hf8kgU.js";import"./RSPContexts-k_uvwm8O.js";import"./OverlayArrow-C1kYwcM3.js";import"./useControlledState-tdUQVzVH.js";import"./Collection-BlKc58PT.js";import"./CollectionBuilder-C9MyseWf.js";import"./SelectionIndicator-ey4emqqq.js";import"./Separator-xctm41Qr.js";import"./SelectionManager-Bstf7-gd.js";import"./useEvent-DwiqP_vq.js";import"./useCollator-Sj9w00om.js";import"./FocusScope-BQUCV4aX.js";import"./VisuallyHidden-DwaExAJM.js";import"./getActionGroupSlot-DlereTwl.js";import"./useStatic-k4uG0_kr.js";import"./context--GYGv0Su.js";import"./ColumnLayout-DuNkZsJa.js";import"./useMakeFocusable-C5rWXAfk.js";import"./useFieldComponent-Kyt2SdHG.js";import"./FieldError-2QNeUIGm.js";import"./Form-CwweEOY6.js";import"./useFormValidation-d7hQTD7K.js";import"./useToggleState-C7JUTu28.js";import"./useFormReset-BUoUtOhQ.js";import"./AlertText-BdI1vJoj.js";import"./AlertIcon-DHh3kTXL.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Me={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Te=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,Te as __namedExportsOrder,Me as default};
