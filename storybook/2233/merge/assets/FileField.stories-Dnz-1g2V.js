import{j as r,r as x}from"./iframe-BUX4ZqHF.js";import{b as l,u as a,F as c,t as j}from"./Form-uWo6WJWO.js";import{L as s}from"./Label-kgnV-RXM.js";import{R as d,S as p}from"./ResetButton-DCTmDlFv.js";import{B as t}from"./Button-BQks1Fwk.js";import{S}from"./Section-DIg16xJ5.js";import{A as b}from"./ActionGroup-BG42jB9j.js";import{s as u}from"./Action-BoSxlb-x.js";import{F as m}from"./FileField-D4EY9DAo.js";import{F as B}from"./FieldError-BcNphJCj.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C-JL21_Y.js";import"./flowComponent-CO2lzhPy.js";import"./index-DGSBrITf.js";import"./clsx-B-dksMZM.js";import"./index-BP0Kc6JB.js";import"./useLocalizedStringFormatter-DBiOEglQ.js";import"./context-DdyqVFXP.js";import"./browser-D0x3Xdqp.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-I8DqILoy.js";import"./utils-D9iTInv6.js";import"./Hidden-CmsGFsNY.js";import"./useRef-HkbLjGA6.js";import"./IconWarning-CQ3vdTUk.js";import"./remote-CM65cF_Q.js";import"./Text-CCD2jWDE.js";import"./EmulatedBoldText-B3B0n9A6.js";import"./Text-BG7MORzn.js";import"./LoadingSpinner-DAzOOzOm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C7cH5OT2.js";import"./ProgressBar-D_H4fWP7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DVc7LJa4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DqXzXpsh.js";import"./useFocus-CJRF0W0a.js";import"./useFocusRing-LYLGckDp.js";import"./useFocusable-CNxG1VTZ.js";import"./ContextMenuSection-B-plY6qU.js";import"./Dialog-Ds9eM6L5.js";import"./RSPContexts-CCyvn2fa.js";import"./OverlayArrow-BDz2U1dX.js";import"./useControlledState-CgyNYXn6.js";import"./Collection-J1EtBqZM.js";import"./CollectionBuilder-CBbbBxBU.js";import"./SelectionIndicator-C49t11ym.js";import"./Separator-DMMpEXgu.js";import"./SelectionManager-CFGiEO44.js";import"./useEvent-CCX_Td5o.js";import"./useCollator-j_WBsrii.js";import"./FocusScope-CKMlMtX2.js";import"./VisuallyHidden-CEZo4IbP.js";import"./getActionGroupSlot-BiFvGjQj.js";import"./useStatic-HiZWtrs6.js";import"./context-DLe4PJj-.js";import"./useFormValidation-CdmTUY1H.js";import"./FieldError-DwISghd1.js";import"./Input-Dt9-alkO.js";import"./useFieldComponent-L2xw4dQD.js";import"./AlertText-C1IAOcr2.js";import"./AlertIcon-B17jmh6q.js";const{action:E}=__STORYBOOK_MODULE_ACTIONS__,y=E("submit"),Ar={title:"Integrations/React Hook Form/FileField",component:l,render:()=>{const e=async h=>{await u(5e3),y(h)},f=a({defaultValues:{user:""}}),F=j();return r.jsx(c,{form:f,onSubmit:e,children:r.jsxs(S,{children:[r.jsx(F,{name:"user",children:r.jsxs(m,{children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(b,{children:[r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})]})})}},o={},i={render:()=>{const e=a({defaultValues:{field:""}});return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsxs(m,{multiple:!0,isInvalid:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"}),r.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},n={render:()=>{const e=a({defaultValues:{field:""}});return r.jsxs(c,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(l,{name:"field",children:r.jsxs(m,{multiple:!0,children:[r.jsx(s,{children:"Certificate"}),r.jsx(t,{variant:"outline",color:"secondary",children:"Select"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(t,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(t,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(d,{children:"Reset"}),r.jsx(p,{children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
