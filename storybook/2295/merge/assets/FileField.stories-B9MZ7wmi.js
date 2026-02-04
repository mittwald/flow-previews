import{j as r,r as x}from"./iframe-D016uj-S.js";import{a as l,u as a,F as c,t as j,R as d,S as p}from"./ResetButton-BRPsKI2G.js";import{L as s}from"./Label-CPn02_Ye.js";import{B as t}from"./Button-DbVylex6.js";import{S}from"./Section-DP_5z26A.js";import{A as b}from"./ActionGroup-DhZvC8nG.js";import{s as u}from"./Action-DF_37S4W.js";import{F as m}from"./FileField-TWaUhXpf.js";import{F as B}from"./FieldError-CW77VWgH.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-7WCHGigE.js";import"./flowComponent-wtQiCPfr.js";import"./index-CfkcKJZT.js";import"./clsx-B-dksMZM.js";import"./index-BqMc4IgT.js";import"./useLocalizedStringFormatter-CIw_JE4k.js";import"./context-CQQzrfiw.js";import"./useRef-BPmAOGIJ.js";import"./utils-DQASSsuC.js";import"./ButtonView-8kA9VB7F.js";import"./browser-DLaO_aqG.js";import"./Label.module-CUYTf9Jc.js";import"./Label-LkWds508.js";import"./Hidden-DpSCwLxf.js";import"./IconWarning-BQBcHsun.js";import"./remote-CBH6kE0Y.js";import"./Text-BZY8Sc_P.js";import"./EmulatedBoldText-CEIO41Nr.js";import"./Text-DsGfukAy.js";import"./LoadingSpinner-Dcve79PX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cna7ldBx.js";import"./ProgressBar-CXPYtOXa.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DeeX-PEx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CVzN9kXH.js";import"./useFocus-tZAxz16O.js";import"./useFocusRing-BdU2-3MK.js";import"./useFocusable-DeuIjFJe.js";import"./ContextMenuSection-eBZWNBFV.js";import"./Dialog-ptAcXQW8.js";import"./RSPContexts-CjK5iojx.js";import"./OverlayArrow-BzkfNGFW.js";import"./useControlledState-cpMkF7RC.js";import"./Collection-BcXzzjbm.js";import"./CollectionBuilder-BgjMiTt7.js";import"./SelectionIndicator-BhBccG1G.js";import"./Separator-ByOk2cbm.js";import"./SelectionManager--rP1hhHv.js";import"./useEvent-BgqC1tZY.js";import"./useCollator-JAzbZwM3.js";import"./FocusScope-DtVgD18c.js";import"./VisuallyHidden-D5-LZtaI.js";import"./getActionGroupSlot-DwZ8TTEt.js";import"./useStatic-Bbhetyj1.js";import"./context-BESBZ1Rk.js";import"./useFormValidation-Cq6iPNGO.js";import"./FieldError-Db3WFp2b.js";import"./Input-CMqHHcBD.js";import"./useFieldComponent-OnEMgUvv.js";import"./AlertText-0Z7TF0Nn.js";import"./AlertIcon-DUg_mU1Z.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
