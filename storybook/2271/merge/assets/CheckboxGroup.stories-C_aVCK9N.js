import{j as e,r as v}from"./iframe-BEQP9uXD.js";import{a as p,u,F as h,t as C,R as j,S as f}from"./ResetButton-DdaJGn48.js";import{L as i}from"./Label-ULyyAOQY.js";import{B as x}from"./Button-C9UvHdV0.js";import{S as k}from"./Section-CiWy9GDM.js";import{A as O}from"./ActionGroup-BV_YmXox.js";import{s as d}from"./Action-DdIVuJ0B.js";import{C as n}from"./CheckboxGroup-D7X3Dz0p.js";import{C as r}from"./Checkbox-DYYho7p2.js";import{F as b}from"./FieldDescription-rVRfuQA7.js";import{F}from"./FieldError-DcwQV8mK.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BAr_-wMD.js";import"./flowComponent-84Jhttbw.js";import"./index-CA9bKJEG.js";import"./clsx-B-dksMZM.js";import"./index-COHhcPte.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./context-DjvYmnOm.js";import"./useRef-CBNU1Kxo.js";import"./utils-CvsvUfaH.js";import"./ButtonView-Cr-9skPP.js";import"./browser-D8S-En3T.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./IconWarning-BArZWwdB.js";import"./remote-Ba3iobwA.js";import"./Text-BQmA_ZwI.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./Text-Dh3KhDzI.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLAt4FO4.js";import"./ProgressBar-CsmWPwQb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BaFA04Xw.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BjEuYOvC.js";import"./useFocus-DENBDZ81.js";import"./useFocusRing-QizZnVOy.js";import"./useFocusable-WQftMZYd.js";import"./ContextMenuSection-Xp9S-BLD.js";import"./Dialog-DQ54l-rN.js";import"./RSPContexts-22nxuYm5.js";import"./OverlayArrow-B0-Exi0z.js";import"./useControlledState-IAFCDfDW.js";import"./Collection-DrDb7tKr.js";import"./CollectionBuilder-DgIT4THq.js";import"./SelectionIndicator-Baqg4pYL.js";import"./Separator-CwdQYf1y.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./useCollator-Dxy4kckI.js";import"./FocusScope-D5mGJCBF.js";import"./VisuallyHidden-BLDMQ79k.js";import"./getActionGroupSlot-B63naLE5.js";import"./useStatic-DVE9BYeG.js";import"./context-DGvxxzOj.js";import"./ColumnLayout-uw0gFhJ1.js";import"./useMakeFocusable-BnD6XRff.js";import"./useFieldComponent-BKGW_bMF.js";import"./FieldError-WngkcyXU.js";import"./Form-BbvSEhBq.js";import"./useFormValidation-Kra5hQIO.js";import"./useToggleState-CUsTRM_6.js";import"./useFormReset-QF_OYRwm.js";import"./AlertText-J3TBTDdf.js";import"./AlertIcon-aU-KTTvT.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),We={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),E(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=C();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(k,{children:[e.jsx(a,{name:"interests",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(n,{children:[e.jsx(i,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(O,{children:[e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},m={render:s=>{const o=u();return v.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(x,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(x,{onPress:()=>o.setFocus("field"),children:"focus through form"}),e.jsx(j,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
