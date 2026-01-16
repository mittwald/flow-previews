import{j as r,r as x}from"./iframe-DjKJp4LH.js";import{a,u as l,F as d,t as j,R as c,S as f}from"./ResetButton-B_aVigIr.js";import{L as o}from"./Label-CIoe3s2x.js";import{B as p}from"./Button-BDEZ1Pgg.js";import{S as g}from"./Section-CJ66IskI.js";import{A as b}from"./ActionGroup-BWGbWjuD.js";import{s as u}from"./Action-CS8Seurr.js";import{N as t}from"./NumberField-BPi_1WsI.js";import{F as E}from"./FieldDescription-B7UVP7RU.js";import{F as S}from"./FieldError-DkeOn6Iq.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./clsx-B-dksMZM.js";import"./index-PXjpOTa6.js";import"./browser-DP-AFXYC.js";import"./dynamic-Cwgd_SYw.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./context-CaWPG6rd.js";import"./useRef-JBXf8btE.js";import"./utils-DyC1AhIW.js";import"./Label.module-CUYTf9Jc.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./IconWarning-6PZXNPQv.js";import"./remote-X6dXUxim.js";import"./Text-DIX_PQ8a.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./Text-DDR-J2dK.js";import"./LoadingSpinner-pyPoMdb7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DheLTGmH.js";import"./ProgressBar-Bp6bQOCH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel--MzsjFNv.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Cba7eTZL.js";import"./useFocus-DfQL19Qh.js";import"./useFocusRing-BGVhnkul.js";import"./useFocusable-Cypk5WsB.js";import"./ContextMenuSection-D6Byc7PS.js";import"./Dialog-B6ze-qTj.js";import"./RSPContexts-BW0AZj1S.js";import"./OverlayArrow-NBjjGcXc.js";import"./useControlledState-B7AKSDvs.js";import"./Collection-DCkcEv4P.js";import"./CollectionBuilder-BUtswklx.js";import"./SelectionIndicator-B0FAwcHG.js";import"./Separator-BnnFI041.js";import"./SelectionManager-BjFMgKhL.js";import"./useEvent-D3fHv2-i.js";import"./useCollator-C3dV1__C.js";import"./FocusScope-5Nl-wNMA.js";import"./VisuallyHidden-BM-dzb4f.js";import"./getActionGroupSlot-BcFDPTef.js";import"./useStatic-DSbbnRPw.js";import"./context-BJ5dxW4L.js";import"./useFieldComponent-7yFtRUym.js";import"./useControlledHostValueProps-DwkrQ0Ha.js";import"./FieldError-CRskrSrV.js";import"./Form-DzoAzIf2.js";import"./Group-BBLSi45B.js";import"./Input-CKW8JUfL.js";import"./useFormValidation-D-rCh5i6.js";import"./useSpinButton-gTc4UJlm.js";import"./useFormReset-BtBZQ9D7.js";import"./useTextField-B9Zq3G8e.js";import"./AlertText-B4kskhvn.js";import"./AlertIcon-DJ6AhYBh.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Tr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await u(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(p,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(p,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Yr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Yr as __namedExportsOrder,Tr as default};
