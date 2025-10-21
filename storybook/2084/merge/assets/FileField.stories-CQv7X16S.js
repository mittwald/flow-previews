import{j as r,r as F}from"./iframe-Bju5tM19.js";import{a as l,u as a,F as c,t as h}from"./Form-CXrEODVR.js";import{L as s}from"./Label-CEBawMgO.js";import{B as t}from"./Button-D01G-2Tc.js";import{S as x}from"./Section-DCM0ThIe.js";import{A as j}from"./ActionGroup-CNNzqPnn.js";import{s as u}from"./Action-DGXz3yuy.js";import{F as m}from"./FileField-oIxtc_08.js";import{F as S}from"./useFieldComponent-SvMgnfSt.js";import"./index-nuYtCEEu.js";import"./flowComponent-DMQ923EN.js";import"./index-i9t6c7d2.js";import"./clsx-B-dksMZM.js";import"./index-v7jxlCcy.js";import"./useLocalizedStringFormatter-DnEVwgqU.js";import"./context-BCZfssJF.js";import"./browser-5LoYBPX6.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-C0LDEu9P.js";import"./utils-CHaPYnRu.js";import"./Hidden-B3KlSyIs.js";import"./IconWarning-EseH3oBy.js";import"./Text-Ctwf1INQ.js";import"./EmulatedBoldText-DNLnXqQA.js";import"./Text-X0smrbMM.js";import"./LoadingSpinner-OWtFn1Ti.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dw5yhw5U.js";import"./ProgressBar-Bd2c_dqs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DxvdaVYE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNUm2pP-.js";import"./useFocus-dnpNkUeL.js";import"./useFocusRing-DQLm4Rj_.js";import"./useFocusable-S-EY4exA.js";import"./ContextMenuSection-D4oqZzWw.js";import"./Dialog-BwAIy3cs.js";import"./RSPContexts-CuZAMKB6.js";import"./OverlayArrow-CkGx3q47.js";import"./useControlledState-BiPn7KDX.js";import"./Collection-CzETdAyj.js";import"./CollectionBuilder-C9Q_qjob.js";import"./SelectionIndicator-BWLjQ8Kg.js";import"./Separator-F1osFFu3.js";import"./SelectionManager-BWZTcbb9.js";import"./useEvent-B0Z9j7Hl.js";import"./useCollator-CPsP6oXT.js";import"./FocusScope-BvTlMNTx.js";import"./VisuallyHidden-muGwU-w1.js";import"./dynamic-KamcoLNc.js";import"./getActionGroupSlot-BFuFDZVU.js";import"./useStatic-Dhn4vIeo.js";import"./context-DoYyNt70.js";import"./useFormValidation-Cc6rboKS.js";import"./Input-Cn0b8SON.js";import"./useMakeFocusable-BXmgj38r.js";import"./react-children-utilities-CV_3FZ2O.js";import"./ClearPropsContext-nVrOsFhk.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Cr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async f=>{await u(5e3),b(f)},d=a({defaultValues:{user:""}}),p=h();return r.jsx(c,{form:d,onSubmit:e,children:r.jsxs(x,{children:[r.jsx(p,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx(j,{children:r.jsx(t,{type:"submit",children:"Submit"})})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(t,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const _r=["Default","WithFieldError","WithFocus"];export{o as Default,i as WithFieldError,n as WithFocus,_r as __namedExportsOrder,Cr as default};
