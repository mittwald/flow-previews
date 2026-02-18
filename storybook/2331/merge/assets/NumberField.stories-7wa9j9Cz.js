import{r as x,j as r}from"./iframe-BDFzVZbC.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-D1K9FtBE.js";import{L as o}from"./Label-LyL-GXC8.js";import{B as u}from"./Button-C7bK1-uf.js";import{S as g}from"./Section-DTE7_1U7.js";import{A as b}from"./ActionGroup-DXoxOsLZ.js";import{s as p}from"./ActionBatch-dkJpCMmD.js";import{N as t}from"./NumberField-BWRYqag0.js";import{F as E}from"./FieldDescription-CoqoTaGo.js";import{F as S}from"./FieldError-BgOx5Pdv.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-78IPl_xO.js";import"./flowComponent-CcRyJRwo.js";import"./index-P1fb0se1.js";import"./clsx-B-dksMZM.js";import"./index-CcbRX2xZ.js";import"./useLocalizedStringFormatter-BejhQiE3.js";import"./context-sVk6h2Ud.js";import"./ActionGroupView-Dsksq701.js";import"./Content-w-_DoZqM.js";import"./Heading-D5c-TU0p.js";import"./Heading-CoT4JWE4.js";import"./RSPContexts-CK_xwACt.js";import"./utils-DRqoG6OW.js";import"./Text-DCO-oE1a.js";import"./browser-D6pVd-JB.js";import"./EmulatedBoldText-qk6rk8uL.js";import"./Text-5CWdwzmY.js";import"./Modal-Bz96LWDI.js";import"./useOverlayController-Bb-vbpCY.js";import"./useStatic-DKe6XZbW.js";import"./Overlay-DkdcKSQA.js";import"./OverlayContextProvider-ClMrYLWB.js";import"./LoadingSpinner-CPBqqCdo.js";import"./IconWarning-aDXn3__r.js";import"./remote-C6miTdu_.js";import"./Dialog-C2-FJ5MR.js";import"./Button-ibrCxHHX.js";import"./ProgressBar-BO2kVTFg.js";import"./Label-CHSQ9cWG.js";import"./Hidden-HzHXzaYV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D8fV0T39.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJEnnjGh.js";import"./useFocus-BE-kuowd.js";import"./useFocusRing-CxM1MJ0B.js";import"./useFocusable-nLh15Hem.js";import"./OverlayArrow-BhJrUQVC.js";import"./useControlledState-CxpqxoPE.js";import"./Collection-C1wNqiGx.js";import"./CollectionBuilder-DtnVmW1Z.js";import"./SelectionIndicator-S2R90Jld.js";import"./Separator-DZXWrML2.js";import"./SelectionManager-BvzKXH6i.js";import"./useEvent-DOEbfCcC.js";import"./useCollator-DGEP0NQr.js";import"./FocusScope-Djn4bjzo.js";import"./VisuallyHidden-DL89d0r2.js";import"./ButtonView-Co3oQwB4.js";import"./Flex-DbvEsOwD.js";import"./useRef-DOSvcyqg.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-rEkP8dNP.js";import"./getActionGroupSlot-DJwqOljU.js";import"./useFieldComponent-DJTCy7fJ.js";import"./useControlledHostValueProps-CEpJHasI.js";import"./FieldError-4UEPVceR.js";import"./Form-MSkU5_70.js";import"./Group-DLMWWecZ.js";import"./Input-CI5lEjHT.js";import"./useFormValidation-CtBJZQwA.js";import"./useSpinButton-DzP_o7yR.js";import"./useFormReset-CQpdwD5T.js";import"./useTextField-BGQ_V9mX.js";import"./AlertText-CJ-mVZBv.js";import"./AlertIcon-tKcNuTH2.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
