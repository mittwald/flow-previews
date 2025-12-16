import{j as r,r as x}from"./iframe-ZqGKWCd-.js";import{u as a,F as l}from"./Form-CcP053Cr.js";import{L as o}from"./Label-CJicQH7Q.js";import{F as d,t as j}from"./Field-DKdtFAdD.js";import{B as u}from"./Button-BZgO5jCY.js";import{S as g}from"./Section-DNOHRVt7.js";import{A as b}from"./ActionGroup-XBaLTsJ-.js";import{s as p}from"./Action-DfNxqrNn.js";import{N as t}from"./NumberField-CL7SfDPs.js";import{F as E}from"./FieldDescription-CtBJlXxf.js";import{F as S}from"./FieldError-LLBE4o9B.js";import{R as c}from"./ResetButton-B-6Xauvq.js";import{S as f}from"./SubmitButton-DCPlWDSV.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BUvHTeNk.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnG4Zld_.js";import"./index-CDScJNB3.js";import"./index-BS5rk3Xg.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./context-zCArMZyI.js";import"./Label-BUWbTNXS.js";import"./utils-D141Jr51.js";import"./Hidden-DJANzhMQ.js";import"./dynamic-BXzH9RDF.js";import"./IconChevronDown-DOkopHOS.js";import"./remote-QKtGQrQi.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./Text-fsbk1lYn.js";import"./EmulatedBoldText-Ro5KrcKA.js";import"./Text-Csqi7mxP.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CUB1U94R.js";import"./ProgressBar-CwXfcXUd.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_yC0x0cS.js";import"./useFocus-DhU9eZJ-.js";import"./useFocusRing-DbADFAxV.js";import"./useFocusable-BybslKHd.js";import"./ContextMenuSection-CSh4hkta.js";import"./lib-90ocxLs-.js";import"./Dialog-CUnVff-C.js";import"./RSPContexts-SeDUPtJk.js";import"./OverlayArrow-CDGB6Pw4.js";import"./useControlledState-CXUvh1Us.js";import"./Collection-CvOok_qh.js";import"./CollectionBuilder-BKjwMGq6.js";import"./SelectionIndicator-JiamtxED.js";import"./Separator-wVg1dl70.js";import"./SelectionManager-CZWi_Odb.js";import"./useEvent-U8AR1Bww.js";import"./useCollator-uzPz00g8.js";import"./FocusScope-CNoX19qM.js";import"./VisuallyHidden-Izi45t00.js";import"./getActionGroupSlot-B6JbQYyf.js";import"./useStatic-CPFMlQst.js";import"./context-C6xdvZ0U.js";import"./useFieldComponent-B1bOh1KR.js";import"./IconChevronUp-BhG4a1VQ.js";import"./IconMinus-6uCcSDgG.js";import"./IconPlus-BJxMBEmq.js";import"./useControlledHostValueProps-tmC5-mDa.js";import"./FieldError-D5ElVx7m.js";import"./Form-CbKBfjBg.js";import"./Group-LIjHZE_9.js";import"./Input-kDKiG0mN.js";import"./useFormValidation-EOc_OYLE.js";import"./useSpinButton-DD-6hTDA.js";import"./useFormReset-L-nmEJr1.js";import"./useTextField-B0bavF7F.js";import"./IconDanger-9fNDXdlu.js";import"./useRef-BCaKMhrQ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Qr={title:"Integrations/React Hook Form/NumberField",component:d,render:()=>{const e=async F=>{await p(1500),B(F)},h=a({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(l,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(l,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(d,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,Xr as __namedExportsOrder,Qr as default};
