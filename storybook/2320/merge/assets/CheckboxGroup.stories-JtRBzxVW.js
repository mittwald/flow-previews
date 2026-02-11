import{r as v,j as e}from"./iframe-l3dQPg2D.js";import{a as p,u,F as h,R as j,S as f,t as C}from"./ResetButton-DLfZ0hQG.js";import{L as i}from"./Label-DxyvMbSs.js";import{B as x}from"./Button-CVhESpos.js";import{S as k}from"./Section-CVphuZOP.js";import{A as O}from"./ActionGroup-vmrUH0ag.js";import{s as d}from"./Action-BglyJGiG.js";import{C as n}from"./CheckboxGroup-DV5-lYfl.js";import{C as r}from"./Checkbox-CC0f9xF-.js";import{F as b}from"./FieldDescription-DDFYZqNC.js";import{F}from"./FieldError-Q6bz3Uf7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCyGrJK3.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./clsx-B-dksMZM.js";import"./index-BnwDl3XO.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./context-bJyTUMD1.js";import"./useRef-FIk_DJsE.js";import"./utils-BpR6PJXM.js";import"./ButtonView-DNKUy4ei.js";import"./browser-vgtThTGE.js";import"./Label.module-CUYTf9Jc.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./IconWarning-C2C4Ye1P.js";import"./remote-VRbYHHBV.js";import"./Text-Cd9ftiQT.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./Text-CND2PMao.js";import"./LoadingSpinner-p4NafINf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dfp0w4eo.js";import"./ProgressBar-DjNwNSer.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Bgm61Ocu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLrRc3iw.js";import"./useFocus-BoIaqFAK.js";import"./useFocusRing-Sg4LsORI.js";import"./useFocusable-CewhyE_c.js";import"./ContextMenuSection-C_ZfDCN7.js";import"./Dialog-ByCdR2Sm.js";import"./RSPContexts-D9dFuQ_b.js";import"./OverlayArrow-BBo0Td8e.js";import"./useControlledState-DV6ufSFw.js";import"./Collection-3pd5EYPv.js";import"./CollectionBuilder-BWIBmgEn.js";import"./SelectionIndicator-DJKLLJ3b.js";import"./Separator-70ZL6L0X.js";import"./SelectionManager-D6KTmYmL.js";import"./useEvent-D7GEvC9q.js";import"./useCollator-BSc7Uwep.js";import"./FocusScope-Cs1Wy-O3.js";import"./VisuallyHidden-D5CUP-QC.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./useStatic-BdWyaTNp.js";import"./context-BBlsigfO.js";import"./ColumnLayout-CSgiEEpd.js";import"./useMakeFocusable-Cr7saEEd.js";import"./useFieldComponent-CTh-2D00.js";import"./FieldError-DNTSOotb.js";import"./Form-bbOcDT_r.js";import"./useFormValidation-D7taYq4g.js";import"./useToggleState-BD6TnVKE.js";import"./useFormReset-mKOiKuYb.js";import"./AlertText-D9cFuXo0.js";import"./AlertIcon-C6xXCfYQ.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
