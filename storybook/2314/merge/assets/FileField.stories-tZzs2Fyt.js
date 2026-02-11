import{r as x,j as r}from"./iframe-lphi5Fln.js";import{a as l,u as a,F as c,R as d,S as p,t as j}from"./ResetButton-BQBpjzpk.js";import{L as s}from"./Label-CqftOgdQ.js";import{B as t}from"./Button-Luzxnqg_.js";import{S}from"./Section-C4YcVKXh.js";import{A as b}from"./ActionGroup-B4BBpMWh.js";import{s as u}from"./Action-DdOAmdm4.js";import{F as m}from"./FileField-D2Yt5kr5.js";import{F as B}from"./FieldError-CHFlSzPg.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dz56l0zD.js";import"./flowComponent-D0jdWuAG.js";import"./index-BDdjr3yJ.js";import"./clsx-B-dksMZM.js";import"./index-BirbEfWe.js";import"./useLocalizedStringFormatter-ZZw30b7A.js";import"./context-hul-JKEa.js";import"./useRef-jLzozQB2.js";import"./utils-Is-sFETw.js";import"./ButtonView-Cs6C0-sY.js";import"./browser-DxP0Rs6D.js";import"./Label.module-CUYTf9Jc.js";import"./Label-mBHJjPT6.js";import"./Hidden-B_Gq1hkl.js";import"./IconWarning-Dv_szZY_.js";import"./remote-B9VD8JHH.js";import"./Text-DhRxTRp1.js";import"./EmulatedBoldText-5wQJnzOA.js";import"./Text-CwPOMTFI.js";import"./LoadingSpinner-Bhcgxzhg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DBLw-vMJ.js";import"./ProgressBar-BlIkh8Rr.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B3jPjt5T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ByR9A8gc.js";import"./useFocus-BYwX3hbJ.js";import"./useFocusRing-y2NKP0hv.js";import"./useFocusable-CWG73OOy.js";import"./ContextMenuSection-WR0YVO70.js";import"./Dialog-any5Q92a.js";import"./RSPContexts-D5Dv-vEP.js";import"./OverlayArrow-CILdtqTg.js";import"./useControlledState-D2ulvinQ.js";import"./Collection-CsOde2Lf.js";import"./CollectionBuilder-Cmca66tQ.js";import"./SelectionIndicator-Dfc-TPkO.js";import"./Separator-DfUDQJPV.js";import"./SelectionManager-DEgIHQ63.js";import"./useEvent-CjOYrEf7.js";import"./useCollator-wUqkBaab.js";import"./FocusScope-DRoVwcjL.js";import"./VisuallyHidden-DjAmLvSg.js";import"./getActionGroupSlot-4pUh-G0A.js";import"./useStatic-DoydbngC.js";import"./context-D_Cvxd07.js";import"./useFormValidation-fTAeqOxz.js";import"./FieldError-nA_6I3J3.js";import"./Input-CYD73VvK.js";import"./useFieldComponent-6mmayeW0.js";import"./AlertText-BlI1Muxp.js";import"./AlertIcon-Tp_Bhr3n.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),qr={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
