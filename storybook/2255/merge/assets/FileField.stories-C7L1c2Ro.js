import{j as r,r as x}from"./iframe-BWhqP90_.js";import{b as l,u as a,F as c,t as j}from"./Form-BHDfIGsT.js";import{L as s}from"./Label-CkXiiFVS.js";import{R as d,S as p}from"./ResetButton-RzBAzJt2.js";import{B as t}from"./Button-BciJVpgP.js";import{S}from"./Section-CFf8UBa1.js";import{A as b}from"./ActionGroup-DDQLt8Fl.js";import{s as u}from"./Action-CBNAKVRZ.js";import{F as m}from"./FileField-Cc6aMr6s.js";import{F as B}from"./FieldError-C6zkn6e8.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B9fZ3_-n.js";import"./flowComponent-BryHmeuy.js";import"./index-8vPYdz_-.js";import"./clsx-B-dksMZM.js";import"./index-BNCgjCzH.js";import"./useLocalizedStringFormatter--1i0kqLe.js";import"./context-D1O-Xc3I.js";import"./browser-XxEUm-0T.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-CvmhHdNV.js";import"./utils-DDxNv25V.js";import"./Hidden-40YeYLOA.js";import"./useRef-QCo4OIfF.js";import"./IconWarning-HbBBXO9Y.js";import"./remote-veunNUGL.js";import"./Text-ClKyFsNf.js";import"./EmulatedBoldText-BA_Kyk9l.js";import"./Text-CjPzL55g.js";import"./LoadingSpinner-CBZxi8OD.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-cDeaYk1j.js";import"./ProgressBar-CDLRkEMS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nvgQN0a7.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CgTDaVBx.js";import"./useFocus-DGysuqof.js";import"./useFocusRing-BFEab5f2.js";import"./useFocusable-BfSSliyg.js";import"./ContextMenuSection-DVcDBRAK.js";import"./Dialog-CL817TCu.js";import"./RSPContexts-BQJ2nk5o.js";import"./OverlayArrow-O77-h4vA.js";import"./useControlledState-hpfIa3L8.js";import"./Collection-CczwQGta.js";import"./CollectionBuilder-Bu1khTRs.js";import"./SelectionIndicator-DZ2Xh4dp.js";import"./Separator-CHyDNsxt.js";import"./SelectionManager-DbhQkq7H.js";import"./useEvent-C-yeEGvr.js";import"./useCollator-BWqZHdF4.js";import"./FocusScope-D5dxNR-J.js";import"./VisuallyHidden-DRs-AG4l.js";import"./getActionGroupSlot-Bc3Q1XKp.js";import"./useStatic-Dg52ehJ-.js";import"./context-Bdh27yQP.js";import"./useFormValidation-Dk5h1IP2.js";import"./FieldError-DkQ7rf97.js";import"./Input-BjME0GkR.js";import"./useFieldComponent-YclMbw8e.js";import"./AlertText-Bb9-XBbW.js";import"./AlertIcon-DpUh0dNd.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Ar={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const Ir=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,Ir as __namedExportsOrder,Ar as default};
