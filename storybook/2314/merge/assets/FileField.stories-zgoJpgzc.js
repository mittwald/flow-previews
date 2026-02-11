import{r as x,j as r}from"./iframe-CLJtUSH1.js";import{a as l,u as a,F as c,R as d,S as p,t as j}from"./ResetButton-BLXcg6zO.js";import{L as s}from"./Label-CL2lxKWa.js";import{B as t}from"./Button-BdSBoC_f.js";import{S}from"./Section-CZHmN5Jd.js";import{A as b}from"./ActionGroup-BIdm5xS5.js";import{s as u}from"./Action-B5Dc0NVU.js";import{F as m}from"./FileField-CMMfVhTs.js";import{F as B}from"./FieldError-DOHJV3_t.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-6if2hzUD.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./clsx-B-dksMZM.js";import"./index-C5KxKItK.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./context-DZMEEftG.js";import"./useRef-C6pb-qXv.js";import"./utils-DvtEjNbs.js";import"./ButtonView-DmFKtMwL.js";import"./browser-BMt8iY1_.js";import"./Label.module-CUYTf9Jc.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./IconWarning-RoA_lEUP.js";import"./remote-B_1lzL7i.js";import"./Text-B6Fe6olk.js";import"./EmulatedBoldText-BqLHzBf0.js";import"./Text-COsBjVJz.js";import"./LoadingSpinner-D1C6LJRF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DGFUplit.js";import"./ProgressBar-eED3hhac.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DV7QK5Z-.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-bTiOWaRI.js";import"./useFocus-CAJuP4TC.js";import"./useFocusRing-lsntDLZI.js";import"./useFocusable-DsRGTtrf.js";import"./ContextMenuSection-DdrBdwjw.js";import"./Dialog-BGKaFNBq.js";import"./RSPContexts-CY0Qb7bk.js";import"./OverlayArrow-Do6HgTy2.js";import"./useControlledState-BRozYY3l.js";import"./Collection-7_iGck5f.js";import"./CollectionBuilder-BRZppff8.js";import"./SelectionIndicator-Dn3j6216.js";import"./Separator-CviJc1fV.js";import"./SelectionManager-BfDKXohP.js";import"./useEvent-B0QpT_fK.js";import"./useCollator-CG3ZLIsg.js";import"./FocusScope-DhCz7nLk.js";import"./VisuallyHidden-CPqjoTjm.js";import"./getActionGroupSlot-Dbbh_IGy.js";import"./useStatic-Dks4Zmqh.js";import"./context-jvIE4x8v.js";import"./useFormValidation-vO_E-FCH.js";import"./FieldError-DZmbq2tb.js";import"./Input-CzVRJw_9.js";import"./useFieldComponent-BH0Y7qa0.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
