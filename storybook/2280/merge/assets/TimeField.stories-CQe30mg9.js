import{j as r,r as x}from"./iframe-Cx5kJuuA.js";import{a,u as p,F as d,t as j,R as u,S as F}from"./ResetButton-CwpPjJvG.js";import{L as t}from"./Label-Da9GdDN8.js";import{B as l}from"./Button-OP9_q8AM.js";import{S as b}from"./Section-C2A-3Iy5.js";import{A as E}from"./ActionGroup-SYctAZp6.js";import{s as c}from"./Action-CnBQ_Jk4.js";import{L as S}from"./DateInput-DvYqS788.js";import{T as o}from"./TimeField-GsgGpVvv.js";import{F as T}from"./FieldError-BCxxTn6h.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-RASAkScQ.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./clsx-B-dksMZM.js";import"./index-BqoyVlZ7.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./context-CpMzWCEP.js";import"./useRef-BzM_ReLH.js";import"./utils-Nk4paMN-.js";import"./ButtonView-CiX34n3K.js";import"./browser-D-pbaBij.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./IconWarning-BDhnLpaV.js";import"./remote-C9UyjJTP.js";import"./Text-C98Jvmov.js";import"./EmulatedBoldText--C3vSC84.js";import"./Text-CA_aswYo.js";import"./LoadingSpinner-BWQXNo8s.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BlKGeUP9.js";import"./ProgressBar-DpP1vNCR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B4Wunpgz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-LbgF0OFY.js";import"./useFocus-DbL3EqSH.js";import"./useFocusRing-idhb0ztA.js";import"./useFocusable-BtlUXhgP.js";import"./ContextMenuSection-DO6s1iXZ.js";import"./Dialog-CDKKMn1j.js";import"./RSPContexts-CFLmy0zp.js";import"./OverlayArrow-BNHP_74G.js";import"./useControlledState-D1xezhK5.js";import"./Collection-B4Kq3uAS.js";import"./CollectionBuilder-CZTuuany.js";import"./SelectionIndicator-Dp8Rqhcc.js";import"./Separator-e9wjh8FO.js";import"./SelectionManager-BVVbqoWQ.js";import"./useEvent-3su7RyU0.js";import"./useCollator-BUzaHxjg.js";import"./FocusScope-wgzi2f-G.js";import"./VisuallyHidden-i8gu61hs.js";import"./getActionGroupSlot-BGN_K6ot.js";import"./useStatic-C9KIiqww.js";import"./context-BmiLu6TN.js";import"./FieldError-UHRLTLut.js";import"./Form-BHxxWVUu.js";import"./Group-C2As7-rT.js";import"./Input-DHKVlQVM.js";import"./useFormValidation-CmFpdOnE.js";import"./useFormReset-roVUmu5c.js";import"./useSpinButton-JQR48plw.js";import"./useFilter-CLOY3huy.js";import"./useFieldComponent-DpBpP7du.js";import"./AlertText-BwdeDomp.js";import"./AlertIcon-DvMPToF_.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),kr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Cr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Cr as __namedExportsOrder,kr as default};
