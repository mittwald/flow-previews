import{j as r,r as x}from"./iframe-BE2KIrNP.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-8M30IsUK.js";import{L as o}from"./Label-BBYAWH-Z.js";import{B as p}from"./Button-DTG6_onu.js";import{S as g}from"./Section-Bmw4NyfW.js";import{A as b}from"./ActionGroup-DqHolqL_.js";import{s as u}from"./Action-CG5-yXUx.js";import{N as t}from"./NumberField-x1CtW4bW.js";import{F as E}from"./FieldDescription-B7Q7zUwA.js";import{F as S}from"./FieldError-DLWZre89.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DKw0AuDc.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./clsx-B-dksMZM.js";import"./index-BeVui2PP.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./context-Cl9Jg8XT.js";import"./useRef-fd8U2Hk2.js";import"./utils-CetDBScY.js";import"./ButtonView-BKjPbsQ0.js";import"./browser-B5VZQlUE.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./IconWarning-pheKtU5F.js";import"./remote-BDPI1xTN.js";import"./Text-99qeYwSw.js";import"./EmulatedBoldText-CPMF4SHl.js";import"./Text-D-kvbByn.js";import"./LoadingSpinner-CpXmc85g.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DX-gXX1k.js";import"./ProgressBar-Cdh6Q7W9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DlCzrbVx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-wlnUrUkL.js";import"./useFocus-D19rPtJ7.js";import"./useFocusRing-CXSA7vN6.js";import"./useFocusable-PS7GdwKW.js";import"./ContextMenuSection-DMoRGuCw.js";import"./Dialog-C3P1Ogqg.js";import"./RSPContexts-B5Mb9Vey.js";import"./OverlayArrow-B7hxVbyO.js";import"./useControlledState-O9ITVI5k.js";import"./Collection-Bn556UVc.js";import"./CollectionBuilder-CFCUOZmQ.js";import"./SelectionIndicator-B0iQvxUu.js";import"./Separator-kwAL4EyO.js";import"./SelectionManager-BaF0UXuj.js";import"./useEvent-B1oFJvVb.js";import"./useCollator-Dag142_N.js";import"./FocusScope-BDfy_Mz6.js";import"./VisuallyHidden-KypC6JrD.js";import"./getActionGroupSlot-BfB-qZk-.js";import"./useStatic-DHPwu1RD.js";import"./context-DvuBD7_y.js";import"./useFieldComponent-8fOA-m-u.js";import"./useControlledHostValueProps-BjkpzwSM.js";import"./FieldError-CYuYbE_Y.js";import"./Form-7VWdSJkH.js";import"./Group-BgqvKisC.js";import"./Input-lgtpKVFw.js";import"./useFormValidation-BVWNV9RZ.js";import"./useSpinButton-DdsFn1qf.js";import"./useFormReset-DGFO0EL0.js";import"./useTextField-BkiiDUW1.js";import"./AlertText-34tBbtSq.js";import"./AlertIcon-BSS6Y7Aa.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Yr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <NumberField>
            <Label>Age</Label>
          </NumberField>
        </Field>
        <NumberField isInvalid>
          <Label>Age</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </NumberField>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <NumberField>
            <Label>Age</Label>
          </NumberField>
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
}`,...m.parameters?.docs?.source}}};const kr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,kr as __namedExportsOrder,Yr as default};
