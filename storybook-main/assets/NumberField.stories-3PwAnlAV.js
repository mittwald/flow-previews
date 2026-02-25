import{r as x,j as r}from"./iframe-CAK8FS83.js";import{a,u as l,F as d,R as c,S as f,t as j}from"./ResetButton-BkxxWY5H.js";import{L as o}from"./Label-B8vv94Ak.js";import{B as u}from"./Button-itgufTCs.js";import{S as g}from"./Section-CvIAO9t7.js";import{A as b}from"./ActionGroup-DOh7AJi0.js";import{s as p}from"./ActionBatch-BT7PEprG.js";import{N as t}from"./NumberField-CsmIfasu.js";import{F as E}from"./FieldDescription-1ru89KYu.js";import{F as S}from"./FieldError-Ijqs7ZUi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8OXR4zz.js";import"./flowComponent-BWp16SNy.js";import"./index-GWEfEQw2.js";import"./clsx-B-dksMZM.js";import"./index-CbMMdC0j.js";import"./useLocalizedStringFormatter-DFt6g5YR.js";import"./context-Cva5eEgc.js";import"./ActionGroupView-CCGUgUS0.js";import"./Content-DIxZ35M2.js";import"./Heading-C00t5x9z.js";import"./Heading-CCBwW_g2.js";import"./RSPContexts-B_v10Iug.js";import"./utils-th26LVD6.js";import"./Text-DLuRhlhH.js";import"./browser-Bqr1AXz8.js";import"./EmulatedBoldText-C97iA6m9.js";import"./Text-BoinRLOA.js";import"./Modal-C0YYyFVW.js";import"./useOverlayController-Cgn9MX8W.js";import"./useStatic-CRQBoMuN.js";import"./Overlay-oKaaxmZR.js";import"./OverlayContextProvider-CzGKjwc7.js";import"./LoadingSpinner-BC7xHqe0.js";import"./IconWarning-EFpx-Gs1.js";import"./remote-BiZ00o_J.js";import"./Dialog-Bg78UE4C.js";import"./Button-Bm8bnERu.js";import"./ProgressBar-D_fN64Me.js";import"./Label-f9ALmkld.js";import"./Hidden-Dit-znYS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-uRe61yXZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYhFSapw.js";import"./useFocus-CUz8YQ_V.js";import"./useFocusRing-Dri4WoMi.js";import"./useFocusable-wkYmEvUK.js";import"./OverlayArrow-DH2T_qZc.js";import"./useControlledState-ik7lpKJV.js";import"./Collection-BMrNZuZq.js";import"./CollectionBuilder-D4rXdo4w.js";import"./SelectionIndicator-D_639S3U.js";import"./Separator-DMNyXuQl.js";import"./SelectionManager-BFBPCCBk.js";import"./useEvent-KVfko5RZ.js";import"./useCollator-BmCOWQts.js";import"./FocusScope-B2Hz6ms7.js";import"./VisuallyHidden-CgwkfWyQ.js";import"./ButtonView-LoZK7xQ_.js";import"./Flex-CRH3-b1R.js";import"./useRef-CHg-rbUQ.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-gHmxmSmE.js";import"./getActionGroupSlot-BB_J4wrM.js";import"./useFieldComponent-DkAI1nDB.js";import"./useControlledHostValueProps-Bu8T1azZ.js";import"./FieldError-W7aOon2A.js";import"./Form-CCLCpM-d.js";import"./Group-j7hLbASA.js";import"./Input-G799xohA.js";import"./useFormValidation-CCAHF_BW.js";import"./useSpinButton-ed7pozNj.js";import"./useFormReset-ClNM6Kah.js";import"./useTextField-BR332WYs.js";import"./AlertText-B2BWCbW6.js";import"./AlertIcon-DLSo9NlW.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,B=y("submit"),Jr={title:"Integrations/React Hook Form/NumberField",component:a,render:()=>{const e=async F=>{await p(1500),B(F)},h=l({defaultValues:{ageDefaultValue:36}}),i=j();return r.jsx(d,{form:h,onSubmit:e,children:r.jsxs(g,{children:[r.jsx(i,{name:"age",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageRequired",rules:{required:"Please enter your age"},children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx(i,{name:"ageMinValue",rules:{required:"Please enter your age"},children:r.jsxs(t,{minValue:18,children:[r.jsx(o,{children:"Age"}),r.jsx(E,{children:"You have to be at least 18 years old"})]})}),r.jsxs(b,{children:[r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})]})})}},m={},s={render:()=>{const e=l({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=l({defaultValues:{field:""}});return r.jsxs(d,{form:e,onSubmit:async()=>await p(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(t,{children:r.jsx(o,{children:"Age"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(c,{children:"Reset"}),r.jsx(f,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
