import{r as x,j as r}from"./iframe-Czt-X4mt.js";import{a as l,u as a,F as c,R as d,S as p,t as j}from"./ResetButton-Cqw_oC7V.js";import{L as s}from"./Label-DRlzXm2g.js";import{B as t}from"./Button-CD6msFpC.js";import{S}from"./Section-D-QcuIGE.js";import{A as b}from"./ActionGroup-DjlBFa1z.js";import{s as u}from"./Action-BQrZ3ZgM.js";import{F as m}from"./FileField-DPZrYu-0.js";import{F as B}from"./FieldError-BFQHJf6J.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXoid3qz.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./clsx-B-dksMZM.js";import"./index-Dtw36EGp.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./context-BsnVI305.js";import"./useRef-CYQbuMBQ.js";import"./utils-CU6JriEK.js";import"./ButtonView-COtP3lz8.js";import"./browser-CPd8oh-y.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./IconWarning-CEtgECHE.js";import"./remote-hRcAmPck.js";import"./Text-8ynHQhOY.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Text-t3MR2mNG.js";import"./LoadingSpinner-B3-O-X86.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YmddG4Dp.js";import"./ProgressBar-DtVqo96T.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BR4TCRo_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DEVH16Jn.js";import"./useFocus-En_BVabG.js";import"./useFocusRing-DDb3Exp8.js";import"./useFocusable-DFLTBTxr.js";import"./ContextMenuSection-CUYBU0Kr.js";import"./Dialog-CYkX7YiI.js";import"./RSPContexts-BGSIbyEV.js";import"./OverlayArrow-DFsPHtjC.js";import"./useControlledState-DhgMObTD.js";import"./Collection-BiWiEach.js";import"./CollectionBuilder-DHVWwXoR.js";import"./SelectionIndicator-8fZBRAhq.js";import"./Separator-T09-1zVq.js";import"./SelectionManager-CRIq19Ox.js";import"./useEvent-DNkkjmy4.js";import"./useCollator-SMtHYG8Q.js";import"./FocusScope-DGuUwoy_.js";import"./VisuallyHidden-jSb2CZNn.js";import"./getActionGroupSlot-5QVk2C33.js";import"./useStatic-C0a0tu6G.js";import"./context-CNfFuvDb.js";import"./useFormValidation-DyL1ZPxG.js";import"./FieldError-8b6ruGQE.js";import"./Input-BropXuGq.js";import"./useFieldComponent-CjTkiSgD.js";import"./AlertText-BfffkCAs.js";import"./AlertIcon-DBLlr2Uy.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
