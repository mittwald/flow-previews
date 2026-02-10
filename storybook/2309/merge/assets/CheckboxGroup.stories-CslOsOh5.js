import{r as v,j as e}from"./iframe-BAXQY30e.js";import{a as p,u,F as h,R as j,S as f,t as C}from"./ResetButton-D0JxP27a.js";import{L as i}from"./Label-DhF_BRrp.js";import{B as x}from"./Button-CvDqM7Lu.js";import{S as k}from"./Section-BVe0LGVq.js";import{A as O}from"./ActionGroup-BudZkh0v.js";import{s as d}from"./Action-CDH3oaiQ.js";import{C as n}from"./CheckboxGroup--N4kPGKG.js";import{C as r}from"./Checkbox-CAx12pd6.js";import{F as b}from"./FieldDescription-LY8oqjwS.js";import{F}from"./FieldError-D1QPRlMW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0Mu-qEnq.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./clsx-B-dksMZM.js";import"./index-BAu7LBGH.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./context-Ch7cvv9N.js";import"./useRef-DMh8YqdE.js";import"./utils-CPq9a2_3.js";import"./ButtonView-DderywPS.js";import"./browser-7M05TLI2.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./IconWarning-NY-vs6K4.js";import"./remote-X8ibHJNw.js";import"./Text-CsFAJPGd.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./Text-CgyRU_jx.js";import"./LoadingSpinner-JX83AFJj.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Ca5Nx2F5.js";import"./ProgressBar-DOlyg40u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XkQiS-6W.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-0WoXV1eK.js";import"./useFocus-Bjv2U0Px.js";import"./useFocusRing-eOVByyHK.js";import"./useFocusable-B7f7k6Nb.js";import"./ContextMenuSection-CYSyIaWU.js";import"./Dialog-BnZvghEV.js";import"./RSPContexts-D7b7jdF8.js";import"./OverlayArrow-DrnF7GNT.js";import"./useControlledState-BIans2ur.js";import"./Collection-C9Jq2g2r.js";import"./CollectionBuilder-B4l66tZC.js";import"./SelectionIndicator-m0lWLhXd.js";import"./Separator-5yzWA0zP.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./useCollator-DxEFZJkY.js";import"./FocusScope-PoiaPb2X.js";import"./VisuallyHidden-qM1rInXZ.js";import"./getActionGroupSlot-CKOsA57z.js";import"./useStatic-rplOn2Qs.js";import"./context-DKCDV3-b.js";import"./ColumnLayout-D_MUxXPB.js";import"./useMakeFocusable-4FeZN37B.js";import"./useFieldComponent-RBMXOPsB.js";import"./FieldError-RUpMVejq.js";import"./Form-CMcE9GN0.js";import"./useFormValidation-DAvMLm6e.js";import"./useToggleState-DMcDxhma.js";import"./useFormReset-CqoQKslx.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
