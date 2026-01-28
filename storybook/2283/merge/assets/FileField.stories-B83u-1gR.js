import{j as r,r as x}from"./iframe-DcJYxA4H.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-CXFeL3NK.js";import{L as s}from"./Label-DYsIDPwe.js";import{B as t}from"./Button-ByRmZgOS.js";import{S}from"./Section-BfQoljOJ.js";import{A as b}from"./ActionGroup-B_pSbWAL.js";import{s as u}from"./Action-Dlz18l4c.js";import{F as m}from"./FileField-DF2AYOH7.js";import{F as B}from"./FieldError-B2Tu46Cr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BeRAROrj.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./clsx-B-dksMZM.js";import"./index-BLaZpk-P.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./context-qV6jeEP3.js";import"./useRef-SxwSBVoc.js";import"./utils-DilzIpMR.js";import"./ButtonView-ByBYPO5_.js";import"./browser-DuGwj8Dx.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./IconWarning-C1b-rglK.js";import"./remote-Bz3vE1W1.js";import"./Text-DtgxB8-I.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./Text-CtAF_MdJ.js";import"./LoadingSpinner-Cq4_0Dfa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-igLlXErA.js";import"./ProgressBar-NBTy9B_U.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpAfaget.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoiuKGvm.js";import"./useFocus-CBKKPZUx.js";import"./useFocusRing-KHZvHeNt.js";import"./useFocusable-CBOZtalu.js";import"./ContextMenuSection-QDoQ1eGc.js";import"./Dialog-Dz1EswEt.js";import"./RSPContexts-B2T9ptP_.js";import"./OverlayArrow-wMKeeSQ0.js";import"./useControlledState-BqUYry3y.js";import"./Collection-CKg9fKRI.js";import"./CollectionBuilder-Cc_loPne.js";import"./SelectionIndicator-DgZf9HEL.js";import"./Separator-BAQ5hF_i.js";import"./SelectionManager-yA8P5A7T.js";import"./useEvent-stiRI7x_.js";import"./useCollator-CoXNjTxb.js";import"./FocusScope-CWIATeBq.js";import"./VisuallyHidden-5QTr2j1N.js";import"./getActionGroupSlot-DWUJnrNV.js";import"./useStatic-CtzGIMZo.js";import"./context-D2f0m16x.js";import"./useFormValidation-CxhT4ib7.js";import"./FieldError-BmNSHu0e.js";import"./Input-Cz4fvs1s.js";import"./useFieldComponent-rnjT2dRC.js";import"./AlertText-DzwHJxKU.js";import"./AlertIcon-5jttAq4b.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
        </Field>
        <FileField multiple isInvalid>
          <Label>Certificate</Label>
          <Button variant="outline" color="secondary">
            Select
          </Button>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </FileField>
      </Form>;
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <FileField multiple>
            <Label>Certificate</Label>
            <Button variant="outline" color="secondary">
              Select
            </Button>
          </FileField>
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
}`,...n.parameters?.docs?.source}}};const Ar=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ar as __namedExportsOrder,qr as default};
