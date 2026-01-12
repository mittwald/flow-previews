import{j as e,r as v}from"./iframe-Bt_Ape3b.js";import{b as p,u,F as h,t as C}from"./Form-B8CwJQM0.js";import{L as i}from"./Label-LBQHmcU0.js";import{R as j,S as f}from"./ResetButton-C8v8M-AR.js";import{B as x}from"./Button-Bm5EggmV.js";import{S as k}from"./Section-fmZi8k9e.js";import{A as O}from"./ActionGroup-BVJwbp62.js";import{s as d}from"./Action-B2h50d-b.js";import{C as n}from"./CheckboxGroup-Cq5pfwoy.js";import{C as r}from"./Checkbox-B1xRUsGB.js";import{F as b}from"./FieldDescription-BVGH4033.js";import{F}from"./FieldError-DvZju2Cm.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3ysZU61.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./clsx-B-dksMZM.js";import"./index-gN6AAF3-.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./context-BGqy3a6E.js";import"./browser-BI8hAkYP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Bfb_thp3.js";import"./utils-DGGum7sG.js";import"./Hidden-CJIrU941.js";import"./useRef-1CdJSa2G.js";import"./IconWarning-BQjeLTWb.js";import"./remote-C9NcRL_b.js";import"./Text-Bs2hbxJA.js";import"./EmulatedBoldText-213nH2nf.js";import"./Text-DwU1R_Cs.js";import"./LoadingSpinner-CXrerpwy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pXrc8KX9.js";import"./ProgressBar-DgNpOae2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BAWBHbvC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DErVZDbk.js";import"./useFocus-C-togmBu.js";import"./useFocusRing-Ba6s95SH.js";import"./useFocusable-BX_sV3cU.js";import"./ContextMenuSection-22Ea6AVl.js";import"./Dialog-3KThjjZh.js";import"./RSPContexts-CtPg4mPr.js";import"./OverlayArrow-CVhGLAoZ.js";import"./useControlledState-Bw01eRXu.js";import"./Collection-CZkVMDHw.js";import"./CollectionBuilder-D9hZnXF0.js";import"./SelectionIndicator-7G59x11l.js";import"./Separator-fa_nI6Bk.js";import"./SelectionManager-BSKqz5jy.js";import"./useEvent-B7_y21W_.js";import"./useCollator-CvPTpoia.js";import"./FocusScope-BOag0uW3.js";import"./VisuallyHidden-CM2m0J8e.js";import"./getActionGroupSlot-Cx8mj5km.js";import"./useStatic-DpZVpe0y.js";import"./context-CGPA3PGo.js";import"./ColumnLayout-DdKg9fzr.js";import"./useMakeFocusable-BDeNc1uT.js";import"./useFieldComponent-QpDNRghi.js";import"./FieldError-Cd4omKy3.js";import"./Form-E_SZdIUl.js";import"./useFormValidation-Gf9yhQ7S.js";import"./useToggleState-BlnK1BaH.js";import"./useFormReset-BU_Yh1RY.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Pe={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),l=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(l,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(l,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(l,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},a={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const We=["Default","WithFieldError","WithFocus"];export{a as Default,m as WithFieldError,c as WithFocus,We as __namedExportsOrder,Pe as default};
