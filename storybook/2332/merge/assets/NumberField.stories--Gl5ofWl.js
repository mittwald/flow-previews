import{r as x,j as r}from"./iframe-Bas3a7fO.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-Cd-wp-Vd.js";import{L as o}from"./Label-QWyaEZ02.js";import{B as u}from"./Button-CCev3q47.js";import{S as g}from"./Section-CuO1V7U6.js";import{A as b}from"./ActionGroup-D7GnjScM.js";import{s as p}from"./ActionBatch-Ctg3LC0z.js";import{N as t}from"./NumberField-BqRno4r6.js";import{F as E}from"./FieldDescription-BqudxJ-b.js";import{F as S}from"./FieldError-B_qklWB_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtBYvx23.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./clsx-B-dksMZM.js";import"./index-CuTcGtc9.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./ActionGroupView-BoEMuKNt.js";import"./Content-jsO27phX.js";import"./Heading-BvcJIgQi.js";import"./Heading-CIj0isr2.js";import"./RSPContexts-BxdWTHUz.js";import"./utils-eswKxOcw.js";import"./Text-D06q46lu.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./Modal-CZas3fxE.js";import"./useOverlayController-Bne___mw.js";import"./useStatic-LTDZm_8J.js";import"./Overlay-CKC1BDXC.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./LoadingSpinner-CaJGFcVk.js";import"./IconWarning-9FMOeqa7.js";import"./remote-CQRN9i7s.js";import"./Dialog-BsJqG9mx.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BXALpkIT.js";import"./useFocus-BpOhXbga.js";import"./useFocusRing--4ecJhRH.js";import"./useFocusable-Dz64TW3s.js";import"./OverlayArrow-B1y4rBya.js";import"./useControlledState-DnKF_srQ.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./SelectionIndicator-C1UYqe1w.js";import"./Separator-BhW3WF_H.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./FocusScope-yn2ZelXu.js";import"./VisuallyHidden-DwReVjRm.js";import"./ButtonView-fFevQyKz.js";import"./Flex-BYJmVhKw.js";import"./useRef-TqOxF1Gm.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BzeJokDv.js";import"./getActionGroupSlot-DxyevWSt.js";import"./useFieldComponent-CHbV_zSr.js";import"./useControlledHostValueProps-BxfqBB9J.js";import"./FieldError-CYd-7Lc_.js";import"./Form-C6AVvH4S.js";import"./Group-CjauqOEv.js";import"./Input-CDjrJnAd.js";import"./useFormValidation-nso2YHkv.js";import"./useSpinButton-Da_YamV-.js";import"./useFormReset-C6M9OYlp.js";import"./useTextField-DKwOo1j6.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Qr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Qr as __namedExportsOrder,Jr as default};
