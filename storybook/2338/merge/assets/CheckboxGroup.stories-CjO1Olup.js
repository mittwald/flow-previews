import{r as k,j as e}from"./iframe-BXGfha1q.js";import{a as p,u,F as h,R as j,S as f,t as O}from"./ResetButton-BJ_wNjWf.js";import{L as n}from"./Label-DmvSuQEb.js";import{B as x}from"./Button-DfmOHFsC.js";import{S as v}from"./Section-DH7vXPsV.js";import{A as C}from"./ActionGroup-CxRxNddr.js";import{s as d}from"./ActionBatch-z52bmq8Z.js";import{C as i}from"./CheckboxGroup-nDPbJW8h.js";import{C as r}from"./Checkbox-DI6T2fe5.js";import{F as b}from"./FieldDescription-B2zafCFx.js";import{F}from"./FieldError-B0wR5GbE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cx3iunOI.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./clsx-B-dksMZM.js";import"./index-D0PS_Jbm.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./ActionGroupView-B4EOVs6v.js";import"./Content-BvqimwwE.js";import"./Heading-BHfoL7cG.js";import"./Heading-uLzTRNHK.js";import"./RSPContexts-CG0vEblW.js";import"./utils-DDzB-hS3.js";import"./Text-BbFupL_Y.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./Modal-BngkIUxs.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./Overlay-Bxv8vuKP.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./LoadingSpinner-CnywtlQ4.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./Dialog-DLzuiFtz.js";import"./Button-DxgvyAFC.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./VisuallyHidden-eEVd_sfi.js";import"./ButtonView-BYJeP13X.js";import"./Flex-BoCsVhbv.js";import"./useRef-DsRyiFKF.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-DVxvJxxR.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./ColumnLayout-Ca_zPp5k.js";import"./useMakeFocusable-CYA8YNba.js";import"./useFieldComponent-BBRXs3en.js";import"./FieldError-B-_MD7Je.js";import"./Form-C11JLohN.js";import"./useFormValidation-51U-qV9x.js";import"./useToggleState-BBpbo1Bk.js";import"./useFormReset-9RWtv4Ar.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Ye={title:"Integrations/React Hook Form/CheckboxGroup",component:p,render:()=>{const s=async t=>{await d(1500),B(t)},o=u({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),a=O();return e.jsx(h,{form:o,onSubmit:s,children:e.jsxs(v,{children:[e.jsx(a,{name:"interests",children:e.jsxs(i,{children:[e.jsx(n,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsDefaultValue",children:e.jsxs(i,{children:[e.jsx(n,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"})]})}),e.jsx(a,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:e.jsxs(i,{children:[e.jsx(n,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check at least 1 item"})]})}),e.jsx(a,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:e.jsxs(i,{children:[e.jsx(n,{children:"Interests"}),e.jsx(r,{value:"foo",children:"Foo"}),e.jsx(r,{value:"bar",children:"Bar"}),e.jsx(r,{value:"baz",children:"Baz"}),e.jsx(b,{children:"Check max 2 items"})]})}),e.jsxs(C,{children:[e.jsx(j,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={},c={render:s=>{const o=u();return k.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsx(h,{form:o,onSubmit:async()=>await d(2e3),children:e.jsxs(v,{children:[e.jsx(p,{name:"field",children:e.jsxs(i,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(n,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsxs(i,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[e.jsx(n,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"}),e.jsx(F,{children:"ErrorFromOuterFieldError!"})]})]})})}},m={render:s=>{const o=u();return e.jsxs(h,{form:o,onSubmit:async()=>await d(2e3),children:[e.jsx(p,{name:"field",children:e.jsxs(i,{l:[1,1,1],m:[1,1],...s,children:[e.jsx(n,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsxs(C,{children:[e.jsx(x,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),e.jsx(x,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),e.jsx(j,{slot:"abort",children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Section>
          <Field name="field">
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
        </Section>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
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
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Je=["Default","WithFieldError","WithFocus"];export{l as Default,c as WithFieldError,m as WithFocus,Je as __namedExportsOrder,Ye as default};
